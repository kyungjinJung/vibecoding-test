import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

interface PostProps {
  params: {
    slug: string;
  };
}

// 특정 게시물의 데이터를 가져오는 함수입니다.
async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // remark를 사용해 마크다운을 HTML로 변환합니다.
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      frontmatter: data,
      contentHtml,
    };
  } catch (error) {
    return null;
  }
}

// 동적 경로에 대한 정적 페이지를 생성하기 위한 함수입니다.
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = await fs.readdir(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

// 개별 블로그 게시물 페이지 컴포넌트입니다.
export default async function PostPage({ params }: PostProps) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose lg:prose-xl max-w-none">
        <div className="border-b pb-4 mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">
            {post.frontmatter.title}
          </h1>
          <p className="text-gray-500 mt-2">
            {new Date(post.frontmatter.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* 
          마크다운 콘텐츠를 HTML로 렌더링합니다.
          Tailwind Typography (`prose`) 플러그인을 사용하면 스타일링이 용이합니다.
          globals.css에 기본적인 prose 스타일이 적용되어 있어야 합니다.
        */}
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      <div className="mt-12">
        <Link href="/blog" className="text-sky-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}

// 메타데이터를 동적으로 생성합니다.
export async function generateMetadata({ params }: PostProps) {
  const post = await getPost(params.slug);
  return {
    title: post?.frontmatter.title,
    description: post?.frontmatter.summary,
  };
}

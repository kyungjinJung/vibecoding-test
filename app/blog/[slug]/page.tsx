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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
            ← Back to Blog
          </Link>
          <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
            Home
          </Link>
        </div>

        <article className="prose lg:prose-xl max-w-none">
          <div className="border-b border-gray-700 pb-4 mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              {post.frontmatter.title}
            </h1>
            <p className="text-gray-400 mt-2">
              {new Date(post.frontmatter.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          {/* 
            마크다운 콘텐츠를 HTML로 렌더링합니다.
            globals.css에 정의된 prose 스타일이 적용됩니다.
          */}
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        {/* Bottom navigation */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex items-center justify-between">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
            ← Back to Blog
          </Link>
          <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
            Back to Home
          </Link>
        </div>
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

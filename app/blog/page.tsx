import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 게시물 데이터 타입을 정의합니다.
interface Post {
  slug: string;
  frontmatter: {
    [key: string]: any;
  };
}

// 블로그 게시물 목록을 가져오는 함수입니다.
async function getPosts(): Promise<Post[]> {
  // content/blog 디렉토리의 경로를 설정합니다.
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  
  // 디렉토리 내의 모든 파일 이름을 읽어옵니다.
  const filenames = await fs.readdir(postsDirectory);

  // 각 파일의 내용을 읽고 frontmatter를 파싱합니다.
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      // 파일 경로를 생성합니다.
      const filePath = path.join(postsDirectory, filename);
      // 파일 내용을 읽어옵니다.
      const fileContents = await fs.readFile(filePath, 'utf8');
      // gray-matter를 사용해 frontmatter를 파싱합니다.
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        frontmatter: data,
      };
    })
  );

  // 게시물을 날짜순으로 정렬합니다.
  return posts.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

// 블로그 페이지 컴포넌트입니다.
export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Tech Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-sky-500">
                {post.frontmatter.title}
              </Link>
            </h2>
            <p className="text-gray-500 mb-4">
              {new Date(post.frontmatter.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-lg text-gray-700">{post.frontmatter.summary}</p>
            <Link href={`/blog/${post.slug}`} className="text-sky-600 hover:underline mt-4 inline-block">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

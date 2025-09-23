export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">정경진 포트폴리오</h1>
          <p className="text-xl mt-2">CEO @ 데이터방앗간 | No-code User Analytics &apos;얼라이닉스(Alignix)&apos;</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">소개</h2>
          <p className="text-lg">
            안녕하세요, 정경진입니다. 소프트웨어 개발에 열정을 가진 엔지니어입니다. 
            Product Manager로서 다양한 경험을 쌓았습니다. Brunch Weekly Magazine Publication, Prototyping tool Axure lecturer 등.
          </p>
          <a 
            href="/Profile.pdf" 
            download 
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            프로필 PDF 다운로드
          </a>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">스킬</h2>
          <ul className="list-disc pl-6">
            <li>제품관리</li>
            <li>스크럼</li>
            <li>영업</li>
            <li>JavaScript / TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js</li>
            <li>SQL / NoSQL</li>
          </ul>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">경험</h2>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">데이터방앗간 - Co-founder and CEO (2024.12 - Present)</h3>
            <p>No-code User Analytics &apos;얼라이닉스(Alignix)&apos; 서비스</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">Antler Korea - Entrepreneur (2024.10 - 2024.12)</h3>
            <p>Batch 5 참여</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">LBox - Product Lead (2023.7 - 2024.4)</h3>
            <p>엘박스 제품 총괄</p>
          </div>
          {/* 추가 경험들... */}
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Alignix</h3>
              <p>No-code User Analytics 서비스</p>
            </div>
            {/* 추가 프로젝트... */}
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">연락처</h2>
          <p>Email: wjdrudwls87@naver.com</p>
          <p>Phone: 010-3383-4401</p>
          <p>LinkedIn: www.linkedin.com/in/kyung-jin-jung</p>
          <p>Company: www.alignix.io</p>
          {/* PDF에서 연락처 추가 */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 정경진. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-mono">[kyung,jin,jung]</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Kyung Jin Jung
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            CEO @ 데이터방앗간 | No-code User Analytics &apos;Alignix&apos;
          </p>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
            Product Manager이자 Technical Leader로서 복잡한 시스템을 설계하고 구현하는 것에 열정을 가진 엔지니어입니다. 
            AI와 Human-Computer Interaction의 교차점을 탐구하며 혁신적인 소프트웨어 도구를 만듭니다.
          </p>
          <a 
            href="/Profile.pdf" 
            download 
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Active Side Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">[ACTIVE SIDE PROJECTS]</h2>
          <p className="text-gray-300 mb-12 max-w-4xl">
            이 <strong>풀스택</strong> 사이드 프로젝트들은 복잡한 기술 시스템을 <strong>아키텍처</strong>하고 구현하는 능력을 보여줍니다. 
            각 프로젝트는 컨셉부터 프로덕션까지의 <strong>엔드투엔드 소유권</strong>을 보여줍니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-6 flex items-center justify-center text-xl font-bold">
                A
              </div>
              <h3 className="text-2xl font-bold mb-4">Alignix</h3>
              <p className="text-gray-300 mb-6">
                No-code User Analytics 플랫폼. AI 통합, 실시간 데이터 처리, 확장 가능한 아키텍처를 활용한 복잡한 엔지니어링 문제 해결.
              </p>
              <a href="https://www.alignix.io/" className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-6 flex items-center justify-center text-xl font-bold">
                B
              </div>
              <h3 className="text-2xl font-bold mb-4">Brunch Publication</h3>
              <p className="text-gray-300 mb-6">
                주간 매거진 퍼블리케이션. 12주간 기획 관련 포스트를 매주 발행하여 1,840명의 구독자를 확보.
              </p>
              <div className="text-gray-500">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">[PORTFOLIO]</h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-blue-500 pl-8">
              <div className="text-sm text-gray-400 mb-2">2024 - PRESENT</div>
              <h3 className="text-2xl font-bold mb-2">데이터방앗간</h3>
              <div className="text-blue-400 mb-4">Co-founder and CEO</div>
              <p className="text-gray-300">
                No-code User Analytics &apos;얼라이닉스(Alignix)&apos; 서비스 개발 및 운영. 
                전체 제품 전략 수립과 기술 팀 리딩을 담당.
              </p>
            </div>

            <div className="border-l-2 border-gray-600 pl-8">
              <div className="text-sm text-gray-400 mb-2">2024</div>
              <h3 className="text-2xl font-bold mb-2">Antler Korea</h3>
              <div className="text-gray-400 mb-4">Entrepreneur</div>
              <p className="text-gray-300">
                글로벌 초기 단계 벤처 캐피털 Batch 5 참여. 
                기술 회사 정의에 투자하는 프로그램에서 사업 개발.
              </p>
            </div>

            <div className="border-l-2 border-gray-600 pl-8">
              <div className="text-sm text-gray-400 mb-2">2023 - 2024</div>
              <h3 className="text-2xl font-bold mb-2">LBox</h3>
              <div className="text-gray-400 mb-4">Product Lead</div>
              <p className="text-gray-300">
                엘박스 제품 총괄. 전사 OKR 수립, 프로덕트 전체 지표 관리, 
                LBox AI 프로덕트 초기 기획 참여.
              </p>
            </div>

            <div className="border-l-2 border-gray-600 pl-8">
              <div className="text-sm text-gray-400 mb-2">2022 - 2023</div>
              <h3 className="text-2xl font-bold mb-2">핏펫(Fitpet)</h3>
              <div className="text-gray-400 mb-4">Product Owner (실장)</div>
              <p className="text-gray-300">
                MAU 및 GMV 대폭 성장, 전체 프로덕트 부문 SOP 구축, 
                애자일 프레임워크 도입, A/B 테스팅 도입.
              </p>
            </div>

            <div className="border-l-2 border-gray-600 pl-8">
              <div className="text-sm text-gray-400 mb-2">2020 - 2022</div>
              <h3 className="text-2xl font-bold mb-2">숨고 (Soomgo)</h3>
              <div className="text-gray-400 mb-4">Product Owner</div>
              <p className="text-gray-300">
                숨고페이 에스크로 서비스 구축 및 개선. 플랫폼 신뢰성 강화, 
                A/B 테스팅을 통한 전환율 개선.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">[SKILLS & EXPERTISE]</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Product Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 제품관리</li>
                <li>• 스크럼</li>
                <li>• OKR 수립</li>
                <li>• A/B 테스팅</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Technical Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• JavaScript / TypeScript</li>
                <li>• React / Next.js</li>
                <li>• Node.js</li>
                <li>• SQL / NoSQL</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Business</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 영업</li>
                <li>• IR</li>
                <li>• 비즈니스 기획</li>
                <li>• 조직 관리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Articles & Press */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">[ARTICLES AND PRESS MENTIONS]</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Articles</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Brunch Weekly Magazine Publication - 1,840 Subscribers</li>
                <li>• Prototyping tool Axure 강의</li>
                <li>• Professional Marketing Agency, iBoss 칼럼니스트</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">[AWARDS AND RECOGNITIONS]</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-between items-center border-b border-gray-700 pb-4">
              <div>
                <div className="font-bold">Fitpeter of the Month</div>
                <div className="text-gray-400">2022-07</div>
              </div>
              <div className="text-blue-400">Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">[GET IN TOUCH]</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            제 작업에 관심이 있으시다면 아이디어와 전문적인 기회에 대해 논의할 수 있습니다. 
            이메일로 메시지를 보내주세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <span className="text-gray-400">Email:</span> wjdrudwls87@naver.com
                </div>
                <div>
                  <span className="text-gray-400">Phone:</span> 010-3383-4401
                </div>
                <div>
                  <span className="text-gray-400">LinkedIn:</span> 
                  <a href="https://www.linkedin.com/in/kyung-jin-jung" className="text-blue-400 hover:underline ml-2">
                    linkedin.com/in/kyung-jin-jung
                  </a>
                </div>
                <div>
                  <span className="text-gray-400">Company:</span> 
                  <a href="https://www.alignix.io/" className="text-blue-400 hover:underline ml-2">
                    alignix.io
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="text-gray-300">
                <div className="font-semibold">성균관대학교</div>
                <div className="text-gray-400">B.A, Electronic Engineering, International Relations</div>
                <div className="text-gray-500 text-sm">2005 - 2012</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-gray-400">
            &copy; 2025 Kyung Jin Jung. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="mailto:wjdrudwls87@naver.com" className="hover:text-white transition-colors">email</a>
            <a href="https://www.linkedin.com/in/kyung-jin-jung" className="hover:text-white transition-colors">linkedin</a>
            <a href="https://www.alignix.io/" className="hover:text-white transition-colors">company</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

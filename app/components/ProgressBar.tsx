'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// NProgress 설정
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
});

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 페이지 변경 시 progress bar 시작
    NProgress.start();
    
    // 페이지 로드 완료 시 progress bar 종료
    const timer = setTimeout(() => {
      NProgress.done();
    }, 100);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  // CSS를 직접 주입 (nprogress CSS 커스터마이징)
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* nprogress bar */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #60a5fa;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #60a5fa, 0 0 5px #60a5fa;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }

      #nprogress .spinner {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
}

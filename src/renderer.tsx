import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ?? '미주 한인 노동권익 센터 | IKLPA US'}</title>
        <meta name="description" content="미국 내 한인 노동자를 위한 미국 노동법 정보, 판례 데이터베이스, 법률 자료 및 권리 구제 서비스" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
        <header class="site-header" id="site-header">
          <div class="header-inner container">
            <a href="/" class="logo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="6" fill="#1A2B3C"/>
                <path d="M7 8h14M7 14h9M7 20h12" stroke="#E8F0FE" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span class="logo-text">IKLPA<span class="logo-sub"> US</span></span>
            </a>
            <nav class="main-nav" id="main-nav">
              <ul class="nav-list">
                <li class="nav-item"><a href="/" class="nav-link">홈</a></li>
                <li class="nav-item has-dropdown">
                  <a href="/labor-laws" class="nav-link">미국 노동법
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="/labor-laws#federal">연방 노동법 (FLSA · EEOC)</a></li>
                    <li><a href="/labor-laws#california">캘리포니아주 노동법</a></li>
                    <li><a href="/labor-laws#new-york">뉴욕주 노동법</a></li>
                    <li><a href="/labor-laws#texas">텍사스주 노동법</a></li>
                    <li><a href="/labor-laws#georgia">조지아주 노동법</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a href="/case-law" class="nav-link">판례 데이터베이스</a></li>
                <li class="nav-item"><a href="/resources" class="nav-link">자료 & 서식</a></li>
                <li class="nav-item"><a href="/news" class="nav-link">뉴스 & 동향</a></li>
                <li class="nav-item"><a href="/donate" class="nav-link nav-link-donate">후원 / 보험</a></li>
                <li class="nav-item"><a href="/contact" class="nav-link nav-link-cta">신고 / 상담</a></li>
              </ul>
            </nav>
            <button class="hamburger" id="hamburger" aria-label="메뉴 열기">
              <span></span><span></span><span></span>
            </button>
          </div>
        </header>
        <main class="main-content">
          {children}
        </main>
        <footer class="site-footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-brand">
                <div class="footer-logo">
                  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="28" height="28" rx="6" fill="#E8F0FE"/>
                    <path d="M7 8h14M7 14h9M7 20h12" stroke="#1A2B3C" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  <span>IKLPA US</span>
                </div>
                <p class="footer-desc">미국 내 한인 노동자의 권리를 지키기 위한<br/>법률 정보 및 권리 구제 플랫폼</p>
                <p class="footer-mission-tag">International Korean Labor & Policy Advocates</p>
                <div style="margin-top:16px">
                  <a href="/donate" class="btn btn-primary" style="font-size:.8rem;padding:8px 18px;">❤ 후원하기</a>
                </div>
              </div>
              <div class="footer-col">
                <h4>서비스</h4>
                <ul>
                  <li><a href="/labor-laws">미국 노동법 가이드</a></li>
                  <li><a href="/case-law">판례 데이터베이스</a></li>
                  <li><a href="/resources">법률 서식 자료실</a></li>
                  <li><a href="/news">노동 뉴스</a></li>
                  <li><a href="/donate" class="footer-link-donate">후원 / 법률보험</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>기관 안내</h4>
                <ul>
                  <li><a href="/#about">기관 소개</a></li>
                  <li><a href="/#ai-assistant">AI 법률 도우미</a></li>
                  <li><a href="/contact">신고 / 상담 접수</a></li>
                  <li><a href="/#faq">자주 묻는 질문</a></li>
                  <li><a href="/donate#insurance">법률 보험 안내</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>연락처</h4>
                <ul class="footer-contact">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    info@iklpaus.org
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.89-.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    1-800-IKLPA-US
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Los Angeles · New York · Dallas
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <p>© 2026 IKLPA US — International Korean Labor & Policy Advocates. All rights reserved.</p>
              <p class="footer-disclaimer">본 사이트의 정보는 법률 자문을 대체하지 않습니다. 구체적인 사안은 반드시 자격을 갖춘 변호사와 상담하시기 바랍니다.</p>
            </div>
          </div>
        </footer>
        <script src="/static/main.js"></script>
      </body>
    </html>
  )
})

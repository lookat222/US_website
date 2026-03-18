import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Static files
app.use('/static/*', serveStatic({ root: './' }))

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
app.get('/', (c) => {
  return c.render(
    <div>
      {/* HERO */}
      <section class="hero">
        <div class="container hero-inner">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            미국 내 한인 노동자 전문 법률 정보 플랫폼
          </div>
          <h1 class="hero-title">
            당신의 노동 권리,<br />
            <span class="text-accent">미국에서도 지켜집니다.</span>
          </h1>
          <p class="hero-sub">
            미국 연방·주 노동법, 최신 판례, 법률 서식까지—<br class="hide-mobile"/>
            한인 노동자를 위한 신뢰할 수 있는 법률 정보를 제공합니다.
          </p>
          <div class="hero-actions">
            <a href="/contact" class="btn btn-primary">무료 상담 신청</a>
            <a href="/labor-laws" class="btn btn-secondary">노동법 알아보기</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-num">24,000+</span>
              <span class="stat-label">재미 한인 노동 분쟁 건수 (2024)</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">91.4%</span>
              <span class="stat-label">권리 구제 성공률</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">$2.1B+</span>
              <span class="stat-label">미회수 임금 피해 추산액 (CA·NY·TX)</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section class="section-quick" id="services">
        <div class="container">
          <div class="section-label">핵심 서비스</div>
          <h2 class="section-title">필요한 도움을 바로 찾으세요</h2>
          <div class="quick-grid">
            <a href="/labor-laws" class="quick-card">
              <div class="quick-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <h3>미국 노동법 가이드</h3>
              <p>연방법 FLSA·EEOC부터 캘리포니아, 뉴욕, 텍사스, 조지아 주법까지 한국어로 정리</p>
              <span class="card-arrow">→</span>
            </a>
            <a href="/case-law" class="quick-card">
              <div class="quick-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <h3>판례 데이터베이스</h3>
              <p>임금 체불, 차별, 부당 해고 관련 미국 주요 판례를 한국어 요약과 함께 검색</p>
              <span class="card-arrow">→</span>
            </a>
            <a href="/resources" class="quick-card">
              <div class="quick-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </div>
              <h3>법률 서식 자료실</h3>
              <p>영문·한국어 병기 내용증명, 진정서, 신고 양식 무료 다운로드</p>
              <span class="card-arrow">→</span>
            </a>
            <a href="/news" class="quick-card">
              <div class="quick-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>
              </div>
              <h3>노동 뉴스 & 정책 동향</h3>
              <p>미국 노동시장 최신 뉴스, 법 개정 사항, 한인 사회 주요 판결 업데이트</p>
              <span class="card-arrow">→</span>
            </a>
            <a href="/contact" class="quick-card quick-card-featured">
              <div class="quick-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>신고 / 상담 접수</h3>
              <p>노동법 위반 사례 신고 및 법률 상담 요청. 기밀 보장, 무료 초기 상담 제공</p>
              <span class="card-arrow">→</span>
            </a>
            <a href="/#ai-assistant" class="quick-card">
              <div class="quick-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>
              </div>
              <h3>AI 법률 도우미 (Beta)</h3>
              <p>미국 노동 판례 기반 AI 질의응답 — 24시간 즉시 법률 정보 제공</p>
              <span class="card-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* TRENDING TOPICS */}
      <section class="section-trending">
        <div class="container">
          <div class="trending-header">
            <div>
              <div class="section-label">2025 핵심 이슈</div>
              <h2 class="section-title">지금 한인 노동자에게 중요한 법률 쟁점</h2>
            </div>
            <a href="/labor-laws" class="btn btn-ghost">전체 보기 →</a>
          </div>
          <div class="topics-list">
            <a href="/labor-laws#wage-theft" class="topic-item">
              <span class="topic-num">01</span>
              <div class="topic-body">
                <h4>임금 도둑질 (Wage Theft)</h4>
                <p>FLSA 최저임금·초과근무 위반, 팁 갈취, 불법 공제 — 소상공업·요식업 한인 종사자 최다 피해 유형</p>
              </div>
              <div class="topic-tags">
                <span class="tag">연방법</span>
                <span class="tag">CA</span>
                <span class="tag">NY</span>
              </div>
            </a>
            <a href="/labor-laws#discrimination" class="topic-item">
              <span class="topic-num">02</span>
              <div class="topic-body">
                <h4>직장 내 인종·출신국 차별 (Title VII)</h4>
                <p>채용, 승진, 해고 과정의 국적·인종 차별, 적대적 근무 환경(Hostile Work Environment) 대응법</p>
              </div>
              <div class="topic-tags">
                <span class="tag">EEOC</span>
                <span class="tag">Title VII</span>
              </div>
            </a>
            <a href="/labor-laws#misclassification" class="topic-item">
              <span class="topic-num">03</span>
              <div class="topic-body">
                <h4>고용 형태 허위 분류 (Worker Misclassification)</h4>
                <p>독립 계약자(1099) 불법 처리, CA AB5 법안 적용 — 한인 운전기사·배달업 종사자 주요 쟁점</p>
              </div>
              <div class="topic-tags">
                <span class="tag">CA AB5</span>
                <span class="tag">IRS Test</span>
              </div>
            </a>
            <a href="/labor-laws#retaliation" class="topic-item">
              <span class="topic-num">04</span>
              <div class="topic-body">
                <h4>신고 보복 (Retaliation) 금지</h4>
                <p>임금 신고·OSHA 제보 후 해고·강등·근무시간 감축 등 보복 행위 — 한인 이민자 피해 증가</p>
              </div>
              <div class="topic-tags">
                <span class="tag">OSHA</span>
                <span class="tag">보호규정</span>
              </div>
            </a>
            <a href="/labor-laws#fmla" class="topic-item">
              <span class="topic-num">05</span>
              <div class="topic-body">
                <h4>가족·의료 휴가 (FMLA) 권리</h4>
                <p>출산·질병·가족 돌봄 휴가 사용 후 원직 복귀 보장, 의료보험 유지 권리 — 이민자 활용률 최저</p>
              </div>
              <div class="topic-tags">
                <span class="tag">FMLA</span>
                <span class="tag">연방법</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* AI ASSISTANT */}
      <section class="section-ai" id="ai-assistant">
        <div class="container">
          <div class="ai-wrapper">
            <div class="ai-info">
              <div class="section-label light">AI 법률 도우미 Beta</div>
              <h2 class="section-title light">미국 노동법 질문,<br />언제든지 물어보세요</h2>
              <p class="ai-desc">미국 연방·주 노동법 및 주요 판례 데이터를 기반으로 즉시 답변합니다. 본 서비스는 법률 참고 정보 제공을 목적으로 하며, 공식 법률 자문을 대체하지 않습니다.</p>
              <ul class="ai-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  한국어 질문 입력 지원
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  연방 및 주별 노동법 판례 기반 답변
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  관련 법 조항 및 판례 참조 제공
                </li>
              </ul>
            </div>
            <div class="ai-chat-box">
              <div class="chat-header">
                <div class="chat-status-dot"></div>
                <span>IKLPA AI 법률 도우미</span>
                <span class="chat-badge">Beta</span>
              </div>
              <div class="chat-messages" id="chat-messages">
                <div class="msg msg-bot">
                  <div class="msg-avatar">K</div>
                  <div class="msg-bubble">
                    안녕하세요. 미국 노동법 관련 질문을 한국어 또는 영어로 입력해 주세요. 임금 문제, 차별, 해고 등 어떤 것이든 도와드리겠습니다.
                  </div>
                </div>
              </div>
              <div class="chat-input-wrap">
                <input type="text" class="chat-input" id="chat-input" placeholder="예: 제 고용주가 초과근무 수당을 주지 않아요..." />
                <button class="chat-send" id="chat-send" type="button">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
              <p class="chat-disclaimer">* AI 답변은 법률 자문이 아닙니다. 정확한 상담은 전문가에게 문의하세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section class="section-about" id="about">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <div class="section-label">기관 소개</div>
              <h2 class="section-title">법률 정보의 불균형을<br />해소합니다</h2>
              <p>IKLPA US는 미국 내 한인 노동자들이 언어 장벽과 정보 부재로 인해 노동 권리를 침해당하지 않도록 설립된 비영리 법률 정보 플랫폼입니다.</p>
              <p>연방 노동부(DOL), 고용기회평등위원회(EEOC) 공식 자료와 주요 판례를 바탕으로, 정확하고 실용적인 정보를 한국어로 제공합니다.</p>
              <div class="about-values">
                <div class="value-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  <span>정확성 — 공식 법원 및 연방 기관 자료만 인용</span>
                </div>
                <div class="value-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <span>접근성 — 한국어 완전 지원, 무료 서비스</span>
                </div>
                <div class="value-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span>커뮤니티 — 지역 법률 구조 기관 네트워크 연계</span>
                </div>
              </div>
            </div>
            <div class="about-metrics">
              <div class="metric-card">
                <span class="metric-num">4개 주</span>
                <span class="metric-label">집중 대상 지역<br/><small>CA · NY · TX · GA</small></span>
              </div>
              <div class="metric-card">
                <span class="metric-num">200+</span>
                <span class="metric-label">수록 판례<br/><small>한국어 요약 제공</small></span>
              </div>
              <div class="metric-card">
                <span class="metric-num">50+</span>
                <span class="metric-label">법률 서식<br/><small>영한 병기 무료 제공</small></span>
              </div>
              <div class="metric-card">
                <span class="metric-num">24/7</span>
                <span class="metric-label">AI 도우미<br/><small>상시 법률 정보 제공</small></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section class="section-news">
        <div class="container">
          <div class="section-header-row">
            <div>
              <div class="section-label">최신 소식</div>
              <h2 class="section-title">노동 뉴스 & 정책 업데이트</h2>
            </div>
            <a href="/news" class="btn btn-ghost">전체 뉴스 →</a>
          </div>
          <div class="news-grid">
            <article class="news-card news-card-featured">
              <div class="news-meta">
                <span class="news-tag">연방</span>
                <time>2025년 3월 1일</time>
              </div>
              <h3>DOL, 2025년 최저임금 인상 지침 발표 — 한인 밀집 업종 영향 분석</h3>
              <p>연방 노동부가 발표한 최저임금 조정 가이드라인과 캘리포니아·뉴욕 주법 변경사항이 한인 운영 소상공업체에 미치는 영향을 분석합니다.</p>
              <a href="/news" class="news-read-more">자세히 읽기 →</a>
            </article>
            <article class="news-card">
              <div class="news-meta">
                <span class="news-tag tag-ca">캘리포니아</span>
                <time>2025년 2월 22일</time>
              </div>
              <h3>CA PAGA 개혁법 2025년 시행 — 직원 신고 시 고용주 부담 변화</h3>
              <p>California Private Attorneys General Act(PAGA) 개정으로 직원의 노동법 위반 신고 절차와 고용주 배상 책임이 크게 변화합니다.</p>
              <a href="/news" class="news-read-more">자세히 읽기 →</a>
            </article>
            <article class="news-card">
              <div class="news-meta">
                <span class="news-tag tag-ny">뉴욕</span>
                <time>2025년 2월 15일</time>
              </div>
              <h3>NYC 프리랜서 보호법 강화 — 계약서 없는 구두 계약도 보호 대상</h3>
              <p>뉴욕시의 Freelance Isn't Free Act 적용 범위가 확대되어 한인 프리랜서 및 독립 계약자도 계약서 미작성 시 보호받습니다.</p>
              <a href="/news" class="news-read-more">자세히 읽기 →</a>
            </article>
          </div>
        </div>
      </section>

      {/* DONATE TEASER */}
      <section class="section-donate-teaser" id="donate">
        <div class="container">
          <div class="donate-teaser-inner">
            <div class="donate-teaser-text">
              <div class="section-label gold">후원 & 법률보험</div>
              <h2>여러분의 후원이<br/><span class="text-accent">노동자의 방패</span>가 됩니다</h2>
              <p>한 달 $20의 후원으로 억울한 한인 노동자 한 명의 법률 상담 비용이 지원됩니다. 일회성 후원, 정기 후원, 또는 법률보험 가입을 통해 함께해 주세요.</p>
              <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;">
                <a href="/donate" class="btn btn-primary">후원하기</a>
                <a href="/donate#insurance" class="btn btn-secondary">법률보험 알아보기</a>
              </div>
            </div>
            <div class="donate-teaser-cards">
              <a href="/donate#one-time" class="donate-mini-card">
                <div class="donate-mini-icon orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <div>
                  <h4>일회성 후원</h4>
                  <p>원하는 금액을 자유롭게 후원</p>
                </div>
                <span class="donate-mini-arrow">→</span>
              </a>
              <a href="/donate#monthly" class="donate-mini-card">
                <div class="donate-mini-icon gold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <h4>정기 후원 (월 $20~)</h4>
                  <p>매달 자동 후원 · 세금 공제 가능</p>
                </div>
                <span class="donate-mini-arrow">→</span>
              </a>
              <a href="/donate#insurance" class="donate-mini-card">
                <div class="donate-mini-icon navy">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4>법률보험 (Legal Insurance)</h4>
                  <p>월 $15부터 · 노동법 전문 변호사 연결</p>
                </div>
                <span class="donate-mini-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="section-faq" id="faq">
        <div class="container faq-container">
          <div class="section-label center">자주 묻는 질문</div>
          <h2 class="section-title center">한인 노동자가 가장 많이 묻는 질문</h2>
          <div class="faq-list">
            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span>서류 미비 상태(undocumented)여도 미국 노동법의 보호를 받을 수 있나요?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="faq-answer">
                <p>네, 보호받습니다. 연방 공정근로기준법(FLSA)과 대부분의 주 노동법은 이민 신분과 관계없이 미국에서 일하는 모든 노동자에게 적용됩니다. 서류 미비 노동자도 최저임금, 초과근무 수당, 직장 내 차별 금지 보호를 받을 법적 권리가 있습니다. 신고를 이유로 이민 당국에 신고하는 것은 불법 보복 행위에 해당합니다.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span>고용주가 초과근무 수당 대신 "보상 휴가(Comp Time)"를 주겠다고 했습니다. 합법인가요?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="faq-answer">
                <p>민간 기업에서는 일반적으로 불법입니다. 연방 FLSA에 따라 민간 부문 고용주는 비면세 직원(non-exempt employee)에게 주 40시간 초과 근무에 대해 반드시 현금 초과근무 수당(시급의 1.5배)을 지급해야 합니다. 보상 휴가 제공은 원칙적으로 허용되지 않습니다. 단, 주(state)나 지방 정부 고용주는 예외가 적용될 수 있습니다.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span>부당 해고를 당했다고 의심됩니다. 어떤 증거를 모아야 하나요?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="faq-answer">
                <p>가능한 한 빨리 다음 자료를 확보하세요: ① 급여 명세서·근무시간 기록 ② 고용계약서·직무기술서·성과 평가서 ③ 이메일·문자·사내 메시지 스크린샷 ④ 해고 통보 서류 ⑤ 목격자 이름과 연락처 ⑥ 해고 전 6개월간 불이익 처우 기록. 특히 차별이나 신고 보복이 의심된다면 EEOC 제소 시효(대부분 해고 후 180~300일)를 놓치지 않도록 신속히 행동하세요.</p>
              </div>
            </div>
            <div class="faq-item">
              <button class="faq-question" onclick="toggleFaq(this)">
                <span>고용주가 "1099 계약직"이라고 했지만 사실상 정직원처럼 일하고 있습니다. 어떻게 해야 하나요?</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div class="faq-answer">
                <p>이는 "고용 형태 허위 분류(Worker Misclassification)"로, 연방·주 노동법 위반입니다. IRS 판단 기준(Behavioral Control, Financial Control, Type of Relationship)이나 캘리포니아 ABC 테스트를 통해 실질적 피고용인 여부를 확인할 수 있습니다. 피고용인으로 인정될 경우 최저임금, 초과근무 수당, 실업급여, 산재보상 등의 권리가 소급 적용될 수 있습니다. IKLPA 자료실의 분류 체크리스트를 참고하거나 상담을 신청하세요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="section-cta">
        <div class="container">
          <div class="cta-box">
            <h2>지금 바로 권리를 확인하세요</h2>
            <p>무료 초기 상담 · 기밀 보장 · 한국어 지원</p>
            <div class="cta-actions">
              <a href="/contact" class="btn btn-primary btn-lg">상담 신청하기</a>
              <a href="/resources" class="btn btn-outline-white btn-lg">법률 서식 다운로드</a>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: '미주 한인 노동권익 센터 | IKLPA US' }
  )
})

// ─── LABOR LAWS PAGE ─────────────────────────────────────────────────────────
app.get('/labor-laws', (c) => {
  return c.render(
    <div>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/">홈</a> / 미국 노동법 가이드</div>
          <h1>미국 노동법 가이드</h1>
          <p>연방 및 주요 4개 주(CA·NY·TX·GA) 노동법을 한국어로 정리했습니다.<br/>한인 노동자에게 가장 많이 영향을 미치는 법 조항을 중심으로 설명합니다.</p>
        </div>
      </section>
      <section class="section-content">
        <div class="container content-layout">
          <aside class="content-sidebar">
            <nav class="sidebar-nav">
              <h4>목차</h4>
              <ul>
                <li><a href="#federal">연방 노동법</a>
                  <ul>
                    <li><a href="#flsa">FLSA — 공정근로기준법</a></li>
                    <li><a href="#eeoc">EEOC — 고용기회평등</a></li>
                    <li><a href="#fmla">FMLA — 가족의료휴가법</a></li>
                    <li><a href="#osha">OSHA — 산업안전보건</a></li>
                    <li><a href="#nlra">NLRA — 노동관계법</a></li>
                  </ul>
                </li>
                <li><a href="#california">캘리포니아주</a></li>
                <li><a href="#new-york">뉴욕주</a></li>
                <li><a href="#texas">텍사스주</a></li>
                <li><a href="#georgia">조지아주</a></li>
              </ul>
            </nav>
          </aside>
          <div class="content-body">
            <div id="federal" class="law-section">
              <div class="law-section-header">
                <div class="law-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <span class="law-tag">연방법</span>
                  <h2>연방 노동법 (Federal Labor Laws)</h2>
                </div>
              </div>
              <p class="law-intro">연방 노동법은 미국 전역에 적용되는 최소 기준을 설정합니다. 주법이 연방법보다 강력한 경우, 더 강력한 기준이 적용됩니다.</p>

              <div id="flsa" class="law-topic">
                <h3>
                  <span class="law-num">01</span>
                  FLSA — 공정근로기준법 (Fair Labor Standards Act)
                </h3>
                <div class="law-highlight-box">
                  <strong>핵심 보호 내용</strong>
                  <ul>
                    <li>연방 최저임금: 시간당 <strong>$7.25</strong> (2025년 기준, 주법 우선 적용)</li>
                    <li>초과근무 수당: 주 <strong>40시간</strong> 초과 시 시급의 <strong>1.5배</strong> 지급 의무</li>
                    <li>아동 노동 규정: 18세 미만 고위험 업무 및 근무시간 제한</li>
                    <li>급여 기록 보존 의무: 고용주는 최소 3년간 임금 기록 보존</li>
                  </ul>
                </div>
                <p><strong>한인 노동자 주의사항:</strong> 음식점, 미용업, 소매업 등 현금 거래가 많은 업종에서 FLSA 위반이 빈번합니다. 특히 "면제(exempt)" 직책으로 허위 분류하여 초과근무 수당을 지급하지 않는 경우가 많습니다. 비면제 직원으로 인정되면 최대 2년치(고의 위반 시 3년치) 미지급 임금 및 동일 금액의 손해배상을 청구할 수 있습니다.</p>
                <div class="law-action-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  신고 기관: 연방 노동부(DOL) 임금시간국 (Wage and Hour Division) | 전화: 1-866-487-9243
                </div>
              </div>

              <div id="eeoc" class="law-topic">
                <h3>
                  <span class="law-num">02</span>
                  EEOC / Title VII — 고용기회평등 (Equal Employment Opportunity)
                </h3>
                <div class="law-highlight-box">
                  <strong>보호 대상 특성 (Protected Characteristics)</strong>
                  <ul>
                    <li><strong>인종·피부색·출신국(National Origin)</strong> — 한인 노동자 가장 관련성 높음</li>
                    <li>성별·성적 지향·성 정체성, 종교, 나이(40세 이상), 장애, 임신</li>
                    <li>Title VII 적용 대상: 직원 <strong>15인 이상</strong> 사업장</li>
                  </ul>
                </div>
                <p>차별이 의심되는 경우 EEOC에 공식 신고(Charge of Discrimination)를 제기해야 합니다. 대부분의 경우 EEOC 제소 없이는 연방법원에 소송을 제기할 수 없습니다. <strong>시효: 차별 행위 발생 후 180일 (FEPA 주는 300일)</strong>.</p>
                <div class="law-action-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  신고: EEOC.gov | 전화: 1-800-669-4000 | 한국어 통역 서비스 이용 가능
                </div>
              </div>

              <div id="fmla" class="law-topic">
                <h3>
                  <span class="law-num">03</span>
                  FMLA — 가족 및 의료 휴가법 (Family and Medical Leave Act)
                </h3>
                <div class="law-highlight-box">
                  <strong>핵심 권리</strong>
                  <ul>
                    <li>연간 최대 <strong>12주</strong> 무급 휴가 (직장 복귀 보장)</li>
                    <li>대상: 1년 이상 근무 + 직전 12개월 <strong>1,250시간 이상</strong> 근무</li>
                    <li>적용 사업장: 직원 <strong>50인 이상</strong></li>
                    <li>휴가 중 건강보험 유지 의무 (고용주 부담분 동일 적용)</li>
                    <li>산후·입양 후 자녀 돌봄, 본인·가족 중증 질병, 군인 가족 등</li>
                  </ul>
                </div>
                <p><strong>주의:</strong> 캘리포니아(CFRA), 뉴욕(NYPFL) 등 주법은 적용 범위가 더 넓고 일부 유급 휴가를 보장합니다. 이민자 커뮤니티에서 FMLA 권리 활용률이 현저히 낮은 경향이 있어 적극적인 활용을 권장합니다.</p>
              </div>

              <div id="osha" class="law-topic">
                <h3>
                  <span class="law-num">04</span>
                  OSHA — 산업안전보건법 (Occupational Safety and Health Act)
                </h3>
                <p>모든 고용주는 직원에게 알려진 위험이 없는 안전한 근무 환경을 제공할 의무가 있습니다. 안전 문제 신고 후 보복(해고, 강등, 급여 삭감 등)은 엄격히 금지됩니다. 요식업·건설업·제조업 종사 한인 노동자에게 특히 중요합니다.</p>
                <div class="law-action-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  신고: OSHA.gov | 전화: 1-800-321-OSHA
                </div>
              </div>

              <div id="nlra" class="law-topic">
                <h3>
                  <span class="law-num">05</span>
                  NLRA — 전국노동관계법 (National Labor Relations Act)
                </h3>
                <p>대부분의 민간 부문 직원은 노동조합을 결성하거나 가입할 권리, 단체 교섭 권리를 가집니다. 뿐만 아니라 노동 조건 개선을 위한 집단 행동(Protected Concerted Activity)에 참여할 권리도 보장됩니다. 비노조원도 동료와 임금·근무조건 등을 공유하고 논의할 법적 권리가 있습니다.</p>
              </div>
            </div>

            <div id="california" class="law-section">
              <div class="law-section-header">
                <div class="law-icon law-icon-state">CA</div>
                <div>
                  <span class="law-tag law-tag-ca">캘리포니아주</span>
                  <h2>캘리포니아주 노동법</h2>
                </div>
              </div>
              <p class="law-intro">캘리포니아는 미국에서 노동자 보호 수준이 가장 높은 주 중 하나입니다. 연방법보다 엄격한 규정이 다수 존재하며, 전국 최대 한인 커뮤니티를 포함합니다.</p>
              <div class="state-laws-grid">
                <div class="state-law-item">
                  <h4>최저임금</h4>
                  <p>주 최저임금 <strong>$16.00/시간</strong> (2024년). 패스트푸드 업종은 <strong>$20.00/시간</strong> (AB 1228). 지역별로 LA·SF 등 더 높은 기준 적용.</p>
                </div>
                <div class="state-law-item">
                  <h4>식사·휴식 시간</h4>
                  <p>5시간 초과 근무 시 30분 식사 휴식 필수. 4시간 근무 시 10분 유급 휴식. 위반 시 하루당 1시간 추가 임금 지급 의무.</p>
                </div>
                <div class="state-law-item">
                  <h4>AB5 — 독립 계약자 규정</h4>
                  <p>엄격한 ABC 테스트로 고용 형태 분류. 기술·배달·운송 업종 중심으로 한인 종사자에게 큰 영향. 미분류 적발 시 상당한 벌금.</p>
                </div>
                <div class="state-law-item">
                  <h4>CFRA — 가족 휴가</h4>
                  <p>직원 5인 이상 사업장에 FMLA 동일 휴가 권리 확대 적용. 연방 FMLA보다 적용 범위 넓음.</p>
                </div>
                <div class="state-law-item">
                  <h4>급여 명세서 요건</h4>
                  <p>매 급여 기간 상세 급여 명세서 발급 의무. 총 근무시간, 시급, 공제 항목 명시 필수. 위반 시 건당 최대 $4,000 벌금.</p>
                </div>
                <div class="state-law-item">
                  <h4>PAGA — 민간 소송 권리</h4>
                  <p>직원이 직접 노동법 위반 소송 제기 가능. 2024년 개정으로 제도 개선. 한인 소규모 사업주 주의 필요.</p>
                </div>
              </div>
            </div>

            <div id="new-york" class="law-section">
              <div class="law-section-header">
                <div class="law-icon law-icon-state">NY</div>
                <div>
                  <span class="law-tag law-tag-ny">뉴욕주</span>
                  <h2>뉴욕주 노동법</h2>
                </div>
              </div>
              <p class="law-intro">뉴욕주, 특히 뉴욕시는 노동자 권리 보호에 매우 적극적입니다. 뉴욕시 특별 조례와 주법이 중첩 적용되는 복잡한 법률 환경이 특징입니다.</p>
              <div class="state-laws-grid">
                <div class="state-law-item">
                  <h4>최저임금 (2025년)</h4>
                  <p>뉴욕시·나소·서폭·웨스트체스터: <strong>$16.50/시간</strong>. 나머지 뉴욕주: <strong>$15.50/시간</strong>. 팁 크레딧 규정 별도 적용.</p>
                </div>
                <div class="state-law-item">
                  <h4>유급 병가 (NY Paid Sick Leave)</h4>
                  <p>100인 이상: 연 56시간 유급. 5~99인: 연 40시간 유급. 4인 이하: 연 40시간 무급. 2020년부터 시행.</p>
                </div>
                <div class="state-law-item">
                  <h4>NYPFL — 유급 가족 휴가</h4>
                  <p>2025년: 12주 유급 가족 휴가 (주 평균임금의 67%). 한인 소규모 사업장도 의무 적용.</p>
                </div>
                <div class="state-law-item">
                  <h4>NYC — 공정한 근무 일정법</h4>
                  <p>소매·패스트푸드 업종 대상. 최소 2주 전 일정 공지 의무. 단기 일정 변경 시 가산수당 지급. 한인 요식업 종사자 직접 해당.</p>
                </div>
                <div class="state-law-item">
                  <h4>NYC — 프리랜서 보호법</h4>
                  <p>$800 이상 계약 시 서면 계약서 의무. 지급 지연 시 2배 손해배상. 보복 행위 별도 처벌.</p>
                </div>
                <div class="state-law-item">
                  <h4>NYC HRLC — 임금 투명성</h4>
                  <p>2023년부터 구인 공고에 급여 범위 명시 의무. 급여 협상력이 낮은 이민자 노동자에게 중요한 개선책.</p>
                </div>
              </div>
            </div>

            <div id="texas" class="law-section">
              <div class="law-section-header">
                <div class="law-icon law-icon-state">TX</div>
                <div>
                  <span class="law-tag law-tag-tx">텍사스주</span>
                  <h2>텍사스주 노동법</h2>
                </div>
              </div>
              <p class="law-intro">텍사스는 "임의고용(At-will Employment)" 원칙이 강하게 적용되는 주로, 연방법 이상의 추가 보호가 제한적입니다. 그러나 연방법은 동일하게 적용됩니다.</p>
              <div class="state-laws-grid">
                <div class="state-law-item">
                  <h4>최저임금</h4>
                  <p>연방 최저임금 <strong>$7.25/시간</strong> 그대로 적용. 주 독자적 인상 없음. 달라스·휴스턴 등 지방 조례 시도는 주법으로 제한.</p>
                </div>
                <div class="state-law-item">
                  <h4>임의고용 원칙</h4>
                  <p>명시적 계약이 없으면 고용주·직원 모두 사전 통보 없이 고용 관계 종료 가능. 단, 연방 차별금지법 위반 해고는 불법.</p>
                </div>
                <div class="state-law-item">
                  <h4>Texas TCHRA</h4>
                  <p>Texas Commission on Human Rights Act. 15인 이상 사업장 차별 금지. EEOC와 협력 처리. 한인 노동자 차별 신고 경로.</p>
                </div>
                <div class="state-law-item">
                  <h4>유급 병가</h4>
                  <p>주 차원 의무 없음. 오스틴·댈러스·샌안토니오 시 조례는 주법으로 차단. 고용주 자율 제공에 의존.</p>
                </div>
                <div class="state-law-item">
                  <h4>비경쟁 조항 (Non-Compete)</h4>
                  <p>합리적인 범위 내에서 법원이 집행 허용. 한인 프랜차이즈·미용업 이직 시 계약서 확인 필수.</p>
                </div>
                <div class="state-law-item">
                  <h4>산재보상</h4>
                  <p>고용주의 산재보험(Workers' Comp) 가입이 의무가 아님. 비가입 고용주 확인 후 별도 민사 소송 필요.</p>
                </div>
              </div>
            </div>

            <div id="georgia" class="law-section">
              <div class="law-section-header">
                <div class="law-icon law-icon-state">GA</div>
                <div>
                  <span class="law-tag law-tag-ga">조지아주</span>
                  <h2>조지아주 노동법</h2>
                </div>
              </div>
              <p class="law-intro">조지아는 애틀랜타를 중심으로 한인 인구가 빠르게 증가하고 있습니다. 텍사스와 유사하게 연방법 중심의 노동자 보호 체계를 갖추고 있습니다.</p>
              <div class="state-laws-grid">
                <div class="state-law-item">
                  <h4>최저임금</h4>
                  <p>연방 최저임금 $7.25 적용 (주법은 $5.15이나 연방법 우선). FLSA 미적용 소규모 사업장 주의.</p>
                </div>
                <div class="state-law-item">
                  <h4>임의고용</h4>
                  <p>강력한 임의고용 원칙 적용. 서면 고용계약 없는 경우 고용주가 언제든 해고 가능. 계약서 작성 강력 권장.</p>
                </div>
                <div class="state-law-item">
                  <h4>비경쟁 조항</h4>
                  <p>2011년 법 개정으로 합리적 범위 내 비경쟁 조항 강력 집행. 한인 미용사·요식업 종사자 이직 시 법적 리스크.</p>
                </div>
                <div class="state-law-item">
                  <h4>GDOL — 조지아 노동부</h4>
                  <p>임금 체불 신고, 실업급여 신청, 재취업 지원. dol.georgia.gov. 한국어 통역 서비스 요청 가능.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: '미국 노동법 가이드 | IKLPA US' }
  )
})

// ─── CASE LAW PAGE ────────────────────────────────────────────────────────────
app.get('/case-law', (c) => {
  return c.render(
    <div>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/">홈</a> / 판례 데이터베이스</div>
          <h1>판례 데이터베이스</h1>
          <p>임금 체불, 직장 내 차별, 부당 해고 관련 미국 주요 판례를<br/>한국어 요약과 함께 제공합니다.</p>
        </div>
      </section>

      <section class="section-content">
        <div class="container">
          <div class="search-bar-section">
            <div class="search-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="caseSearch" placeholder="판례 검색 (예: 임금 체불, discrimination, FLSA...)" oninput="filterCases()" />
            </div>
            <div class="filter-row">
              <select id="filterCat" onchange="filterCases()">
                <option value="">전체 분류</option>
                <option value="임금">임금 · 초과근무</option>
                <option value="차별">차별 · 괴롭힘</option>
                <option value="해고">부당 해고 · 보복</option>
                <option value="분류">고용 형태 분류</option>
              </select>
              <select id="filterState" onchange="filterCases()">
                <option value="">전체 지역</option>
                <option value="연방">연방 법원</option>
                <option value="CA">캘리포니아</option>
                <option value="NY">뉴욕</option>
                <option value="TX">텍사스</option>
              </select>
            </div>
          </div>

          <div class="case-list" id="case-list">
            <div class="case-card" data-cat="임금" data-state="연방">
              <div class="case-header">
                <div class="case-meta">
                  <span class="case-tag">임금 · FLSA</span>
                  <span class="case-state">연방 대법원</span>
                  <time>2023</time>
                </div>
                <div class="case-outcome win">원고 승소</div>
              </div>
              <h3 class="case-title">Tyson Foods, Inc. v. Bouaphakeo (2016) — 집단 소송 자격 기준 확립</h3>
              <p class="case-summary-ko"><strong>[한국어 요약]</strong> 육류 가공 공장 직원들이 방호복 착탈의 시간에 대한 임금을 받지 못하여 집단 소송을 제기한 사건. 연방 대법원은 통계적 증거(statistical evidence)를 통한 집단 소송을 허용하는 판결을 내렸습니다. <strong>한인 노동자 시사점:</strong> 같은 고용주 아래 다수가 동일한 임금 위반을 겪고 있다면 집단 소송이 더 효과적일 수 있습니다.</p>
              <div class="case-details">
                <span><strong>사건 번호:</strong> 577 U.S. 442</span>
                <span><strong>관련 법률:</strong> FLSA § 216(b)</span>
                <span><strong>적용 지역:</strong> 전국</span>
              </div>
            </div>

            <div class="case-card" data-cat="차별" data-state="연방">
              <div class="case-header">
                <div class="case-meta">
                  <span class="case-tag">국적 차별 · Title VII</span>
                  <span class="case-state">연방 대법원</span>
                  <time>2020</time>
                </div>
                <div class="case-outcome win">원고 승소</div>
              </div>
              <h3 class="case-title">EEOC v. Catastrophe Management Solutions (11th Cir. 2016) — 외모 정책과 국적 차별</h3>
              <p class="case-summary-ko"><strong>[한국어 요약]</strong> 고용주의 "외모 관련 정책(grooming policy)"이 특정 인종·출신국 집단에게 불균형적 영향을 미친다면 Title VII 위반이 될 수 있다는 선례. <strong>한인 노동자 시사점:</strong> "중립적으로 보이는" 직장 정책도 한인을 포함한 아시안 직원에게 차별적으로 작용한다면 법적 이의를 제기할 수 있습니다.</p>
              <div class="case-details">
                <span><strong>법원:</strong> 제11 순회 항소법원</span>
                <span><strong>관련 법률:</strong> Title VII, 42 U.S.C. § 2000e</span>
                <span><strong>적용 지역:</strong> GA · FL · AL</span>
              </div>
            </div>

            <div class="case-card" data-cat="차별" data-state="연방">
              <div class="case-header">
                <div class="case-meta">
                  <span class="case-tag">아시안 차별 · ADA</span>
                  <span class="case-state">연방 항소법원</span>
                  <time>2021</time>
                </div>
                <div class="case-outcome win">원고 승소</div>
              </div>
              <h3 class="case-title">EEOC v. Mach Mining (2015) — EEOC 조정 의무 강화</h3>
              <p class="case-summary-ko"><strong>[한국어 요약]</strong> 연방 대법원이 EEOC는 소송 제기 전 반드시 성실한 화해 조정(conciliation)을 시도해야 한다고 판결. <strong>한인 노동자 시사점:</strong> EEOC에 신고할 경우 소송 전 조정 단계가 있으며, 이 단계에서 합의를 통해 배상을 받을 수 있는 기회가 있습니다. 전문 통역과 함께 조정에 임하는 것이 중요합니다.</p>
              <div class="case-details">
                <span><strong>사건 번호:</strong> 575 U.S. 480</span>
                <span><strong>관련 법률:</strong> Title VII § 706(b)</span>
                <span><strong>적용 지역:</strong> 전국</span>
              </div>
            </div>

            <div class="case-card" data-cat="해고" data-state="CA">
              <div class="case-header">
                <div class="case-meta">
                  <span class="case-tag">보복 해고 · 신고 보호</span>
                  <span class="case-state">캘리포니아 대법원</span>
                  <time>2022</time>
                </div>
                <div class="case-outcome win">원고 승소</div>
              </div>
              <h3 class="case-title">Lawson v. PPG Architectural Finishes (CA 2022) — 내부 신고자 보호 기준 완화</h3>
              <p class="case-summary-ko"><strong>[한국어 요약]</strong> 캘리포니아 대법원이 내부 신고(whistleblower) 보복 소송에서 원고가 사용해야 하는 입증 기준을 완화했습니다. 신고 행위가 불리한 처우의 "기여 요인(contributing factor)"이었음을 증명하면 충분합니다. <strong>한인 노동자 시사점:</strong> 임금 체불·안전 위반 신고 후 불이익을 받은 경우, 캘리포니아에서는 보복 입증이 더 쉬워졌습니다.</p>
              <div class="case-details">
                <span><strong>사건 번호:</strong> 12 Cal.5th 703</span>
                <span><strong>관련 법률:</strong> California Labor Code § 1102.6</span>
                <span><strong>적용 지역:</strong> CA 전역</span>
              </div>
            </div>

            <div class="case-card" data-cat="분류" data-state="CA">
              <div class="case-header">
                <div class="case-meta">
                  <span class="case-tag">고용 형태 분류 · AB5</span>
                  <span class="case-state">캘리포니아</span>
                  <time>2021</time>
                </div>
                <div class="case-outcome win">근로자 승소</div>
              </div>
              <h3 class="case-title">Dynamex Operations v. Superior Court (CA 2018) — ABC 테스트 확립</h3>
              <p class="case-summary-ko"><strong>[한국어 요약]</strong> 캘리포니아 대법원이 배달 기사를 독립 계약자로 분류한 Dynamex에 대해 ABC 테스트를 도입한 획기적 판결. A: 회사의 통제에서 자유로울 것, B: 회사의 일반 사업 범위 밖의 일을 할 것, C: 독립적으로 같은 업종을 운영할 것. <strong>한인 노동자 시사점:</strong> 배달·운수·미용업 등 1099 계약직으로 일하는 한인은 이 판결로 정직원 지위를 주장할 수 있습니다.</p>
              <div class="case-details">
                <span><strong>사건 번호:</strong> 4 Cal.5th 903</span>
                <span><strong>관련 법률:</strong> CA Labor Code § 2750.3 (AB5)</span>
                <span><strong>적용 지역:</strong> CA 전역</span>
              </div>
            </div>

            <div class="case-card" data-cat="임금" data-state="NY">
              <div class="case-header">
                <div class="case-meta">
                  <span class="case-tag">임금 체불 · 팁</span>
                  <span class="case-state">뉴욕 연방지방법원</span>
                  <time>2023</time>
                </div>
                <div class="case-outcome win">합의 승소</div>
              </div>
              <h3 class="case-title">Chipotle 집단 소송 (SDNY 2022) — 팁 풀링 위반 합의</h3>
              <p class="case-summary-ko"><strong>[한국어 요약]</strong> 뉴욕 소재 치폴레 매장에서 관리자가 팁 풀(tip pool)에 불법 참여하고 일부 직원의 팁을 가로챈 사건. FLSA 및 뉴욕주 노동법 위반으로 다수 직원이 집단 소송을 제기, $750만 합의로 종결. <strong>한인 노동자 시사점:</strong> 한인 요식업 종사자들이 팁 관련 분쟁 시 유사 집단 소송 전략 참고 가능.</p>
              <div class="case-details">
                <span><strong>법원:</strong> S.D.N.Y.</span>
                <span><strong>관련 법률:</strong> FLSA § 203(m), NY Labor Law § 196-d</span>
                <span><strong>적용 지역:</strong> NY</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: '판례 데이터베이스 | IKLPA US' }
  )
})

// ─── RESOURCES PAGE ──────────────────────────────────────────────────────────
app.get('/resources', (c) => {
  return c.render(
    <div>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/">홈</a> / 자료 & 서식</div>
          <h1>법률 자료 & 서식 자료실</h1>
          <p>영문·한국어 병기 법률 서식을 무료로 제공합니다.<br/>다운로드 후 직접 작성하거나 전문가 상담 시 활용하세요.</p>
        </div>
      </section>

      <section class="section-content">
        <div class="container">
          <div class="resources-intro-banner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <p>본 서식은 법률 자문을 대체하지 않습니다. 실제 법적 조치 전 반드시 자격 있는 변호사와 상담하시기 바랍니다. 무료 법률 지원이 필요하신 경우 <a href="/contact">상담 신청</a>을 이용해 주세요.</p>
          </div>

          <div class="resources-cats">
            <div class="res-cat-section">
              <div class="res-cat-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <h2>임금 체불 대응 서식</h2>
              </div>
              <div class="resource-grid">
                <div class="resource-card">
                  <div class="resource-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>미지급 임금 청구 내용증명 (Demand Letter)</h4>
                    <p>고용주에게 미지급 임금 지급을 공식 요구하는 서한. 영문·한국어 병기.</p>
                    <div class="resource-tags">
                      <span>영한 병기</span><span>FLSA</span><span>Word/PDF</span>
                    </div>
                  </div>
                  <a href="#" class="resource-download" onclick="showDownloadNotice(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    다운로드
                  </a>
                </div>
                <div class="resource-card">
                  <div class="resource-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>DOL 임금시간국 신고 양식 (WHD Complaint Form)</h4>
                    <p>연방 노동부 임금시간국에 임금 체불을 공식 신고하는 양식. 작성 가이드 포함.</p>
                    <div class="resource-tags">
                      <span>연방 공식</span><span>WH-4</span><span>PDF</span>
                    </div>
                  </div>
                  <a href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/wh4.pdf" target="_blank" class="resource-download">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    공식 PDF
                  </a>
                </div>
                <div class="resource-card">
                  <div class="resource-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>근무시간 자가 기록 일지 (Work Hour Log)</h4>
                    <p>초과근무 분쟁 대비 근무시간 기록 양식. 날짜·출퇴근 시간·휴식시간 기록 포함.</p>
                    <div class="resource-tags">
                      <span>증거 보전</span><span>Excel/PDF</span>
                    </div>
                  </div>
                  <a href="#" class="resource-download" onclick="showDownloadNotice(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    다운로드
                  </a>
                </div>
              </div>
            </div>

            <div class="res-cat-section">
              <div class="res-cat-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <h2>차별 & 부당 해고 대응</h2>
              </div>
              <div class="resource-grid">
                <div class="resource-card">
                  <div class="resource-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>EEOC 차별 신고서 작성 가이드</h4>
                    <p>고용기회평등위원회 신고 절차 및 양식 작성 방법 한국어 안내서. 증거 목록 포함.</p>
                    <div class="resource-tags">
                      <span>한국어</span><span>EEOC</span><span>PDF</span>
                    </div>
                  </div>
                  <a href="#" class="resource-download" onclick="showDownloadNotice(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    다운로드
                  </a>
                </div>
                <div class="resource-card">
                  <div class="resource-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>직장 내 차별 사건 기록 일지</h4>
                    <p>차별·괴롭힘 발생 시 날짜, 장소, 목격자, 내용을 체계적으로 기록하는 서식.</p>
                    <div class="resource-tags">
                      <span>영한 병기</span><span>증거 보전</span>
                    </div>
                  </div>
                  <a href="#" class="resource-download" onclick="showDownloadNotice(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    다운로드
                  </a>
                </div>
                <div class="resource-card">
                  <div class="resource-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>부당 해고 이의 제기 서한 (Wrongful Termination Letter)</h4>
                    <p>해고 결정에 공식 이의를 제기하는 서한 양식. 법적 근거 조항 포함.</p>
                    <div class="resource-tags">
                      <span>영한 병기</span><span>Word</span>
                    </div>
                  </div>
                  <a href="#" class="resource-download" onclick="showDownloadNotice(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    다운로드
                  </a>
                </div>
              </div>
            </div>

            <div class="res-cat-section">
              <div class="res-cat-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <h2>권리 안내 가이드</h2>
              </div>
              <div class="resource-grid">
                <div class="resource-card">
                  <div class="resource-icon guide">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>미국 이민자 노동 권리 완전 가이드</h4>
                    <p>이민 신분별(H-1B, L-1, 영주권자, 서류미비) 노동 권리 안내서. 한국어 전문.</p>
                    <div class="resource-tags">
                      <span>한국어</span><span>이민자</span><span>40페이지</span>
                    </div>
                  </div>
                  <a href="#" class="resource-download" onclick="showDownloadNotice(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    다운로드
                  </a>
                </div>
                <div class="resource-card">
                  <div class="resource-icon guide">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  </div>
                  <div class="resource-info">
                    <h4>고용 형태 분류 자가 체크리스트 (IRS · CA ABC 테스트)</h4>
                    <p>정직원 vs. 독립 계약자 판단 기준 체크리스트. 미분류 리스크 사전 진단.</p>
                    <div class="resource-tags">
                      <span>한국어</span><span>IRS</span><span>AB5</span>
                    </div>
                  </div>
                  <a href="#" class="resource-download" onclick="showDownloadNotice(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    다운로드
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="legal-aid-section">
            <h2>지역별 무료 법률 지원 기관</h2>
            <div class="legal-aid-grid">
              <div class="legal-aid-card">
                <span class="aid-state">CA</span>
                <div>
                  <h4>Korean Community Service Center (KCSC)</h4>
                  <p>Los Angeles · (213) 389-6666</p>
                  <a href="https://www.kcscla.org" target="_blank">kcscla.org →</a>
                </div>
              </div>
              <div class="legal-aid-card">
                <span class="aid-state">NY</span>
                <div>
                  <h4>Korean American Family Service Center</h4>
                  <p>New York City · (718) 886-0303</p>
                  <a href="#" target="_blank">웹사이트 →</a>
                </div>
              </div>
              <div class="legal-aid-card">
                <span class="aid-state">TX</span>
                <div>
                  <h4>Korean Community Center of Greater Houston</h4>
                  <p>Houston · (713) 878-0088</p>
                  <a href="#" target="_blank">웹사이트 →</a>
                </div>
              </div>
              <div class="legal-aid-card">
                <span class="aid-state">GA</span>
                <div>
                  <h4>Korean Community Service Center of Atlanta</h4>
                  <p>Atlanta · (770) 936-0969</p>
                  <a href="#" target="_blank">웹사이트 →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: '법률 자료 & 서식 | IKLPA US' }
  )
})

// ─── NEWS PAGE ────────────────────────────────────────────────────────────────
app.get('/news', (c) => {
  return c.render(
    <div>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/">홈</a> / 뉴스 & 동향</div>
          <h1>노동 뉴스 & 정책 동향</h1>
          <p>미국 노동법 개정, 주요 판결, 한인 노동 시장 소식을 빠르게 전달합니다.</p>
        </div>
      </section>

      <section class="section-content">
        <div class="container">
          <div class="news-filter-bar">
            <button class="news-filter-btn active" onclick="filterNews(this, 'all')">전체</button>
            <button class="news-filter-btn" onclick="filterNews(this, '연방')">연방 정책</button>
            <button class="news-filter-btn" onclick="filterNews(this, 'CA')">캘리포니아</button>
            <button class="news-filter-btn" onclick="filterNews(this, 'NY')">뉴욕</button>
            <button class="news-filter-btn" onclick="filterNews(this, 'TX')">텍사스</button>
            <button class="news-filter-btn" onclick="filterNews(this, '판결')">주요 판결</button>
          </div>

          <div class="news-full-grid" id="news-grid">
            <article class="news-full-card" data-cat="연방">
              <div class="nf-meta">
                <span class="news-tag">연방 정책</span>
                <time>2025년 3월 1일</time>
              </div>
              <h3>DOL, 2025년 최저임금 인상 지침 발표 — 한인 밀집 업종 영향 분석</h3>
              <p>연방 노동부가 발표한 최저임금 조정 가이드라인과 캘리포니아·뉴욕 주법 변경사항이 한인 운영 소상공업체에 미치는 영향을 분석합니다. 특히 패스트푸드, 소매업, 미용업 종사 한인 노동자와 소상공업주 모두에게 중요한 내용을 담고 있습니다.</p>
              <div class="nf-footer">
                <span>출처: U.S. Department of Labor</span>
                <a href="https://www.dol.gov" target="_blank" class="nf-source-link">원문 보기 →</a>
              </div>
            </article>

            <article class="news-full-card" data-cat="CA">
              <div class="nf-meta">
                <span class="news-tag tag-ca">캘리포니아</span>
                <time>2025년 2월 22일</time>
              </div>
              <h3>CA PAGA 개혁법 2025년 시행 — 직원 신고 시 고용주 부담 변화</h3>
              <p>California Private Attorneys General Act(PAGA) 개정으로 직원의 노동법 위반 신고 절차와 고용주 배상 책임이 크게 변화합니다. 개정안은 벌금 구조를 수정하고 고용주의 자가 시정(cure) 기회를 확대했습니다. 한인 소규모 사업주와 직원 모두에게 영향을 미치는 핵심 변화를 정리합니다.</p>
              <div class="nf-footer">
                <span>출처: California Labor Commissioner</span>
                <a href="https://www.dir.ca.gov/dlse" target="_blank" class="nf-source-link">원문 보기 →</a>
              </div>
            </article>

            <article class="news-full-card" data-cat="NY">
              <div class="nf-meta">
                <span class="news-tag tag-ny">뉴욕</span>
                <time>2025년 2월 15일</time>
              </div>
              <h3>NYC 프리랜서 보호법 강화 — 계약서 없는 구두 계약도 보호 대상</h3>
              <p>뉴욕시의 Freelance Isn't Free Act 적용 범위가 확대되어 한인 프리랜서 및 독립 계약자도 계약서 미작성 시 보호받습니다. $800 이상 단건 또는 120일 누적 계약에 적용되며, 위반 시 2배 손해배상이 가능합니다.</p>
              <div class="nf-footer">
                <span>출처: NYC Department of Consumer and Worker Protection</span>
                <a href="https://www.nyc.gov/site/dca/workers/worker-rights.page" target="_blank" class="nf-source-link">원문 보기 →</a>
              </div>
            </article>

            <article class="news-full-card" data-cat="판결">
              <div class="nf-meta">
                <span class="news-tag">주요 판결</span>
                <time>2025년 2월 5일</time>
              </div>
              <h3>연방 대법원, Loper Bright 판결 이후 노동부 규정 집행 변화</h3>
              <p>2024년 연방 대법원의 Loper Bright 판결(Chevron 원칙 폐기)로 인해 연방 노동부의 규정 집행 방식에 변화가 예상됩니다. 초과근무 면제 기준, 최저임금 관련 규정 등에 대한 법원 심사 기준이 강화될 가능성이 있어 노동 관련 소송 전략에도 영향을 미칩니다.</p>
              <div class="nf-footer">
                <span>출처: Supreme Court of the United States</span>
                <a href="https://www.supremecourt.gov" target="_blank" class="nf-source-link">원문 보기 →</a>
              </div>
            </article>

            <article class="news-full-card" data-cat="TX">
              <div class="nf-meta">
                <span class="news-tag tag-tx">텍사스</span>
                <time>2025년 1월 28일</time>
              </div>
              <h3>텍사스 임금 체불 신고 급증 — 달라스 한인 밀집 업종 현황</h3>
              <p>텍사스주 노동위원회(TWC)에 접수된 임금 체불 신고가 전년 대비 18% 증가했습니다. 특히 달라스-포트워스 한인 밀집 지역의 요식업, 소매업, 미용업 종사자 신고가 두드러집니다. 신고 방법과 구제 절차를 안내합니다.</p>
              <div class="nf-footer">
                <span>출처: Texas Workforce Commission</span>
                <a href="https://www.twc.texas.gov" target="_blank" class="nf-source-link">원문 보기 →</a>
              </div>
            </article>

            <article class="news-full-card" data-cat="연방">
              <div class="nf-meta">
                <span class="news-tag">연방 정책</span>
                <time>2025년 1월 20일</time>
              </div>
              <h3>2025년 비경쟁 조항(Non-Compete) 규제 변화 — FTC 규정 현황</h3>
              <p>FTC의 비경쟁 조항 전면 금지 규정은 연방 법원에 의해 차단된 상태입니다. 한인 미용사, 요리사, IT 종사자 등 비경쟁 조항이 포함된 계약서에 서명한 경우 각 주법에 따른 집행 가능성을 확인해야 합니다.</p>
              <div class="nf-footer">
                <span>출처: Federal Trade Commission</span>
                <a href="https://www.ftc.gov" target="_blank" class="nf-source-link">원문 보기 →</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>,
    { title: '뉴스 & 동향 | IKLPA US' }
  )
})

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
app.get('/contact', (c) => {
  return c.render(
    <div>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb"><a href="/">홈</a> / 신고 & 상담</div>
          <h1>노동 위반 신고 & 법률 상담</h1>
          <p>모든 신고 및 상담은 엄격한 기밀이 보장됩니다.<br/>이민 신분과 관계없이 누구나 신청할 수 있습니다.</p>
        </div>
      </section>

      <section class="section-content">
        <div class="container contact-layout">
          <div class="contact-info-col">
            <div class="contact-info-box">
              <h3>접수 전 확인사항</h3>
              <ul class="contact-checklist">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  모든 상담은 <strong>무료</strong>입니다
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  이민 신분과 무관하게 접수 가능합니다
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  한국어로 상담이 진행됩니다
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  제출 내용은 외부에 공개되지 않습니다
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  신고를 이유로 이민 당국에 통보하지 않습니다
                </li>
              </ul>
            </div>
            <div class="contact-info-box">
              <h3>직접 연락</h3>
              <div class="direct-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.89-.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div>
                  <strong>전화 상담 (한국어)</strong>
                  <span>1-800-IKLPA-US</span>
                  <small>월–금 9AM–6PM (PT)</small>
                </div>
              </div>
              <div class="direct-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  <strong>이메일</strong>
                  <span>help@kalamrights.org</span>
                  <small>24시간 접수 (3영업일 내 회신)</small>
                </div>
              </div>
            </div>
            <div class="contact-info-box emergency">
              <h3>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                긴급 기관 연락처
              </h3>
              <ul class="emergency-list">
                <li><strong>DOL 임금시간국:</strong> 1-866-487-9243</li>
                <li><strong>EEOC:</strong> 1-800-669-4000</li>
                <li><strong>OSHA:</strong> 1-800-321-6742</li>
                <li><strong>NLRB:</strong> 1-844-762-6572</li>
              </ul>
            </div>
          </div>

          <div class="contact-form-col">
            <form class="intake-form" id="intake-form" onsubmit="submitForm(event)">
              <h2>상담 / 신고 접수 양식</h2>
              <p class="form-intro">아래 양식을 작성해 주시면 담당자가 확인 후 연락드립니다.</p>

              <div class="form-section-title">기본 정보</div>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">성함 <span class="required">*</span></label>
                  <input type="text" id="name" name="name" placeholder="홍길동" required />
                </div>
                <div class="form-group">
                  <label for="contact">연락처 (전화 또는 이메일) <span class="required">*</span></label>
                  <input type="text" id="contact" name="contact" placeholder="010-0000-0000 또는 email@example.com" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="state">거주 주 (State) <span class="required">*</span></label>
                  <select id="state" name="state" required>
                    <option value="">선택해 주세요</option>
                    <option>캘리포니아 (CA)</option>
                    <option>뉴욕 (NY)</option>
                    <option>텍사스 (TX)</option>
                    <option>조지아 (GA)</option>
                    <option>기타</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="issue-type">문제 유형 <span class="required">*</span></label>
                  <select id="issue-type" name="issue-type" required>
                    <option value="">선택해 주세요</option>
                    <option>임금 체불 / 초과근무 수당 미지급</option>
                    <option>인종 / 국적 차별</option>
                    <option>부당 해고</option>
                    <option>신고 보복 (Retaliation)</option>
                    <option>고용 형태 허위 분류 (Misclassification)</option>
                    <option>성희롱 / 직장 내 괴롭힘</option>
                    <option>FMLA / 육아휴직 관련</option>
                    <option>기타 노동법 위반</option>
                  </select>
                </div>
              </div>

              <div class="form-section-title">사건 내용</div>
              <div class="form-group full">
                <label for="employer">고용주 / 회사명</label>
                <input type="text" id="employer" name="employer" placeholder="회사 이름 (선택 사항)" />
              </div>
              <div class="form-group full">
                <label for="description">사건 상세 내용 <span class="required">*</span></label>
                <textarea id="description" name="description" rows="6" placeholder="언제, 어디서, 어떤 일이 발생했는지 최대한 구체적으로 작성해 주세요. 날짜, 금액, 관련 인물 등을 포함하면 도움이 됩니다." required></textarea>
              </div>
              <div class="form-group full">
                <label for="evidence">현재 보유 증거 자료</label>
                <div class="checkbox-group">
                  <label class="checkbox-item"><input type="checkbox" name="evidence" value="급여명세서" /> 급여 명세서</label>
                  <label class="checkbox-item"><input type="checkbox" name="evidence" value="계약서" /> 고용 계약서</label>
                  <label class="checkbox-item"><input type="checkbox" name="evidence" value="이메일" /> 이메일 / 문자 기록</label>
                  <label class="checkbox-item"><input type="checkbox" name="evidence" value="목격자" /> 목격자</label>
                  <label class="checkbox-item"><input type="checkbox" name="evidence" value="사진/영상" /> 사진 / 영상</label>
                  <label class="checkbox-item"><input type="checkbox" name="evidence" value="없음" /> 아직 없음</label>
                </div>
              </div>
              <div class="form-group full">
                <label class="checkbox-item consent-check">
                  <input type="checkbox" required />
                  제출 내용이 상담 목적으로만 사용되며, 본인의 동의 없이 외부에 공개되지 않음을 이해합니다. <span class="required">*</span>
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-full">상담 신청서 제출</button>
              <p class="form-footnote">제출 후 2영업일 내에 한국어로 연락드립니다. 긴급 상황의 경우 전화 상담을 이용해 주세요.</p>
            </form>
            <div class="form-success" id="form-success" style="display:none">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <h3>접수가 완료되었습니다</h3>
              <p>담당자가 2영업일 내에 한국어로 연락드립니다.<br/>긴급 사항은 1-800-IKLPA-US로 전화해 주세요.</p>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: '신고 & 상담 접수 | IKLPA US' }
  )
})

// ─── DONATE PAGE ──────────────────────────────────────────────────────────────
app.get('/donate', (c) => {
  return c.render(
    <div>
      {/* PAGE HERO */}
      <section class="page-hero page-hero-donate">
        <div class="container">
          <div class="breadcrumb"><a href="/">홈</a> / 후원 & 법률보험</div>
          <h1>함께 지키는 노동의 권리</h1>
          <p>여러분의 후원이 억울한 한인 노동자에게 강력한 법률 방패가 됩니다.<br/>일회성 후원, 정기 후원, 또는 법률보험 가입으로 함께해 주세요.</p>
          <div class="donate-hero-stats">
            <div class="donate-hero-stat stat-item">
              <span class="stat-num stat-orange">$20</span>
              <span class="stat-label">한 달 정기 후원으로<br/>노동자 1인 법률상담 지원</span>
            </div>
            <div class="stat-divider"></div>
            <div class="donate-hero-stat stat-item">
              <span class="stat-num stat-orange">1,240+</span>
              <span class="stat-label">현재 정기 후원자 수</span>
            </div>
            <div class="stat-divider"></div>
            <div class="donate-hero-stat stat-item">
              <span class="stat-num stat-orange">92%</span>
              <span class="stat-label">후원금의 직접<br/>법률 지원 사용 비율</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONE-TIME DONATION ── */}
      <section class="donate-section" id="one-time">
        <div class="container">
          <div style="max-width:760px;margin:0 auto;">
            <div class="section-label">일회성 후원</div>
            <h2 class="section-title" style="margin-bottom:8px;">지금 바로 후원하기</h2>
            <p style="margin-bottom:36px;">원하는 금액을 선택하거나 직접 입력하세요. 모든 후원금은 한인 노동자 법률 지원에 직접 사용됩니다.</p>

            <div class="donate-toggle-wrap">
              <div class="donate-toggle">
                <button class="toggle-btn active" id="btn-onetime" onclick="switchTab('onetime')">일회성 후원</button>
                <button class="toggle-btn" id="btn-monthly" onclick="switchTab('monthly')">정기 후원</button>
              </div>
            </div>

            {/* Amount Grid */}
            <div class="amount-grid" id="amount-grid">
              <div class="amount-card" onclick="selectAmount(this, 20)">
                <div class="amount-value">$20</div>
                <div class="amount-unit">일회성</div>
                <div class="amount-desc">법률 상담 1회 지원</div>
              </div>
              <div class="amount-card popular" onclick="selectAmount(this, 50)">
                <div class="amount-value">$50</div>
                <div class="amount-unit">일회성</div>
                <div class="amount-desc">소송 서류 번역 지원</div>
              </div>
              <div class="amount-card" onclick="selectAmount(this, 100)">
                <div class="amount-value">$100</div>
                <div class="amount-unit">일회성</div>
                <div class="amount-desc">EEOC 신고 절차 지원</div>
              </div>
              <div class="amount-card" onclick="selectAmount(this, 250)">
                <div class="amount-value">$250</div>
                <div class="amount-unit">일회성</div>
                <div class="amount-desc">전문 변호사 1시간 연결</div>
              </div>
            </div>
            <div class="amount-custom">
              <span>$</span>
              <input type="number" id="custom-amount" placeholder="직접 입력" min="1" oninput="clearSelected()" />
              <span style="font-size:.82rem;color:var(--slate-light);">USD</span>
            </div>

            <div class="donate-impact-row">
              <div class="impact-item">
                <div class="impact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <div>
                  <h4>$20 · 법률 상담</h4>
                  <p>임금 체불·차별 피해자 1인의 초기 법률 상담 비용 전액 지원</p>
                </div>
              </div>
              <div class="impact-item">
                <div class="impact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                  <h4>$50 · 서류 번역</h4>
                  <p>EEOC·DOL 신고에 필요한 법률 서류 한영 번역 지원</p>
                </div>
              </div>
              <div class="impact-item">
                <div class="impact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4>$100 · 신고 지원</h4>
                  <p>연방·주 기관 공식 신고 전 과정 법률 어시스턴트 지원</p>
                </div>
              </div>
            </div>

            <div class="donate-form-panel">
              <h3>후원자 정보 입력</h3>
              <p class="sub">후원 영수증 및 세금 공제 확인서를 이메일로 발송해 드립니다.</p>
              <div class="donate-form-row">
                <div class="donate-form-group">
                  <label>성함</label>
                  <input type="text" placeholder="홍길동" />
                </div>
                <div class="donate-form-group">
                  <label>이메일</label>
                  <input type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div class="donate-form-row">
                <div class="donate-form-group">
                  <label>후원 금액</label>
                  <input type="text" id="final-amount" placeholder="$50" readonly style="background:rgba(255,255,255,.05)" />
                </div>
                <div class="donate-form-group">
                  <label>결제 방법</label>
                  <select>
                    <option>신용카드 / 직불카드</option>
                    <option>PayPal</option>
                    <option>Zelle</option>
                    <option>수표 (Check)</option>
                  </select>
                </div>
              </div>
              <hr class="donate-form-divider" />
              <button class="btn btn-gold btn-full btn-lg" onclick="showDonateSuccess(event)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                후원하기
              </button>
              <div class="donate-secure-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                SSL 암호화 · 안전 결제 · 501(c)(3) 면세 단체 · EIN: 개인정보 보호
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MONTHLY PLANS ── */}
      <section class="donate-section alt-bg" id="monthly">
        <div class="container">
          <div class="section-label">정기 후원</div>
          <h2 class="section-title">매달 함께하는 든든한 연대</h2>
          <p style="max-width:560px;margin-bottom:0">정기 후원자는 세금 공제 혜택과 함께 IKLPA US의 활동 보고서 및 법률 뉴스레터를 받아보실 수 있습니다.</p>

          <div class="plan-grid">
            {/* 서포터 */}
            <div class="plan-card">
              <div class="plan-icon orange">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div class="plan-name">서포터</div>
              <div class="plan-price">$20<span>/월</span></div>
              <div class="plan-period">매달 자동 결제 · 언제든 해지 가능</div>
              <hr class="plan-divider" />
              <div class="plan-features">
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>월 1인 법률 상담 지원</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>월간 뉴스레터 수신</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>세금 공제 영수증 발급</div>
                <div class="plan-feature inactive"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>연간 활동 보고서</div>
                <div class="plan-feature inactive"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>법률보험 할인 혜택</div>
              </div>
              <button class="btn btn-secondary btn-full" onclick="showDonateSuccess(event)">서포터 시작하기</button>
            </div>

            {/* 챔피언 (추천) */}
            <div class="plan-card featured">
              <div class="plan-badge">추천 플랜</div>
              <div class="plan-icon gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div class="plan-name">챔피언</div>
              <div class="plan-price">$50<span>/월</span></div>
              <div class="plan-period">매달 자동 결제 · 언제든 해지 가능</div>
              <hr class="plan-divider" />
              <div class="plan-features">
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>월 3인 법률 상담 지원</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>월간 뉴스레터 + 심층 분석</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>세금 공제 영수증 발급</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>연간 활동 보고서 + 감사패</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>법률보험 월 $5 할인 혜택</div>
              </div>
              <button class="btn btn-primary btn-full" onclick="showDonateSuccess(event)">챔피언 시작하기</button>
            </div>

            {/* 파트너 */}
            <div class="plan-card">
              <div class="plan-icon navy">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div class="plan-name">파트너 (기업/단체)</div>
              <div class="plan-price">$200<span>/월</span></div>
              <div class="plan-period">기업 후원 · 세금 공제 최대화</div>
              <hr class="plan-divider" />
              <div class="plan-features">
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>월 15인 이상 법률 지원</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>후원사 로고 웹사이트 게재</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>연간 세금 공제 증명서</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>분기별 영향력 보고서</div>
                <div class="plan-feature"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>임직원 법률보험 단체 할인</div>
              </div>
              <button class="btn btn-secondary btn-full" onclick="showDonateSuccess(event)">파트너십 문의</button>
            </div>
          </div>

          {/* 투명성 현황 */}
          <div class="transparency-bar">
            <div class="trans-item">
              <div class="trans-pct">92%</div>
              <div class="trans-label">직접 법률 지원<br/>사용 비율</div>
            </div>
            <div class="trans-item">
              <div class="trans-pct">5%</div>
              <div class="trans-label">운영·행정<br/>비용 비율</div>
            </div>
            <div class="trans-item">
              <div class="trans-pct">3%</div>
              <div class="trans-label">플랫폼 유지<br/>비용 비율</div>
            </div>
          </div>

          {/* 후원자 현황 */}
          <div class="donor-wall">
            <h4>현재 1,240명이 함께하고 있습니다</h4>
            <div class="donor-avatars">
              {['김', '박', '이', '최', '정', '강', '조', '윤', 'K', 'P'].map((n) => (
                <div class="donor-avatar">{n}</div>
              ))}
            </div>
            <p class="donor-count">이번 달 <strong>+48명</strong>의 새 후원자가 함께했습니다</p>
          </div>
        </div>
      </section>

      {/* ── LEGAL INSURANCE ── */}
      <section class="insurance-section" id="insurance">
        <div class="container">

          {/* 섹션 헤더 */}
          <div class="ins-section-header">
            <div>
              <div class="section-label">법률보험 (Legal Insurance)</div>
              <h2 class="section-title" style="margin-bottom:12px;">한인 노동자 전용<br/>법률보험 플랜</h2>
              <p style="max-width:560px;margin-bottom:0;">분쟁이 생기기 전에 준비하세요. 월정액으로 한국어 전담 변호사 네트워크와 연결되어, 임금 체불·부당 해고·직장 내 차별 모든 상황에서 즉각 대응합니다.</p>
            </div>
            <div class="ins-trust-badges">
              <div class="ins-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                이민 신분 무관
              </div>
              <div class="ins-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                30일 무료 체험
              </div>
              <div class="ins-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                언제든 해지
              </div>
            </div>
          </div>

          {/* 4개 플랜 그리드 */}
          <div class="ins4-grid" id="ins-plans">

            {/* ── 베이직 ── */}
            <div class="ins4-card">
              <div class="ins4-top">
                <div class="ins4-tier">BASIC</div>
                <div class="ins4-name">베이직</div>
                <div class="ins4-desc">법률 정보 첫 걸음</div>
                <div class="ins4-price-row">
                  <span class="ins4-price">$19</span>
                  <span class="ins4-unit">/월</span>
                </div>
                <div class="ins4-annual">연간 결제 시 <strong>$15/월</strong> — 2개월 무료</div>
              </div>
              <hr class="ins4-divider" />
              <ul class="ins4-features">
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>AI 법률 도우미 무제한 이용</li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>법률 서식 무제한 다운로드</li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>이메일 법률 질의 (72시간 답변)</li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>월간 노동법 뉴스레터</li>
                <li class="off"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>한국어 변호사 전화 상담</li>
                <li class="off"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>EEOC/DOL 신고 대리</li>
                <li class="off"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>소송 비용 지원</li>
                <li class="off"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>가족 구성원 포함</li>
              </ul>
              <button class="btn btn-secondary btn-full ins4-btn" onclick="showInsuranceModal(event, '베이직')">베이직 시작하기</button>
              <p class="ins4-note">30일 무료 · 언제든 해지</p>
            </div>

            {/* ── 스탠다드 ── */}
            <div class="ins4-card">
              <div class="ins4-top">
                <div class="ins4-tier">STANDARD</div>
                <div class="ins4-name">스탠다드</div>
                <div class="ins4-desc">실질적 법률 대응력</div>
                <div class="ins4-price-row">
                  <span class="ins4-price">$39</span>
                  <span class="ins4-unit">/월</span>
                </div>
                <div class="ins4-annual">연간 결제 시 <strong>$32/월</strong> — 2개월 무료</div>
              </div>
              <hr class="ins4-divider" />
              <ul class="ins4-features">
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>AI 법률 도우미 무제한 이용</li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>법률 서식 무제한 다운로드</li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>이메일 법률 질의 (24시간 답변)</li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>한국어 변호사 전화 상담 <span class="ins4-qty">연 4회 · 60분</span></li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>고용계약서 · 급여명세서 검토</li>
                <li class="on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>EEOC/DOL 신고서 작성 지원</li>
                <li class="off"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>소송 비용 지원</li>
                <li class="off"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>가족 구성원 포함</li>
              </ul>
              <button class="btn btn-secondary btn-full ins4-btn" onclick="showInsuranceModal(event, '스탠다드')">스탠다드 시작하기</button>
              <p class="ins4-note">30일 무료 · 언제든 해지</p>
            </div>

            {/* ── 프리미엄 (HERO) ── */}
            <div class="ins4-card ins4-hero">
              <div class="ins4-hero-glow"></div>
              <div class="ins4-popular-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                가장 인기 · 최고의 가치
              </div>
              <div class="ins4-top">
                <div class="ins4-tier hero-tier">PREMIUM</div>
                <div class="ins4-name hero-name">프리미엄</div>
                <div class="ins4-desc hero-desc">담당 변호사 1:1 배정</div>
                <div class="ins4-price-row">
                  <span class="ins4-price hero-price">$79</span>
                  <span class="ins4-unit hero-unit">/월</span>
                </div>
                <div class="ins4-annual hero-annual">연간 결제 시 <strong>$65/월</strong> — 2개월 무료</div>
                <div class="ins4-savings-tag">연간 결제 시 $168 절약</div>
              </div>
              <hr class="ins4-divider hero-divider" />
              <ul class="ins4-features">
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>AI 법률 도우미 무제한 이용</li>
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>법률 서식 + 맞춤 작성 지원</li>
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>이메일 법률 질의 (12시간 답변)</li>
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>한국어 변호사 <strong>무제한 상담</strong></li>
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>담당 변호사 1:1 배정 (전담)</li>
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>EEOC/DOL 신고 <strong>전 과정 대리</strong></li>
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>소송 대리 비용 <strong>연 $5,000 지원</strong></li>
                <li class="on hero-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>긴급 상담 4시간 내 응답</li>
              </ul>
              <button class="btn btn-gold btn-full ins4-btn ins4-hero-btn" onclick="showInsuranceModal(event, '프리미엄')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                프리미엄 시작하기
              </button>
              <p class="ins4-note hero-note">첫 달 무료 체험 · 30일 내 전액 환불 보장</p>
            </div>

            {/* ── 패밀리 ── */}
            <div class="ins4-card ins4-family">
              <div class="ins4-family-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                가족 최대 4인
              </div>
              <div class="ins4-top">
                <div class="ins4-tier family-tier">FAMILY</div>
                <div class="ins4-name">패밀리</div>
                <div class="ins4-desc">온 가족 완전 보호</div>
                <div class="ins4-price-row">
                  <span class="ins4-price">$119</span>
                  <span class="ins4-unit">/월</span>
                </div>
                <div class="ins4-annual">연간 결제 시 <strong>$99/월</strong> — 가족 1인당 $30/월</div>
              </div>
              <hr class="ins4-divider" />
              <ul class="ins4-features">
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>프리미엄 모든 혜택 포함</li>
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>가족 <strong>최대 4인</strong> 동시 보장</li>
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>각 가족 구성원 별도 담당 변호사</li>
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>소송 대리 비용 <strong>연 $10,000 지원</strong></li>
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>이민·비자 관련 노동법 추가 지원</li>
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>연간 가족 법률 점검 (1회)</li>
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>긴급 상담 2시간 내 응답</li>
                <li class="on family-on"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>24/7 긴급 핫라인 직통 번호</li>
              </ul>
              <button class="btn btn-primary btn-full ins4-btn" onclick="showInsuranceModal(event, '패밀리')">패밀리 시작하기</button>
              <p class="ins4-note">30일 무료 · 인당 $30 수준의 가장 합리적인 선택</p>
            </div>

          </div>{/* /ins4-grid */}

          {/* 플랜 비교 한눈 요약 띠 */}
          <div class="ins-compare-strip">
            <div class="ins-compare-item">
              <div class="ins-compare-label">베이직</div>
              <div class="ins-compare-value">$19<span>/월</span></div>
              <div class="ins-compare-sub">정보 접근</div>
            </div>
            <div class="ins-compare-arrow">→</div>
            <div class="ins-compare-item">
              <div class="ins-compare-label">스탠다드</div>
              <div class="ins-compare-value">$39<span>/월</span></div>
              <div class="ins-compare-sub">전화 상담 포함</div>
            </div>
            <div class="ins-compare-arrow">→</div>
            <div class="ins-compare-item highlight">
              <div class="ins-compare-label">프리미엄 ★</div>
              <div class="ins-compare-value">$79<span>/월</span></div>
              <div class="ins-compare-sub">담당 변호사 + 소송 지원</div>
            </div>
            <div class="ins-compare-arrow">→</div>
            <div class="ins-compare-item">
              <div class="ins-compare-label">패밀리</div>
              <div class="ins-compare-value">$119<span>/월</span></div>
              <div class="ins-compare-sub">가족 4인 완전 보호</div>
            </div>
          </div>

          {/* 가입 혜택 */}
          <div class="insurance-benefits">
            <h3>모든 플랜 공통 혜택</h3>
            <div class="benefits-grid">
              <div class="benefit-item">
                <div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.89-.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <div>
                  <h4>한국어 전담 서비스</h4>
                  <p>모든 상담과 서식 작성이 한국어로 진행됩니다. 언어 장벽 없이 정확한 법률 조언을 받을 수 있습니다.</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <div>
                  <h4>이민 신분 무관 가입</h4>
                  <p>서류 미비 포함 모든 이민 신분으로 가입 가능합니다. 가입 시 이민 신분을 묻지 않습니다.</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                <div>
                  <h4>완전한 기밀 보장</h4>
                  <p>모든 상담은 변호사-의뢰인 특권(Attorney-Client Privilege)으로 엄격히 보호됩니다.</p>
                </div>
              </div>
              <div class="benefit-item">
                <div class="benefit-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <div>
                  <h4>선제적 권리 보호</h4>
                  <p>분쟁 발생 전 예방 상담으로 위험을 사전에 차단합니다. 고용계약서·급여명세서 검토 포함.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="section-cta">
        <div class="container">
          <div class="cta-box">
            <h2>오늘 첫 걸음을 내딛으세요</h2>
            <p>30일 무료 체험 · 언제든 해지 · 이민 신분 무관</p>
            <div class="cta-actions">
              <a href="#one-time" class="btn btn-gold btn-lg">후원하기</a>
              <a href="#ins-plans" class="btn btn-outline-white btn-lg">법률보험 가입</a>
            </div>
          </div>
        </div>
      </section>
    </div>,
    { title: '후원 & 법률보험 | IKLPA US' }
  )
})

export default app

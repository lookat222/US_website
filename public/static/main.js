/* ─── MAIN.JS — IKLPA US ───────────────────────────────── */

// ── Sticky Header Shadow on Scroll
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ── Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    hamburger.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav link click
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Active Nav Link Highlight
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.style.color = 'var(--accent)';
    link.style.fontWeight = '700';
  }
});

// ── FAQ Accordion
function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = btn.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-question.open').forEach(q => {
    q.classList.remove('open');
    q.closest('.faq-item').querySelector('.faq-answer').classList.remove('open');
  });

  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ── AI Chat Demo
const chatInput  = document.getElementById('chat-input');
const chatSend   = document.getElementById('chat-send');
const chatMsgs   = document.getElementById('chat-messages');

const demoAnswers = {
  default: `미국 노동법에 관한 질문을 접수했습니다. 현재 데모 모드로 운영 중입니다.\n\n구체적인 법률 조언이 필요하신 경우 <strong>신고/상담 접수</strong>를 통해 전문 상담사와 연결하시기 바랍니다.\n\n관련 정보는 <strong>미국 노동법 가이드</strong>에서도 확인할 수 있습니다.`,
  임금: `<strong>임금 체불 관련 안내</strong>\n\n미국 연방 FLSA(공정근로기준법)에 따라:\n• 주 40시간 초과 근무에는 시급의 1.5배 초과근무 수당이 지급되어야 합니다\n• 최저임금 이하 지급은 위반입니다\n• 피해 발생 시 최대 2년치(고의 위반 3년치) 미지급 임금과 동일 금액의 손해배상을 청구할 수 있습니다\n\n신고는 DOL 임금시간국 <strong>1-866-487-9243</strong>으로 하세요.`,
  해고: `<strong>부당 해고 관련 안내</strong>\n\n미국은 대부분 "임의고용(At-will)" 원칙이 적용되나, 다음의 경우 불법 해고에 해당합니다:\n• 인종·국적·성별 등 차별을 이유로 한 해고\n• EEOC 신고·OSHA 제보 등 후 보복성 해고\n• 고용계약서 또는 직원 핸드북에 명시된 절차 위반\n\nEEOC 신고 시효는 해고일로부터 <strong>180~300일</strong>입니다. 빠른 행동이 중요합니다.`,
  차별: `<strong>직장 내 차별 관련 안내</strong>\n\nTitle VII에 따라 인종·국적·성별·종교 등을 이유로 한 차별은 불법입니다. 한인 직원에 대한 국적 차별도 명백히 금지됩니다.\n\n대응 방법:\n1. 차별 사례를 날짜·장소·목격자와 함께 기록\n2. EEOC에 공식 신고(Charge of Discrimination) 제기\n3. 필요 시 EEOC의 한국어 통역 서비스 활용 (1-800-669-4000)\n\n시효: 차별 행위 후 <strong>300일 이내</strong> 신고 요망.`,
  fmla: `<strong>FMLA 가족 의료 휴가 안내</strong>\n\n직원 50인 이상 사업장에서 1년 이상 근무하고 1,250시간 이상 일한 경우:\n• 연 최대 <strong>12주 무급 휴가</strong> 사용 가능\n• 휴가 후 동일 또는 동급 직위 복귀 보장\n• 휴가 중 건강보험 유지\n\n캘리포니아·뉴욕 등은 주법으로 더 넓은 보호를 제공합니다. 자세한 내용은 노동법 가이드에서 확인하세요.`
};

function addMessage(text, isUser = false) {
  if (!chatMsgs) return;
  const div = document.createElement('div');
  div.className = `msg ${isUser ? 'msg-user' : 'msg-bot'}`;
  div.innerHTML = isUser
    ? `<div class="msg-bubble">${text}</div>`
    : `<div class="msg-avatar">K</div><div class="msg-bubble">${text.replace(/\n/g, '<br/>')}</div>`;
  chatMsgs.appendChild(div);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function getAnswer(q) {
  const lq = q.toLowerCase();
  if (lq.includes('임금') || lq.includes('월급') || lq.includes('급여') || lq.includes('초과') || lq.includes('wage')) return demoAnswers.임금;
  if (lq.includes('해고') || lq.includes('termination') || lq.includes('fired')) return demoAnswers.해고;
  if (lq.includes('차별') || lq.includes('discrimination') || lq.includes('인종')) return demoAnswers.차별;
  if (lq.includes('fmla') || lq.includes('휴가') || lq.includes('leave') || lq.includes('출산')) return demoAnswers.fmla;
  return demoAnswers.default;
}

function sendChat() {
  if (!chatInput || !chatInput.value.trim()) return;
  const question = chatInput.value.trim();
  chatInput.value = '';
  addMessage(question, true);
  setTimeout(() => {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'msg msg-bot';
    typingDiv.innerHTML = `<div class="msg-avatar">K</div><div class="msg-bubble" style="color:var(--slate-light);font-style:italic">답변을 작성 중입니다...</div>`;
    chatMsgs.appendChild(typingDiv);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
    setTimeout(() => {
      typingDiv.remove();
      addMessage(getAnswer(question));
    }, 1200);
  }, 400);
}

if (chatSend) chatSend.addEventListener('click', sendChat);
if (chatInput) {
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
  });
}

// ── Case Law Filter
function filterCases() {
  const searchVal  = (document.getElementById('caseSearch')?.value || '').toLowerCase();
  const catVal     = document.getElementById('filterCat')?.value || '';
  const stateVal   = document.getElementById('filterState')?.value || '';
  document.querySelectorAll('.case-card').forEach(card => {
    const text  = card.innerText.toLowerCase();
    const cat   = card.getAttribute('data-cat') || '';
    const state = card.getAttribute('data-state') || '';
    const matchSearch = !searchVal || text.includes(searchVal);
    const matchCat    = !catVal || cat.includes(catVal);
    const matchState  = !stateVal || state.includes(stateVal);
    card.classList.toggle('hidden', !(matchSearch && matchCat && matchState));
  });
}

// ── News Filter
function filterNews(btn, cat) {
  document.querySelectorAll('.news-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.news-full-card').forEach(card => {
    const cardCat = card.getAttribute('data-cat') || '';
    card.classList.toggle('hidden', cat !== 'all' && cardCat !== cat);
  });
}

// ── Download Notice Toast
function showDownloadNotice(e) {
  e.preventDefault();
  showToast('📄 서식 파일은 정식 서비스 출시 후 제공됩니다. 지금은 상담 접수를 이용해 주세요.');
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── Contact Form Submit
function submitForm(e) {
  e.preventDefault();
  const form    = document.getElementById('intake-form');
  const success = document.getElementById('form-success');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Smooth anchor scroll with offset for sticky header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Handle hash on page load for sub-page anchors
window.addEventListener('load', () => {
  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) {
        const offset = 88;
        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
      }
    }, 300);
  }
});

// ══════════════════════════════════════════════
//  DONATE PAGE FUNCTIONS
// ══════════════════════════════════════════════

// ── Donation Tab Switch (One-time ↔ Monthly)
function switchTab(type) {
  const btnOnetime = document.getElementById('btn-onetime');
  const btnMonthly = document.getElementById('btn-monthly');
  const amountGrid = document.getElementById('amount-grid');
  if (!btnOnetime || !btnMonthly || !amountGrid) return;

  if (type === 'onetime') {
    btnOnetime.classList.add('active');
    btnMonthly.classList.remove('active');
    amountGrid.querySelectorAll('.amount-unit').forEach(u => u.textContent = '일회성');
  } else {
    btnMonthly.classList.add('active');
    btnOnetime.classList.remove('active');
    amountGrid.querySelectorAll('.amount-unit').forEach(u => u.textContent = '/ 월');
  }
  // reset selections
  amountGrid.querySelectorAll('.amount-card').forEach(c => c.classList.remove('selected'));
  const finalAmount = document.getElementById('final-amount');
  if (finalAmount) finalAmount.value = '';
  const customAmount = document.getElementById('custom-amount');
  if (customAmount) customAmount.value = '';
}

// ── Select Donation Amount Card
function selectAmount(card, amount) {
  document.querySelectorAll('.amount-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  const customAmount = document.getElementById('custom-amount');
  if (customAmount) customAmount.value = '';
  const finalAmount = document.getElementById('final-amount');
  if (finalAmount) finalAmount.value = '$' + amount;
}

// ── Clear Selected When Custom Input
function clearSelected() {
  document.querySelectorAll('.amount-card').forEach(c => c.classList.remove('selected'));
  const customAmount = document.getElementById('custom-amount');
  const finalAmount = document.getElementById('final-amount');
  if (finalAmount && customAmount) finalAmount.value = customAmount.value ? '$' + customAmount.value : '';
}

// ── Donate Success Modal
function showDonateSuccess(e) {
  e.preventDefault();
  const finalAmount = document.getElementById('final-amount');
  const customAmount = document.getElementById('custom-amount');
  let amount = finalAmount && finalAmount.value ? finalAmount.value : '';
  if (!amount && customAmount && customAmount.value) amount = '$' + customAmount.value;
  if (!amount) amount = '$50';

  const overlay = document.getElementById('donate-success-overlay');
  if (overlay) {
    const amountEl = overlay.querySelector('.success-amount');
    if (amountEl) amountEl.textContent = amount;
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    return;
  }

  // Create modal dynamically if not in DOM
  const modal = document.createElement('div');
  modal.id = 'donate-success-overlay';
  modal.className = 'modal-overlay show';
  modal.innerHTML = `
    <div class="modal-box success-modal">
      <div class="success-icon-wrap">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </div>
      <h3>후원해 주셔서 감사합니다!</h3>
      <p class="success-amount-row">후원 금액: <strong class="success-amount">${amount}</strong></p>
      <p>영수증과 세금공제 확인서가 입력하신 이메일로 발송됩니다.<br/>IKLPA US와 함께해 주셔서 진심으로 감사드립니다.</p>
      <div class="success-badges">
        <span class="success-badge">✓ 501(c)(3) 면세 단체</span>
        <span class="success-badge">✓ 세금 공제 가능</span>
        <span class="success-badge">✓ SSL 보안 처리</span>
      </div>
      <button class="btn btn-primary" onclick="closeModal('donate-success-overlay')">확인</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal('donate-success-overlay');
  });
}

// ── Insurance Signup Modal
function showInsuranceModal(e, planName) {
  e.preventDefault();
  const modalId = 'insurance-modal';
  const existing = document.getElementById(modalId);
  if (existing) existing.remove();

  const planPrices = { '베이직': '$15/월', '스탠다드': '$39/월', '프리미엄': '$89/월' };
  const price = planPrices[planName] || '';

  const modal = document.createElement('div');
  modal.id = modalId;
  modal.className = 'modal-overlay show';
  modal.innerHTML = `
    <div class="modal-box insurance-modal-box">
      <button class="modal-close" onclick="closeModal('${modalId}')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="ins-modal-badge">${planName} 플랜 — ${price}</div>
      <h3>${planName} 법률보험 가입 신청</h3>
      <p>아래 정보를 입력하시면 담당 상담사가 24시간 내 연락드립니다.<br/>30일 무료 체험 후 자동 결제되며 언제든 해지할 수 있습니다.</p>
      <div class="ins-form">
        <div class="ins-form-row">
          <div class="ins-form-group">
            <label>성함 *</label>
            <input type="text" placeholder="홍길동" />
          </div>
          <div class="ins-form-group">
            <label>이메일 *</label>
            <input type="email" placeholder="email@example.com" />
          </div>
        </div>
        <div class="ins-form-row">
          <div class="ins-form-group">
            <label>연락처</label>
            <input type="tel" placeholder="(213) 000-0000" />
          </div>
          <div class="ins-form-group">
            <label>거주 주 (State)</label>
            <select>
              <option value="">선택하세요</option>
              <option>캘리포니아 (CA)</option>
              <option>뉴욕 (NY)</option>
              <option>텍사스 (TX)</option>
              <option>조지아 (GA)</option>
              <option>기타</option>
            </select>
          </div>
        </div>
        <div class="ins-form-group full">
          <label>추가 문의사항</label>
          <textarea rows="3" placeholder="현재 상황이나 문의 내용을 간략히 적어주세요 (선택)"></textarea>
        </div>
      </div>
      <div style="display:flex;gap:12px;margin-top:24px;">
        <button class="btn btn-secondary" style="flex:1" onclick="closeModal('${modalId}')">취소</button>
        <button class="btn btn-primary" style="flex:2" onclick="submitInsuranceForm(event, '${planName}')">가입 신청하기</button>
      </div>
      <p style="font-size:.78rem;color:var(--slate-light);text-align:center;margin-top:12px;">이민 신분 무관 · 30일 무료 체험 · SSL 보안 · 언제든 해지 가능</p>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modalId);
  });
}

// ── Insurance Form Submit
function submitInsuranceForm(e, planName) {
  e.preventDefault();
  const modal = document.getElementById('insurance-modal');
  if (modal) {
    modal.querySelector('.modal-box').innerHTML = `
      <div class="success-icon-wrap" style="background:var(--accent-light);color:var(--accent);">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
      </div>
      <h3>가입 신청이 접수되었습니다!</h3>
      <p><strong>${planName} 플랜</strong> 가입 신청을 감사합니다.<br/>한국어 전담 상담사가 24시간 내 이메일 또는 전화로 연락드립니다.<br/>30일 무료 체험 기간이 바로 시작됩니다.</p>
      <div class="success-badges" style="margin:20px 0;">
        <span class="success-badge">✓ 즉시 AI 도우미 이용 가능</span>
        <span class="success-badge">✓ 서식 무제한 다운로드</span>
      </div>
      <button class="btn btn-primary btn-full" onclick="closeModal('insurance-modal')">확인</button>
    `;
  }
}

// ── Close Modal
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 200);
  }
}

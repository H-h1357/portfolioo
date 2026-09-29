/* =========================================================
   main.js — 页面交互
   模块：项目渲染 / 滚动显现 / 导航状态 / 杂项
   依赖：data.js 中的 PROJECTS 数组
   ========================================================= */

/* ---------- 1. 项目列表渲染（数据驱动，支持扩展） ---------- */
const LAYOUTS = ['a', 'b', 'c']; // 三种杂志版式，按项目顺序循环套用

function workTemplate(p, i) {
  const layout = LAYOUTS[i % LAYOUTS.length];
  const no = String(i + 1).padStart(2, '0');
  const stack = p.stack.join(' · ');

  // 图 + 图注（B 版式的序号浮在图片左上角）
  const media = `
    <div class="work-media">
      ${layout === 'b' ? `<span class="work-index-float">${no}</span>` : ''}
      <div class="media-frame">
        <img src="${p.image}" alt="${p.title} 项目配图" loading="lazy">
      </div>
      <span class="work-caption">FIG.${no} — ${p.caption}</span>
    </div>`;

  // 信息条：序号 + 类别色块 + 时间（B 版式序号已在图上，不重复）
  const topline = `
    <div class="work-topline">
      ${layout !== 'b' ? `<span class="work-index-inline">${no}</span>` : ''}
      <span class="work-cat">${p.category}</span>
      <span class="work-time">${p.time}</span>
    </div>`;

  const body = `
    <div class="work-body">
      ${topline}
      <h3 class="work-title">${p.title}</h3>
      <p class="work-desc">${p.desc}</p>
      <p class="work-stack">${stack}</p>
    </div>`;

  if (layout === 'a') {
    // A 版式：通栏大图，标题与详情双栏排布
    return `<article class="work work--a reveal">
      ${topline}
      ${media}
      <div class="work-body">
        <h3 class="work-title">${p.title}</h3>
        <div class="work-detail">
          <p class="work-desc">${p.desc}</p>
          <p class="work-stack">${stack}</p>
        </div>
      </div>
    </article>`;
  }
  if (layout === 'b') {
    // B 版式：大图居左，文字居右
    return `<article class="work work--b reveal">${media}${body}</article>`;
  }
  // C 版式：文字居左，图片居右
  return `<article class="work work--c reveal">${body}${media}</article>`;
}

function renderWorks() {
  const list = document.getElementById('worksList');
  if (!list) return;
  list.innerHTML = PROJECTS.map(workTemplate).join('');
  const count = document.getElementById('workCount');
  if (count) count.textContent = String(PROJECTS.length).padStart(2, '0');
}

/* ---------- 2. 滚动显现 ---------- */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      io.unobserve(e.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ---------- 3. 导航：滚动态 / 区块高亮 / 移动端菜单 ---------- */
function initNav() {
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 当前区块对应的导航项高亮
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('.nav-link').forEach(link =>
        link.classList.toggle('active', link.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  ['intro', 'works', 'about', 'contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  // 移动端全屏抽屉菜单
  const btn = document.querySelector('.menu-btn');
  btn.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
    }));
}

/* ---------- 4. 主题切换（浅色 / 深色，localStorage 记忆） ---------- */
const THEME_KEY = 'jilu-theme';

function initTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const root = document.documentElement;

  const applyTheme = (theme, save) => {
    const dark = theme === 'dark';
    if (dark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    btn.setAttribute('aria-label', dark ? '切换到浅色主题' : '切换到深色主题');
    if (save) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* 忽略存储异常 */ }
    }
  };

  btn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });

  // 刷新后若恢复为深色，同步按钮标签（head 内联脚本不经过 applyTheme）
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
}

/* ---------- 5. 杂项 ---------- */
function initMisc() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

renderWorks();
initReveal();
initNav();
initTheme();
initMisc();

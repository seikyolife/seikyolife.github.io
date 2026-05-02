/* =====================================================
   common.js  ―  生協のあるくらし 共通パーツ管理
   =====================================================
   【使い方】
   新しい記事を追加するときは ARTICLES の先頭に1件追加するだけ。
   カテゴリカウントは自動計算されます。
   ===================================================== */

// -------------------------------------------------------
// 記事データ（新記事は先頭に追加してください）
// -------------------------------------------------------
const ARTICLES = [
   {
    file: "10oricon2026.html",
    title: "最新オリコンランキングを比較！パルシステム VS 生活クラブ",
    desc: "生活クラブが首都圏2年連続1位、パルシステムが光る場面は？",
    category: "hitorigoto",
    date: "2026年5月",
    badges: ["pal", "sei"],
  },
  {
    file: "9pork.html",
    title: "豚肉を比較！パルシステム VS 生活クラブ",
    desc: "どちらも国産豚肉を安心して買える産直品。でも生産者との関係性や飼料米の配合率に違いがありました。",
    category: "review",
    date: "2026年4月",
    badges: ["pal", "sei"],
  },
  {
    file: "8cost.html",
    title: "パルシステムと生活クラブの月額費用【実際いくらかかる？双子パパの家計公開】",
    desc: "生協2つ＋スーパーで月約80,000円。手数料・積立も含めたリアルな数字を公開します。",
    category: "hitorigoto",
    date: "2026年4月",
    badges: ["pal", "sei"],
  },
  {
    file: "7join-seikatsuclub.html",
    title: "生活クラブの始め方・入会方法【パルシステムとの違いも解説】",
    desc: "費用の仕組みはパルシステムより複雑。でも食材へのこだわりはピカイチ。正直にまとめました。",
    category: "hitorigoto",
    date: "2026年3月",
    badges: ["sei"],
  },
  {
    file: "6join-palsystem.html",
    title: "パルシステムの始め方・入会方法【双子パパが実際に入った手順】",
    desc: "出資金・対応エリア・お得な入会特典まで正直にまとめました。紹介コードあり。",
    category: "hitorigoto",
    date: "2026年3月",
    badges: ["pal"],
  },
  {
    file: "5wiener.html",
    title: "ウインナーを比較！パルシステム VS 生活クラブ",
    desc: "どちらも無添加の国産ポークウインナー。でも原材料は全然違う。コスパ重視かシンプルさ重視かで選んで。",
    category: "review",
    date: "2026年3月",
    badges: ["pal", "sei"],
  },
  {
    file: "4whichcoop.html",
    title: "パルシステムと生活クラブ、どちらから始めればいい？",
    desc: "両方使って数年。迷ったらパルシステムからをおすすめします。価格と種類の豊富さが決め手です。",
    category: "hitorigoto",
    date: "2026年3月",
    badges: ["pal", "sei"],
  },
  {
    file: "3both.html",
    title: "パルシステムと生活クラブを両方使う理由【双子パパの場合】",
    desc: "週2回届くから買い物の手間が減る。どちらにもお気に入りの食材がある。2つの生協を使い続ける理由を正直に書きます。",
    category: "hitorigoto",
    date: "2026年3月",
    badges: ["pal", "sei"],
  },
  {
    file: "1egg.html",
    title: "卵を比較！パルシステム VS 生活クラブ",
    desc: "味・価格・安全性をそれぞれ実際に使って正直にレビュー。どちらの卵が毎日の食卓に向いている？",
    category: "review",
    date: "2026年3月",
    badges: ["pal", "sei"],
  },
  {
    file: "2milk.html",
    title: "牛乳を比較！パルシステム VS 生活クラブ",
    desc: "味・価格・使いやすさをじっくり比較。子どもが毎日飲む牛乳だから、こだわりたいポイントをまとめました。",
    category: "review",
    date: "2026年3月",
    badges: ["pal", "sei"],
  },
];

// -------------------------------------------------------
// カテゴリ定義
// -------------------------------------------------------
const CATEGORIES = {
  review:    { label: "食べ物レビュー",   tag: "食べ物レビュー" },
  hitorigoto:{ label: "管理者のひとりごと", tag: "管理者のひとりごと" },
};

// -------------------------------------------------------
// バッジHTML生成
// -------------------------------------------------------
function badgesHtml(badges) {
  return badges.map(b => {
    if (b === "pal") return `<span class="badge badge-pal">パルシステム</span>`;
    if (b === "sei") return `<span class="badge badge-sei">生活クラブ</span>`;
    return "";
  }).join("");
}

// -------------------------------------------------------
// 矢印SVG
// -------------------------------------------------------
const ARROW_SVG = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// -------------------------------------------------------
// 記事カードHTML生成（articles / index 用）
// -------------------------------------------------------
function articleCardHtml(a) {
  return `
<a href="${a.file}" class="article-card">
  <div class="card-meta">
    <span class="tag">${CATEGORIES[a.category].tag}</span>
    <span class="date">${a.date}</span>
  </div>
  <div class="card-title">${a.title}</div>
  <div class="card-desc">${a.desc}</div>
  <div class="card-badges">${badgesHtml(a.badges)}</div>
  <div class="card-arrow">続きを読む ${ARROW_SVG}</div>
</a>`;
}

// -------------------------------------------------------
// カテゴリカード（category ページ用・矢印なし）
// -------------------------------------------------------
function categoryCardHtml(a) {
  return `
<a href="${a.file}" class="article-card">
  <div class="card-meta">
    <span class="tag">${CATEGORIES[a.category].tag}</span>
    <span class="date">${a.date}</span>
  </div>
  <div class="card-title">${a.title}</div>
  <div class="card-desc">${a.desc}</div>
  <div style="margin-top:8px">${badgesHtml(a.badges)}</div>
</a>`;
}

// -------------------------------------------------------
// カテゴリカウント計算
// -------------------------------------------------------
function countByCategory(cat) {
  return ARTICLES.filter(a => a.category === cat).length;
}

// -------------------------------------------------------
// ナビゲーション生成
// -------------------------------------------------------
function renderNav(activePage) {
  const pages = [
    { href: "index.html",    label: "ホーム" },
    { href: "articles.html", label: "記事一覧" },
    { href: "category.html", label: "カテゴリ" },
    { href: "profile.html",  label: "プロフィール" },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}"${p.href === activePage ? ' class="active"' : ''}>${p.label}</a>`
  ).join("\n      ");

  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
<div class="nav-inner">
  <a href="index.html" class="logo">生協の<span>ある</span>くらし</a>
  <nav>
    ${links}
  </nav>
</div>`;
}

// -------------------------------------------------------
// サイドバー生成
// -------------------------------------------------------
function renderSidebar(targetId) {
  const el = document.getElementById(targetId || "site-sidebar");
  if (!el) return;

  const reviewCount    = countByCategory("review");
  const hitorigotoCount = countByCategory("hitorigoto");

  // タグ一覧（記事のバッジから自動収集）
  const allTags = ["卵", "牛乳", "豚肉", "ウインナー", "パルシステム", "生活クラブ", "入会方法", "比較", "子育て"];
  const tagLinks = allTags.map(t => `<a href="#">${t}</a>`).join("");

  el.innerHTML = `
<div class="sidebar-card">
  <div class="section-label" style="font-size:11px; margin-bottom:1rem;">プロフィール</div>
  <div class="profile-head">
    <img src="profile-photo.avif" alt="管理人" style="width:46px;height:46px;border-radius:50%;object-fit:cover;flex-shrink:0;">
    <div>
      <div class="profile-name">管理人</div>
      <div class="profile-role">30代・双子パパ・会社員</div>
    </div>
  </div>
  <p class="profile-bio">パルシステムと生活クラブを両方使いながら、本当に使える食材を探してレポートしています。</p>
</div>
<div class="sidebar-card">
  <div class="section-label" style="font-size:11px; margin-bottom:1rem;">カテゴリ</div>
  <ul class="cat-list">
    <li><a href="category.html">食べ物レビュー <span class="cat-count">${reviewCount}</span></a></li>
    <li><a href="category.html">管理者のひとりごと <span class="cat-count">${hitorigotoCount}</span></a></li>
  </ul>
</div>
<div class="sidebar-card">
  <div class="section-label" style="font-size:11px; margin-bottom:1rem;">タグ</div>
  <div class="tag-cloud">${tagLinks}</div>
</div>`;
}

// -------------------------------------------------------
// フッター生成
// -------------------------------------------------------
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
<div class="footer-inner">
  <div class="footer-logo">生協の<span>ある</span>くらし</div>
  <div class="footer-copy">© 2026 生協のあるくらし</div>
</div>`;
}

/* =========================
   PORTFOLIO CONFIG DATA
========================= */

/*
  포트폴리오 데이터 수정 파일
  - 작품 추가/삭제/텍스트 수정은 여기서만 수정하면 됩니다.
  - image 경로는 images 폴더 안 파일명으로 연결하세요.
*/
window.PORTFOLIO_DATA = {
  siteTitle: 'PORTFOLIO',
  works: [
    {
  id: 'sa-the-chamber',
  title: 'THE CHAMBER',
  category: 'branding, work',
  year: '2026',
  image: 'images/2/the chamber-3.jpg',
  client: '서울옥션',
  direction: 'THE CHAMBER 멤버십 브랜드 경험을 확장하는 키트 및 패키지 디자인',
  design: '서울옥션 디자인팀',
  field: '브랜드 아이덴티티, 멤버십 키트, 패키지, 그래픽 디자인',
  description: 'THE CHAMBER 멤버십 브랜드 아이덴티티를 기반으로 키트와 패키지 그래픽을 전개한 디자인 작업입니다.',
  detailImages: [
    'images/2/the chamber-1.jpg',
    'images/2/the chamber-2.jpg',
    'images/2/the chamber-3.jpg',
    'images/2/the chamber-4.jpg',
    'images/2/the chamber-5.jpg'
  ]
},
    {
      id: 'sa-MOOI-POPUP',
      title: 'MOOI-POPUP',
      category: 'exhibition, work',
      year: '2026',
      image: 'images/2/sa-mooi-3.jpg',
      direction: 'Design Team',
      design: '서울옥션 디자인팀',
      field: '포스터, 배너, 홍보물,',
      description: '팝업 행사 컨셉과 브랜드 분위기를 전달하기 위한 홍보물 및 현장 그래픽 작업',
      detailImages: ['images/2/sa-mooi-3.jpg', 'images/2/sa-mooi-4.jpg', 'images/2/sa-mooi-5.jpg']
    },
    {
      id: 'sa-Collecting',
      title: '서울옥션과 함께하는 컬렉팅의 첫걸음',
      category: 'graphic design, work',
      year: '2026',
      image: 'images/2/sa-collecting-1-1.jpg',
      design: '서울옥션 디자인팀',
      field: '모바일 초대장, 온라인 배너, SNS 콘텐츠',
      description: '컬렉팅 입문 콘텐츠의 메시지를 직관적으로 전달하기 위한 온라인 홍보 및 모바일 콘텐츠 디자인 작업',
      detailImages: ['images/2/sa-collecting-1.jpg']
    },
    {
      id: 'cheongpung',
      title: '33회 부산드림베이비페어',
      category: 'exhibition, work',
      year: '2023',
      image: 'images/1/2025_pf_3.jpg',
      client: '(주)앤유',
      direction: 'Design Team',
      design: '손영실',
      field: '포스터, 초대권, 웹배너, 상세페이지, 현장디자인 등',
      description: '음악의 리듬감과 전통적 이미지를 현대적인 그래픽으로 풀어낸 작업입니다.',
      detailImages: ['images/1/2025_pf_3.jpg', 'images/1/2025_pf_3-1.jpg', 'images/1/2025_pf_3-2.jpg', 'images/1/2025_pf_3-3.jpg', 'images/1/2025_pf_3-4.jpg']
    },
    {
      id: 'finance-story',
      title: '34회 부산베이비페어&유아교육용품전',
      category: 'exhibition, work',
      year: '2023',
      image: 'images/1/2025_pf_4.jpg',
      client: '(주)앤유)',
      direction: 'Design Team',
      design: 'Designer',
      field: '포스터, 안내 그래픽',
      description: '어린이 관람객이 쉽게 이해할 수 있도록 밝은 일러스트 중심으로 구성한 작업입니다.',
      detailImages: ['images/1/2025_pf_4.jpg', 'images/1/2025_pf_4-1.jpg', 'images/1/2025_pf_4-2.jpg']
    }
  ],
  projects: [
    {
      id: 'project-01',
      title: 'Personal Project 01',
      category: 'project',
      year: '2026',
      image: 'images/sample-project-01.svg',
      client: 'Personal',
      direction: 'Self Direction',
      design: 'Self Design',
      field: '브랜딩, 그래픽',
      description: '개인 프로젝트 설명을 입력하는 영역입니다.',
      detailImages: ['images/sample-project-01.svg']
    }
  ],
  inform: {
    aboutTitle: 'About Hongdan',
    about: '홍단은 보기 좋은 것을 넘어 본질을 바라보고, 내용을 충실하게 담아 내고자 합니다. 공연 예술분야, 미술 전시분야, 기업 아이덴티티와 홍보, 잡지 출판 분야에 걸친 그래픽 비주얼 작업들로 대중들과 만나고 있습니다. 이곳에 본인 소개 문구 또는 포트폴리오 소개 문구를 입력하면 됩니다.',
    designTeam: ['Ban Yunjung | Art Director', 'Oh Hyuntaek | Designer', 'Seo Kanghyeon | Designer'],
    partner: ['Seong Hayoung | Editor', 'Lee Eunsook | Photographer'],
    management: ['Kim Seil | General Manager'],
    contact: ['Tel. 02-765-9987', 'Fax. 02-765-9986', 'Mail. hongdan201@naver.com'],
    location: ['경기 고양시 덕양구 으뜸로 8', '덕은아이에스비즈타워센트럴 1차 2110호', '(10542)'],
    web: ['Hongdan201', 'Instagram']
  }
};



/* =========================
   PORTFOLIO APP SCRIPT
========================= */

const data = window.PORTFOLIO_DATA;
const app = document.getElementById('app');

function itemsByType(type) {
  if (type === 'project') return data.projects;
  return data.works;
}

function findItem(id) {
  return [...data.works, ...data.projects].find(item => item.id === id);
}

function renderHome(type = 'work') {
  const items = itemsByType(type);
  app.innerHTML = `
    <section class="grid-page">
      ${items.map(item => `
        <article class="work-card">
          <a href="#/detail/${item.id}" class="thumb-wrap">
            <img src="${item.image}" alt="${item.title}" class="thumb" />
          </a>
          <div class="work-meta">
            <h2>${item.title}</h2>
            <p>${item.category}</p>
            <p>${item.year}</p>
          </div>
        </article>
      `).join('')}
    </section>
  `;
}

function renderDetail(id) {
  const item = findItem(id);
  if (!item) {
    app.innerHTML = '<section class="empty">작품 정보를 찾을 수 없습니다.</section>';
    return;
  }

  app.innerHTML = `
    <section class="detail-page">
      <aside class="detail-title">
        <h1>${item.title}</h1>
        <p class="sub">${item.category}</p>
      </aside>

      <div class="detail-images">
        ${item.detailImages.map(src => `<img src="${src}" alt="${item.title}" />`).join('')}
      </div>

      <aside class="detail-info">
        <dl>
          <div><dt>Client.</dt><dd>${item.client}</dd></div>
          <div><dt>Direction.</dt><dd>${item.direction || ''}</dd></div>
          <div><dt>Design.</dt><dd>${item.design}</dd></div>
          <div><dt>Field.</dt><dd>${item.field}</dd></div>
        </dl>
        <p class="description">${item.description}</p>
      </aside>
    </section>
  `;
}

function listBlock(title, arr) {
  return `<section><h3>${title}</h3>${arr.map(v => `<p>${v}</p>`).join('')}</section>`;
}

function renderInform() {
  const info = data.inform;
  app.innerHTML = `
    <section class="inform-page">
      <h1>Inform</h1>
      <div class="inform-grid">
        <section class="about">
          <h3>${info.aboutTitle}</h3>
          <p>${info.about}</p>
        </section>
        <section class="people">
          ${listBlock('Design Team', info.designTeam)}
          ${listBlock('Professional Partner', info.partner)}
          ${listBlock('Management', info.management)}
        </section>
        <section class="contact">
          ${listBlock('Contact', info.contact)}
          ${listBlock('Location', info.location)}
          ${listBlock('Web/SNS', info.web)}
        </section>
      </div>
      <h2>Clients</h2>
      <div class="client-table">
        <div>Public Institution</div>
        <div>Corporation Identity</div>
        <div>Music Performing</div>
        <div>Art Exhibition</div>
        <div>Books Magazine</div>
      </div>
    </section>
  `;
}

function router() {
  const hash = location.hash || '#/';
  const parts = hash.replace('#/', '').split('/');

  document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));

  if (parts[0] === 'project') {
    document.querySelector('.nav a[href="#/project"]').classList.add('active');
    renderHome('project');
  } else if (parts[0] === 'inform') {
    document.querySelector('.nav a[href="#/inform"]').classList.add('active');
    renderInform();
  } else if (parts[0] === 'detail') {
    renderDetail(parts[1]);
  } else {
    document.querySelector('.nav a[href="#/work"]').classList.add('active');
    renderHome('work');
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);


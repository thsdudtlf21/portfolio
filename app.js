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
      id: 'ijaram-jakchang',
      title: '이자람 판소리 시리즈 <작창 2007/2015>',
      category: 'music/performance, work',
      year: '2026',
      image: 'images/sample-work-01.svg',
      client: '마포문화재단',
      direction: '반윤정',
      design: '서강현',
      field: '포스터, 웹배너, 상세페이지 등',
      description: '공연의 성격과 시각적 분위기를 전달하기 위한 포스터 중심의 그래픽 작업입니다.',
      detailImages: ['images/sample-work-01.svg', 'images/sample-detail-01.svg']
    },
    {
      id: 'silro-winter',
      title: '김수연 손뜨개 展 <실로 엮은 겨울>',
      category: 'art/exhibition, work',
      year: '2025',
      image: 'images/sample-work-02.svg',
      client: '개인전',
      direction: 'Design Team',
      design: 'Designer',
      field: '포스터, 홍보물, 전시 그래픽',
      description: '전시의 소재감과 계절감을 밝은 색감과 패턴으로 구성한 작업입니다.',
      detailImages: ['images/sample-work-02.svg']
    },
    {
      id: 'cheongpung',
      title: '국립극장 국립국악관현악단 <청풍국악>',
      category: 'music/performance, work',
      year: '2025',
      image: 'images/sample-work-03.svg',
      client: '국립극장',
      direction: 'Design Team',
      design: 'Designer',
      field: '포스터, 웹 홍보물',
      description: '음악의 리듬감과 전통적 이미지를 현대적인 그래픽으로 풀어낸 작업입니다.',
      detailImages: ['images/sample-work-03.svg']
    },
    {
      id: 'finance-story',
      title: '광주은행 금융박물관 <똑똑쏙쏙 금융스토리>',
      category: 'corporation, work',
      year: '2025',
      image: 'images/sample-work-04.svg',
      client: '광주은행 금융박물관',
      direction: 'Design Team',
      design: 'Designer',
      field: '포스터, 안내 그래픽',
      description: '어린이 관람객이 쉽게 이해할 수 있도록 밝은 일러스트 중심으로 구성한 작업입니다.',
      detailImages: ['images/sample-work-04.svg']
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
      <div class="detail-images">
        ${item.detailImages.map(src => `<img src="${src}" alt="${item.title}" />`).join('')}
      </div>
      <aside class="detail-info">
        <h1>${item.title}</h1>
        <p class="sub">${item.category}</p>
        <dl>
          <div><dt>Client.</dt><dd>${item.client}</dd></div>
          <div><dt>Direction.</dt><dd>${item.direction}</dd></div>
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


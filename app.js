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

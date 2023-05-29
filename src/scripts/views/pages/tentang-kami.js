const AboutUs = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">About Us</h2>
        <div class="list-dev">
          <div id="listdev"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const listDev = document.querySelector('#listdev');

    const developers = [
      { name: 'John Doe', position: 'Front-end Developer', image: './images/logo.png' },
      { name: 'Jane Smith', position: 'Back-end Developer', image: './images/logo.png' },
      { name: 'Alex Johnson', position: 'UI/UX Designer', image: './images/logo.png' },
      { name: 'Alex Johnson 2', position: 'UI/UX Designer', image: './images/logo.png' },
    ];

    developers.forEach((developer) => {
      const card = document.createElement('div');
      card.classList.add('developer-card');
      card.innerHTML = `
        <div class="developer-card__image">
          <img src="${developer.image}" alt="${developer.name}">
        </div>
        <div class="developer-card__content">
          <h3>${developer.name}</h3>
          <p>${developer.position}</p>
        </div>
      `;
      listDev.appendChild(card);
    });
  },
};

export default AboutUs;

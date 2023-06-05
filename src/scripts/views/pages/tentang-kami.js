const createDeveloperItemTemplate = (developer) => `
  <div class="dev-item">
    <div class="dev-item__header">
      <img class="dev-item__header__poster" src="${developer.photo}" alt="${developer.name}">
      <div class="dev-item__header__rating">
        <p>⭐️<span class="dev-item__header__rating__score">${developer.skills}</span></p>
      </div>
    </div>
    <div class="dev-item__content">
      <h3>${developer.name}</h3>
    </div>
  </div>
`;

const AboutUs = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">About Us</h2>
        <div id="devs" class="devs">
          ${this.generateDeveloperItems()}
        </div>  
      </div>
    `;
  },

  async afterRender() {
    // Tidak ada fitur pencarian
  },

  generateDeveloperItems() {
    const developers = [
      { name: 'Developer 1', photo: './images/logo.png', skills: 'Frontend' },
      { name: 'Developer 2', photo: './images/logo.png', skills: 'Backend' },
      { name: 'Developer 3', photo: './images/logo.png', skills: 'Full Stack' },
      { name: 'Developer 3', photo: './images/logo.png', skills: 'Full Stack' },
    ];

    let developerItems = '';
    developers.forEach((developer) => {
      developerItems += createDeveloperItemTemplate(developer);
    });

    return developerItems;
  },
};

export default AboutUs;

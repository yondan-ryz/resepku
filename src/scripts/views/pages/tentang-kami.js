const createDeveloperItemTemplate = (developer) => `
  <div class="dev-item">
    <div class="dev-item__header">
      <img class="dev-item__header__poster" src="${developer.photo}" alt="${developer.name}">
    </div>
    <div class="dev-item__content">
      <h3 style="text-align: center">${developer.name}</h3>
    </div>
  </div>
`;

const AboutUs = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">About Us</h2>
            <div class="hr-footer"></div>
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
      { name: 'Yonathan Dani Kristiawan', photo: './images/logo.png', skills: 'Developer' },
      { name: 'Katralin', photo: './images/logo.png', skills: 'Developer' },
      { name: 'Abdul Majid Musthofa', photo: './images/logo.png', skills: 'Developer' },
      { name: 'Natan Enggal Swasono', photo: './images/logo.png', skills: 'Developer' },
    ];

    let developerItems = '';
    developers.forEach((developer) => {
      developerItems += createDeveloperItemTemplate(developer);
    });

    return developerItems;
  },
};

export default AboutUs;

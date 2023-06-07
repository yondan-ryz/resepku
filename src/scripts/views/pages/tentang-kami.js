const createDeveloperItemTemplate = (developer) => `
  <div class="dev-item">
    <div class="dev-item__header">
      <img class="dev-item__header__poster" src="${developer.photo}" alt="${developer.name}">
    </div>
    <div class="dev-item__content">
      <h3 style="text-align: center">${developer.name}</h3>
      <div class="hr-line"></div>
      <p>${developer.university}</p>
    </div>
  </div>
`;

const AboutUs = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">About Us</h2>
            <div class="hr-thin"></div>
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
      { name: 'Yonathan Dani Kristiawan', photo: './images/dev/yonathan.png', university: 'Universitas Kristen Immanuel' },
      { name: 'Katralin', photo: './images/dev/yonathan.png', university: 'Developer' },
      { name: 'Abdul Majid Musthofa', photo: './images/dev/yonathan.png', university: 'Developer' },
      { name: 'Natan Enggal Swasono', photo: './images/dev/yonathan.png', university: 'Universitas Kristen Immanuel' },
    ];

    let developerItems = '';
    developers.forEach((developer) => {
      developerItems += createDeveloperItemTemplate(developer);
    });

    return developerItems;
  },
};

export default AboutUs;

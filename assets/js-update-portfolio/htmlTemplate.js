const htmlTemplate = ({
  name,
  motto, 
  aboutMe,
  emailAddress,
  phoneNumber, //might have to adjust mailto format to <a href="tel:+1(201)934-7068">${phoneNumber}</a>
  gitHubUserName,
  projects,
  linkedInURL,
}) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Notable&family=Nunito+Sans:ital,wght@1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
  
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,200"
      />
      <link rel="stylesheet" href="./assets/css/normalize.css" />
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>Calla Portfolio</title>
      <link
        rel="shortcut icon"
        type="image/jpg"
        href="./assets/images/flavicon-shark.jpeg"
      />
    </head>
    <body>
      <header>
        <div class="material-symbols-outlined hamburger-menu" id="hamburger-menu">
          menu
        </div>
        <h1 class="name">${name}</h1>
        <nav id="nav-menu">
          <a href="#about-me-section" title="About me">ABOUT ME</a>
          <a href="#portfolio-section" tile="My portfolio">PORTFOLIO</a>
          <a href="#contact-me-section" tile="Contact me">CONTACT ME</a>
          <a
            href="./assets/images/steve_calla_resume_081722.pdf"
            download
            target="_blank"
            tile="Resume"
            >RESUME</a
          >
        </nav>
      </header>
  
      <section class="sub-header-wrapper">
        <div class="photo-container">
          <img
            src="./assets/images/3-calla-photo-cropped.png"
            alt="${name}"
          />
        </div>
        <h2 class="subtitle">${motto}</h2>
      </section>
  
      <main>
        <section class="about-me-container" id="about-me-section">
          <aside>
            <h1>About Me</h1>
          </aside>
          <article class="about-me-description">
            <p>${aboutMe}</p>
          </article>
        </section>
  
        <section class="work-container" id="portfolio-section">
          <aside class="work-aside">
            <h1>Work</h1>
          </aside>
          <article class="portfolio-container">${projects}
          </article>
        </section>
      </main>
  
      <footer id="contact-me-section">
        <aside>
          <h1>Contact Me</h1>
        </aside>
        <nav>
          <a href="mailto:${emailAddress}">Email Steve</a>
          <a href="tel:+1${phoneNumber}">${phoneNumber}</a>
          <a href="https://github.com/${gitHubUserName}" target="_blank" tile="Github"
            >Github</a
          >
        </nav>
      </footer>
  
      <script type="text/javascript" src="./assets/js/script.js"></script>
    </body>
  </html>
`;

module.exports = {
  htmlTemplate,
};
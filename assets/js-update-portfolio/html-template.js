const htmlTemplate = ({
  name,
  motto,
  aboutMe,
  email,
  phone,
  github,
  linkedin,
  portfolio,
  TBD1,
  TBD2,
  TBD3,
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
        <h1 class="name">Steve Calla</h1>
        <nav id="nav-menu">
          <a href="#about-me-section" title="About me">ABOUT ME</a>
          <a href="#portfolio-section" tile="My portfolio">PORTFOLIO</a>
          <a href="#contact-me-section" tile="Contact me">CONTACT ME</a>
          <a
            href="./assets/images/steve_calla_resume_010822v1.pdf"
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
            alt="Steve Calla"
          />
        </div>
        <h2 class="subtitle">SEIZE THE DAY</h2>
      </section>
  
      <main>
        <section class="about-me-container" id="about-me-section">
          <aside>
            <h1>About Me</h1>
          </aside>
          <article class="about-me-description">
            <p>
              What can I say? I live in Boulder, Colorado. I'm currently studying
              full-stack coding at Denver Unversity and expect to graduate in
              December 2022. I'm have an extensive marketing background, and have
              managed marketing analytics as well as e-commerce in a variety of
              industries. I am super curious to learn the coding trade and
              incorporate that into my marketing career in some fashion. I'm
              particularly facinated by how much fun it is to solve coding puzzles
              (across the universe of HTML, CSS and Javascript) and to make the
              user experience effective and accessible.
            </p>
          </article>
        </section>
  
        <section class="work-container" id="portfolio-section">
          <aside class="work-aside">
            <h1>Work</h1>
          </aside>
          <article class="portfolio-container">
            <div class="project project-one">
              <a
                class="multiple-images"
                href="https://stevecalla.github.io/not_wordle_v1/"
                target="_blank"
                title="A Wordle Clone"
              >
                <img
                  src="./assets/images/wordguess_white.png"
                  alt="Word Guess"
                  loading="lazy"
                />
                <img
                  src="./assets/images/wordguess_black.png"
                  alt="Bessie the Dog"
                  loading="lazy"
                />
                <img
                  src="./assets/images/wordguess_menu.png"
                  alt="Bessie the Dog"
                  loading="lazy"
                />
                <div class="titles">
                  <p>Wordguess</p>
                  <p>A Wordle Clone</p>
                </div>
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/bessie-the-dog/"
                target="_blank"
                title="Bessie the Dog Photos"
              >
                <img
                  src="./assets/images/bessie_the_dog_app.png"
                  alt="Bessie the Dog"
                  loading="lazy"
                />
                <div class="titles">
                  <p>Bessie the Dog</p>
                  <p>Dog's Life</p>
                </div>
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/tictactoe/"
                target="_blank"
                title="Tic Tac Toe"
              >
                <img
                  src="./assets/images/tic-tac-toe.png"
                  alt="Tic Tac Toe"
                  loading="lazy"
                />
                <div class="titles">
                  <p>Tic Tac Toe</p>
                  <p>Play Now</p>
                </div>
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/css-cheatsheet/"
                target="_blank"
                title="CSS Cheatsheet"
              >
                <img
                  src="./assets/images/css_cheatsheet.png"
                  alt="CSS Cheatsheet"
                  loading="lazy"
                />
                <div class="titles">
                  <p>CSS</p>
                  <p>A Cheatsheet</p>
                </div>
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/MOD2_Static_Comp/"
                target="_blank"
                title="Coming Soon"
              >
                <img
                  src="./assets/images/marvel_characters.png"
                  alt="CSS Cheatsheet"
                  loading="lazy"
                />
                <div class="titles">
                  <p>Marvel Characters</p>
                  <p>Which is Your Favorite</p>
                </div>
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/generate-password/"
                target="_blank"
                title="Password Generator"
              >
                <img
                  src="./assets/images/password-generator.png"
                  alt="Password Generator"
                  loading="lazy"
                />
                <div class="titles">
                  <p>Password Generator</p>
                  <p>Get A Random Password</p>
                </div>
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/rock-paper-scissors/"
                target="_blank"
                title="Coming Soon"
              >
                <div class="titles">
                  <p>Rock Paper Scissors</p>
                  <p>Wanna Play the Computer</p>
                </div>
                <img
                  src="./assets/images/rock-paper-scissors.png"
                  alt="Rock Paper Scissors Game"
                  loading="lazy"
                />
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/web-quiz/"
                target="_blank"
                title="Web Quiz"
              >
                <div class="titles">
                  <p>Web Quiz</p>
                  <p>Test Yourself!!</p>
                </div>
                <img
                  src="./assets/images/web-quiz.png"
                  alt="Web Quiz"
                  loading="lazy"
                />
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/day-planner/"
                target="_blank"
                title="Day Planner"
              >
                <div class="titles">
                  <p>Day Planner</p>
                  <p>jQuery, Bootstap, Moment & More</p>
                </div>
                <img
                  src="./assets/images/day-planner.png"
                  alt="Day Planner"
                  loading="lazy"
                />
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/weather-dashboard/"
                target="_blank"
                title="Weather Dashboard"
              >
                <div class="titles">
                  <p>Weather Dashboard</p>
                  <p>jQuery, Bootstap, Moment, APIs & More</p>
                </div>
                <img
                  src="./assets/images/weather-dashboard.png"
                  alt="Day Planner"
                  loading="lazy"
                />
              </a>
            </div>
            <div class="project">
              <a
                href="https://stevecalla.github.io/ski-planner/"
                target="_blank"
                title="Ski Planner"
              >
                <div class="titles">
                  <p>Ski Planner</p>
                  <p>APIs, Bluma, Maps, Autocomplete & More</p>
                </div>
                <img
                  src="./assets/images/ski-planner.png"
                  alt="Ski Planner"
                  loading="lazy"
                />
              </a>
            </div>
            <div class="project">
              <a href="#" target="" title="Coming Soon #3">
                <div class="titles">
                  <p>Coming Soon</p>
                  <p>TBD</p>
                </div>
              </a>
            </div>
          </article>
        </section>
      </main>
  
      <footer id="contact-me-section">
        <aside>
          <h1>Contact Me</h1>
        </aside>
        <nav>
          <a href="mailto:callasteven@gmail.com">Email Steve</a>
          <a href="tel:+1(201)934-7068">201-934-7068</a>
          <a href="https://github.com/stevecalla" target="_blank" tile="Github"
            >Github</a
          >
        </nav>
      </footer>
  
      <script type="text/javascript" src="./assets/js/script.js"></script>
    </body>
  </html>
`;

module.exports = {
  readmeTemplate,
};

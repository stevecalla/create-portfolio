const newProject = ({
  projectWebsiteURL,
  projectWebsiteTitle, 
  projectImage,
  projectImageALTTag,
  projectTitle,
  projectSubTitle,
}) => `
          <div class="project">
            <a
              href="${projectWebsiteURL}"
              target="_blank"
              title="${projectWebsiteTitle}"
            >
              <img
                src="${projectImage}"
                alt="${projectImageALTTag}"
                loading="lazy"
              />
              <div class="titles">
                <p>${projectTitle}</p>
                <p>${projectSubTitle}</p> 
              </div>
            </a>
          </div>
    `;

module.exports = {
  newProject,
};
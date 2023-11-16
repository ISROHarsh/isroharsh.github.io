fetch("https://gh-pinned-repos-api.ysnirix.xyz/api/get?username=ISROHarsh")
  .then((response) => response.json())
  .then((data) => {
    data.response.forEach((repo) => {
      document.getElementsByClassName("projects")[0].innerHTML += `
                <div class="project">
                    <div class="project-title">
                        <a href="${repo.repo}">${repo.name}</a>
                    </div>
                    <div class="project-description">
                        ${repo.description}
                    </div>
                    <div class="project-language">
                        <div class="project-language-color" style="background-color: ${repo.language.color}"></div>
                        <div class="project-language-name">${repo.language.name}</div>
                    </div>
                </div>
            `;
    });
  });
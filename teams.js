(function () {
    'use strict';

    const headers = new Headers();
    headers.append('X-Auth-Token', 'f113f557ce2a428e8a46dc9e659212f8');
    document.getElementById('refresh-button').addEventListener('click', getTeams)

    function getTeams() {
        fetch('https://api.football-data.org/v2/teams', {
            method: 'GET',
            headers: headers
        })
            .then(res => res.json())
            .then(responseJSON => {
                function generateHTML(team) {
                    return `<div class="team__card">

                      <a class="team__link" href="matches.html?id=${team.id}">
                        <img class="team__logo" alt="${team.name}" src="${team.crestUrl}" />
                        <p>${team.name}</p>
                      </a>
                    </div>`;
                }

                const root = document.querySelector(".teams");
                responseJSON.teams.forEach((team) => {
                    root.innerHTML += generateHTML(team);
                });
            })
            .catch(alert);
    }

    getTeams();

})();
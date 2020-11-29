(function () {
    const params = new URLSearchParams(location.search);
    const teamId = params.get('id');

    function fetchTeamDetails() {
        const headers = new Headers();
        headers.append('X-Auth-Token', 'f113f557ce2a428e8a46dc9e659212f8');

        return fetch(`https://api.football-data.org/v2/teams/${teamId}`, {
                method: 'GET',
                headers: headers
            }
        ).then(res => res.json())
    }

    function fetchTeamMatches() {
        const headers = new Headers();
        headers.append('X-Auth-Token', 'f113f557ce2a428e8a46dc9e659212f8');

        return fetch(`https://api.football-data.org/v2/teams/${teamId}/matches?status=SCHEDULED,LIVE,IN_PLAY,PAUSED,POSTPONED,SUSPENDED `, {
                method: 'GET',
                headers: headers
            }
        ).then(res => res.json())
    }

    function generateHTML(match) {
        return `<tr class="nextMatches nextMatches_border">
                       <td class="nextMatches_border">Date: ${new Date(match.utcDate).toLocaleString()}</td>
                       <td class="nextMatches_border">Home: <a href="matches.html?id=${match.homeTeam.id}">${match.homeTeam.name}</a></td>
                       <td class="nextMatches_border">Away: <a href="matches.html?id=${match.awayTeam.id}">${match.awayTeam.name}</a></td>
                    </tr class="nextMatches_border">`;
    }

    function setTeamInfo(info) {
        document.getElementById('team_name').innerText = info.name;
        document.getElementById('team_shortName').innerText = info.shortName || "N/A";
        document.getElementById('team_tla').innerText = info.tla || "N/A";
        document.getElementById('team_crestUrl').src = info.crestUrl || "N/A";
        document.getElementById('team_address').innerText = info.address || "N/A";
        document.getElementById('team_phone').innerText = info.phone || "N/A";
        document.getElementById('team_phone').href = "tel:" + info.phone || "N/A";
        document.getElementById('team_website').href = info.website || "N/A";
        document.getElementById('team_email').href = "mailto:" + info.email || "N/A";
        document.getElementById('team_email').innerText = info.email || "N/A";
        document.getElementById('team_founded').innerText = info.founded || "N/A";
        document.getElementById('team_clubColors').innerText = info.clubColors || "N/A";
    }

    function setMatchesInfo(info) {
        const root = document.querySelector(".nextMatches");

        info.matches.forEach((match) => {
            root.innerHTML += generateHTML(match);
        });
    }

    fetchTeamDetails()
        .then(setTeamInfo)
        .catch(err => {
            document.getElementById('err').innerText = "Failed to load :( " + err;
            document.getElementById('err').classList.toggle("error_active");
        })
        .finally(() => {
            document.getElementById('loading').classList.toggle("loading_disabled")
        });

    fetchTeamMatches().then(setMatchesInfo)
})();
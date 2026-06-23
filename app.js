const PARTICIPANTS = {
  "Sandile Duba": ["Portugal", "Ecuador", "Belgium", "Saudi Arabia", "Jordan", "Czechia"],
  Dofa: ["Scotland", "Senegal", "Spain", "Paraguay", "Egypt", "Switzerland"],
  Phillip: ["Morocco", "USA", "Netherlands", "Curaçao", "Panama", "Austria"],
  Kekesto: ["Argentina", "IR Iran", "South Africa", "Tunisia", "Cape Verde", "Croatia"],
  Latita: ["Australia", "France", "Canada", "New Zealand", "DR Congo", "Sweden"],
  Lwandle: ["Ghana", "Korea Republic", "Brazil", "Uruguay", "Ivory Coast", "Uzbekistan"],
  Sechaba: ["Colombia", "Germany", "Norway", "Algeria", "Türkiye", "Qatar"],
  Thato: ["Mexico", "England", "Bosnia and Herzegovina", "Haiti", "Japan", "Iraq"],
};

const TEAM_GROUPS = {
  Mexico: "A", "South Africa": "A", "Korea Republic": "A", Czechia: "A",
  Canada: "B", "Bosnia and Herzegovina": "B", Qatar: "B", Switzerland: "B",
  Brazil: "C", Morocco: "C", Scotland: "C", Haiti: "C",
  USA: "D", Paraguay: "D", Türkiye: "D", Australia: "D",
  Germany: "E", Ecuador: "E", "Ivory Coast": "E", "Curaçao": "E",
  Netherlands: "F", Japan: "F", Sweden: "F", Tunisia: "F",
  Belgium: "G", "IR Iran": "G", Egypt: "G", "New Zealand": "G",
  Spain: "H", Uruguay: "H", "Saudi Arabia": "H", "Cape Verde": "H",
  France: "I", Senegal: "I", Norway: "I", Iraq: "I",
  Argentina: "J", Austria: "J", Algeria: "J", Jordan: "J",
  Portugal: "K", Colombia: "K", "DR Congo": "K", Uzbekistan: "K",
  England: "L", Croatia: "L", Ghana: "L", Panama: "L",
};

const TEAM_ALIASES = {
  "Korea Republic": ["South Korea", "Korea Republic", "KOR"],
  "IR Iran": ["Iran", "IR Iran", "IRN"],
  Türkiye: ["Turkiye", "Türkiye", "Turkey", "TUR"],
  USA: ["USA", "United States", "USMNT", "United States of America"],
  Czechia: ["Czechia", "Czech Republic", "CZE"],
  "DR Congo": ["DR Congo", "Congo DR", "Democratic Republic of the Congo", "Democratic Republic of Congo"],
  "Curaçao": ["Curaçao", "Curacao", "Cura\u00e7ao"],
  "Bosnia and Herzegovina": ["Bosnia and Herzegovina", "Bosnia & Herz.", "Bosnia & Herzegovina"],
  "Ivory Coast": ["Ivory Coast", "Côte d'Ivoire", "Cote d'Ivoire"],
  "Cape Verde": ["Cape Verde", "Cabo Verde"],
};

const FLAG_CODES = {
  Portugal: "pt", Ecuador: "ec", Belgium: "be", Scotland: "gb-sct", Morocco: "ma",
  Spain: "es", Senegal: "sn", USA: "us", Netherlands: "nl", Argentina: "ar",
  "IR Iran": "ir", "South Africa": "za", Türkiye: "tr", France: "fr", Canada: "ca",
  Ghana: "gh", "Korea Republic": "kr", Brazil: "br", Colombia: "co", Germany: "de",
  Norway: "no", Mexico: "mx", England: "gb-eng", Qatar: "qa",
  Czechia: "cz", Switzerland: "ch", Paraguay: "py", Australia: "au", Haiti: "ht",
  Japan: "jp", Sweden: "se", Tunisia: "tn", Egypt: "eg", "New Zealand": "nz",
  Uruguay: "uy", "Saudi Arabia": "sa", Iraq: "iq", Algeria: "dz", Austria: "at",
  Jordan: "jo", Uzbekistan: "uz", Croatia: "hr", Panama: "pa",
  "Bosnia and Herzegovina": "ba", "Ivory Coast": "ci", "Curaçao": "cw",
  "Cape Verde": "cv", "DR Congo": "cd",
};

const FALLBACK_FIXTURES = [
  { group: "A", date: "2026-06-11", time: "19:00", home: "Mexico", away: "South Africa", homeScore: 2, awayScore: 0, status: "FT" },
  { group: "A", date: "2026-06-11", time: "22:00", home: "Korea Republic", away: "Czechia", homeScore: 2, awayScore: 1, status: "FT" },
  { group: "B", date: "2026-06-12", time: "15:00", home: "Canada", away: "Bosnia and Herzegovina", homeScore: 1, awayScore: 1, status: "FT" },
  { group: "D", date: "2026-06-12", time: "21:00", home: "USA", away: "Paraguay", homeScore: 4, awayScore: 1, status: "FT" },
  { group: "B", date: "2026-06-13", time: "15:00", home: "Qatar", away: "Switzerland", homeScore: 1, awayScore: 1, status: "FT" },
  { group: "C", date: "2026-06-13", time: "18:00", home: "Brazil", away: "Morocco", homeScore: 1, awayScore: 1, status: "FT" },
  { group: "C", date: "2026-06-13", time: "21:00", home: "Haiti", away: "Scotland", homeScore: 0, awayScore: 1, status: "FT" },
  { group: "D", date: "2026-06-13", time: "00:00", home: "Australia", away: "Türkiye", homeScore: 2, awayScore: 0, status: "FT" },
  { group: "E", date: "2026-06-14", time: "13:00", home: "Germany", away: "Curaçao", homeScore: null, awayScore: null, status: "NS" },
  { group: "F", date: "2026-06-14", time: "16:00", home: "Netherlands", away: "Japan", homeScore: null, awayScore: null, status: "NS" },
  { group: "E", date: "2026-06-14", time: "19:00", home: "Ivory Coast", away: "Ecuador", homeScore: null, awayScore: null, status: "NS" },
  { group: "F", date: "2026-06-14", time: "22:00", home: "Sweden", away: "Tunisia", homeScore: null, awayScore: null, status: "NS" },
  { group: "G", date: "2026-06-15", time: "15:00", home: "Belgium", away: "Egypt", homeScore: null, awayScore: null, status: "NS" },
  { group: "H", date: "2026-06-15", time: "12:00", home: "Spain", away: "Cape Verde", homeScore: null, awayScore: null, status: "NS" },
  { group: "H", date: "2026-06-15", time: "18:00", home: "Saudi Arabia", away: "Uruguay", homeScore: null, awayScore: null, status: "NS" },
  { group: "G", date: "2026-06-15", time: "21:00", home: "IR Iran", away: "New Zealand", homeScore: null, awayScore: null, status: "NS" },
  { group: "I", date: "2026-06-16", time: "15:00", home: "France", away: "Senegal", homeScore: null, awayScore: null, status: "NS" },
  { group: "I", date: "2026-06-16", time: "18:00", home: "Iraq", away: "Norway", homeScore: null, awayScore: null, status: "NS" },
  { group: "J", date: "2026-06-16", time: "21:00", home: "Argentina", away: "Algeria", homeScore: null, awayScore: null, status: "NS" },
  { group: "J", date: "2026-06-16", time: "00:00", home: "Austria", away: "Jordan", homeScore: null, awayScore: null, status: "NS" },
  { group: "K", date: "2026-06-17", time: "13:00", home: "Portugal", away: "DR Congo", homeScore: null, awayScore: null, status: "NS" },
  { group: "L", date: "2026-06-17", time: "16:00", home: "England", away: "Croatia", homeScore: null, awayScore: null, status: "NS" },
  { group: "L", date: "2026-06-17", time: "19:00", home: "Ghana", away: "Panama", homeScore: null, awayScore: null, status: "NS" },
  { group: "K", date: "2026-06-17", time: "22:00", home: "Uzbekistan", away: "Colombia", homeScore: null, awayScore: null, status: "NS" },
  { group: "A", date: "2026-06-18", time: "12:00", home: "Czechia", away: "South Africa", homeScore: null, awayScore: null, status: "NS" },
  { group: "B", date: "2026-06-18", time: "15:00", home: "Switzerland", away: "Bosnia and Herzegovina", homeScore: null, awayScore: null, status: "NS" },
  { group: "B", date: "2026-06-18", time: "18:00", home: "Canada", away: "Qatar", homeScore: null, awayScore: null, status: "NS" },
  { group: "A", date: "2026-06-18", time: "21:00", home: "Mexico", away: "Korea Republic", homeScore: null, awayScore: null, status: "NS" },
  { group: "C", date: "2026-06-19", time: "18:00", home: "Scotland", away: "Morocco", homeScore: null, awayScore: null, status: "NS" },
  { group: "D", date: "2026-06-19", time: "15:00", home: "USA", away: "Australia", homeScore: null, awayScore: null, status: "NS" },
  { group: "C", date: "2026-06-19", time: "21:00", home: "Brazil", away: "Haiti", homeScore: null, awayScore: null, status: "NS" },
  { group: "D", date: "2026-06-19", time: "00:00", home: "Türkiye", away: "Paraguay", homeScore: null, awayScore: null, status: "NS" },
  { group: "E", date: "2026-06-20", time: "16:00", home: "Germany", away: "Ivory Coast", homeScore: null, awayScore: null, status: "NS" },
  { group: "F", date: "2026-06-20", time: "13:00", home: "Netherlands", away: "Sweden", homeScore: null, awayScore: null, status: "NS" },
  { group: "E", date: "2026-06-20", time: "20:00", home: "Ecuador", away: "Curaçao", homeScore: null, awayScore: null, status: "NS" },
  { group: "F", date: "2026-06-20", time: "00:00", home: "Tunisia", away: "Japan", homeScore: null, awayScore: null, status: "NS" },
  { group: "H", date: "2026-06-21", time: "12:00", home: "Spain", away: "Saudi Arabia", homeScore: null, awayScore: null, status: "NS" },
  { group: "G", date: "2026-06-21", time: "15:00", home: "Belgium", away: "IR Iran", homeScore: null, awayScore: null, status: "NS" },
  { group: "H", date: "2026-06-21", time: "18:00", home: "Uruguay", away: "Cape Verde", homeScore: null, awayScore: null, status: "NS" },
  { group: "G", date: "2026-06-21", time: "21:00", home: "New Zealand", away: "Egypt", homeScore: null, awayScore: null, status: "NS" },
  { group: "I", date: "2026-06-22", time: "17:00", home: "France", away: "Iraq", homeScore: null, awayScore: null, status: "NS" },
  { group: "J", date: "2026-06-22", time: "13:00", home: "Argentina", away: "Austria", homeScore: null, awayScore: null, status: "NS" },
  { group: "I", date: "2026-06-22", time: "20:00", home: "Norway", away: "Senegal", homeScore: null, awayScore: null, status: "NS" },
  { group: "J", date: "2026-06-22", time: "23:00", home: "Jordan", away: "Algeria", homeScore: null, awayScore: null, status: "NS" },
  { group: "K", date: "2026-06-23", time: "13:00", home: "Portugal", away: "Uzbekistan", homeScore: null, awayScore: null, status: "NS" },
  { group: "L", date: "2026-06-23", time: "16:00", home: "England", away: "Ghana", homeScore: null, awayScore: null, status: "NS" },
  { group: "L", date: "2026-06-23", time: "19:00", home: "Panama", away: "Croatia", homeScore: null, awayScore: null, status: "NS" },
  { group: "K", date: "2026-06-23", time: "22:00", home: "Colombia", away: "DR Congo", homeScore: null, awayScore: null, status: "NS" },
  { group: "A", date: "2026-06-24", time: "21:00", home: "Czechia", away: "Mexico", homeScore: null, awayScore: null, status: "NS" },
  { group: "A", date: "2026-06-24", time: "21:00", home: "South Africa", away: "Korea Republic", homeScore: null, awayScore: null, status: "NS" },
  { group: "B", date: "2026-06-24", time: "15:00", home: "Switzerland", away: "Canada", homeScore: null, awayScore: null, status: "NS" },
  { group: "B", date: "2026-06-24", time: "15:00", home: "Bosnia and Herzegovina", away: "Qatar", homeScore: null, awayScore: null, status: "NS" },
  { group: "C", date: "2026-06-24", time: "18:00", home: "Scotland", away: "Brazil", homeScore: null, awayScore: null, status: "NS" },
  { group: "C", date: "2026-06-24", time: "18:00", home: "Morocco", away: "Haiti", homeScore: null, awayScore: null, status: "NS" },
  { group: "E", date: "2026-06-25", time: "16:00", home: "Ecuador", away: "Germany", homeScore: null, awayScore: null, status: "NS" },
  { group: "F", date: "2026-06-25", time: "19:00", home: "Japan", away: "Sweden", homeScore: null, awayScore: null, status: "NS" },
  { group: "E", date: "2026-06-25", time: "16:00", home: "Curaçao", away: "Ivory Coast", homeScore: null, awayScore: null, status: "NS" },
  { group: "F", date: "2026-06-25", time: "19:00", home: "Tunisia", away: "Netherlands", homeScore: null, awayScore: null, status: "NS" },
  { group: "D", date: "2026-06-25", time: "22:00", home: "Türkiye", away: "USA", homeScore: null, awayScore: null, status: "NS" },
  { group: "D", date: "2026-06-25", time: "22:00", home: "Paraguay", away: "Australia", homeScore: null, awayScore: null, status: "NS" },
  { group: "H", date: "2026-06-26", time: "20:00", home: "Cape Verde", away: "Saudi Arabia", homeScore: null, awayScore: null, status: "NS" },
  { group: "I", date: "2026-06-26", time: "15:00", home: "Norway", away: "France", homeScore: null, awayScore: null, status: "NS" },
  { group: "G", date: "2026-06-26", time: "23:00", home: "Egypt", away: "IR Iran", homeScore: null, awayScore: null, status: "NS" },
  { group: "I", date: "2026-06-26", time: "15:00", home: "Senegal", away: "Iraq", homeScore: null, awayScore: null, status: "NS" },
  { group: "H", date: "2026-06-26", time: "20:00", home: "Uruguay", away: "Spain", homeScore: null, awayScore: null, status: "NS" },
  { group: "G", date: "2026-06-26", time: "23:00", home: "New Zealand", away: "Belgium", homeScore: null, awayScore: null, status: "NS" },
  { group: "K", date: "2026-06-27", time: "19:30", home: "Colombia", away: "Portugal", homeScore: null, awayScore: null, status: "NS" },
  { group: "J", date: "2026-06-27", time: "22:00", home: "Algeria", away: "Austria", homeScore: null, awayScore: null, status: "NS" },
  { group: "L", date: "2026-06-27", time: "17:00", home: "Panama", away: "England", homeScore: null, awayScore: null, status: "NS" },
  { group: "J", date: "2026-06-27", time: "22:00", home: "Jordan", away: "Argentina", homeScore: null, awayScore: null, status: "NS" },
  { group: "L", date: "2026-06-27", time: "17:00", home: "Croatia", away: "Ghana", homeScore: null, awayScore: null, status: "NS" },
  { group: "K", date: "2026-06-27", time: "19:30", home: "DR Congo", away: "Uzbekistan", homeScore: null, awayScore: null, status: "NS" },
];

const FALLBACK_STANDINGS = {
  A: [
    { team: "Mexico", pts: 3 }, { team: "Korea Republic", pts: 3 },
    { team: "Czechia", pts: 0 }, { team: "South Africa", pts: 0 },
  ],
  B: [
    { team: "Canada", pts: 1 }, { team: "Bosnia and Herzegovina", pts: 1 },
    { team: "Qatar", pts: 1 }, { team: "Switzerland", pts: 1 },
  ],
  C: [
    { team: "Scotland", pts: 3 }, { team: "Brazil", pts: 1 },
    { team: "Morocco", pts: 1 }, { team: "Haiti", pts: 0 },
  ],
  D: [
    { team: "USA", pts: 3 }, { team: "Australia", pts: 3 },
    { team: "Türkiye", pts: 0 }, { team: "Paraguay", pts: 0 },
  ],
  E: [
    { team: "Germany", pts: 0 }, { team: "Ecuador", pts: 0 },
    { team: "Ivory Coast", pts: 0 }, { team: "Curaçao", pts: 0 },
  ],
  F: [
    { team: "Netherlands", pts: 0 }, { team: "Japan", pts: 0 },
    { team: "Sweden", pts: 0 }, { team: "Tunisia", pts: 0 },
  ],
  G: [
    { team: "Belgium", pts: 0 }, { team: "IR Iran", pts: 0 },
    { team: "Egypt", pts: 0 }, { team: "New Zealand", pts: 0 },
  ],
  H: [
    { team: "Spain", pts: 0 }, { team: "Uruguay", pts: 0 },
    { team: "Saudi Arabia", pts: 0 }, { team: "Cape Verde", pts: 0 },
  ],
  I: [
    { team: "France", pts: 0 }, { team: "Senegal", pts: 0 },
    { team: "Norway", pts: 0 }, { team: "Iraq", pts: 0 },
  ],
  J: [
    { team: "Argentina", pts: 0 }, { team: "Austria", pts: 0 },
    { team: "Algeria", pts: 0 }, { team: "Jordan", pts: 0 },
  ],
  K: [
    { team: "Portugal", pts: 0 }, { team: "Colombia", pts: 0 },
    { team: "DR Congo", pts: 0 }, { team: "Uzbekistan", pts: 0 },
  ],
  L: [
    { team: "England", pts: 0 }, { team: "Croatia", pts: 0 },
    { team: "Ghana", pts: 0 }, { team: "Panama", pts: 0 },
  ],
};

const LIVE_STATUSES = new Set(["LIVE", "1H", "2H", "HT", "ET", "P"]);
const POLL = {
  LIVE: 30_000,
  POST_MATCH: 15_000,
  PRE_KICKOFF: 45_000,
  IDLE: 5 * 60_000,
};

let pollTimer = null;
let postMatchBurstTimers = [];
let fetchInProgress = false;

let state = {
  fixtures: [...FALLBACK_FIXTURES],
  standings: structuredClone(FALLBACK_STANDINGS),
  teamLookup: {},
  activeFilter: null,
  lastUpdated: null,
  dataSource: "local",
  postMatchActive: false,
  refreshNote: null,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function normalizeTeam(name) {
  if (!name) return "";
  const trimmed = name.trim();
  for (const [canonical, aliases] of Object.entries(TEAM_ALIASES)) {
    if (aliases.some((a) => a.toLowerCase() === trimmed.toLowerCase()) || canonical.toLowerCase() === trimmed.toLowerCase()) {
      return canonical;
    }
  }
  for (const teams of Object.values(PARTICIPANTS)) {
    for (const t of teams) {
      if (t.toLowerCase() === trimmed.toLowerCase()) return t;
    }
  }
  return trimmed;
}

function teamGroup(team) {
  return TEAM_GROUPS[normalizeTeam(team)] || "?";
}

function validateParticipantGroups() {
  for (const [name, teams] of Object.entries(PARTICIPANTS)) {
    const groups = teams.map(teamGroup);
    const dupes = groups.filter((g, i) => groups.indexOf(g) !== i);
    if (dupes.length) {
      console.warn(`Group conflict for ${name}: duplicate groups ${[...new Set(dupes)].join(", ")}`);
    }
  }
}

function flagUrl(team) {
  const code = FLAG_CODES[normalizeTeam(team)] || FLAG_CODES[team];
  return code ? `https://flagcdn.com/w40/${code}.png` : null;
}

function teamPoints(team) {
  const norm = normalizeTeam(team);
  for (const rows of Object.values(state.standings)) {
    for (const row of rows) {
      if (normalizeTeam(row.team) === norm) return row.pts ?? 0;
    }
  }
  return 0;
}

function poolRows() {
  return Object.entries(PARTICIPANTS).map(([name, teams]) => {
    const breakdown = Object.fromEntries(teams.map((t) => [t, teamPoints(t)]));
    const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
    return { name, teams, breakdown, total };
  }).sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

function fixturesForTeams(teams) {
  const set = new Set(teams.map(normalizeTeam));
  return state.fixtures
    .filter((f) => set.has(normalizeTeam(f.home)) || set.has(normalizeTeam(f.away)))
    .sort((a, b) => {
      const da = `${a.date}T${a.time || "00:00"}`;
      const db = `${b.date}T${b.time || "00:00"}`;
      return da.localeCompare(db);
    });
}

function formatDate(dateStr, timeStr) {
  const d = new Date(`${dateStr}T${timeStr || "12:00"}:00`);
  return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

function highlightTeam(name, myTeams) {
  const norm = normalizeTeam(name);
  const mine = myTeams.some((t) => normalizeTeam(t) === norm);
  return mine ? `<span class="is-mine">${escapeHtml(name)}</span>` : escapeHtml(name);
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function scoreCell(fixture) {
  const live = ["LIVE", "1H", "2H", "HT", "ET", "P"].includes(fixture.status);
  if (fixture.homeScore != null && fixture.awayScore != null && fixture.status !== "NS") {
    const cls = live ? "fixture__score fixture__score--live" : "fixture__score";
    return `<div class="${cls}">${fixture.homeScore} – ${fixture.awayScore}</div>`;
  }
  if (live) return `<div class="fixture__score fixture__score--live">LIVE</div>`;
  return `<div class="fixture__score fixture__score--upcoming">${fixture.time || "TBD"}</div>`;
}

function renderLeaderboard() {
  const rows = poolRows();
  const ol = $("#leaderboard");
  ol.innerHTML = rows.map((row, i) => {
    const active = state.activeFilter === row.name ? "is-active" : "";
    const rankCls = i === 0 ? "leaderboard__rank leaderboard__rank--1" : "leaderboard__rank";
    return `<li class="${active}" data-filter="${escapeHtml(row.name)}">
      <span class="${rankCls}">${i + 1}</span>
      <span class="leaderboard__name">${escapeHtml(row.name)}</span>
      <span class="leaderboard__pts">${row.total}</span>
    </li>`;
  }).join("");

  ol.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      state.activeFilter = li.dataset.filter;
      renderAll();
    });
  });
}

function renderFilters() {
  const container = $("#participantFilters");
  container.innerHTML = Object.keys(PARTICIPANTS).map((name) => {
    const active = state.activeFilter === name ? "is-active" : "";
    return `<button class="filter-chip ${active}" type="button" data-filter="${escapeHtml(name)}">${escapeHtml(name)}</button>`;
  }).join("");

  container.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeFilter = btn.dataset.filter;
      renderAll();
    });
  });
}

function renderCards() {
  const grid = $("#participantGrid");
  const rows = poolRows();

  grid.innerHTML = rows.map((row, idx) => {
    const hidden = state.activeFilter && state.activeFilter !== row.name ? "is-hidden" : "";
    const fixtures = fixturesForTeams(row.teams);
    const upcoming = fixtures.filter((f) => f.status === "NS").slice(0, 3);
    const recent = fixtures.filter((f) => f.status !== "NS").slice(-2);
    const displayFixtures = [...recent, ...upcoming].slice(0, 5);

    const teamsHtml = row.teams.map((t) => {
      const url = flagUrl(t);
      const img = url ? `<img src="${url}" alt="" loading="lazy" />` : "";
      return `<span class="team-pill">${img}${escapeHtml(t)}<span class="team-pill__grp">Grp ${teamGroup(t)}</span><span class="team-pill__pts">${row.breakdown[t]}pts</span></span>`;
    }).join("");

    const fixturesHtml = displayFixtures.length
      ? displayFixtures.map((f) => `
          <div class="fixture">
            <div class="fixture__date">${formatDate(f.date, f.time)}<br/>Grp ${f.group}</div>
            <div class="fixture__match">
              <div class="fixture__teams">${highlightTeam(f.home, row.teams)} vs ${highlightTeam(f.away, row.teams)}</div>
              <div class="fixture__meta">${f.status === "FT" ? "Full time" : f.status === "NS" ? "Upcoming" : f.status}</div>
            </div>
            ${scoreCell(f)}
          </div>`).join("")
      : `<p class="fixture__meta">No fixtures found</p>`;

    return `<article class="participant-card ${hidden}" style="animation-delay:${idx * 0.06}s">
      <div class="card-header">
        <div class="card-header__top">
          <h3>${escapeHtml(row.name)}</h3>
          <span class="card-header__pts">${row.total} pts</span>
        </div>
        <div class="teams-row">${teamsHtml}</div>
      </div>
      <div class="fixtures">
        <div class="fixtures__label">Fixtures (${fixtures.length} total)</div>
        ${fixturesHtml}
      </div>
    </article>`;
  }).join("");
}

function isLiveFixture(fixture) {
  return LIVE_STATUSES.has(fixture.status);
}

function hasLiveFixtures() {
  return state.fixtures.some(isLiveFixture);
}

function minutesUntilNextMatch() {
  const now = Date.now();
  let nearest = Infinity;
  for (const fixture of state.fixtures) {
    if (fixture.status !== "NS") continue;
    const kickoff = new Date(`${fixture.date}T${fixture.time || "00:00"}:00`).getTime();
    if (kickoff > now && kickoff - now < nearest) nearest = kickoff - now;
  }
  return nearest === Infinity ? null : nearest / 60_000;
}

function getPollIntervalMs() {
  if (hasLiveFixtures()) return POLL.LIVE;
  if (state.postMatchActive) return POLL.POST_MATCH;
  const mins = minutesUntilNextMatch();
  if (mins != null && mins <= 30) return POLL.PRE_KICKOFF;
  return POLL.IDLE;
}

function detectNewlyFinished(before, after) {
  if (!before) return [];
  const prevByKey = new Map(before.map((f) => [fixtureKey(f), f]));
  return after.filter((f) => {
    const prev = prevByKey.get(fixtureKey(f));
    return prev && prev.status !== "FT" && f.status === "FT";
  });
}

function clearPostMatchBurst() {
  for (const id of postMatchBurstTimers) clearTimeout(id);
  postMatchBurstTimers = [];
}

function triggerPostMatchBurst(finished) {
  clearPostMatchBurst();
  state.postMatchActive = true;
  const label = finished.map((f) => `${f.home} ${f.homeScore}–${f.awayScore} ${f.away}`).join(", ");
  state.refreshNote = `Full time · updating standings (${label})`;
  renderMeta();

  for (const delay of [15_000, 45_000, 120_000, 300_000]) {
    postMatchBurstTimers.push(setTimeout(() => fetchLiveData({ auto: true }), delay));
  }
  postMatchBurstTimers.push(setTimeout(() => {
    state.postMatchActive = false;
    state.refreshNote = null;
    renderMeta();
    schedulePoll();
  }, 5 * 60_000));
}

function schedulePoll() {
  clearTimeout(pollTimer);
  pollTimer = setTimeout(async () => {
    await fetchLiveData({ auto: true });
    schedulePoll();
  }, getPollIntervalMs());
}

function renderMeta() {
  const el = $("#lastUpdated");
  const parts = [];

  if (fetchInProgress) parts.push("Updating…");
  else if (state.refreshNote) parts.push(state.refreshNote);
  else if (hasLiveFixtures()) parts.push("Live match in progress");

  if (state.lastUpdated) {
    parts.push(`${state.dataSource === "live" ? "Live" : "Local"} · ${state.lastUpdated.toLocaleTimeString()}`);
  } else {
    parts.push("Local data");
  }

  const interval = getPollIntervalMs();
  if (state.dataSource === "live" && interval < POLL.IDLE) {
    parts.push(`next refresh ${Math.round(interval / 1000)}s`);
  }

  el.textContent = parts.join(" · ");
  el.classList.toggle("header__updated--live", hasLiveFixtures() || state.postMatchActive || fetchInProgress);
}

function renderAll() {
  renderLeaderboard();
  renderFilters();
  renderCards();
  renderMeta();
}

async function fetchLiveData({ auto = false } = {}) {
  if (fetchInProgress) {
    if (auto) schedulePoll();
    return;
  }
  fetchInProgress = true;

  const btn = $("#refreshBtn");
  btn.disabled = true;
  if (!auto) {
    state.refreshNote = null;
  }
  renderMeta();

  const fixturesBefore = state.fixtures.map((f) => ({ ...f }));

  try {
    const [teamsRes, gamesRes, groupsRes] = await Promise.allSettled([
      fetch("https://worldcup26.ir/get/teams", { signal: AbortSignal.timeout(8000) }),
      fetch("https://worldcup26.ir/get/games", { signal: AbortSignal.timeout(8000) }),
      fetch("https://worldcup26.ir/get/groups", { signal: AbortSignal.timeout(8000) }),
    ]);

    let updated = false;

    if (teamsRes.status === "fulfilled" && teamsRes.value.ok) {
      const teams = await teamsRes.value.json();
      state.teamLookup = buildTeamLookup(teams);
    }

    if (gamesRes.status === "fulfilled" && gamesRes.value.ok) {
      const games = await gamesRes.value.json();
      const parsed = parseApiGames(games, state.teamLookup);
      if (parsed.length) {
        state.fixtures = mergeFixtures(FALLBACK_FIXTURES, parsed);
        updated = true;
      }
    }

    if (groupsRes.status === "fulfilled" && groupsRes.value.ok) {
      const groups = await groupsRes.value.json();
      const parsed = parseApiStandings(groups, state.teamLookup);
      if (parsed) {
        state.standings = mergeStandings(FALLBACK_STANDINGS, parsed);
        updated = true;
      }
    }

    if (updated) {
      state.dataSource = "live";
      state.lastUpdated = new Date();

      const newlyFinished = detectNewlyFinished(fixturesBefore, state.fixtures);
      if (newlyFinished.length) {
        triggerPostMatchBurst(newlyFinished);
      } else if (state.postMatchActive && !state.refreshNote) {
        state.postMatchActive = false;
      }
    }
  } catch {
    // keep fallback data
  } finally {
    fetchInProgress = false;
    btn.disabled = false;
    renderAll();
    if (auto) schedulePoll();
  }
}

function buildTeamLookup(data) {
  const list = Array.isArray(data) ? data : data?.teams || data?.data || [];
  const lookup = {};
  for (const t of list) {
    const name = t.name_en || t.name || t.teamName || "";
    const id = String(t.id ?? t._id ?? t.team_id ?? "");
    if (id && name) lookup[id] = normalizeTeam(name);
  }
  return lookup;
}

function parseApiGames(data, teamLookup = {}) {
  const list = Array.isArray(data) ? data : data?.games || data?.matches || data?.data || [];
  if (!Array.isArray(list) || !list.length) return [];

  return list.map((g) => {
    const home = normalizeTeam(
      g.home_team_name_en || g.homeTeam?.name || teamLookup[String(g.home_team_id)] || g.home_team || g.homeTeam || g.team1 || g.home || ""
    );
    const away = normalizeTeam(
      g.away_team_name_en || g.awayTeam?.name || teamLookup[String(g.away_team_id)] || g.away_team || g.awayTeam || g.team2 || g.away || ""
    );
    const homeScore = numOrNull(g.home_score ?? g.homeScore ?? g.score?.home ?? g.goals?.home);
    const awayScore = numOrNull(g.away_score ?? g.awayScore ?? g.score?.away ?? g.goals?.away);
    let status = g.status || g.state || "NS";
    if (typeof status === "object") status = status.short || status.long || "NS";
    if (g.finished === "TRUE" || g.finished === true) status = "FT";
    if (homeScore != null && awayScore != null && /finished|ft|complete/i.test(String(status))) status = "FT";

    let date = (g.date || g.matchDate || g.datetime || "").slice(0, 10);
    let time = (g.time || g.matchTime || "").slice(0, 5) || "00:00";
    if (g.local_date) {
      const [mdy, hm] = g.local_date.split(" ");
      if (mdy) {
        const [mm, dd, yyyy] = mdy.split("/");
        if (yyyy && mm && dd) date = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
      }
      if (hm) time = hm.slice(0, 5);
    }

    return {
      group: (g.group || g.groupName || g.stage || "?").toString().replace(/group\s*/i, "").toUpperCase().slice(-1) || "?",
      date, time, home, away, homeScore, awayScore, status,
    };
  }).filter((f) => f.home && f.away);
}

function parseApiStandings(data, teamLookup = {}) {
  const groups = Array.isArray(data) ? data : data?.groups || data?.data || null;
  if (!Array.isArray(groups)) return null;

  const result = {};
  for (const g of groups) {
    const key = (g.name || g.group || g.groupName || "").replace(/group\s*/i, "").toUpperCase().slice(-1);
    const teams = g.teams || g.standings || g.table || [];
    if (!key || !Array.isArray(teams)) continue;
    result[key] = teams.map((t) => {
      const rawName = t.name || t.team || t.teamName || t.name_en || teamLookup[String(t.team_id)] || "";
      return {
        team: normalizeTeam(rawName),
        pts: numOrNull(t.points ?? t.pts ?? t.PTS) ?? 0,
      };
    }).filter((row) => row.team);
  }
  return Object.keys(result).length ? result : null;
}

function mergeStandings(fallback, live) {
  const merged = structuredClone(fallback);
  for (const [group, rows] of Object.entries(live)) {
    if (!merged[group]) {
      merged[group] = rows;
      continue;
    }
    for (const liveRow of rows) {
      const existing = merged[group].find((r) => normalizeTeam(r.team) === normalizeTeam(liveRow.team));
      if (existing) {
        existing.pts = liveRow.pts;
      } else {
        merged[group].push({ ...liveRow });
      }
    }
  }
  return merged;
}

function numOrNull(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function mergeFixtures(fallback, live) {
  const map = new Map();
  for (const f of fallback) {
    map.set(fixtureKey(f), { ...f });
  }
  for (const f of live) {
    const key = fixtureKey(f);
    const existing = map.get(key);
    if (existing) {
      map.set(key, { ...existing, ...f, home: existing.home, away: existing.away });
    } else {
      map.set(key, f);
    }
  }
  return [...map.values()];
}

function fixtureKey(f) {
  return `${normalizeTeam(f.home)}|${normalizeTeam(f.away)}|${f.date}`;
}

function siteUrl() {
  const { origin, pathname } = window.location;
  if (origin.startsWith("http") && !origin.startsWith("file:")) {
    return origin + pathname.replace(/index\.html$/, "");
  }
  return "https://sechabamoks26.github.io/worldcup-pool/";
}

function setupShare() {
  const url = siteUrl();
  const text = encodeURIComponent(`Check out Rival Room — World Cup 2026 teams, fixtures & standings:\n${url}`);
  $("#shareBtn").href = `https://wa.me/?text=${text}`;

  $("#copyLinkBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(url);
      $("#copyLinkBtn").textContent = "Copied!";
      setTimeout(() => { $("#copyLinkBtn").textContent = "Copy link"; }, 2000);
    } catch {
      prompt("Copy this link:", url);
    }
  });
}

$("#refreshBtn").addEventListener("click", () => {
  clearTimeout(pollTimer);
  fetchLiveData().then(() => schedulePoll());
});
$("#showAllBtn").addEventListener("click", () => {
  state.activeFilter = null;
  renderAll();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    clearTimeout(pollTimer);
    fetchLiveData({ auto: true });
  }
});

renderAll();
validateParticipantGroups();
setupShare();
fetchLiveData({ auto: true });

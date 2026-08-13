/**
 * MICHIGAN WOLVERINES FALL 2026 FOOTBALL PREDICTOR & SIMULATION ENGINE
 * Standalone Monte Carlo 10,000-Drive Simulator, Big Ten Standings & CFP Playoff Visualizer
 */

// Official Fall 2026 Michigan Wolverines Schedule Dataset
const SCHEDULE_DATA = [
  {
    id: 'week-1',
    week: 'WEEK 1',
    date: 'Sep 5, 2026',
    opponent: 'Western Michigan',
    oppAbbr: 'WMU',
    oppRank: '',
    oppColor: '#532E1C',
    oppSecondary: '#F1C40F',
    oppBadge: 'BRONCOS',
    isHome: true,
    isMarquee: false,
    isBigTen: false,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '🐎 Season Opener',
    vegasSpread: -28.5,
    overUnder: 54.5,
    baseWinProb: 96.5,
    projScoreUt: 42,
    projScoreOpp: 10,
    radarStats: {
      um: [90, 92, 88, 91, 89, 87],
      opp: [65, 68, 64, 66, 62, 60]
    },
    scoutReport: {
      xFactor: 'Early offensive rhythm in Sherrone Moore & Kirk Campbell power scheme.',
      keyMatchup: 'Bryce Underwood establishing downfield chemistry with wide receiver corps.',
      summary: 'Season opener at The Big House. A tune-up clash allowing young playmakers to settle in.'
    }
  },
  {
    id: 'week-2',
    week: 'WEEK 2',
    date: 'Sep 12, 2026',
    opponent: 'Oklahoma',
    oppAbbr: 'OU',
    oppRank: '#8',
    oppColor: '#841617',
    oppSecondary: '#FDF9D8',
    oppBadge: 'SOONERS',
    isHome: true,
    isMarquee: true,
    isBigTen: false,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '🏆 Marquee Non-Conference Showcase',
    vegasSpread: +1.5,
    overUnder: 51.5,
    baseWinProb: 48.5,
    projScoreUt: 24,
    projScoreOpp: 27,
    radarStats: {
      um: [92, 94, 91, 93, 90, 89],
      opp: [93, 91, 93, 90, 92, 89]
    },
    scoutReport: {
      xFactor: '110,000 Maize Out crowd disrupting Oklahoma hurry-up communications.',
      keyMatchup: 'Wink Martindale disguised blitzes testing Sooners interior pass protection.',
      summary: 'Blockbuster Big House non-conference clash. Baseline drop that flips to a win with +1 Luck or +10% Underwood.'
    }
  },
  {
    id: 'week-3',
    week: 'WEEK 3',
    date: 'Sep 19, 2026',
    opponent: 'UTEP',
    oppAbbr: 'UTEP',
    oppRank: '',
    oppColor: '#FF5F0F',
    oppSecondary: '#002855',
    oppBadge: 'MINERS',
    isHome: true,
    isMarquee: false,
    isBigTen: false,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '⛏️ Non-Conf Finale',
    vegasSpread: -34.5,
    overUnder: 53.0,
    baseWinProb: 98.2,
    projScoreUt: 45,
    projScoreOpp: 7,
    radarStats: {
      um: [91, 93, 90, 92, 90, 88],
      opp: [62, 64, 60, 63, 59, 58]
    },
    scoutReport: {
      xFactor: 'Resting starters early and establishing depth before the Big Ten gauntlet.',
      keyMatchup: 'Michigan defensive line overwhelming UTEP pocket.',
      summary: 'Final non-conference tune-up before entering physical Big Ten conference play.'
    }
  },
  {
    id: 'week-4',
    week: 'WEEK 26',
    date: 'Sep 26, 2026',
    opponent: 'Iowa',
    oppAbbr: 'IOWA',
    oppRank: '#19',
    oppColor: '#000000',
    oppSecondary: '#FFCD00',
    oppBadge: 'HAWKEYES',
    isHome: true,
    isMarquee: false,
    isBigTen: true,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '🌽 Big Ten Conference Opener',
    vegasSpread: -10.5,
    overUnder: 39.5,
    baseWinProb: 76.5,
    projScoreUt: 24,
    projScoreOpp: 13,
    radarStats: {
      um: [92, 94, 91, 93, 89, 90],
      opp: [74, 76, 92, 75, 78, 88]
    },
    scoutReport: {
      xFactor: 'Field position and special teams ball security against Phil Parker defense.',
      keyMatchup: 'Jordan Marshall patience finding creases against Iowa sound run fits.',
      summary: 'Gritty, physical Big Ten opener. Michigan leans on ball security and front-seven control.'
    }
  },
  {
    id: 'week-5',
    week: 'WEEK 5',
    date: 'Oct 3, 2026',
    opponent: 'Minnesota',
    oppAbbr: 'MINN',
    oppRank: '',
    oppColor: '#7A0019',
    oppSecondary: '#FFCC33',
    oppBadge: 'GOPHERS',
    isHome: false,
    isMarquee: true,
    isBigTen: true,
    stadium: 'Huntington Bank Stadium',
    location: 'Minneapolis, MN',
    rivalryName: '🏆 The Little Brown Jug Rivalry',
    vegasSpread: -7.5,
    overUnder: 46.5,
    baseWinProb: 71.0,
    projScoreUt: 28,
    projScoreOpp: 17,
    radarStats: {
      um: [91, 93, 90, 92, 88, 89],
      opp: [78, 80, 81, 79, 80, 82]
    },
    scoutReport: {
      xFactor: 'Defending the Jug on the road in Minneapolis.',
      keyMatchup: 'Michigan edge rushers containing Minnesota rollout bootlegs.',
      summary: 'Historic rivalry clash. Michigan looks to retain the Little Brown Jug in a physical road battle.'
    }
  },
  {
    id: 'week-7',
    week: 'WEEK 7',
    date: 'Oct 17, 2026',
    opponent: 'Penn State',
    oppAbbr: 'PSU',
    oppRank: '#6',
    oppColor: '#041E42',
    oppSecondary: '#FFFFFF',
    oppBadge: 'NITTANY LIONS',
    isHome: true,
    isMarquee: true,
    isBigTen: true,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '🦁 Big Ten Marquee Clash',
    vegasSpread: -1.5,
    overUnder: 48.5,
    baseWinProb: 52.8,
    projScoreUt: 24,
    projScoreOpp: 21,
    radarStats: {
      um: [93, 94, 92, 93, 91, 90],
      opp: [92, 91, 94, 91, 93, 89]
    },
    scoutReport: {
      xFactor: '110k Big House noise disrupting Penn State pre-snap audibles.',
      keyMatchup: 'Michigan offensive tackles matching Penn State athletic edge rushers.',
      summary: 'Heavyweight Big Ten showdown with massive College Football Playoff seeding implications.'
    }
  },
  {
    id: 'week-8',
    week: 'WEEK 8',
    date: 'Oct 24, 2026',
    opponent: 'Indiana',
    oppAbbr: 'IND',
    oppRank: '',
    oppColor: '#990000',
    oppSecondary: '#EEEDEB',
    oppBadge: 'HOOSIERS',
    isHome: true,
    isMarquee: false,
    isBigTen: true,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '🔴 Big Ten Battle',
    vegasSpread: -14.5,
    overUnder: 52.5,
    baseWinProb: 84.5,
    projScoreUt: 35,
    projScoreOpp: 17,
    radarStats: {
      um: [92, 93, 90, 92, 89, 88],
      opp: [77, 75, 78, 76, 77, 75]
    },
    scoutReport: {
      xFactor: 'Exploiting Indiana secondary with play-action chunk passes.',
      keyMatchup: 'Michigan defensive line eliminating Indiana interior run game.',
      summary: 'Home Big Ten clash in Ann Arbor. Michigan looks to impose offensive tempo early.'
    }
  },
  {
    id: 'week-9',
    week: 'WEEK 9',
    date: 'Oct 31, 2026',
    opponent: 'Rutgers',
    oppAbbr: 'RUT',
    oppRank: '',
    oppColor: '#CC0033',
    oppSecondary: '#5F6A72',
    oppBadge: 'SCARLET KNIGHTS',
    isHome: false,
    isMarquee: false,
    isBigTen: true,
    stadium: 'SHI Stadium',
    location: 'Piscataway, NJ',
    rivalryName: '🎃 Halloween Road Trip',
    vegasSpread: -13.5,
    overUnder: 45.5,
    baseWinProb: 82.0,
    projScoreUt: 31,
    projScoreOpp: 14,
    radarStats: {
      um: [91, 93, 89, 91, 88, 88],
      opp: [76, 75, 79, 75, 77, 76]
    },
    scoutReport: {
      xFactor: 'Avoiding road letdown in Piscataway before November rivalry gauntlet.',
      keyMatchup: 'Michigan linebackers diagnosing Rutgers misdirection run schemes.',
      summary: 'Halloween road business trip. Michigan uses power ground game to control time of possession.'
    }
  },
  {
    id: 'week-10',
    week: 'WEEK 10',
    date: 'Nov 7, 2026',
    opponent: 'Michigan State',
    oppAbbr: 'MSU',
    oppRank: '#22',
    oppColor: '#18453B',
    oppSecondary: '#FFFFFF',
    oppBadge: 'SPARTANS',
    isHome: true,
    isMarquee: true,
    isBigTen: true,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '🪓 Paul Bunyan Trophy In-State War',
    vegasSpread: -8.5,
    overUnder: 47.5,
    baseWinProb: 68.5,
    projScoreUt: 28,
    projScoreOpp: 17,
    radarStats: {
      um: [93, 94, 91, 93, 90, 89],
      opp: [81, 80, 84, 82, 83, 80]
    },
    scoutReport: {
      xFactor: 'In-state rivalry emotion and discipline avoiding personal foul penalties.',
      keyMatchup: 'Michigan offensive line opening 4th quarter holes to close out the game.',
      summary: 'Heated in-state clash for Paul Bunyan Trophy. Expect intense trench warfare under the lights.'
    }
  },
  {
    id: 'week-11',
    week: 'WEEK 11',
    date: 'Nov 14, 2026',
    opponent: 'Oregon',
    oppAbbr: 'ORE',
    oppRank: '#4',
    oppColor: '#154734',
    oppSecondary: '#FEE123',
    oppBadge: 'DUCKS',
    isHome: false,
    isMarquee: true,
    isBigTen: true,
    stadium: 'Autzen Stadium',
    location: 'Eugene, OR',
    rivalryName: '🦆 Autzen Stadium Cross-Country War',
    vegasSpread: +3.5,
    overUnder: 56.5,
    baseWinProb: 44.2,
    projScoreUt: 24,
    projScoreOpp: 31,
    radarStats: {
      um: [92, 93, 90, 92, 88, 89],
      opp: [95, 94, 92, 94, 93, 91]
    },
    scoutReport: {
      xFactor: 'Deafening Autzen Stadium noise on third down conversions.',
      keyMatchup: 'Michigan perimeter cornerbacks tackling Oregon shifty receivers in space.',
      summary: 'Brutal November road test in Eugene. Baseline loss that flips with +1 Luck or +15% Underwood.'
    }
  },
  {
    id: 'week-12',
    week: 'WEEK 12',
    date: 'Nov 21, 2026',
    opponent: 'UCLA',
    oppAbbr: 'UCLA',
    oppRank: '',
    oppColor: '#2D68C4',
    oppSecondary: '#F2A900',
    oppBadge: 'BRUINS',
    isHome: true,
    isMarquee: false,
    isBigTen: true,
    stadium: 'Michigan Stadium (The Big House)',
    location: 'Ann Arbor, MI',
    rivalryName: '🐻 Senior Day at The Big House',
    vegasSpread: -12.5,
    overUnder: 51.5,
    baseWinProb: 81.0,
    projScoreUt: 34,
    projScoreOpp: 17,
    radarStats: {
      um: [92, 93, 91, 92, 90, 89],
      opp: [79, 78, 80, 77, 79, 78]
    },
    scoutReport: {
      xFactor: 'Focusing on Senior Day execution before Ohio State rivalry week.',
      keyMatchup: 'Bryce Underwood deep ball accuracy opening up the box.',
      summary: 'Final home game of the season. Michigan looks to secure its 9th win with explosive offense.'
    }
  },
  {
    id: 'week-13',
    week: 'WEEK 13',
    date: 'Nov 28, 2026',
    opponent: 'Ohio State',
    oppAbbr: 'OSU',
    oppRank: '#2',
    oppColor: '#BB0000',
    oppSecondary: '#666666',
    oppBadge: 'BUCKEYES',
    isHome: false,
    isMarquee: true,
    isBigTen: true,
    stadium: 'Ohio Stadium (The Horseshoe)',
    location: 'Columbus, OH',
    rivalryName: '🏈 "THE GAME" - Greatest Rivalry in Sports',
    vegasSpread: +3.5,
    overUnder: 50.5,
    baseWinProb: 42.8,
    projScoreUt: 21,
    projScoreOpp: 27,
    radarStats: {
      um: [94, 95, 92, 94, 91, 91],
      opp: [96, 95, 94, 95, 94, 93]
    },
    scoutReport: {
      xFactor: 'Surviving hostile 105k Horseshoe crowd and creating 2+ takeaways.',
      keyMatchup: 'Michigan offensive line moving Ohio State front four on 3rd & short.',
      summary: 'THE GAME! A grueling 60-minute war in Columbus with Big Ten Championship & Playoff bids on the line.'
    }
  }
];

// App State
const state = {
  activeFilter: 'all',
  soundEnabled: true,
  sliders: {
    qbRating: 100,
    rbRating: 100,
    defense: 100,
    turnover: 0,
    crowd: 100
  },
  gamePicks: {},
  activeModalGame: null
};

// Web Audio Synthesizer for Stadium Sound Effects
class StadiumSoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playWhistle() {
    if (!state.soundEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(2600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(2900, this.ctx.currentTime + 0.08);
    osc.frequency.exponentialRampToValueAtTime(2400, this.ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.28);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  playHorn() {
    if (!state.soundEnabled) return;
    this.init();
    [220, 277, 330].forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.7);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.75);
    });
  }

  playClick() {
    if (!state.soundEnabled) return;
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }
}

const sounds = new StadiumSoundFX();
function playSound(type) {
  try {
    if (type === 'whistle') sounds.playWhistle();
    else if (type === 'horn') sounds.playHorn();
    else if (type === 'click') sounds.playClick();
  } catch (e) {
    console.log('Audio init on user gesture');
  }
}

// Calculate Dynamically Adjusted Matchup
function calculateAdjustedMatchup(game) {
  const qbFactor = (state.sliders.qbRating - 100) * 0.28;
  const rbFactor = (state.sliders.rbRating - 100) * 0.22;
  const defFactor = (state.sliders.defense - 100) * 0.22;
  const luckFactor = state.sliders.turnover * 2.8;
  const crowdFactor = game.isHome ? (state.sliders.crowd - 100) * 0.15 : -(state.sliders.crowd - 100) * 0.12;

  const totalMod = qbFactor + rbFactor + defFactor + luckFactor + crowdFactor;

  let adjustedProb = Math.min(99.4, Math.max(1.0, game.baseWinProb + totalMod));
  adjustedProb = Math.round(adjustedProb * 10) / 10;

  const scoreDiff = Math.round((adjustedProb - 50) / 2.8);
  const baseTotal = game.projScoreUt + game.projScoreOpp;
  let projUt = Math.max(7, Math.round((baseTotal / 2) + (scoreDiff / 2) + (qbFactor / 6) + (rbFactor / 7)));
  let projOpp = Math.max(3, Math.round((baseTotal / 2) - (scoreDiff / 2) - (defFactor / 7)));

  return {
    winProb: adjustedProb,
    projUt: projUt,
    projOpp: projOpp,
    isWin: adjustedProb >= 50
  };
}

// Context-Aware Football Commentary Generator
function getContextAwareHotTake(game, adj) {
  const diff = adj.projUt - adj.projOpp;
  const isClose = Math.abs(diff) <= 7;
  const isOneScore = Math.abs(diff) <= 8;
  const isBigWin = diff >= 17;
  const isMichiganWin = diff > 0;

  if (game.id === 'week-13') { // Ohio State
    if (isClose) return isMichiganWin ? "The Game in Columbus! 1-possession war decided by a 4th quarter defensive stand. Hail to the Victors! 〽️" : "Heartbreaker in the Horseshoe. Ohio State edges out a 1-score defensive war.";
    if (isMichiganWin) return "Statement win in Columbus! Ground game controls the clock to retain dominance in The Game.";
    return "Heavyweight battle in Columbus. Ohio State defensive front proves too much on 3rd down.";
  }

  if (game.id === 'week-10') { // Michigan State
    if (isClose) return "Paul Bunyan Trophy stays in Ann Arbor! 1-possession rivalry war iced by a 4th quarter sack.";
    return "In-state dominance! Michigan runs for 220+ yards to hoist Paul Bunyan in front of 110,000. Go Blue!";
  }

  if (game.id === 'week-2') { // Oklahoma
    if (isClose) return "Big House non-conference classic. 1-possession battle decided by Underwood's clutch 2-minute drill.";
    return "Statement Big Ten/SEC clash! Michigan defense forces 3 turnovers under the lights in Ann Arbor.";
  }

  if (game.id === 'week-11') { // Oregon
    if (isClose) return isMichiganWin ? "Epic road victory in Autzen Stadium! Physical ground game shocks the Ducks late." : "Brutal road battle in Eugene. Hostile Autzen Stadium noise edges out a 3-point finish.";
    return isMichiganWin ? "Cross-country statement win! Michigan front seven shuts down Oregon perimeter explosives." : "Hostile road test in Eugene proves difficult against Oregon tempo.";
  }

  if (game.id === 'week-7') { // Penn State
    return isClose ? "Whiteout atmosphere in Ann Arbor! 1-score thriller sealed on a 4th down goal line stand." : "Physical line of scrimmage dominance against Penn State front four.";
  }

  if (game.id === 'week-5') { // Minnesota
    return "The Little Brown Jug returns to Ann Arbor! Physical Big Ten ground game grinds out the clock.";
  }

  if (isBigWin) {
    return "Total dominance in all 3 phases. Bryce Underwood and starters resting by early 4th quarter. Go Blue! 〽️";
  } else if (isOneScore) {
    return isMichiganWin ? `Hard-fought 1-possession Big Ten battle. Michigan executes in the clutch to win ${adj.projUt}-${adj.projOpp}.` : `Tough battle that slips away on late turnover. Michigan falls in a tight ${adj.projOpp}-${adj.projUt} finish.`;
  } else {
    return isMichiganWin ? `Michigan controls time of possession and pulls away with 2nd half physical scoring drives.` : `Challenging matchup where turnover differential dictates the outcome.`;
  }
}

// Update Top Record Ticker, CFP Playoff Stages & Championship Formula Blueprint
function updateTopMetricsAndPlayoff() {
  let wins = 0;
  let losses = 0;

  SCHEDULE_DATA.forEach(game => {
    if (state.gamePicks[game.id] === 'W') wins++;
    else losses++;
  });

  document.getElementById('projRecordVal').innerText = `${wins} - ${losses}`;

  const osuGame = SCHEDULE_DATA.find(g => g.id === 'week-13');
  const osuAdj = calculateAdjustedMatchup(osuGame);
  document.getElementById('osuGameChanceVal').innerText = `${osuAdj.winProb}%`;

  const nattyOddsElem = document.getElementById('nattyOddsVal');
  const bigTenProbElem = document.getElementById('bigTenProbVal');
  const playoffTitle = document.getElementById('playoffTitle');
  const playoffDesc = document.getElementById('playoffDesc');
  const playoffProbDisplay = document.getElementById('playoffProbDisplay');

  // Blueprint Elements
  const statusPill = document.getElementById('formulaStatusPill');
  const reqArchSub = document.getElementById('reqArchSub');
  const reqRbSub = document.getElementById('reqRbSub');
  const reqLuckSub = document.getElementById('reqLuckSub');

  // Playoff Stage Cards Elements
  const qtrUt = document.getElementById('qtrUtScore');
  const qtrOpp = document.getElementById('qtrOppScore');
  const qtrStatus = document.getElementById('qtrStatusBadge');
  const qtrIntel = document.getElementById('qtrIntel');

  const semiUt = document.getElementById('semiUtScore');
  const semiOpp = document.getElementById('semiOppScore');
  const semiStatus = document.getElementById('semiStatusBadge');
  const semiIntel = document.getElementById('semiIntel');

  const nattyUt = document.getElementById('nattyUtScore');
  const nattyOpp = document.getElementById('nattyOppScore');
  const nattyStatus = document.getElementById('nattyStatusBadge');
  const nattyIntel = document.getElementById('nattyIntel');

  const qb = state.sliders.qbRating;
  const rb = state.sliders.rbRating;
  const def = state.sliders.defense;
  const to = state.sliders.turnover;

  if (reqArchSub) reqArchSub.innerText = `Currently: ${qb}% (${qb >= 115 ? 'Elite' : qb >= 100 ? 'Solid' : 'Developing'})`;
  if (reqRbSub) reqRbSub.innerText = `Currently: ${rb}% (${rb >= 115 ? 'Dominant' : rb >= 100 ? 'Physical' : 'Vulnerable'})`;
  if (reqLuckSub) reqLuckSub.innerText = `Currently: ${to > 0 ? `+${to} Takeaways` : to < 0 ? `${to} Turnovers` : '0 Neutral'}`;

  // Scenarios
  if (wins === 12) {
    nattyOddsElem.innerText = '+350';
    bigTenProbElem.innerText = '72.5%';
    playoffTitle.innerText = 'PROJECTED SEED: #1 (BIG TEN CHAMPION - FIRST ROUND BYE)';
    playoffDesc.innerText = '12-0 Undefeated regular season! Swept Ohio State and Oregon to earn the #1 overall seed in the Rose Bowl.';
    playoffProbDisplay.innerText = '99.5%';

    if (statusPill) {
      statusPill.innerText = '🏆 12-0 BIG TEN CHAMPION RECIPE MET';
      statusPill.style.background = 'rgba(255, 203, 5, 0.2)';
      statusPill.style.borderColor = '#FFCB05';
      statusPill.style.color = '#FFCB05';
    }

    if (qtrUt) { qtrUt.innerText = '34'; qtrOpp.innerText = '17'; qtrStatus.innerText = 'SIMULATED WIN'; qtrIntel.innerText = 'Dominant Rose Bowl quarterfinal. Ground game rushes for 260 yards.'; }
    if (semiUt) { semiUt.innerText = '31'; semiOpp.innerText = '24'; semiStatus.innerText = 'SIMULATED WIN'; semiIntel.innerText = 'Semifinal clash vs Texas! Underwood leads 4th quarter game-winning drive.'; }
    if (nattyUt) { nattyUt.innerText = '38'; nattyOpp.innerText = '27'; nattyStatus.innerText = '🏆 NATIONAL CHAMPIONS'; nattyIntel.innerText = 'Michigan captures National Title in Atlanta! 15-0 Immortality! 〽️'; }

  } else if (wins === 11) {
    nattyOddsElem.innerText = '+550';
    bigTenProbElem.innerText = '44.0%';
    playoffTitle.innerText = 'PROJECTED SEED: #2 / #3 (BIG TEN TITLE BERTH - CFP BYE)';
    playoffDesc.innerText = '11-1 campaign with marquee victory over Ohio State punches Michigan ticket to CFP Quarterfinals.';
    playoffProbDisplay.innerText = '94.2%';

    if (statusPill) {
      statusPill.innerText = '🏆 11-1 PLAYOFF LOCK (OHIO STATE WIN)';
      statusPill.style.background = 'rgba(16, 185, 129, 0.15)';
      statusPill.style.borderColor = '#10B981';
      statusPill.style.color = '#10B981';
    }

    if (qtrUt) { qtrUt.innerText = '27'; qtrOpp.innerText = '24'; qtrStatus.innerText = 'SIMULATED WIN'; qtrIntel.innerText = 'Physical ground game wears down front four in 4th quarter Rose Bowl battle.'; }
    if (semiUt) { semiUt.innerText = '31'; semiOpp.innerText = '28'; semiStatus.innerText = 'SIMULATED WIN'; semiIntel.innerText = 'Bryce Underwood 4th quarter comeback drive! Goal line stand on final play!'; }
    if (nattyUt) { nattyUt.innerText = '34'; nattyOpp.innerText = '27'; nattyStatus.innerText = '🏆 NATIONAL CHAMPIONS'; nattyIntel.innerText = 'Jordan Marshall ices the title with a 42-yard touchdown run in Atlanta! Hail to the Victors! 〽️'; }

  } else if (wins === 10) {
    nattyOddsElem.innerText = '+900';
    bigTenProbElem.innerText = '24.0%';
    playoffTitle.innerText = 'PROJECTED SEED: #6 / #7 (AT-LARGE CFP FIRST ROUND HOST)';
    playoffDesc.innerText = '10-2 regular season earns Michigan a historic on-campus College Football Playoff first-round home game in Ann Arbor!';
    playoffProbDisplay.innerText = '86.5%';

    if (statusPill) {
      statusPill.innerText = '⚠️ 10-2 AT-LARGE CFP HOST AT BIG HOUSE';
      statusPill.style.background = 'rgba(56, 189, 248, 0.2)';
      statusPill.style.borderColor = '#38BDF8';
      statusPill.style.color = '#38BDF8';
    }

    if (qtrUt) { qtrUt.innerText = '24'; qtrOpp.innerText = '20'; qtrStatus.innerText = 'SIMULATED WIN'; qtrIntel.innerText = 'Quarterfinal dogfight. Front seven generates 5 sacks to advance.'; }
    if (semiUt) { semiUt.innerText = '20'; semiOpp.innerText = '24'; semiStatus.innerText = 'ELIMINATED IN SEMIS'; semiIntel.innerText = 'Rose Bowl thriller falls just short on final possession.'; }
    if (nattyUt) { nattyUt.innerText = '--'; nattyOpp.innerText = '--'; nattyStatus.innerText = 'MISSED FINAL'; nattyIntel.innerText = 'Eliminated in semifinal round.'; }

  } else if (wins === 9) {
    nattyOddsElem.innerText = '+1400';
    bigTenProbElem.innerText = '18.5%';
    playoffTitle.innerText = 'PROJECTED: CFP AT-LARGE BUBBLE / CITRUS BOWL';
    playoffDesc.innerText = '9-3 regular season finish. Competitive Big Ten campaign with road tests at Oregon and Ohio State proving decisive.';
    playoffProbDisplay.innerText = '64.2%';

    if (statusPill) {
      statusPill.innerText = '🎯 9-3 REALISTIC BASELINE (OREGON/OSU DROPS)';
      statusPill.style.background = 'rgba(255, 203, 5, 0.15)';
      statusPill.style.borderColor = '#FFCB05';
      statusPill.style.color = '#FFCB05';
    }

    if (qtrUt) { qtrUt.innerText = '21'; qtrOpp.innerText = '27'; qtrStatus.innerText = 'ELIMINATED'; qtrIntel.innerText = 'Road playoff matchup against top-4 seed proves challenging.'; }
    if (semiUt) { semiUt.innerText = '--'; semiOpp.innerText = '--'; semiStatus.innerText = '--'; semiIntel.innerText = 'Did not advance to semifinals.'; }
    if (nattyUt) { nattyUt.innerText = '--'; nattyOpp.innerText = '--'; nattyStatus.innerText = '--'; nattyIntel.innerText = 'Did not reach Atlanta.'; }

  } else if (wins === 8) {
    nattyOddsElem.innerText = '+4500';
    bigTenProbElem.innerText = '4.5%';
    playoffTitle.innerText = 'CFP BUBBLE: OUTSIDE 12-TEAM CUTLINE (CITRUS BOWL)';
    playoffDesc.innerText = '8-4 regular season finish. Michigan lands in Orlando for the Citrus Bowl against top SEC opponent.';
    playoffProbDisplay.innerText = '22.5%';

    if (statusPill) {
      statusPill.innerText = '⚠️ 8-4 CITRUS BOWL (NEEDS +1 LUCK FOR CFP)';
      statusPill.style.background = 'rgba(255, 184, 0, 0.2)';
      statusPill.style.borderColor = '#FFB800';
      statusPill.style.color = '#FFB800';
    }

    if (qtrUt) { qtrUt.innerText = '--'; qtrOpp.innerText = '--'; qtrStatus.innerText = 'CITRUS BOWL'; qtrIntel.innerText = 'Headed to Orlando for premier Big Ten / SEC bowl matchup.'; }
    if (semiUt) { semiUt.innerText = '--'; semiOpp.innerText = '--'; semiStatus.innerText = '--'; semiIntel.innerText = '--'; }
    if (nattyUt) { nattyUt.innerText = '--'; nattyOpp.innerText = '--'; nattyStatus.innerText = '--'; nattyIntel.innerText = '--'; }

  } else if (wins === 7) {
    nattyOddsElem.innerText = 'OFF BOARD';
    bigTenProbElem.innerText = '0.5%';
    playoffTitle.innerText = 'POSTSEASON STATUS: RELIAQUEST / PINSTRIPE BOWL (7-5)';
    playoffDesc.innerText = '7-5 season struggles. Dropped 5 marquee games in physical Big Ten road gauntlet.';
    playoffProbDisplay.innerText = '5.0%';

    if (statusPill) {
      statusPill.innerText = '🚨 7-5 UPSET CHAOS (ROAD STRUGGLES)';
      statusPill.style.background = 'rgba(239, 68, 68, 0.2)';
      statusPill.style.borderColor = '#EF4444';
      statusPill.style.color = '#EF4444';
    }

    if (qtrUt) { qtrUt.innerText = '--'; qtrOpp.innerText = '--'; qtrStatus.innerText = 'PINSTRIPE BOWL'; qtrIntel.innerText = 'Bowling in NYC for the Pinstripe Bowl at Yankee Stadium.'; }
    if (semiUt) { semiUt.innerText = '--'; semiOpp.innerText = '--'; semiStatus.innerText = '--'; semiIntel.innerText = '--'; }
    if (nattyUt) { nattyUt.innerText = '--'; nattyOpp.innerText = '--'; nattyStatus.innerText = '--'; nattyIntel.innerText = '--'; }

  } else {
    nattyOddsElem.innerText = 'OFF BOARD';
    bigTenProbElem.innerText = '0.0%';
    playoffTitle.innerText = 'POSTSEASON STATUS: DISASTER SEASON / NO CFP';
    playoffDesc.innerText = `${wins}-${losses} record. Total offensive and defensive collapse in conference play.`;
    playoffProbDisplay.innerText = '0.0%';

    if (statusPill) {
      statusPill.innerText = '🚨 FAILED: DIAL UP UNDERWOOD & SMASHMOUTH RB';
      statusPill.style.background = 'rgba(239, 68, 68, 0.25)';
      statusPill.style.borderColor = '#EF4444';
      statusPill.style.color = '#EF4444';
    }

    if (qtrUt) { qtrUt.innerText = '--'; qtrOpp.innerText = '--'; qtrStatus.innerText = 'NO CFP BID'; qtrIntel.innerText = 'Missed 12-team playoff field entirely.'; }
    if (semiUt) { semiUt.innerText = '--'; semiOpp.innerText = '--'; semiStatus.innerText = '--'; semiIntel.innerText = '--'; }
    if (nattyUt) { nattyUt.innerText = '--'; nattyOpp.innerText = '--'; nattyStatus.innerText = '--'; nattyIntel.innerText = '--'; }
  }
}

// Render Schedule Grid
function renderScheduleGrid() {
  const container = document.getElementById('scheduleGrid');
  if (!container) return;
  container.innerHTML = '';

  let filteredGames = SCHEDULE_DATA;
  if (state.activeFilter === 'marquee') {
    filteredGames = SCHEDULE_DATA.filter(g => g.isMarquee);
  } else if (state.activeFilter === 'bigten') {
    filteredGames = SCHEDULE_DATA.filter(g => g.isBigTen);
  } else if (state.activeFilter === 'home') {
    filteredGames = SCHEDULE_DATA.filter(g => g.isHome);
  } else if (state.activeFilter === 'away') {
    filteredGames = SCHEDULE_DATA.filter(g => !g.isHome);
  }

  document.getElementById('gameCountBadge').innerText = `${filteredGames.length} GAMES`;

  filteredGames.forEach(game => {
    const adj = calculateAdjustedMatchup(game);
    const userPick = state.gamePicks[game.id] || (adj.isWin ? 'W' : 'L');
    const isWin = userPick === 'W';

    const card = document.createElement('div');
    card.className = `matchup-card ${isWin ? 'card-win' : 'card-loss'}`;
    card.id = `card-${game.id}`;

    card.innerHTML = `
      <div class="card-top-bar">
        <span class="game-meta-badge">${game.week} • ${game.date}</span>
        <span class="game-location-tag">${game.rivalryName || (game.isHome ? 'Big House Home' : 'Road Test')}</span>
      </div>

      <div class="card-teams-scoreboard">
        <div class="team-side um-side">
          <div class="team-emblem-badge um-logo">M</div>
          <div class="team-text">
            <span class="team-abbr">MICH</span>
            <span class="team-ranking-sub">${game.isHome ? 'HOME' : 'AWAY'}</span>
          </div>
        </div>

        <div class="score-center">
          <div class="proj-score-box">
            <span class="score-ut text-maize">${adj.projUt}</span>
            <span class="score-divider">-</span>
            <span class="score-opp">${adj.projOpp}</span>
          </div>
          <span class="vegas-line">LINE: UM ${game.vegasSpread > 0 ? `+${game.vegasSpread}` : game.vegasSpread}</span>
        </div>

        <div class="team-side opp-side">
          <div class="team-emblem-badge" style="background:${game.oppColor}; border-color:${game.oppSecondary || '#FFF'}; color:#FFF;">
            ${game.oppRank || game.oppAbbr.substring(0, 3)}
          </div>
          <div class="team-text">
            <span class="team-abbr">${game.oppAbbr}</span>
            <span class="team-ranking-sub">${game.oppRank || 'FBS'}</span>
          </div>
        </div>
      </div>

      <div class="card-stats-row">
        <div class="prob-labels-sm">
          <span class="text-muted">Win Probability</span>
          <span class="${adj.winProb >= 50 ? 'text-maize' : 'text-danger'} font-mono font-bold">${adj.winProb}%</span>
        </div>
        <div class="prob-track-sm">
          <div class="prob-fill-sm" style="width: ${adj.winProb}%"></div>
        </div>
      </div>

      <div class="card-actions">
        <div class="wl-toggle-wrap">
          <span>PICK:</span>
          <button class="wl-toggle-btn ${isWin ? 'win' : 'loss'}" data-gameid="${game.id}">
            ${isWin ? 'W' : 'L'}
          </button>
        </div>

        <button class="sim-btn-sm" data-gameid="${game.id}">
          <i class="fa-solid fa-calculator"></i> Simulate Drive
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach W/L Pick Toggle Event Listeners
  document.querySelectorAll('.wl-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('click');
      const gameId = btn.getAttribute('data-gameid');
      const current = state.gamePicks[gameId] || 'W';
      state.gamePicks[gameId] = current === 'W' ? 'L' : 'W';
      renderScheduleGrid();
      updateTopMetricsAndPlayoff();
    });
  });

  // Attach Simulation Modal Open Listeners
  document.querySelectorAll('.sim-btn-sm').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('whistle');
      const gameId = btn.getAttribute('data-gameid');
      openSimModal(gameId);
    });
  });
}

// Update picks automatically from tuning sliders
function updatePicksFromTuning() {
  SCHEDULE_DATA.forEach(game => {
    const adj = calculateAdjustedMatchup(game);
    state.gamePicks[game.id] = adj.isWin ? 'W' : 'L';
  });
  renderScheduleGrid();
  updateTopMetricsAndPlayoff();
  drawHypeCard();
}

// Open Simulation Modal & Run 10k Monte Carlo Drives
function openSimModal(gameId) {
  const game = SCHEDULE_DATA.find(g => g.id === gameId);
  if (!game) return;
  state.activeModalGame = game;

  const adj = calculateAdjustedMatchup(game);

  document.getElementById('modalWeekTag').innerText = `${game.week} • ${game.date}`;
  document.getElementById('modalMatchupTitle').innerText = `MICHIGAN vs ${game.opponent.toUpperCase()}`;

  document.getElementById('simUtScore').innerText = adj.projUt;
  document.getElementById('simOppScore').innerText = adj.projOpp;
  document.getElementById('simOppName').innerText = game.oppAbbr;
  document.getElementById('simUtWinPct').innerText = `${adj.winProb}% WIN`;
  document.getElementById('simOppWinPct').innerText = `${(100 - adj.winProb).toFixed(1)}% WIN`;

  // Generate 10,000 Monte Carlo simulated key drive logs
  const logContainer = document.getElementById('driveLogList');
  logContainer.innerHTML = '';

  const driveEvents = [
    { type: 'td', text: `Q1 (08:42) - Jordan Marshall 18-yard explosive touchdown run up the middle. (UM 7 - ${game.oppAbbr} 0)` },
    { type: 'fg', text: `Q2 (04:15) - Michigan converts 44-yard field goal after 11-play smashmouth drive.` },
    { type: 'to', text: `Q2 (00:30) - Wink Martindale blitz forces hurried fumble! Michigan recovers at midfield!` },
    { type: 'td', text: `Q3 (09:12) - Bryce Underwood 38-yard touchdown strike down the seam!` },
    { type: 'to', text: `Q4 (03:45) - Michigan front-seven stops 4th & 2 rush attempt to ice the game!` }
  ];

  driveEvents.forEach(item => {
    const div = document.createElement('div');
    div.className = `drive-log-item ${item.type}`;
    div.innerHTML = `<span>${item.text}</span> <i class="fa-solid fa-football text-maize"></i>`;
    logContainer.appendChild(div);
  });

  // Tactical Scout Content
  const scoutPane = document.getElementById('scoutPaneContent');
  scoutPane.innerHTML = `
    <div class="intel-card">
      <div class="intel-badge"><i class="fa-solid fa-bullseye text-maize"></i> X-FACTOR</div>
      <h3>${game.scoutReport.xFactor}</h3>
    </div>
    <div class="intel-card" style="margin-top:0.75rem;">
      <div class="intel-badge"><i class="fa-solid fa-arrows-split-up-and-left text-cyan"></i> KEY MATCHUP</div>
      <p>${game.scoutReport.keyMatchup}</p>
    </div>
    <div class="intel-card" style="margin-top:0.75rem;">
      <div class="intel-badge"><i class="fa-solid fa-book-open text-maize"></i> GAME INTEL</div>
      <p>${game.scoutReport.summary}</p>
    </div>
  `;

  document.getElementById('simModal').classList.add('open');
  drawRadarChart(game);
}

// Draw Matchup Radar Chart
function drawRadarChart(game) {
  const canvas = document.getElementById('matchupRadarCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(cx, cy) - 35;

  ctx.clearRect(0, 0, w, h);

  const categories = ['PASS ATK', 'RUSH ATK', 'PASS DEF', 'RUSH DEF', 'PRESSURE', 'SPECIAL TMS'];
  const numCats = categories.length;
  const angleStep = (Math.PI * 2) / numCats;

  // Background Web
  for (let r = 0.2; r <= 1.0; r += 0.2) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < numCats; i++) {
      const a = i * angleStep - Math.PI / 2;
      const x = cx + Math.cos(a) * (radius * r);
      const y = cy + Math.sin(a) * (radius * r);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Axes & Labels
  ctx.fillStyle = '#94A3B8';
  ctx.font = '10px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let i = 0; i < numCats; i++) {
    const a = i * angleStep - Math.PI / 2;
    const x = cx + Math.cos(a) * radius;
    const y = cy + Math.sin(a) * radius;
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();

    const lx = cx + Math.cos(a) * (radius + 20);
    const ly = cy + Math.sin(a) * (radius + 20);
    ctx.fillText(categories[i], lx, ly);
  }

  // Michigan Polygon (Maize)
  const umStats = game.radarStats.um;
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 203, 5, 0.28)';
  ctx.strokeStyle = '#FFCB05';
  ctx.lineWidth = 2.5;

  for (let i = 0; i < numCats; i++) {
    const a = i * angleStep - Math.PI / 2;
    const val = (umStats[i] / 100) * radius;
    const x = cx + Math.cos(a) * val;
    const y = cy + Math.sin(a) * val;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Opponent Polygon (Slate)
  const oppStats = game.radarStats.opp;
  ctx.beginPath();
  ctx.fillStyle = 'rgba(148, 163, 184, 0.22)';
  ctx.strokeStyle = '#94A3B8';
  ctx.lineWidth = 2;

  for (let i = 0; i < numCats; i++) {
    const a = i * angleStep - Math.PI / 2;
    const val = (oppStats[i] / 100) * radius;
    const x = cx + Math.cos(a) * val;
    const y = cy + Math.sin(a) * val;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// Group Chat Hype Card Canvas Generator
function drawHypeCard() {
  const canvas = document.getElementById('hypeCardCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  const select = document.getElementById('cardGameSelect');
  const gameId = select ? select.value : 'week-13';
  const game = SCHEDULE_DATA.find(g => g.id === gameId) || SCHEDULE_DATA[11];
  const adj = calculateAdjustedMatchup(game);

  const userHandle = document.getElementById('cardUserHandle').value || "Jake's Official Pick";
  let customInput = document.getElementById('cardCustomNote');
  let hotTake = customInput ? customInput.value : '';
  if (!hotTake || hotTake.trim() === '') {
    hotTake = getContextAwareHotTake(game, adj);
  }

  // Background Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, '#060911');
  bgGrad.addColorStop(0.5, '#0B1120');
  bgGrad.addColorStop(1, '#00274C');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Border & Glow
  ctx.strokeStyle = '#FFCB05';
  ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, w - 20, h - 20);

  // Header Badge
  ctx.fillStyle = '#00274C';
  ctx.beginPath();
  ctx.roundRect(30, 30, w - 60, 48, 10);
  ctx.fill();
  ctx.strokeStyle = '#FFCB05';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFCB05';
  ctx.font = 'bold 18px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('〽️ MICHIGAN WOLVERINES AI GAMEDAY ORACLE', w / 2, 60);

  // User Handle
  ctx.fillStyle = '#FFE66D';
  ctx.font = 'bold 22px Bebas Neue, sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText(userHandle.toUpperCase(), w / 2, 115);

  // Matchup Title
  ctx.fillStyle = '#94A3B8';
  ctx.font = '14px Outfit, sans-serif';
  ctx.fillText(`${game.week} • ${game.stadium.toUpperCase()}`, w / 2, 145);

  // Score Card Box
  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.beginPath();
  ctx.roundRect(35, 170, w - 70, 220, 16);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 203, 5, 0.4)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Michigan Side
  ctx.fillStyle = '#FFCB05';
  ctx.font = 'bold 36px Bebas Neue, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('MICHIGAN 〽️', 60, 230);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 64px Bebas Neue, sans-serif';
  ctx.fillText(`${adj.projUt}`, 60, 310);
  ctx.fillStyle = '#10B981';
  ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.fillText(`WIN CHANCE: ${adj.winProb}%`, 60, 350);

  // VS divider
  ctx.fillStyle = '#64748B';
  ctx.font = 'bold 24px Bebas Neue, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VS', w / 2, 280);

  // Opponent Side
  ctx.fillStyle = '#E5E7EB';
  ctx.font = 'bold 36px Bebas Neue, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(`${game.oppAbbr}`, w - 60, 230);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 64px Bebas Neue, sans-serif';
  ctx.fillText(`${adj.projOpp}`, w - 60, 310);
  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.fillText(`SPREAD: UM ${game.vegasSpread > 0 ? `+${game.vegasSpread}` : game.vegasSpread}`, w - 60, 350);

  // Hot Take Box
  ctx.fillStyle = 'rgba(0, 39, 76, 0.4)';
  ctx.beginPath();
  ctx.roundRect(35, 415, w - 70, 140, 12);
  ctx.fill();
  ctx.strokeStyle = '#FFCB05';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = '#FFCB05';
  ctx.font = 'bold 14px Outfit, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('🔥 LOCK OF THE WEEK / HOT TAKE:', 55, 445);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '16px Outfit, sans-serif';
  wrapCanvasText(ctx, hotTake, 55, 480, w - 110, 24);

  // Watermark Footer
  ctx.fillStyle = '#FFCB05';
  ctx.font = 'bold 16px Bebas Neue, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SIMULATED VIA ANTIGRAVITY AI ENGINE • HAIL TO THE VICTORS 〽️', w / 2, 600);
}

// Canvas Text Wrapping Helper
function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

// Populate Matchup Select Dropdown for Hype Card
function populateHypeCardSelect() {
  const select = document.getElementById('cardGameSelect');
  if (!select) return;
  select.innerHTML = '';
  SCHEDULE_DATA.forEach(game => {
    const opt = document.createElement('option');
    opt.value = game.id;
    opt.innerText = `${game.week}: vs ${game.opponent} (${game.isHome ? 'Home' : 'Away'})`;
    if (game.id === 'week-13') opt.selected = true; // Default to The Game
    select.appendChild(opt);
  });
}

// Toast Notifications Helper
function showToast(msg) {
  const existing = document.querySelector('.custom-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.innerText = msg;
  toast.style.position = 'fixed';
  toast.style.bottom = '85px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#00274C';
  toast.style.border = '1px solid #FFCB05';
  toast.style.color = '#FFCB05';
  toast.style.padding = '0.65rem 1.25rem';
  toast.style.borderRadius = '30px';
  toast.style.fontFamily = 'Outfit, sans-serif';
  toast.style.fontSize = '0.85rem';
  toast.style.fontWeight = '700';
  toast.style.zIndex = '9999';
  toast.style.boxShadow = '0 8px 30px rgba(0,0,0,0.8)';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// Initialize Application Events
document.addEventListener('DOMContentLoaded', () => {
  // Populate Card Select
  populateHypeCardSelect();

  // Initialize Default Picks
  SCHEDULE_DATA.forEach(game => {
    const adj = calculateAdjustedMatchup(game);
    state.gamePicks[game.id] = adj.isWin ? 'W' : 'L';
  });

  renderScheduleGrid();
  updateTopMetricsAndPlayoff();

  // Schedule Filter Tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      playSound('click');
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeFilter = tab.getAttribute('data-filter');
      renderScheduleGrid();
    });
  });

  // Sound Toggle
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      soundBtn.classList.toggle('active', state.soundEnabled);
      soundBtn.innerHTML = state.soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
      if (state.soundEnabled) playSound('whistle');
    });
  }

  // Sliders Inputs
  const qbSlider = document.getElementById('qbRatingSlider');
  const rbSlider = document.getElementById('rbSlider');
  const defSlider = document.getElementById('defenseSlider');
  const toSlider = document.getElementById('turnoverSlider');
  const crowdSlider = document.getElementById('crowdSlider');

  if (qbSlider) {
    qbSlider.addEventListener('input', (e) => {
      state.sliders.qbRating = parseInt(e.target.value);
      const val = state.sliders.qbRating;
      let label = '100% (Solid Starter Form)';
      if (val >= 140) label = `${val}% (🔥 Heisman Contender / Prodigy)`;
      else if (val >= 115) label = `${val}% (Elite All-Big Ten)`;
      else if (val >= 90) label = `${val}% (Solid Starter Form)`;
      else if (val >= 65) label = `${val}% (⚠️ Inconsistent / Sacked)`;
      else label = `${val}% (🚨 Freshman Slump / Bench)`;
      
      document.getElementById('qbValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  if (rbSlider) {
    rbSlider.addEventListener('input', (e) => {
      state.sliders.rbRating = parseInt(e.target.value);
      const val = state.sliders.rbRating;
      let label = '100% (Physical Big Ten Ground Game)';
      if (val >= 140) label = `${val}% (🚜 250+ Yds/G Bulldozer)`;
      else if (val >= 115) label = `${val}% (Top 5 Big Ten Ground Attack)`;
      else if (val >= 90) label = `${val}% (Physical Ground Game)`;
      else label = `${val}% (⚠️ Stuffed at Line of Scrimmage)`;

      document.getElementById('rbValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  if (defSlider) {
    defSlider.addEventListener('input', (e) => {
      state.sliders.defense = parseInt(e.target.value);
      const val = state.sliders.defense;
      let label = '100% (Wink Martindale Pressure)';
      if (val >= 140) label = `${val}% (🛡️ Brick Wall / 5+ Sacks/G)`;
      else if (val >= 115) label = `${val}% (Top 5 Defense)`;
      else if (val >= 90) label = `${val}% (Lockdown)`;
      else label = `${val}% (🚨 Vulnerable Secondary)`;

      document.getElementById('defValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  if (toSlider) {
    toSlider.addEventListener('input', (e) => {
      state.sliders.turnover = parseInt(e.target.value);
      const val = state.sliders.turnover;
      let label = 'Neutral (0)';
      if (val > 0) label = `+${val} (⚡ Takeaway Dominance)`;
      else if (val < 0) label = `${val} (🚨 Fumbles & Interceptions)`;

      document.getElementById('turnoverValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  if (crowdSlider) {
    crowdSlider.addEventListener('input', (e) => {
      state.sliders.crowd = parseInt(e.target.value);
      const val = state.sliders.crowd;
      let label = '110,000 Maize Out (100%)';
      if (val >= 135) label = `Deafening 115dB Roar (${val}%)`;
      else if (val <= 70) label = `Quiet Opponent Stadium (${val}%)`;

      document.getElementById('crowdValDisplay').innerText = label;
      updatePicksFromTuning();
    });
  }

  // Scenario Presets Handler
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const preset = btn.getAttribute('data-preset');
      if (preset === 'baseline') {
        state.sliders = { qbRating: 100, rbRating: 100, defense: 100, turnover: 0, crowd: 100 };
        showToast('🎯 Baseline loaded: 9-3 Big Ten Contender');
      } else if (preset === 'playoff') {
        state.sliders = { qbRating: 115, rbRating: 110, defense: 110, turnover: 1, crowd: 100 };
        showToast('🏆 Playoff Lock loaded: 11-1 (Beat Ohio State)');
      } else if (preset === 'undefeated') {
        state.sliders = { qbRating: 125, rbRating: 120, defense: 115, turnover: 2, crowd: 110 };
        showToast('⚡ Undefeated loaded: 12-0 Big Ten Champions');
      } else if (preset === 'godmode') {
        state.sliders = { qbRating: 150, rbRating: 140, defense: 140, turnover: 3, crowd: 120 };
        showToast('👑 God Mode loaded: 15-0 Undisputed National Champs');
      } else if (preset === 'chaos') {
        state.sliders = { qbRating: 75, rbRating: 80, defense: 75, turnover: -1, crowd: 85 };
        showToast('🚨 Upset Chaos loaded: 7-5 Season Struggles');
      }

      if (qbSlider) qbSlider.value = state.sliders.qbRating;
      if (rbSlider) rbSlider.value = state.sliders.rbRating;
      if (defSlider) defSlider.value = state.sliders.defense;
      if (toSlider) toSlider.value = state.sliders.turnover;
      if (crowdSlider) crowdSlider.value = state.sliders.crowd;

      // Update text displays
      const qVal = state.sliders.qbRating;
      document.getElementById('qbValDisplay').innerText = qVal >= 140 ? `${qVal}% (🔥 Generational Prodigy)` : qVal >= 115 ? `${qVal}% (Elite All-Big Ten)` : qVal >= 90 ? `${qVal}% (Solid Starter Form)` : `${qVal}% (⚠️ Struggles / Sacks)`;
      
      const rVal = state.sliders.rbRating;
      document.getElementById('rbValDisplay').innerText = rVal >= 140 ? `${rVal}% (🚜 250+ Yds/G Bulldozer)` : rVal >= 115 ? `${rVal}% (Top 5 Ground Game)` : rVal >= 90 ? `${rVal}% (Physical Ground Game)` : `${rVal}% (⚠️ Stuffed at LOS)`;

      const dVal = state.sliders.defense;
      document.getElementById('defValDisplay').innerText = dVal >= 140 ? `${dVal}% (🛡️ Brick Wall)` : dVal >= 115 ? `${dVal}% (Top 5 Defense)` : dVal >= 90 ? `${dVal}% (Lockdown)` : `${dVal}% (⚠️ Vulnerable Secondary)`;

      const tVal = state.sliders.turnover;
      document.getElementById('turnoverValDisplay').innerText = tVal > 0 ? `+${tVal} (⚡ Takeaways)` : tVal < 0 ? `${tVal} (🚨 Turnovers)` : 'Neutral (0)';

      const cVal = state.sliders.crowd;
      document.getElementById('crowdValDisplay').innerText = cVal > 110 ? `Deafening 115dB (${cVal}%)` : `110,000 Maize Out (${cVal}%)`;

      updatePicksFromTuning();
    });
  });

  // Simulate Playoff Run Button
  const simPlayoffBtn = document.getElementById('simulatePlayoffsBtn');
  if (simPlayoffBtn) {
    simPlayoffBtn.addEventListener('click', () => {
      playSound('horn');
      showToast('🏈 Simulating Big Ten & CFP Playoff Gauntlet...');
      updateTopMetricsAndPlayoff();
    });
  }

  // Reset Sliders
  document.getElementById('resetSlidersBtn').addEventListener('click', () => {
    playSound('click');
    state.sliders = { qbRating: 100, rbRating: 100, defense: 100, turnover: 0, crowd: 100 };
    if (qbSlider) qbSlider.value = 100;
    if (rbSlider) rbSlider.value = 100;
    if (defSlider) defSlider.value = 100;
    if (toSlider) toSlider.value = 0;
    if (crowdSlider) crowdSlider.value = 100;

    document.getElementById('qbValDisplay').innerText = '100% (Solid Starter Form)';
    document.getElementById('rbValDisplay').innerText = '100% (Physical Big Ten Ground Game)';
    document.getElementById('defValDisplay').innerText = '100% (Wink Martindale Pressure)';
    document.getElementById('turnoverValDisplay').innerText = 'Neutral (0)';
    document.getElementById('crowdValDisplay').innerText = '110,000 Maize Out';

    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    const baselineBtn = document.querySelector('.preset-btn[data-preset="baseline"]');
    if (baselineBtn) baselineBtn.classList.add('active');

    updatePicksFromTuning();
    showToast('Simulation weights reset to baseline.');
  });

  // Re-simulate button in Modal
  document.getElementById('runSimButton').addEventListener('click', () => {
    playSound('whistle');
    if (state.activeModalGame) {
      openSimModal(state.activeModalGame.id);
    }
  });

  // Modal Sub-tabs
  document.querySelectorAll('.sub-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      playSound('click');
      document.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = tab.getAttribute('data-subtab');
      const pane = document.getElementById(`pane-${targetPane}`);
      if (pane) pane.classList.add('active');

      if (targetPane === 'radar' && state.activeModalGame) {
        drawRadarChart(state.activeModalGame);
      }
    });
  });

  // Close Simulation Modal
  document.getElementById('closeSimModalBtn').addEventListener('click', () => {
    document.getElementById('simModal').classList.remove('open');
  });

  // Open Hype Card Modal
  const openCardBtn = document.getElementById('openHypeCardBtn');
  if (openCardBtn) {
    openCardBtn.addEventListener('click', () => {
      playSound('horn');
      const curGameId = document.getElementById('cardGameSelect').value || 'week-13';
      const curGame = SCHEDULE_DATA.find(x => x.id === curGameId) || SCHEDULE_DATA[11];
      const curAdj = calculateAdjustedMatchup(curGame);
      document.getElementById('cardCustomNote').value = getContextAwareHotTake(curGame, curAdj);
      document.getElementById('cardModal').classList.add('open');
      drawHypeCard();
    });
  }

  // Export card from inside sim modal
  const modalExportBtn = document.getElementById('modalExportCardBtn');
  if (modalExportBtn) {
    modalExportBtn.addEventListener('click', () => {
      document.getElementById('simModal').classList.remove('open');
      if (state.activeModalGame) {
        document.getElementById('cardGameSelect').value = state.activeModalGame.id;
        const curAdj = calculateAdjustedMatchup(state.activeModalGame);
        document.getElementById('cardCustomNote').value = getContextAwareHotTake(state.activeModalGame, curAdj);
      }
      document.getElementById('cardModal').classList.add('open');
      drawHypeCard();
    });
  }

  // Close Card Modal
  document.getElementById('closeCardModalBtn').addEventListener('click', () => {
    document.getElementById('cardModal').classList.remove('open');
  });

  // Card select change
  const cardSelect = document.getElementById('cardGameSelect');
  if (cardSelect) {
    cardSelect.addEventListener('change', () => {
      const g = SCHEDULE_DATA.find(x => x.id === cardSelect.value);
      if (g) {
        const a = calculateAdjustedMatchup(g);
        document.getElementById('cardCustomNote').value = getContextAwareHotTake(g, a);
      }
      drawHypeCard();
    });
  }

  document.getElementById('cardUserHandle').addEventListener('input', drawHypeCard);
  document.getElementById('cardCustomNote').addEventListener('input', drawHypeCard);

  // Mobile Bottom Navigation Click Handlers
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      if (targetId) {
        playSound('click');
        document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const targetElem = document.querySelector(`.${targetId}`);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Mobile Floating Hype Button
  const mobileHypeBtn = document.getElementById('mobileHypeBtn');
  if (mobileHypeBtn) {
    mobileHypeBtn.addEventListener('click', () => {
      playSound('horn');
      const curGameId = document.getElementById('cardGameSelect').value || 'week-13';
      const curGame = SCHEDULE_DATA.find(x => x.id === curGameId) || SCHEDULE_DATA[11];
      const curAdj = calculateAdjustedMatchup(curGame);
      document.getElementById('cardCustomNote').value = getContextAwareHotTake(curGame, curAdj);
      document.getElementById('cardModal').classList.add('open');
      drawHypeCard();
    });
  }

  // Native Mobile Share API Handler
  const mobileShareBtn = document.getElementById('mobileNativeShareBtn');
  if (mobileShareBtn) {
    mobileShareBtn.addEventListener('click', async () => {
      playSound('whistle');
      const canvas = document.getElementById('hypeCardCanvas');
      const status = document.getElementById('cardCopyStatus');

      try {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const file = new File([blob], 'michigan-gameday-pick.png', { type: 'image/png' });

          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: 'Michigan Wolverines Football AI Pick',
              text: 'Check out my Michigan Wolverines 2026 Game Day Oracle prediction! Hail to the Victors! 〽️'
            });
            if (status) status.innerText = 'Shared successfully! 〽️';
          } else {
            // Fallback to Clipboard copy
            const item = new ClipboardItem({ 'image/png': blob });
            await navigator.clipboard.write([item]);
            if (status) status.innerText = 'Image copied to clipboard! Paste directly into chat. 〽️';
          }
        });
      } catch (err) {
        if (status) status.innerText = 'Use Download Image button below.';
      }
    });
  }

  // Download Card as PNG Image
  const downloadBtn = document.getElementById('downloadCardBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      playSound('horn');
      const canvas = document.getElementById('hypeCardCanvas');
      const link = document.createElement('a');
      link.download = 'michigan-wolverines-gameday-pick.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      const status = document.getElementById('cardCopyStatus');
      if (status) status.innerText = 'Saved image to downloads! 〽️';
    });
  }

  // Copy Image to Clipboard
  const copyBtn = document.getElementById('copyCardBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      playSound('click');
      const canvas = document.getElementById('hypeCardCanvas');
      const status = document.getElementById('cardCopyStatus');
      try {
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          if (status) status.innerText = 'Image copied! Paste into iMessage or GroupMe. 〽️';
        });
      } catch (err) {
        if (status) status.innerText = 'Click "Save Image to Photos" instead.';
      }
    });
  }
});

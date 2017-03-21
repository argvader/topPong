import data from '../data/leaders';

function leaderboardReducer(leaders = data, action) {
  switch (action.type) {
    case 'ADD_PLAYER': {
      return [
        ...leaders,
        action.payload
      ];
    }
    case 'ADD_WIN': {
      const winner = Math.floor(Math.random() * leaders.length);
      return leaders.map((player, idx) => {
        const p = player;
        if (idx === winner) { p.wins += 1; }
        return p;
      });
    }
    default:
      return leaders;
  }
}

export default leaderboardReducer;

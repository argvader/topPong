import data from '../data/leaders';

function leaderboardReducer(leaders = data, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return leaders;
    case 'ADD_WIN':
      console.log('add win');
      return leaders;
    default:
      return leaders;
  }
}

export default leaderboardReducer;

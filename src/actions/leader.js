import Guid from 'guid';

function addPlayer(name) {
  return {
    type: 'ADD_PLAYER',
    payload: {
      id: Guid.raw(),
      wins: 0,
      name
    }
  };
}

function addWin() {
  return {
    type: 'ADD_WIN'
  };
}

export { addPlayer, addWin };

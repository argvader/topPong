import * as actions from './leader';

describe('Leader actions', () => {
  it('should create an action to add player', () => {
    const name = 'Sven';
    const action = actions.addPlayer(name);
    expect(action.type).toEqual('ADD_PLAYER');
    expect(action.payload.name).toEqual(name);
    expect(action.payload.wins).toEqual(0);
    expect(action.payload.id).toBeDefined();
  });
});

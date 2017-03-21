import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../../actions/leader';
import Player from '../Player';

function mapStateToProps(state) {
  return { leaders: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addPlayer: name => dispatch(addPlayer(name))
  };
}

function LeaderBoard(props) {
  const { leaders } = props;
  const byWins = (leaders) => {
    return leaders.sort((a, b) => b.wins - a.wins);
  };

  const handleNewPlayer = (event) => {
    const input = event.target;
    const text = input.value;
    const code = event.keyCode;
    if (code === 13 && text.length > 2) {
      props.addPlayer(text);
      input.value = '';
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Player"
        onKeyDown={ handleNewPlayer } />
      <ul>
        { byWins(leaders).map(player => (
          <li key={ player.id }>
            <Player player={ player } />
          </li>
        ))}
      </ul>
    </div>
  );
}

LeaderBoard.propTypes = {
  leaders: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    wins: React.PropTypes.number
  })).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);

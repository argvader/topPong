import React from 'react';
import { connect } from 'react-redux';
import Player from '../Player';

function mapStateToProps(state) {
  return { leaders: state };
}

function LeaderBoard(props) {
  const { leaders } = props;
  return (
    <div>
      <ul>
        { leaders.map(player => (
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

export default connect(mapStateToProps)(LeaderBoard);

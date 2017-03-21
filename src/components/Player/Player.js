import React from 'react';

function Player(props) {
  const { player } = props;
  return (
    <article>
      { player.name }
      <aside>
        { player.wins }
      </aside>
    </article>
  );
}

Player.propTypes = {
  player: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    wins: React.PropTypes.number
  }).isRequired
};

export default Player;

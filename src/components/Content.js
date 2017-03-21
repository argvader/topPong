import React from 'react';
import LeaderBoard from './LeaderBoard';
import History from './History';
import leaders from '../data/leaders';

function Content() {
  return (
    <div>
      <History leaders={ leaders } />
      <LeaderBoard leaders={ leaders } />
    </div>
  );
}

export default Content;

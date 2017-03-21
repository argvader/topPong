import React from 'react';

const App = function App(props) {
  return (
    <main>
      <h1>Top Pong</h1>
      { props.children }
    </main>
  );
};

App.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.node).isRequired
};

export default App;

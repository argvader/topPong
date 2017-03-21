import React from 'react';

function App(props) {
  return (
    <main>
      <h1>Top Pong</h1>
      { props.children }
    </main>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;

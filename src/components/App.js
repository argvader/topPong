import React from 'react';

function App(props) {
  return (
    <main>
      { props.children }
    </main>
  );
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default App;

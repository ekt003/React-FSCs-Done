'use strict';

var initialHello = function initialHello() {
  return {
    username: 'Cody'
  };
};

//requires this keyword
function renderHello() {
  //onChange is a custom react listener for element.onchange. 
  //We can embed it in elements, but it doesn't get rendered into the HTML
  //Instead it gets interpreted by JSX and adds a listener
  return React.createElement(
    'div',
    null,
    'Hello ',
    this.state.username,
    React.createElement(
      'p',
      null,
      'Change Name:'
    ),
    React.createElement('input', { type: 'text', value: this.state.username, onChange: this.handleChange })
  );
};

function handleNameChange(e) {
  this.setState({
    username: e.target.value
  });
}

var HelloUser = React.createClass({
  displayName: 'HelloUser',

  getInitialState: initialHello,
  handleChange: handleNameChange,
  render: renderHello
});

var init = function init() {
  ReactDOM.render(React.createElement(HelloUser, null), document.getElementById('app'));
};

window.onload = init;

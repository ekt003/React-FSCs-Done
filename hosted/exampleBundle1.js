'use strict';

var renderHello = function renderHello() {
  return React.createElement(
    'div',
    null,
    'Hello World!'
  );
};

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render: renderHello
});

var init = function init() {
  ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));
};

window.onload = init;

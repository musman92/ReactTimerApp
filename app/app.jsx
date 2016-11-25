var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

// App css
require('style!css!sass!applicationStyles')

$(document).foundation();
ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);

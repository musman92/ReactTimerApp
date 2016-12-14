var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('Navigation');

var Main =(props) =>{
  return(
    <div>
      <Navigation/>
      <div className="riw">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
module.exports = Main;
// ReactDOM.render(
//   <h1>Boilerplate app!</h1>,
//   document.getElementById('app')
// );

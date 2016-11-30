var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('Navigation');

var Main =(props) =>{
  return(
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Main.jsx Rendered</p>
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

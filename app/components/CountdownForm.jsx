var React = require('react');
var Clock = require('Clock');

var CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value= '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  start:function(){

  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter Seconds" />
          <button className="button expanded" onClick={this.start}>Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;

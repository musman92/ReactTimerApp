var React = require('react');
var Clock = require('Clock');

var Controls = React.createClass({
  proptypes:{
      countdownStatus: React.PropTypes.string.isRequired,
      onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus){
    return ()=>{
      this.props.onStatusChange(newStatus);
    }
  },
  componentWillReceiveProps: function(newProps){
    console.log('new porps',newProps.countdownStatus);
  },
  render:function(){
    var {countdownStatus}= this.props;
    var renderStartStopButton = () =>{
      if(countdownStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return(
      <div>
        <div className="controls">
          {renderStartStopButton()}
          <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
        </div>
      </div>
    )
  }
});

module.exports = Controls;

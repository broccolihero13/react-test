class PomodoroTimer extends React.Component {
  constructor(){
    super();
    this.state = {timeElapsed:0}
  }
  getTotalTime(){
    return this.props.workingTime + this.props.restingTime;
  }
  countSeconds(){
    setInterval(function(){
      
    }, 1000)
  }
  render(){
    return(
      <div>
        <p>This Timer runs for {this.props.workingTime} minutes, followed by a {this.props.restingTime} minute rest for a total of {this.getTotalTime()} minutes</p>
        <p>A total of {this.state.timeElapsed} seconds has elapsed</p>
      </div>
    );
  }
}
ReactDOM.render(<PomodoroTimer workingTime={25} restingTime={5}/>,document.getElementById('app'));
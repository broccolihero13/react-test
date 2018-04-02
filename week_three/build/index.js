class PomodoroTimer extends React.Component {
  constructor() {
    super();
    this.state = { timeElapsed: 0 };
  }
  getTotalTime() {
    return this.props.workingTime + this.props.restingTime;
  }
  countSeconds() {
    setInterval(function () {}, 1000);
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'This Timer runs for ',
        this.props.workingTime,
        ' minutes, followed by a ',
        this.props.restingTime,
        ' minute rest for a total of ',
        this.getTotalTime(),
        ' minutes'
      ),
      React.createElement(
        'p',
        null,
        'A total of ',
        this.state.timeElapsed,
        ' seconds has elapsed'
      )
    );
  }
}
ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));
class PomodoroTimer extends React.Component {
  constructor() {
    super();
    this.state = { timeElapsed: 0 };
  }
  getTotalTime() {
    return this.props.workingTime + this.props.restingTime;
  }

  componentDidMount() {
    // let startTimer = new Date();
    this.interval = setInterval(this.countSeconds.bind(this), 1000);
    this.setState({ start: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  countSeconds() {
    let currentTime = new Date();
    let timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
    this.setState({ timeElapsed: timeElapsed });
    if (timeElapsed == this.props.workingTime * 60) {
      alert('Working time completed, please begin rest time for 5 minutes');
    }
    if (timeElapsed == this.props.workingTime * 60 + this.props.restingTime * 60) {
      alert('Rest time completed');
      clearInterval(this.interval);
    }
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
import React, { Component } from "react";
import moment from 'moment';
import Controls from './Controls'

class CountDown extends Component {
    state ={
        duration: this.getRemainingTime(),
        paused: false
    }

    componentDidMount(){
      this.interval = setInterval(() => {
        this.setState({
          duration: this.getRemainingTime()
        })
      }, 1000)
    }

    componentWillUnmount(){
      clearInterval(this.interval)
    }

    getRemainingTime(){
      // Current date
      let now = moment(),
      // year
      year = moment({year: now.year() + 1}),

      // difference between the 2
      // return  the duration of the difference
      diff = year.diff(now)

      // beacuse we want to have access to the number of the days hour minutes and seconds. we need to convert from milliseconds to an actual duration
      // return the duration of the difference
      return moment.duration(diff)
    };

  handlePausedToggle = () => {
    // console.log('clicked')
    // this.state({paused: !this.state.paused})

    this.setState((prevState, props) => {
      const paused = !prevState.paused

      if (paused) {
        clearInterval(this.interval)
      }
      else {
        this.interval = setInterval(() => {
          this.setState({
            duration: this.getRemainingTime()
          })
        }, 1000)
      }
      return { paused }
    })
  }


  render() {
    const {duration, paused} = this.state
    return (
        <section className="hero is-dark is-bold has-text-centered is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">New Year is coming!</h1>
              <div className="section">
                <nav className="level">
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Days</p>
                      <p className="title">{Math.floor(duration.asDays())}</p>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Hours</p>
                      <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">Minutes</p>
                      <p className="title">{duration.minutes().toString().padStart(2,'0')}</p>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading">seconds</p>
                      <p className="title">{duration.seconds().toString().padStart(2, '0')}</p>
                    </div>
                  </div>
                </nav>
              </div>
              <Controls paused={paused} onPausedToggle={this.handlePausedToggle}/>
            </div>
          </div>
        </section>  
    );
  }
}

export default CountDown;
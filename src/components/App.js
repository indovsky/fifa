import React, {Component} from 'react';
import AddPlayer from './AddPlayer';
import PlayersList from './PlayersList';
import AddTeam from './AddTeam';
import TeamsList from './TeamsList';
import DrawResult from './DrawResult';
import './App.css';

class App extends Component {

  state = { 
    players: [],
    teams: [],
    result: [],
    step: 1,
  }

  addPlayer = player => {
    this.setState(state => {
      return {
        players: state.players.concat(player)
      }
    })
  }

  addTeam = team => {
    this.setState(state => {
      return {
        teams: state.teams.concat(team)
      }
    })
  }

  draw = () => {
    const result = [];
    let teams = this.state.teams;

    this.state.players.map(player => {
      const drawnTeam = teams[Math.floor(Math.random() * teams.length)];

      result.push({
        name: player,
        team: drawnTeam,
      })

      // Remove drawed team from array
      teams = teams.filter(team => team !== drawnTeam);

      return result;
    });

    this.setState({
      result: result
    });
  }

  canGoToNextStep = () => {
    if(this.state.step === 1 && this.state.players.length >= 2) {
      return true;
    }
    if(this.state.step === 2 && this.state.teams.length >= 2) {
      return true;
    }

    return false;
  }

  nextStep = () => {
    if(this.state.step === 2) {
      this.draw();
    }
    
    this.setState(state => {
      return {
        step: state.step + 1
      }
    })
  }

  prevStep = () => {
    if(this.state.step === 1) return;

    this.setState(state => {
      return {
        step: state.step - 1
      }
    })
  }

  reset = () => {
    this.setState({
      players: [],
      teams: [],
      result: [],
      step: 1,
    });
  }

  showActiveTab = step => {
    switch(step) {
      case 1:
        return (
          <>
          <AddPlayer onPlayerAdd={this.addPlayer} />
          <PlayersList players={this.state.players}/>
          </>
        );
      case 2:
        return (
          <>
          <AddTeam onTeamAdd={this.addTeam} playersCount={this.state.players.length} teamsCount={this.state.teams.length} />
          <TeamsList teams={this.state.teams}/>
          </>
        );
      case 3:
        return (
          <>
          { <DrawResult result={this.state.result} /> }
          </>
        );
      default:
        return (
          <>
          <AddPlayer onPlayerAdd={this.addPlayer}/>
          <PlayersList players={this.state.players}/>
          </>
        );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            { this.showActiveTab(this.state.step) }

            <div className="d-flex justify-content-center gap-4">
              { (this.state.step > 1 && this.state.step !== 3) && <button className="btn btn-secondary" onClick={this.prevStep}>Cofnij</button> }

              { this.canGoToNextStep() && <button className="btn btn-success" onClick={this.nextStep}>
                {this.state.step === 2 ? 'Losuj' : 'Dalej'}</button> }

              { this.state.step === 3 && <button className="btn btn-danger" onClick={this.reset}>Zakończ</button> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
// import dummy_data from './assets/dummy_data.json';
import './App.css';
import {Component} from 'react';
import Header from './components/Header.js';
import Home from './screens/Home.js';
import Player from './screens/Player.js';
import Acerca from './screens/Acerca.js';
import Contacto from './screens/Contacto.js';
import Twifeed from './screens/Twifeed.js';
import Navigation from './components/Navigation.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      playlist: [],
      renderPlayer: false,
      playThis: "0"
    }
  }

  handleClick = (vID) =>{
    this.setState({
      playThis: vID,
      renderPlayer: true
    });
  }

  render(){
    // let renderIt = false;
    let {playlist, playThis} = this.state;

    // if(this.state.playlist.length > 0){
    //   renderIt = true;
    // }

    return (
      <Router>
        <section className="App">
          <Header />
          <Switch>
            <Route path="/" exact render={(props) => <Home playlist={playlist} handleClick={this.handleClick} {...props}/> } />
            <Route path="/player/:vidID" render={(props) => <Player playThis={playThis} {...props}/>} />
            <Route path="/acerca" render={(props) => <Acerca />} />
            <Route path="/contacto" render={(props) => <Contacto />} />
            <Route path="/twifeed" render={(props) => <Twifeed />} />
          </Switch>
          <section id="navigation_section">
            <Navigation />
          </section>
        </section>
      </Router>
    );
  }

  componentDidUpdate(){
    //console.log(this.state.playThis);
  }

  componentDidMount(){
    const playlistID = "PLCll2JR_SR_x4_CUuVxC6rVAf_PO8vLBt";
    const mKey = "AIzaSyB99x7FRIsvwCbvybc65GEMw58TmQP70Co";
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistID}&maxResults=50&key=${mKey}`;

    /*--------------------------------------------------------------------------
      DEV DUMMY DATA
    --------------------------------------------------------------------------*/
    /*this.setState({
      playlist: dummy_data.items
    })*/

    /*--------------------------------------------------------------------------
        REAL API DATA
    --------------------------------------------------------------------------*/
    fetch(url)
      .then(data => data.json())
      .then(data => {
        //Set result to state
        this.setState({
          playlist: data.items
        })
        //console.log(data.items)
        /*data.items.forEach( (v,k) => {
          console.log(v.snippet.resourceId.videoId);
        })*/
        return data;
      })
      .catch(err => console.error("HEY>>>", err));

  }//END COMPONENT DID MOUNT

}

export default App;

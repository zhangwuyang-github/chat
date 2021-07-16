import React from "react";
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import io from 'socket.io-client'

import Home from './home/home'
import Chat from './chat/chat'
import Process from './process/process'

const socket = io.connect('/')

const Appmain = (props) => {
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        ></Chat>
      </div>
      <div className="left">
        <Process></Process>
      </div>
    </React.Fragment>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home socket={socket}></Home>
          </Route>
          <Route path="/chat/:roomname/:username" component={Appmain}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

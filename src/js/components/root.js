import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import _ from 'lodash';
import { HeaderBar } from "./lib/header-bar.js"
import Sidebar from "./containers/Sidebar"
import Canvas from "./canvas"


export class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BrowserRouter>
        <div className="absolute h-100 w-100 bg-gray0-d ph4-m ph4-l ph4-xl pb4-m pb4-l pb4-xl">
        <HeaderBar/>
        <Route exact path="/~draw" render={ () => {
          return (
            <div className="cf w-100 flex ba-m ba-l ba-xl b--gray4 b--gray1-d br1 h-100 h-100-minus-40-m h-100-minus-40-l h-100-minus-40-xl">
              <Sidebar />
              <div className="fr h-100 w-100">
                <Canvas />
              </div>
            </div>
          )}}
        />
        </div>
      </BrowserRouter>
    )
  }
}


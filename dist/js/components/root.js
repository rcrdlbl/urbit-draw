const _jsxFileName = "/Users/przemyslaw/urbit-draw/src/js/components/root.js";import React, { Component } from 'react';
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
      React.createElement(BrowserRouter, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}
        , React.createElement('div', { className: "absolute h-100 w-100 bg-gray0-d ph4-m ph4-l ph4-xl pb4-m pb4-l pb4-xl"         , __self: this, __source: {fileName: _jsxFileName, lineNumber: 18}}
        , React.createElement(HeaderBar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 19}})
        , React.createElement(Route, { exact: true, path: "/~draw", render:  () => {
          return (
            React.createElement('div', { className: "cf w-100 flex ba-m ba-l ba-xl b--gray4 b--gray1-d br1 h-100 h-100-minus-40-m h-100-minus-40-l h-100-minus-40-xl"            , __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
              , React.createElement(Sidebar, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 23}} )
              , React.createElement('div', { className: "fr h-100 w-100"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 24}}
                , React.createElement(Canvas, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 25}} )
              )
            )
          )}, __self: this, __source: {fileName: _jsxFileName, lineNumber: 20}}
        )
        )
      )
    )
  }
}


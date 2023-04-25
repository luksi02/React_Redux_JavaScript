import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {connect, Provider} from "react-redux";
// import Form from "../containers/Form"
// import List from "../containers/List"
import store from "../redux/store"
import Board from "./Board"
import BoardSquare from "./BoardSquare"
import GameBoard from "./GameBoard";

const GameMain = () => (
    <Provider store={store}>
  <div>
    <GameBoard />

    {/*<GameBoard board={board}/>*/}


      {/*<BrowserRouter>*/}
      {/*  <Routes>*/}

      {/*    <Route path="/:filter?" element={<Fragment />?} />*/}
      {/*    <Route path="/done" element={<Fragment />} />*/}
      {/*    <Route path="/not-done" element={<Fragment />} />*/}
      {/*      <Fragment>*/}
      {/*          <Form />*/}
      {/*          <List />*/}
      {/*      </Fragment>*/}

      {/*  </Routes>*/}

      {/*</BrowserRouter>*/}

  </div>
    </Provider>
);

export default GameMain;

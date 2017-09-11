import React from "react";
import {Route} from "react-router-dom";
import Header from "./header";

import BinsMain from '../components/bins/bins_main';
import BinsList from "./bins/bins_list";
import {Bins} from "../../imports/collections/bins";

export default () => {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={BinsList}/>
      <Route path="/bins" component={BinsMain}/>
    </div>
  );
};

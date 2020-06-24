import React from 'react';
import './App.css';
import { Route } from 'react-router';
import {Layout} from "./components/Layout";
import {Home} from "./components/Home";
import {Resume} from "./components/Resume";

function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/Resume' component={Resume} />
    </Layout>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Route } from 'react-router';
import {Layout} from "./components/Layout";
import {Home} from "./components/Home";
import {Resume} from "./components/Resume";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {Projects} from "./components/Projects";

library.add(fab);

function App() {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/Resume' component={Resume} />
      <Route path='/Projects' component={Projects} />
    </Layout>
  );
}

export default App;

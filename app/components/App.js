import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import EasyHeader from './header/header';
import Product from './product/product';
import { Grid,Container,Segment} from 'semantic-ui-react'
import img from '../assets/images/react_logo_512x512.png';

const App = () => {
  return (
    <div>
      <EasyHeader/>
      <Product/>
    </div>
  );
};

export default App;

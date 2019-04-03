import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import dark from './themes/dark';
import light from './themes/light';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';


class App extends PureComponent {

  constructor(props) {
     super(props);
     this.state ={currentTheme:dark};
  }
  toggleTheme = (e) => {
    const currentTheme = this.state.currentTheme;
     if (currentTheme===dark ) {
         this.setState({currentTheme: light});
     } else {
         this.setState({currentTheme: dark});
     }
  }
  render() {
    return (
<div>
        <MuiThemeProvider theme={this.state.currentTheme}> <CssBaseline />
        <div className="App">
         <MyComponent clickHandler={this.toggleTheme}></MyComponent>

        </div>
        </MuiThemeProvider>
</div>
    );
  }
}

export default App
import React,{Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

class MyComponent extends Component {
    render() {
        return (
<div>
            <Button color="primary" onClick={this.props.clickHandler}>Dark</Button>
            <Button color="secondary" onClick={this.props.clickHandler}>Light</Button>
</div>
    );
}}

export default MyComponent;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
	withRouter
} from 'react-router-dom';

import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton/FlatButton'
import Header from '../Layout/Header'



export class Login extends Component {


    state = {

        userName: '',
        password: '',
        flag: false

    }


    onSubmit = (e) => {
        console.log(this.props.test,'login');
        e.preventDefault();
        if(this.state.flag === false  ){       
             this.setState({flag:true})
    }
        //this.setState({flag:this.props.test})
        this.props.changeHeader(this.state.flag);
        this.props.history.push('/');


    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.props.test);


    }

    render() {
        return (
            <MuiThemeProvider>

                <React.Fragment>


                    <form onSubmit={this.onSubmit}  >
                        <h6> Username: </h6>
                        <TextField
                            type='text'
                            name='userName'
                            style={{ flex: '10', padding: '5px' }}
                            placeholder='Username'
                            value={this.state.userName}
                            onChange={this.onChange}
                        />

                        <h6> Password: </h6>


                        <TextField
                            type='password'
                            name='password'
                            style={{ flex: '10', padding: '5px' }}
                            placeholder='Username'
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        <br></br>
                        <FlatButton
                        
                       type="submit"
                        label="Submit"
                        />


                    </form>


                </React.Fragment>

            </MuiThemeProvider>
        )
    }
}

export default withRouter(Login);

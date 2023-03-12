import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './Student';
import Admin from './Admin';
import axios from 'axios';

export default class App extends Component {
    
    constructor() {
        super();
        this.state = {user_id: '', user_role: ''}
    }

    componentDidMount() {
        {
            axios.get('/get-session').then(
                res => {
                    this.setState({
                        user_id: res.data.id,
                        user_role: res.data.user_role
                    })
                    console.log(res.data);
                }
            )
        }
    }
    render() {
        return (
            <BrowserRouter>
                {this.state.user_role==1 ?(<Admin />):(<Student />)}
            </BrowserRouter>

        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeMailId = this.onChangeMailId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            mailId: ''
        }
    }
    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
    }
    onChangeMailId(e) {
        this.setState({
            mailId: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const login = {
            username: this.state.username,
            mailId: this.state.mailId
        }
        axios.post('http://localhost:4000/loginport/add', login)
        .then(res => console.log(res.data));
        
        this.setState({
            username: '',
            mailId: ''
        });
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Register User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name:  </label>
                        <input type="text" className="form-control" value={this.state.username}  onChange={this.onChangeUserName}/>
                    </div>
                    <div className="form-group">
                        <label>Add User Mail Id: </label>
                        <input type="text" className="form-control" value={this.state.mailId}  onChange={this.onChangeMailId}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
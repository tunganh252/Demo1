import React, {Component} from 'react'
import Header from './Components/Header';
import User from './Components/User';
import Settings from './Components/Settings';

import {user} from './Data/Data'
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: user,
        }

    }
            UpdateUser = (newData) => {
                this.setState({user: newData})
            }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <User
                    UserData={this.state.user}
                    UpdateUser={this.UpdateUser}
                    />
                <Settings/>
            </React.Fragment>
        )
    }
}

import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import { render } from "react-dom";
import './App.css';

class App extends Component {
    constructor() {
        super()
        // state is things that can change and affect our app
        // usually lives in the parent component
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    // use "= (params) =>" so "this" points to the place where it was created and not where it happened
    onSearchChange = (event) => {
        // method to change state (always do this!!!)
        // change searchField according to input
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots= { filteredRobots } />
            </div>
        );
    }
}   

export default App;
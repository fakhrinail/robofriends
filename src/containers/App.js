import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

class App extends Component {
    constructor() {
        super()
        // state is things that can change and affect our app
        // usually lives in the parent component
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // making a request to a website
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }

    // use "= (params) =>" so "this" points to the place where it was created and not where it happened
    onSearchChange = (event) => {
        // method to change state (always do this!!!)
        // change searchField according to input
        this.setState({searchField: event.target.value});
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (!robots.length) {
            return <h1 className='f1 tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* CardList is a child of Scroll */}
                    <Scroll>
                        <CardList robots= {filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}   

export default App;
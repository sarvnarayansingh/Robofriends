import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
class App extends Component {
        constructor() {
        super()
        this.state = {
            Robot:[],
            searchfield:""
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
            .then(user=>{this.setState({Robot:user})})
        }
    

    onSearchChange= (event) =>{
        console.log(this.state.searchfield);
        this.setState({searchfield: event.target.value})
        
    }

    render() {
        const {Robot,searchfield} = this.state
        const filterRobot = Robot.filter(data =>{
            return data.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!Robot.length) {
            return <h1>Loading..</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList Robot= {filterRobot} />
                    </Scroll>
                </div>
            )
        }
          
    }
}

export default App;
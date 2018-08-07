// create your App component here
import React from 'react';
// import Button from './components/Button';
// import ExampleComponent from './components/ExampleComponent';
// import Greeting from './components/Greeting';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json()).then(data => this.setState({peopleInSpace: data}))
    }
    render() {
        return <div>Hi</div>
    }
}

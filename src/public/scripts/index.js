import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
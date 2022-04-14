import React from 'react';
import ReactDOM from "react-dom";

class RandomNumbers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {min, max, count} = this.props;
        const numbers = [...Array(count)].map(() => Math.round(Math.random() * (max - min) + min));

        return (
            <div>
                <RandomNumbersInfo min={min} max={max} count={count}/>
                <RandomNumbersList numbers={numbers}/>
            </div>
        )
    }
}

class RandomNumbersInfo extends React.Component {
    render() {
        const {min, max, count} = this.props;
        return (
            <div>{min} {max} {count}</div>
        )
    }
}

class RandomNumbersList extends React.Component {
    render() {
        const numbers = this.props.numbers;
        return (
            <div>
                <h2>Wylosowane wartości:</h2>
                <ul>
                    {numbers.map(e => <li key={e}>{e}</li>)}
                </ul>
            </div>
        )
    }
}


ReactDOM.render(
    <RandomNumbers min={10} max={400} count={42}/>,
    document.getElementById('app')
)
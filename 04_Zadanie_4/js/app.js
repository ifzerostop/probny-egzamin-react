import React from 'react';
import ReactDOM from 'react-dom';

function App(props) {
    return (
        <>
    <div>
        Egzamin
    </div>
    <input type='button' value='Klik'/>
</>
);
}

export default App;

ReactDOM.render(<App/>, document.querySelector('#app'));
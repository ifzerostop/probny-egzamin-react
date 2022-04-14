import React from 'react';
import ReactDOM from 'react-dom';

function Square() {
    const size = "300px"

    const styles = {
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: "50px",
        backgroundColor: "blue"
    }


    return (
        <>
            <div style={styles}/>
            <div style={{
                width: size,
                height: size,
                display: 'flex',
                justifyContent: 'center',
                borderRadius: "50px",
                backgroundColor: "blue"
            }}/>
        </>
    );
}

ReactDOM.render(<Square/>, document.querySelector('#app'));
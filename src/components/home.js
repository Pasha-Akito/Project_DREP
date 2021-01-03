import React from 'react';

export class Home extends React.Component {
//styling to add a picture
//very simple 
    render() {
        const myStyle = {
            // a background image of the teams stadium for ambiance
            backgroundImage: "url(" +
                "https://miro.medium.com/max/1000/1*2Yc6PRbJq9oVdY7QHT9y6g.jpeg" + ")",
            height: "1000px"
        };
        return (
            //Main page with date and time
            <div style={myStyle} >
                <h1>The Official Charts for the week!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
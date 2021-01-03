import React from 'react';
import { Music } from './music';
import axios from 'axios';

export class ListMusic extends React.Component {
//list of musics constructor
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
//assigning a list music
//store info
    state = {
        music: []
    };
//load the data
    ReloadData(){
        axios.get('http://localhost:4000/api/music')
            .then((response) => {
                this.setState({ music: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }
//sending the data to display
    componentDidMount() {
        axios.get('http://localhost:4000/api/music')
            .then((response) => {
                this.setState({ music: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        const myStyle = {
            // a background image of the teams stadium for ambiance
            backgroundImage: "url(" +
                "https://cdn.wallpapersafari.com/40/34/Jwqrfp.jpg" + ")",
            height: "900px"
        }
        return (
            
            <div  style={myStyle}>
                <h1>This is the read component.</h1>
                <Music music={this.state.music} ReloadData={this.ReloadData}></Music>
            </div>
        );
    }
}


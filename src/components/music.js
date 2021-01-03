import React from 'react';
import {MusicItem} from './musicItem';

export class Music extends React.Component{
//accessing the music items
    render(){
        return this.props.music.map( (music)=>{
            return <MusicItem music={music} ReloadData={this.props.ReloadData}></MusicItem>
        })
    }
}
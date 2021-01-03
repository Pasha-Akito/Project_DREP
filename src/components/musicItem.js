import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class MusicItem extends React.Component {
//constructor
    constructor() {
        super();
        //delete method
        this.DeleteMusic = this.DeleteMusic.bind(this);
    }
//delete from the mongodb and server
    DeleteMusic(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/music/'+this.props.music._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            //simple styling
            //display the information below
            <div style={{
                display: "inline-block",
                justifyContent: "center",
                backgroundColor: "FireBrick",
                alignItems: "center",
                
              }}>
                <Card>
                    <Card.Header>{this.props.music.SongTitle}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.music.AlbumCover} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.music.ReleaseDate}
                            </footer>
                        </blockquote>
                        <Button variant="danger" onClick={this.DeleteMusic}>Delete</Button>
                        <Link to={'/edit/'+this.props.music._id} 
                        className="btn btn-primary">Edit</Link>
                    </Card.Body>
                   
                </Card>
            </div>
        );
    }
}
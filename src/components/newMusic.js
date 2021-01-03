import React from 'react';
import axios from 'axios';

export class NewMusic extends React.Component {
//constructor
    constructor() {
        super();
//binding the methods
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSongTitle = this.onChangeSongTitle.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangeAlbumCover = this.onChangeAlbumCover.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeAlbum = this.onChangeAlbum.bind(this);

        this.state = {
            SongTitle: '',
            ReleaseDate: '',
            AlbumCover: '',
            Positon: '',
            Album: ''
        }
    }
//implement the methods
    onChangeSongTitle(e) {
        this.setState({
            SongTitle: e.target.value
        });
    }

    onChangeReleaseDate(e) {
        this.setState({
            ReleaseDate: e.target.value
        });
    }
    onChangeAlbumCover(e) {
        this.setState({
            AlbumCover: e.target.value
        })
    }
    onChangePosition(e) {
        this.setState({
            Positon: e.target.value
        })
    }
    onChangeAlbum(e) {
        this.setState({
            Album: e.target.value
        })
    }
    //submit the data
    onSubmit(e) {
        e.preventDefault();
        alert("Music: " + this.state.SongTitle + " "
            + this.state.ReleaseDate + " " +
            this.state.AlbumCover);

        const newMusic = {
            SongTitle: this.state.SongTitle,
            ReleaseDate: this.state.ReleaseDate,
            AlbumCover: this.state.AlbumCover, 
            Positon: this.state.Positon, 
            Album: this.state.Album

        };
//put the data on to the server/json
        axios.post('http://localhost:4000/api/music', newMusic)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));

    }
//display below
    render() {
        const myStyle = {
            // a background image of the teams stadium for ambiance
            backgroundImage: "url(" +
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZw9IEs9FYUFVZS0OFPvC8cR5dW0xT3OP8w&usqp=CAU" + ")",
            height: "900px"
        }
        return (
            <div className='App'>
                <h1 style={myStyle}>
                  
                </h1>
                <h1>
                Add to the Charts
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Song Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.SongTitle}
                            onChange={this.onChangeSongTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Release Date / Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.ReleaseDate}
                            onChange={this.onChangeReleaseDate}></input>
                    </div>
                    <div className='form-group'>
                        <label>Album Cover: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.AlbumCover}
                            onChange={this.onChangeAlbumCover}>
                        </textarea>
                    </div>

                    <div className='form-group'>
                        <label>Position in charts: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Positon}
                            onChange={this.onChangePosition}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Album: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Album}
                            onChange={this.onChangeAlbum}>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Song'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
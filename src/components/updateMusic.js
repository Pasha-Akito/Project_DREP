import React from 'react';
import axios from 'axios';

export class UpdateMusic extends React.Component {
//constructor
    constructor() {
        super();
//binding
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSongTitle = this.onChangeSongTitle.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangeAlbumCover = this.onChangeAlbumCover.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeAlbum = this.onChangeAlbum.bind(this);
//setting empty to each variable
        this.state = {
            SongTitle: '',
            ReleaseDate: '',
            AlbumCover: '',
            Positon: '',
            Album: ''
        }
    }
    componentDidMount(){
        console.log("load "+this.props.match.params.id);
//get the data from the server
        axios.get('http://localhost:4000/api/music/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                SongTitle:response.data.SongTitle,
                ReleaseDate:response.data.ReleaseDate,
                AlbumCover:response.data.AlbumCover,
                Positon:response.data.Positon,
                Album:response.data.Album,
                _id:response.data._id
            })
        })
        .catch((err)=>{
            console.log(err);
        });
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
//submit to the server
    onSubmit(e) {
        e.preventDefault();
        alert("Music: " + this.state.SongTitle + " "
            + this.state.ReleaseDate + " " +
            this.state.AlbumCover);

            const newMusic ={
                SongTitle:this.state.SongTitle,
                ReleaseDate:this.state.ReleaseDate,
                AlbumCover:this.state.AlbumCover,
                Position:this.state.Position,
                Album:this.state.Album
            };

        // axios.post('http://localhost:4000/api/movies', newMovie)
        // .then(response => console.log(response.data))
        // .catch(error => console.log(error));    
            axios.put('http://localhost:4000/api/music/'+this.state._id, newMusic)
            .then((xyz)=>{
                console.log(xyz);
            })
            .catch((err)=>{
                console.log(err);
            });
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Edit Song Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.SongTitle}
                            onChange={this.onChangeSongTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Edit Release Date: </label>
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
                        <label>Char Position: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Positon}
                            onChange={this.onChangePosition}>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <label>Album Cover: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Album}
                            onChange={this.onChangeAlbum}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
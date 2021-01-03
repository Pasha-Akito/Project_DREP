//declare all that is needed for the servers
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//use cors
//allows for use of get methods etc
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//create a conncection to a database
const strConnection = 'mongodb+srv://Admin:OracleJavabeans1@cluster0.hcemv.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(strConnection, {useNewUrlParser: true});
//create a schema and a new database or collection. 
//Assigning the variables to be stored
const Schema = mongoose.Schema;
const musicSchema = new Schema({
    SongTitle:String,
    ReleaseDate:String,
    AlbumCover: String,
    Positon: String,
    Album:String
})
//create a model
const musicModel = mongoose.model('Music', musicSchema);
//home server page
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//where the json data is stored on server from mongodb
app.get('/api/music', (req, res) => {
    
    musicModel.find((err,data)=>{
        res.json(data);
    })
    
})
//get specific id of data
app.get('/api/music/:id',(req, res)=>{

    console.log(req.params.id);

    musicModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})
//send the id to the database along with other information
app.put('/api/music/:id',(req,res)=>{
    console.log("Update "+req.params.id);

    musicModel.findByIdAndUpdate(req.params.id,
        req.body,
        (err,data)=>{
            res.status(201).send(data);
        })
})
//delete from the server and the database
app.delete('/api/music/:id', (req, res)=>{
    console.log(req.params.id);

    musicModel.findByIdAndDelete({_id:req.params.id},
         (err, data)=>{
        res.send(data);
    })
})

//post the new music stored on server
app.post('/api/music', (req, res) => {
    console.log(req.body);

    musicModel.create({
        SongTitle:req.body.SongTitle,
        ReleaseDate:req.body.ReleaseDate,
        AlbumCover:req.body.AlbumCover,
        Positon:req.body.Positon,
        Album:req.body.Album
    })
    .then()
    .catch();

    res.send('Data Recieved!');
})
//listen at port 3000 to connect
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
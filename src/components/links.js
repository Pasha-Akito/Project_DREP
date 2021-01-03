import React from 'react';

export class Links extends React.Component {
//create a page with links to all the pages
    render() {
        const myStyle = {
            // a background image of the teams stadium for ambiance
            backgroundImage: "url(" +
                "https://d1ngs1zllzvvcs.cloudfront.net/wp-content/uploads/2020/07/Apple-Music-Page-Header-1024x441.jpg" + ")",
            height: "880px"
        };
        return (
            <div style={myStyle} >
               <h1>Welcome</h1>
               <a href="http://localhost:3000/newMusic" style={{ margin: 0 }}> <button type="button" class="btn btn-primary">Add a Song to The Current Charts</button> </a>
               <br>
               </br>
               <br>
               </br>
               <br>
               </br>
               <br>
               </br>
               <a href="http://localhost:3000/listMusic" style={{ margin: 0 }}> <button type="button" class="btn btn-primary">View The Current Charts</button></a>
               <br>
               </br>
               <br>
               </br>
               <br>
               </br>
               <br>
               </br>
               <a href="http://localhost:3000/" style={{ margin: 0 }}> <button type="button" class="btn btn-primary">Return to the Home Page!</button> </a>
               <br>
               </br>
            </div>
        );
    }
}
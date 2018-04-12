import React, { Component } from 'react';
import Photo from './Component/photo';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newphoto: false,
      unphoto_url: "https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg",
    };
  }

  componentDidMount() {
    this.loadImage();  
  }

  retunMeUrl = () => {
    return (this.state.unphoto_url);
  }

  //call to load image
  loadImage = () => {
      var APP_ID = 'e86c61f24845f42eb20b5fe78090e35369ed65ddf26248334f00413bbca2353d';
      var query = 'baby';

      axios
        .get(
//          `https://api.unsplash.com/photos/random/?w=200&h=200&count=1&client_id=${APP_ID}`
//          `https://api.unsplash.com/search/photos/?page=1&per_page=1&query=${query}&client_id=${APP_ID}`
          `https://api.unsplash.com/photos/random/?query=${query}&client_id=${APP_ID}`
        )
      .then(data => {
        console.log(data.data.urls);
        this.setState({unphoto_url:data.data.urls.thumb});
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });

  }


  reqNewImage = (event) => {
    console.log("event raised");

    if ( this.state.newphoto ) {
      this.setState({unphoto_url:
          "https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg"});

      this.setState({newphoto: false});      
    } else {
      this.setState({unphoto_url:
          "https://images.pexels.com/photos/428324/pexels-photo-428324.jpeg"});

      this.setState({newphoto: true});      
    }

    this.loadImage();
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <p>  Hello!!. </p>
        {/* <Photo nurl={this.retunMeUrl()}  /> */ }
        <Photo nurl={ this.state.unphoto_url } reexp={this.reqNewImage} />

      </div>
    );
  }
}

export default App;

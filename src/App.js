import React, { Component } from 'react';
import Photo from './Component/photo'

class App extends Component {
  constructor(){
    super();

    this.state = {
      newphoto: false,
      unphoto_url: "https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg",
    };
  }

  retunMeUrl = () => {
    return (this.state.unphoto_url);
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

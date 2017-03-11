import React, { Component } from 'react';
import logo from './logo.svg';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
     visible: false,
     someText: 'Welcome to a demo',
   }
   setInterval(() => { this.setState({ someText: "activeIndex reset whenever setState is executed" }) }, 3000);
   this.images = [
     'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',
     'https://www.sitebuilderreport.com/assets/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg',
     'http://netdna.webdesignerdepot.com/uploads/2008/12/stock-microstock.jpg',
      'http://budgetstockphoto.com/bamers/stock_photo_spectrum.jpg'
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.someText}</h2>
        </div>
        <div>
        <button onClick={() => { this.setState({ visible: !this.state.visible }); } }>Show images</button>
        <Viewer
        visible={this.state.visible}
        onClose={() => { this.setState({ visible: false }); } }
        images={this.images.map(image => ({ src: image, alt: '' }))}
          />
      </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import HouseCard from './components/HouseCard/HouseCard';
import * as moment from 'moment';
import uuidv4 from 'uuid/v4';

const SIMPLYRETS_USER = 'simplyrets';
const SIMPLYRETS_PASS = 'simplyrets';

class App extends Component {

  constructor() {
    super();
    this.userId = localStorage.getItem('userId');
    if (this.userId === null) {
      this.userId = uuidv4();
      localStorage.setItem('userId', this.userId)
    }
    this.state = {
      properties: []
    };
  }

  componentDidMount = () => {
    // Get SimplyRETS API Data
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from(SIMPLYRETS_USER + ":" + SIMPLYRETS_PASS).toString('base64'));
    fetch('https://api.simplyrets.com/properties?limit=500&lastId=0', {method: 'GET', headers: headers})
      .then(res => res.json())
      .then((data) => {
        this.setState({
          properties: data.map((item) => {
            return {
              stories: item.property.stories,
              bedrooms: item.property.bedrooms,
              full_baths: item.property.bathsHalf,
              half_baths: item.property.bathsFull,
              mlsId: item.mlsId,
              listDate: moment(item.listDate).format('MM/DD/YYYY'),
              picture_url: item.photos[0],
              listPrice: item.listPrice,
              saved: false
            }
          })
        });
      }).then(() => {
        // Setup Firebase
        this.firebaseRef = firebase.database().ref('/users');
        this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
          let userData = snap.val();
          if (userData[this.userId]) {
            let savedMlsIds = Object.values(snap.val()[this.userId]);
            let nextProperties = this.state.properties.map((item) => {
              if (savedMlsIds.indexOf(item.mlsId) >= 0) {
                item.saved = true;
              }
              return item;
            })
            console.log('setting state', nextProperties);
            this.setState({ properties: nextProperties });
          }
        });
      });
  }

  componentWillUnmount = () => {
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  saveMlsId = (mlsId) => {
    if (mlsId) {
      let targetIndex = this.state.properties.findIndex(item => item.mlsId === mlsId)
      let saved = this.state.properties[targetIndex].saved;
      console.log(saved);
      if (!saved) {
        this.firebaseRef.child(this.userId).push(mlsId);
      }
    }
    
  }

  render() {
    return (
      <div className="App">
        {this.state.properties.map((property, i) => {
          return (
            <HouseCard onSave={this.saveMlsId} key={'house-' + i} {...property}></HouseCard>
          );
        })}
      </div>
    );
  }
}

export default App;

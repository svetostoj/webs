import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import { NewEventForm } from './components/Events/EventNew'
import { Title, Status, DateFrom, DateTo, Onsite, Location, Organisation, Attendees } from './components/Events/EventView'

// IMPORT COMPONENTS
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import EventEdit from './components/Events/EventEdit';
import EventView from './components/Events/EventView';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Header/>
       <EventView />

        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;

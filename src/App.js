import React from 'react';
import logo from './logo.svg';
import './App.css';

class TransportTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Test title</h1>
        <h2>Test description</h2>
      </div>
    )
  }
}

class TransportOption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label for="newonly">
          New Only
          <input type="checkbox" name="newonly" />
        </label>
        <label for="newonly">
          Select Type
          <select>
            <option value="convertible">Convertible</option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
          </select>
        </label>
      </div>
    )
  }
}

class VehicleDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <TransportTitle />
      <TransportOption />
      
    </div>
  );
}

export default App;

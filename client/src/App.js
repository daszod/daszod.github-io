import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Projekte from './components/Projekte/Projekte';
import AboutMe from './components/AboutMe/AboutMe';
import Kontakt from './components/Kontakt/Kontakt';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends React.Component {
  state = {
     response: ''
   };

   componentDidMount() {
     this.callApi()
       .then(res => this.setState({ response: res.express }))
       .catch(err => console.log(err));
   }

   callApi = async () => {
     const response = await fetch('/');
     const body = await response.json();

     if (response.status !== 200) throw Error(body.message);

     return body;
   };

  render() {
    return (
      <div >
        <Navigation />
        <Header />
        <Projekte />
        <AboutMe />
        <Kontakt />
        <Footer />
      </div>
    );
  }
}

export default App;

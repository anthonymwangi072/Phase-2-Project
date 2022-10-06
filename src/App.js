import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
// import Policy from './Component/Policy';
import Contact from './Component/Contact';
import List from './Component/List';
import Footer from './Component/Footer';
import SubmitForm from './Shared/SubmitForm';

const App =()=>{
  return(
    <>
    <List />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/contact" component={Contact}/>
      {/* <Route path="/Policy" component={Policy}/> */}
      <Route path="/List" component={List}/>

      </Switch>
      <Footer />
    </>
  )
}
export default App;

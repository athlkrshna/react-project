import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/homepage/home';
import Footer from './components/pages/footer/footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        </Switch>
      <div id="contact"><Footer /></div>
    </Router>

  );
}

export default App;

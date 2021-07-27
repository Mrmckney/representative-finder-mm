import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/RepresentativeSearch'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


function App() {
  return (
    <Router>
      <div>
          <Header />
            <div style={{minHeight: "100vh"}}>
              <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/">
                    <RepresentativeSearch />
                </Route>
              </Switch>
            </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

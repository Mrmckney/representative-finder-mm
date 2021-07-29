import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/RepresentativeSearch'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import UserProfile from './components/UserProfile'


function App() {

  const [user, setUser] = useState(undefined)

  useEffect(() => {
    if(user !== undefined) {
      fetch(`https://representative-finder-mm-api.web.app/users/${user?.email}`)
        .then(response => response.json())
        .then(json => console.log('user json -->', json))
        .catch(err => alert(err))
    }
  }, [user])

  return (
    <Router>
      <div>
          <Header setUser={setUser} />
            <div style={{minHeight: "100vh"}}>
              <Switch>
                <Route path="/signin">
                    <SignIn setUser={setUser} />
                </Route>
                <Route path="/signup">
                    <SignUp setUser={setUser} />
                </Route>
                <Route path="/search">
                  {user
                    ? <RepresentativeSearch user={user} />
                    : <SignIn setUser={setUser} />
                  } 
                </Route>
                <Route path="/user-profile">
                    <UserProfile user={user}/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
              </Switch>
            </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;

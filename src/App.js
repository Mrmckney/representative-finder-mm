import { useState, useEffect, createContext } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import firebase from 'firebase'
import { firebaseConfig } from './config'
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/RepresentativeSearch'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import './App.css'

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const UserContext = createContext(undefined)

function App() {

  const [user, setUser] = useState(undefined) // state hooks
  const [userProfile, setUserProfile] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(authenticatedUser => {
      authenticatedUser
        ? setUser(authenticatedUser)
        : setUser(undefined)
    })
  })

  useEffect(() => {
    setUserProfile(JSON.parse(localStorage.getItem('user')))
  }, [])

  useEffect(() => {
    if(user !== undefined) {
      fetch(`https://representative-finder-mm-api.web.app/users/${user?.email}`)
        .then(response => response.json())
        .then(json => {
          console.log('user json -->', json)
          setUserProfile(json.data)
          localStorage.setItem('user', JSON.stringify(json.data))
        })
        .catch(err => alert(err))
    }
  }, [user])

  return (
    <Router>
      <div>
        <UserContext.Provider value={{userProfile}}>
          <Header user={user} userProfile={userProfile} setUser={setUser} setUserProfile={setUserProfile} />
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
                    <UserProfile user={user} userProfile={userProfile} setUserProfile={setUserProfile}/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
              </Switch>
            </div>
          <Footer />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

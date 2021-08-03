import logo from './logo.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import TodoPage from './pages/TodoPage/TodoPage'
import FollowersPage from './pages/FollowersPage/FollowersPage'

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <Switch>
          <Route strict exact path="/" component={TodoPage} />
          <Route strict exact path="/followers" component={FollowersPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

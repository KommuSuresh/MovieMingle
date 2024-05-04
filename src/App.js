import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App

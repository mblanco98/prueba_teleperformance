import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, Register } from '../pages'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
      {/* <Route exact path='/profile' component={Profile} /> */}
    </Switch>
  </BrowserRouter>
)
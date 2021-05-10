import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Login, Register } from '../pages'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
      </Layout>
      {/* <Route exact path='/profile' component={Profile} /> */}
    </Switch>
  </BrowserRouter>
)
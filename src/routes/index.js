import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Login, Register } from '../pages'
import { Notification } from "../components/base/Notification";

export const App = () => {
  const notification = useSelector(state => state.notification)

  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Notification {...notification} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Layout>
        {/* <Route exact path='/profile' component={Profile} /> */}
      </Switch>
    </BrowserRouter>
  );
}


import {Route ,Switch} from 'react-router-dom'
import AllMeetUpsPage from './pages/AllMeetUps'
import NewMeetUpsPage from './pages/NewMeetUp'
import FavMeetUpsPage from './pages/Favorite'
import MainNavigation from './layout/MainNavugatio'
import Layout from '../src/layout/layout'

function App() {
  return (
    <Layout>
    {/* <MainNavigation /> */}
    <Switch>
  <Route path='/' exact={true}>
    <AllMeetUpsPage />
  </Route>
  <Route path='/new-meetup' exact={true}>
    <NewMeetUpsPage />
  </Route>
  <Route path='/favorites' exact={true}>
    <FavMeetUpsPage />
  </Route>
  </Switch>
    </Layout>
  );
}

export default App;

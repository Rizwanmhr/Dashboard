import React from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/sidebar/pages/Home'
import Analytics from './components/sidebar/pages/Analytics'
import Sales from './components/sidebar/pages/Sales'
import Users from './components/sidebar/pages/Users'
import Products from './components/sidebar/pages/Products'
import Transactions from './components/sidebar/pages/Transactions'
import Reports from './components/sidebar/pages/Reports'
import Mail from './components/sidebar/pages/Mail'
import Feedback from './components/sidebar/pages/Feedback'
import Messages from './components/sidebar/pages/Messages'
import Manage from './components/sidebar/pages/Manage'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Topbar />
    <Router>
    <Switch>
    <Sidebar>
    <Route path='/' exact component={Home} />
    <Route path='/analytics' exact component={Analytics} />
    <Route path='/sales' component={Sales} />
    <Route path='/users' component={Users} />
    <Route path='/products' component={Products} />
    <Route path='/transactions' component={Transactions} />
    <Route path='/reports' component={Reports} />
    <Route path='/mail' component={Mail} />
    <Route path='/feedback' component={Feedback} />
    <Route path='/messages' component={Messages} />
    <Route path='/manage' component={Manage} />
    </Sidebar>
    </Switch>
    </Router> 
  </>
  )
}

export default App

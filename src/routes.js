import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'



export default (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/dashboard/:session_id' component={Session} />
        <Route exact path='/dashboard/:session_id/:block_id/1' component={WorkBlock} />
        <Route exact path='/dashboard/:session_id/:block_id/2' component={BreakBlock} />
        <Route exact path='/donate' component={Donate} /> */}
        <Route path='/'> Error: This page does not exist</Route>
    </Switch>
)
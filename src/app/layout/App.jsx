import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar/NavBar';

import HomePage from '../../features/home/HomePage';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/events/EventForm/EventForm';
import TestComponent from '../../features/testarea/TestComponent'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route path="/(.+)" render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events/" component={EventDashboard} />
                <Route path="/testarea/" component={TestComponent} />
                <Route path="/event/:id" component={EventDetailedPage} />
                <Route path="/people/" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings/" component={SettingsDashboard} />
                <Route path="/createEvent/" component={EventForm} />
              </Switch>
            </Container>
          </Fragment>
        )}/>
      </Fragment>

    );
  }
}

export default App;

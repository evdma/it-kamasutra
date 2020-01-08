import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-recuder';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {

  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occured");
    console.log(reason + promise);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {

    if (!this.props.initialized) return <Preloader />

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path='/' render={() => <Redirect to={"/profile"} />}
            />
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}
            />
            <Route path='/dialogs' render={withSuspense(DialogsContainer)}
            />
            <Route path='/users' render={() =>
              <UsersContainer />}
            />
            <Route path='/login' render={() =>
              <LoginPage />
            }
            />
            <Route path='/*' render={() =>
              <div>404 NOT FOUND</div>
            }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiApp = (props) => {

  return (<HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>)
}

export default SamuraiApp;
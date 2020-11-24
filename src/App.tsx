import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { UsersPage } from './components/Users/UsersContainer';
import { LoginPage } from './components/LoginPage/LoginPage';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-recuder';
import Preloader from './components/common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./components/common/NotFound/NotFound";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
});

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
  initializeApp: () => void;
};

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {

  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert("Some error occured");
    // console.log(reason + promise);
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
            <Route path='/profile/:userId?' render={() => <SuspendedProfile />}
            />
            <Route path='/dialogs/:dialogId?' render={() => <SuspendedDialogs />}
            />
            <Route path='/users' render={() =>
              <UsersPage pageTitle="Users" />}
            />
            <Route path='/login' render={() =>
              <LoginPage />
            }
            />
            <Route path='/*' render={() =>
              <NotFound />
            }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

let AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiApp: React.FC = () => {
  return (<HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>)
}

export default SamuraiApp;
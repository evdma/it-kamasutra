import React from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { Route, withRouter, Switch, Redirect, HashRouter, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppHeader } from './components/Header/AppHeader';
import { LoginPage } from './components/LoginPage/LoginPage';
import NotFound from "./components/common/NotFound/NotFound";
import Preloader from './components/common/Preloader/Preloader';
import { UsersPage } from './components/Users/UsersContainer';
import { withSuspense } from './hoc/withSuspense';
import { initializeApp } from './redux/app-recuder';
import store, { AppStateType } from './redux/redux-store';

const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

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
      <Layout>
        <AppHeader />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className='site-layout-background' style={{ padding: '24px 0' }}>
            <Sider className='site-layout-background' width={200}>
              <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
              >
                <SubMenu key='sub1' icon={<UserOutlined />} title={'My Profile'}>
                  <Menu.Item key='1'>
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key='2'>
                    <Link to="/dialogs">Messages</Link>
                  </Menu.Item>
                  <Menu.Item key='4'>
                    <Link to="/news">News</Link>
                  </Menu.Item>
                  <Menu.Item key='5'>
                    <Link to="/music">Music</Link>
                  </Menu.Item>
                  <Menu.Item key='6'>
                    <Link to="/settings">Settings</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key='sub2' icon={<LaptopOutlined />} title={'Developers'}>
                  <Menu.Item key='3'>
                    <Link to="/developers">Developers</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 200 }}>
              <Switch>
                <Route exact path='/' render={() => <Redirect to={"/profile"} />} />
                <Route path='/profile/:userId?' render={() => <SuspendedProfile />} />
                <Route path='/dialogs/:dialogId?' render={() => <SuspendedDialogs />} />
                <Route path='/developers' render={() =>
                  <UsersPage pageTitle="Developers" />
                } />
                <Route path='/login' render={() =>
                  <LoginPage />
                } />
                <Route path='/*' render={() =>
                  <NotFound />
                } />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Social network by evdma</Footer>
      </Layout>
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
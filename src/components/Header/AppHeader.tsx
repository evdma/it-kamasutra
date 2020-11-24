import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Menu, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logout } from '../../redux/auth-reducer';
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors';

const { Header } = Layout;

export const AppHeader: React.FC = () => {
    const isAuth = useSelector(selectIsAuth);
    const login = useSelector(selectCurrentUserLogin);

    const dispatch = useDispatch();

    const logoutCallback = () => {
        dispatch(logout());
    };

    return <Header className='header'>
        <div className='logo' />
        <Row>
            <Col span={18}>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
                    <Menu.Item key='1'>
                        <Link to="/developers">Developers</Link>
                    </Menu.Item>
                </Menu>
            </Col>
            {isAuth
                ? <>
                    <Col span={1}>
                        <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Col>
                    <Col span={5}>
                        <Button
                            danger
                            type='primary'
                            onClick={logoutCallback}
                        >
                            Logout
                        </Button>
                    </Col>
                </>
                : <Col span={6}>
                    <Button>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Col>
            }
        </Row>
    </Header>;
}
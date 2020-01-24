import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/logo.png';

const Header = (props) => {
    return (<header className={classes.header}>
        <NavLink to={'/'}>
            <div className={classes.titleBlock}>
                <img src={logo} alt="" />
                <h5>Social network</h5>
            </div>
        </NavLink>
        <div className={classes.loginBlock}>
            {
                props.isAuth
                    ? <div>
                        <NavLink to={'/profile'}>{props.login}</NavLink> - <Button variant="danger" onClick={props.logout} className={classes.authBtn}>Log  out</Button>
                    </div>
                    : <NavLink to={'/login'}>
                        <Button variant="success" onClick={props.logout} className={classes.authBtn}>Login</Button>
                    </NavLink>

            }
        </div>
    </header>)
}

export default Header;
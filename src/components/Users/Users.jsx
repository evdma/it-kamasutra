import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

    if(props.users.length === 0)
    props.setUsers(
        [
            {
                id:1,followed: true, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Masha", status:"I'm dev", location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id:2,followed: true, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Sonya", status:"I'm also dev", location: {city: 'Kyiv', country: 'Ukraine'}},
            {
                id:3,followed: true, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Olya", status:"I'm dev", location: {city: 'Firenze', country: 'Italy'}},
            {
                id:4,followed: false, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Vova", status:"I'm fullstack", location: {city: 'Kharkiv', country: 'Ukraine'}},
            {
                id:5,followed: false, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Vlad", status:"I'm not Scorpion", location: {city: 'Kyiv', country: 'Ukraine'}},
            {
                id:6,followed: true, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Yulya", status:"I'm dev", location: {city: 'LA', country: 'USA'}},
            {
                id:7,followed: false, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Andrew", status:"I'm dev", location: {city: 'Kyiv', country: 'Ukraine'}},
            {
                id:8,followed: false, photoUrl:"https://s9.stc.all.kpcdn.net/share/i/12/10688005/inx960x640.jpg",
                fullName:"Vanya", status:"0,25", location: {city: 'Minsk', country: 'Belarus'}}
        ]
    );

    return <div>
        {
            props.users.map(user =>
            <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
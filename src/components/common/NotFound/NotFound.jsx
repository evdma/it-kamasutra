import React from 'react';
import notFound from '../../../assets/images/404.png';
import styles from "./NotFound.module.css";

let NotFound = (props) => {
    return <div className={styles.wrapper}>
        <img src={notFound} alt="" />
    </div>
}

export default NotFound;
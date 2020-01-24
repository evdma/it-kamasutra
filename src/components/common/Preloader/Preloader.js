import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import styles from "./Preloader.module.css";

let Preloader = (props) => {
    return <img className={styles.preloader} src={preloader} alt="" />
}

export default Preloader;
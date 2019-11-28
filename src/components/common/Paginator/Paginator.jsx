import React from 'react';
import styles from './Paginator.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);
    return (
        <div>
            {pages.map(page => {
                return <span key={page} onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? styles.selectedPage : undefined}>{page}</span>
            })}
        </div>)

}

export default Paginator;
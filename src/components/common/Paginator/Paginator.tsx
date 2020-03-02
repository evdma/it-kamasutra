import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from "classnames";
import Pagination from 'react-bootstrap/Pagination';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <Pagination className={cn(styles.paginator)}>
            {portionNumber > 1 &&
                <Pagination.Prev onClick={() => { setPortionNumber(portionNumber - 1) }} />
            }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return <Pagination.Item active={currentPage === page}
                        key={page}
                        onClick={() => {
                            onPageChanged(page)
                        }}>{page}</Pagination.Item>
                })
            }
            {portionCount > portionNumber &&
                <Pagination.Next onClick={() => { setPortionNumber(portionNumber + 1) }} />
            }
        </Pagination>
    )
}

export default Paginator;
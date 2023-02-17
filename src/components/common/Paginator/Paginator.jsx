import React, { useState } from "react";
import s from "./Paginator.module.css"
import cn from "classnames";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(`${i} `);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {
            portionNumber > 1
                ? <button className={s.prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
                : <button disabled="disabled" className={s.prev} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
        }

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <div className={s.all}>
                    <span
                        className={cn({ [s.selectedPage]: currentPage === p }, s.pageNumber)}
                        key={p}
                        onClick={(e) => { onPageChanged(p); }}>
                        {p}
                    </span>
                </div >
            })}
        {
            portionCount > portionNumber
                ? <button className={s.next} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
                : <button disabled="disabled" className={s.next} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
        }

    </div >
}

export default Paginator;
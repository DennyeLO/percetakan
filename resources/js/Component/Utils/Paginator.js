import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const OFFSET = 4

const Paginator = ({ pagination, pageChanged, totalItems, linkPagination }) => {
    const [pageNumbers, setPageNumbers] = useState([])
    useEffect(() => {
        const setPaginationPages = () => {
            let pages = []
            const { last_page, current_page, from, to } = pagination
            if (!to) return []
            let fromPage = current_page - OFFSET
            if (fromPage < 1) fromPage = 1
            let toPage = fromPage + OFFSET * 2
            if (toPage >= last_page) {
                toPage = last_page
            }
            for (let page = fromPage; page <= toPage; page++) {
                pages.push(page)
            }
            setPageNumbers(pages)
        }

        setPaginationPages()
    }, [pagination])

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {/* <li className={"page-item" + (pagination.current_page === 1 ? " disabled" : "")}>
                    <a className="page-link" onClick={() => pageChanged(1)}>
                        First
                    </a>
                </li> */}
                <li className={"page-item" + (pagination.current_page === 1 ? " disabled" : "")}>
                    <Link className="page-link" to={`${linkPagination}/${pagination.current_page - 1}`} onClick={() => pageChanged(pagination.current_page - 1)}>
                        Previous
                    </Link>
                </li>
                {pageNumbers.map((pageNumber) => {
                    return (
                        <li
                            className={
                                "page-item" + (pageNumber === pagination.current_page ? " page-item active" : "")
                            }
                            key={pageNumber}
                            onClick={() => pageChanged(pageNumber)}
                        >
                            <Link className="page-link" to={`${linkPagination}/${pageNumber}`}>
                                {pageNumber}
                            </Link>
                        </li>
                    )
                })}

                <li className={"page-item" + (pagination.current_page === pagination.last_page ? " disabled" : "")}>
                    <Link className="page-link" to={`${linkPagination}/${pagination.current_page + 1}`} onClick={() => pageChanged(pagination.current_page + 1)}>
                        Next
                    </Link>
                </li>
                {/* <li className={"page-item" + (pagination.current_page === pagination.last_page ? " disabled" : "")}>
                    <a className="page-link" onClick={() => pageChanged(pagination.last_page)}>
                        Last
                    </a>
                </li> */}
                
            </ul>
            <p class="mt-2 ms-2">
                Showing {pagination.from} - {pagination.to} of {pagination.total} entries.
            </p>
        </nav>
    )
}

export default Paginator

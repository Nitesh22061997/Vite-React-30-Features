import React, { useState } from 'react'

export default function Pagination({ items, itemsPerPage }) {

    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem)

    const pageNumber = []
    for (let i = 1; i < Math.ceil(items.length / itemsPerPage); i++) {
        pageNumber.push(i)

    }
    return (
        <div>
            <ul>
                {
                    currentItem.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            {
                pageNumber.map((number) => (
                    <li key={number} onClick={() => setCurrentPage(number)}>{number}</li>
                ))
            }
        </div>
    )
}

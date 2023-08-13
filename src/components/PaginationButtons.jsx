import React from "react";

export const PaginationButtons = ({ list, page, totalPages, goNext, goPrev, isFooter}) => {
    return (
        <>
            {list.length !== 0 && (
                <div className='m-25'>
                   <button className='rounded-full text-green-200 p-2 m-3' onClick={goPrev}>Previous Page</button>
                   <button className='rounded-full text-green-200 p-2 m-3' onClick={goNext}>Next Page</button>
                </div>
            )}
            {list.length !== 0 && isFooter && (
                <div className='p-2 m-3 text-white'>{page} / {totalPages}</div>
            )} 
        </>
    );
}
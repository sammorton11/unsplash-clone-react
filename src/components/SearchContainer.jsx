import React from "react";

export const SearchContainer = ({ searchText, setSearch, handleSearch }) => {
    return (
        <>
            <span className='grid grid-rows-1 grid-flow-col gap-2 py-2'>
                <input className='bg-gray-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-100
                focus:border-green-500 block w-70 p-2.5 mx-4 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400
                dark:text-green-200 dark:focus:ring-green-500 dark:focus:border-green-400'
                placeholder='Search for images...' onChange={(e) => setSearch(e.target.value)} value={searchText} />
                <button className='bg-green-800 rounded text-green-200  w-25' onClick={handleSearch}>Search</button>
            </span>
        </>
    );
}
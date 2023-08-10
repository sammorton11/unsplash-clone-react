import { useState, useEffect } from 'react';
import React from "react";
import UserModal from './UserModal';

export default function SearchPage() {
   const [searchText, setSearch] = useState('');
   const [user, setUser] = useState(null);
   const [totalPages, setTotalPages] = useState(0);
   const [page, setPage] = useState(1);
   const [list, setList] = useState([]);

   useEffect(() => { handleSubmit() }, [page]); 

   function handleSubmit() {
      fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchText}&client_id=4GenzaGDW6bu0sQGWli3NMO9CWX1vUVGqn64eWN5vxE`, {})
         .then((res) => res.json())
         .then((data) => {
            setList(data.results);
            setTotalPages(data.total_pages);
         })
         .catch((error) => console.log(error));
   }

   function goNextPage() {
      if (page !== totalPages) {
         setPage((prevPage) => prevPage + 1);
      }
   }

   function goPrevPage() {
      if (page !== 1) {
         setPage((prevPage) => prevPage - 1);
      }
   }

   function handleSearch() {
      if (page === 1) {
         handleSubmit();
      } else {
         setPage(1);
      }
   }

   function clickImage(image) {
      window.open(image.urls.full, '_blank'); 
   }
   
   function handleUserClick(user) {
      setUser(user);
   }
   function closeUserModal() {
      setUser(null);
   }

   return (
      <>
         <div className='search-page'>
            <span className='grid grid-rows-3 grid-flow-col gap-1 py-2'>
               <input className='row-span-3 bg-gray-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-100 focus:border-green-500 block w-70 p-2.5 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-green-200 dark:focus:ring-green-500 dark:focus:border-green-400' placeholder='Search for images...' onChange={(e) => setSearch(e.target.value)} value={searchText} />
               <button className='bg-green-800 row-span-3 rounded-full text-green-200 p-2 m-2 w-25' onClick={handleSearch}>Search</button>
            </span>
               {list.length !== 0 && (
                  <div className=''>
                     <button className='rounded-full text-green-200 p-2 m-3 ' onClick={goPrevPage}>Previous Page</button>
                     <button className='rounded-full text-green-200 p-2 m-3 ' onClick={goNextPage}>Next Page</button>
                     <div style={{color: 'white'}}>{page} / {totalPages}</div>
                  </div>
               )}
           <section className='image-list'>
               {list.map((item) => (
                  <React.Fragment key={item.id}>
                     <article className='image-item'>
                        <img className='image' src={item.urls.small} alt={item.description} onClick={() => clickImage(item)} />
                        <p className='image-description'>{item.description}</p>
                        <button className='image-user' onClick={() => handleUserClick(item.user)}>{item.user.name}</button>
                     </article>
                  </React.Fragment>
               ))}
            </section>
            {list.length !== 0 && (
               <div className='page-navigation-container'>
                  <button className='rounded-full text-green-200 p-2 m-3 ' onClick={goPrevPage}>Previous Page</button>
                  <button className='rounded-full text-green-200 p-2 m-3 ' onClick={goNextPage}>Next Page</button>
                  <div style={{color: 'white'}}>{page} / {totalPages}</div>
               </div>
            )}
         </div>
         {user && (
            <UserModal user={user} onClose={closeUserModal} />
         )}
      </>
   );
}

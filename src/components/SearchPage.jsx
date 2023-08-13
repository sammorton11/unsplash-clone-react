import { useState, useEffect } from 'react';
import React from "react";
import UserModal from './UserModal';

export default function SearchPage() {
   const [searchText, setSearch] = useState('');
   const [user, setUser] = useState(null);
   const [totalPages, setTotalPages] = useState(0);
   const [page, setPage] = useState(1);
   const [list, setList] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);

   useEffect(() => { handleSubmit() }, [page]); 

   function handleSubmit() {
      fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchText}
         &client_id=4GenzaGDW6bu0sQGWli3NMO9CWX1vUVGqn64eWN5vxE`, {})
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
   const openModal = () => {
      setIsModalOpen(true);
    };
   function closeUserModal() {
      setIsModalOpen();
   }

   return (
      <>
         <span className='grid grid-rows-1 grid-flow-col gap-2 py-2'>
            <input className='bg-gray-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-100 
            focus:border-green-500 block w-70 p-2.5 mx-4 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 
            dark:text-green-200 dark:focus:ring-green-500 dark:focus:border-green-400' 
            placeholder='Search for images...' onChange={(e) => setSearch(e.target.value)} value={searchText} />
            <button className='bg-green-800 rounded text-green-200  w-25' onClick={handleSearch}>Search</button>
            </span>
               {list.length !== 0 && (
                  <div className='m-25'>
                     <button className='rounded-full text-green-200 p-2 m-3' onClick={goPrevPage}>Previous Page</button>
                     <button className='rounded-full text-green-200 p-2 m-3' onClick={goNextPage}>Next Page</button>
                  </div>
               )}
            <section className='grid grid-rows-3 grid-flow-col gap-5 py-5 px-5 align-self-center'>
               {list.map((item) => (
                  <React.Fragment key={item.id}>
                     <div className='bg-indigo-500' >
                        <img 
                           className='image' 
                           src={item.urls.small} 
                           alt={item.description} 
                           onClick={() => clickImage(item)} 
                        />
                        <p className='text-white text-base p-3' style={{width: '400px'}}>{item.description}</p>
                          <button 
                              className='rounded bg-green-800 text-white p-2 m-3' 
                              onClick={() => {
                                 handleUserClick(item.user)
                                 openModal()
                              }}>
                              {item.user.name}
                           </button>
                     </div>
                  </React.Fragment>
               ))}
            </section>
            {list.length !== 0 && (
               <span className='m-25'>
                  <button className='rounded-full text-green-200 p-2 m-3' onClick={goPrevPage}>Previous Page</button>
                  <button className='rounded-full text-green-200 p-2 m-3' onClick={goNextPage}>Next Page</button>
                  <div className='p-2 m-3 text-white'>{page} / {totalPages}</div>
               </span>
            )}
         {isModalOpen && (
            <UserModal user={user} onClose={closeUserModal} />
         )}
      </>
   );
}


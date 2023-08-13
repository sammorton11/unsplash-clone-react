import { useState } from 'react';
import React from "react";
import UserModal from './UserModal';
import { useImageList } from '../hooks/useImageList';
import { ImageList } from './ImageList';
import { SearchContainer } from './SearchContainer';
import { PaginationButtons } from './PaginationButtons';

export default function SearchPage() {
   const [searchText, setSearch] = useState('');
   const [user, setUser] = useState(null);
   const [page, setPage] = useState(1);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const { list, totalPages, handleSubmit } = useImageList(searchText, page);

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
   const closeUserModal = () => {
      setIsModalOpen(false);
   }

   return (
      <>
         <SearchContainer searchText={searchText} setSearch={setSearch} handleSearch={handleSearch}/>
         <PaginationButtons list={list} page={page} totalPages={totalPages} goNext={goNextPage} goPrev={goPrevPage} isFooter={false}/>
         <ImageList list={list} handleUserClick={handleUserClick} clickImage={clickImage} openModal={openModal}/>
         <PaginationButtons list={list} page={page} totalPages={totalPages} goNext={goNextPage} goPrev={goPrevPage} isFooter={true}/>
         {isModalOpen && (
            <UserModal user={user} onClose={closeUserModal} />
         )}
      </>
   );
}


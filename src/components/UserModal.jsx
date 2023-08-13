import React from 'react';

const UserModal = ({ user, onClose }) => {
   const profilePicture = user.profile_image.large;
   const userFullName = user.name;
   const username = user.username;
   const linkToPortfolio = user.portfolio_url;
   const bio = user.bio;
   const location = user.location;

   return (
      <div className="user-modal">
         <div className="user-modal-content">
            <h2 className='text-xl font-semibold'>{userFullName}</h2>
            <p className="mb-2">Username: {username}</p>
            <div className='py-1 -ml-8'>
               <img src={profilePicture} alt="Profile" className="image-item rounded-lg w-75 m-5" />
            </div>
            <p className="mb-4">{bio}</p>
            <div className="mb-4">{location}</div>
            {linkToPortfolio !== null ? (
              <a href={linkToPortfolio} target='_blank' rel="noopener noreferrer" className="px-3 py-2 text-blue-500">Portfolio</a> 
            ): null}
            <button className="px-3 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600" onClick={onClose}>Close</button>
         </div>
      </div>
   );
};

export default UserModal;

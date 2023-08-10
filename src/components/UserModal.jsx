import React from 'react';


const UserModal = ({ user, onClose }) => {
  return (
      <div className="user-modal">
         <div className="user-modal-content">
            <div className='user-modal-top'>
               <h2 className='user-modal-title'>User Profile</h2>
               <button className="user-modal-close-button" onClick={onClose}>
                  <span className="close-icon">
                     <i className="fas fa-times"></i>
                  </span>
               </button>
            </div>
            <div className='profile-info'>
               <img src={user.profile_image.large} width="150" height="175" style={{borderRadius: '18px'}}></img>
               <div className='user-info-column'>
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <a href={user.portfolio_url} target='_blank'>Profile link</a>
               </div>
            </div>
            <button className='p-3 ' onClick={onClose}>Close</button>
         </div>
      </div>
   );
};

export default UserModal;

import React from 'react';

export const ImageItem = ({ item, clickImage, handleUserClick, openModal}) => {
    return (
        <React.Fragment key={item.id}>
            <div className='bg-indigo-500' >
                <img
                    className='image-item'
                    src={item.urls.small}
                    alt={item.description}
                    onClick={() => clickImage(item)}
                    style={{ cursor: "pointer"}}
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
    );
}
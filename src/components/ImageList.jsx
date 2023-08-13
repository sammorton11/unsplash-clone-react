import { ImageItem } from "./ImageItem";

export const ImageList = ({ list, clickImage, handleUserClick, openModal }) => {
    return (
        <>
            <section className='image-list p-10'>
                {list.map((item) => (
                    <ImageItem item={item} clickImage={clickImage} handleUserClick={handleUserClick} openModal={openModal}/>
                ))}
            </section>
        </>
    );
}
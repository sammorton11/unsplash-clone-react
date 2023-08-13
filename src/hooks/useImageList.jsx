import { useState, useEffect } from "react";

export const useImageList = (searchText, page) => {
    const [totalPages, setTotalPages] = useState(0);
    const [list, setList] = useState([]);

    function handleSubmit() {
        fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchText}
           &client_id=4GenzaGDW6bu0sQGWli3NMO9CWX1vUVGqn64eWN5vxE`, {})
           .then((res) => res.json())
           .then((data) => {
              setList(data.results);
              setTotalPages(data.total_pages);
           }, [searchText, page])
        .catch((error) => console.log(error));
    }

    useEffect(() => { handleSubmit() }, [page]);

    return { list, totalPages, handleSubmit };
}
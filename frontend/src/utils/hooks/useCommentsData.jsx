import { useState, useEffect } from "react";

export const useCommentsData = () => {
    const [commentsList, setCommentsList] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/test'); // Add your API endpoint here
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCommentsList(data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { commentsList };
}
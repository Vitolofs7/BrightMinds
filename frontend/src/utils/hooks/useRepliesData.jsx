import { useState, useEffect } from "react";


export const useRepliesData = () => {
    const [repliesList, setRepliesList] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/test'); // Add your API endpoint here
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setRepliesList(data);
        } catch (error) {
            console.error('Error fetching replies:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { repliesList };
}
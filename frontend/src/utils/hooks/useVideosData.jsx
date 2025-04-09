import { useState, useEffect } from "react";

export const useVideosData = () => {
    const [videosList, setVideosList] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8080/videos'); // Add your API endpoint here
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setVideosList(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { videosList };
}
import { useState, useEffect } from "react";

export const useVideosData = (videoId) => {
    const [videosList, setVideosList] = useState([]);
    const [video, setVideo] = useState(null); // State to hold the selected video

    const getData = async (videoId) => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from local storage
            // const response = await fetch('http://localhost:8080/api/videos', {
            //     headers: {
            //         'Authorization': `Bearer ${token}`, // Add the token to the Authorization header
            //         'Content-Type': 'application/json',
            //     },
            // });
            const response = await fetch('/data/videosData.json', );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            
            if (videoId) {
                const foundVideo = data.find((vid) => vid.id == videoId);
                setVideo(foundVideo || null); // Set the selected video
            } else {
                setVideosList(data); // Set the list of videos
            }

        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        getData(videoId);
    }, [videoId]);

    return { videosList, video };
}
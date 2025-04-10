import { useState, useEffect } from "react";

export const useCommentsData = (videoId) => {
    const [commentsList, setCommentsList] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    const getData = async (videoId) => {
        try {
            setLoading(true); // Set loading to true before fetching data
            const token = localStorage.getItem('token'); // Retrieve the token from local storage
            // const response = await fetch('http://localhost:8080/api/comments', {
            //     headers: {
            //         'Authorization': `Bearer ${token}`, // Add the token to the Authorization header
            //         'Content-Type': 'application/json',
            //     },
            // });
            const response = await fetch('/data/commentData.json');
            console.log('response',response);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            

            if (videoId) {
                const commentArray = []
                data.data.map((vid) => {
                    if (vid.videoId == videoId) {
                        commentArray.push(vid)
                    }
                }
                )
                setCommentsList(commentArray || []);
                
            } else {
                setCommentsList([]); 
                
            }

        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }   
    };

    useEffect(() => {
        getData(videoId);
    }, [videoId]);

    return { commentsList, loading };
}
import { useState, useEffect } from "react";

export const useSubjectsData = () => {
    const [subjectsList, setSubjectsList] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/subjects'); // Add your API endpoint here
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSubjectsList(data);
        } catch (error) {   
            console.error('Error fetching subjects:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { subjectsList };
}
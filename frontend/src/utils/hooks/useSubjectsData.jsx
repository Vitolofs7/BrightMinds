import { useState, useEffect } from "react";

export const useSubjectsData = (courseSlug) => {
    const [subject, setSubject] = useState(null);
    const [subjectsList, setSubjectsList] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    const getData = async (courseSlug) => {
        try {
            setLoading(true); // Set loading to true before fetching data
            const token = localStorage.getItem('token'); // Retrieve the token from local storage
            // const response = await fetch('http://localhost:8080/api/subjects', {
            //     headers: {
            //         'Authorization': `Bearer ${token}`, // Add the token to the Authorization header
            //         'Content-Type': 'application/json',
            //     },
            // });
            const response = await fetch('/data/subjectsData.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            // Find the specific subject if `courseSlug` is provided
            if (courseSlug) {
                const foundSubject = data.data.find((subj) => subj.subjectName === courseSlug);
                setSubject(foundSubject || null);
            } else {
                setSubjectsList(data);
            }
        } catch (error) {
            console.error("Error fetching subjects:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    useEffect(() => {
        getData(courseSlug);
    }, [courseSlug]);

    return { subject, subjectsList, loading };
};
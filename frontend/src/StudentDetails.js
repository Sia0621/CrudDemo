import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StudentDetails(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({ id: '', name: '', email: '' });

    useEffect(() => {
        fetch(`http://localhost:8080/students/${id}`)
            .then(response => response.json())
            .then(data => setStudent(data));
    }, [id]);

    const backToList = () => {
        navigate("/");
    }

    return (
        <div>
            <p>id</p>
            <p>{student.id}</p>
            <p>name</p>
            <p>{student.name}</p>
            <p>Email</p>
            <p>{student.email}</p>
            <button onClick={backToList}>Back</button>
        </div>
    );
}

export default StudentDetails;
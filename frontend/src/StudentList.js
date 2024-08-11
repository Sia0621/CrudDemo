import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentList() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/students')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setStudents(data);
            });
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit-student/${id}`);
    };

    const handleDetail = (id) => {
        navigate(`/student-details/${id}`);
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/students/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setStudents(students.filter(student => student.id !== id));
                    alert('Student deleted successfully!');
                } else {
                    alert('Failed to delete student.');
                }
            })
            .catch(error => {
                console.error('There was an error deleting the student!', error);
            });
    };

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.email}
                        <a href={`/student-details/${student.id}`}>View More</a>
                        <button onClick={() => handleEdit(student.id)}>Edit</button>
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
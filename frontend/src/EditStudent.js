import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({ name: '', email: '' });

    useEffect(() => {
        fetch(`http://localhost:8080/students/${id}`)
            .then(response => response.json())
            .then(data => setStudent(data));
    }, [id]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        })
            .then(response => {
                if (response.ok) {
                    navigate('/students');
                } else {
                    alert('Failed to update student.');
                }
            });
    };

    return (
        <div>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
};

export default EditStudent;
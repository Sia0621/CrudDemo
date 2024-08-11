import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import StudentDetails from './StudentDetails'

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Student List</Link>
                        </li>
                        <li>
                            <Link to="/add-student">Add Student</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<StudentList />} />
                    <Route path="/add-student" element={<CreateStudent />} />
                    <Route path="/edit-student/:id" element={<EditStudent />} />
                    <Route path="/student-details/:id" element={<StudentDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
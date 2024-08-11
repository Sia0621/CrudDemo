package com.demo.cruddemo.service;

import com.demo.cruddemo.entity.Student;

import java.util.List;

public interface StudentService {
    List<Student> findAllStudents();
    Student findStudentById(int id);
    void deleteStudent(int id);
    Student updateStudent(Student student);
    Student insertStudent(Student student);
}

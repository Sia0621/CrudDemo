package com.demo.cruddemo.service.impl;

import com.demo.cruddemo.dao.StudentDao;
import com.demo.cruddemo.entity.Student;
import com.demo.cruddemo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentDao studentDao;

    @Override
    public List<Student> findAllStudents() {
        return studentDao.findAll();
    }

    @Override
    public Student findStudentById(int id) {
        return studentDao.findById(id);
    }

    @Override
    public void deleteStudent(int id) {
        studentDao.delete(id);
    }

    @Override
    public Student updateStudent(Student student) {
        studentDao.update(student);
        return student;
    }

    @Override
    public Student insertStudent(Student student) {
        studentDao.insert(student);
        return student;
    }
}

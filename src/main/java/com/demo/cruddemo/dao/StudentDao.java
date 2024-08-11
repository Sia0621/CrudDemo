package com.demo.cruddemo.dao;

import com.demo.cruddemo.entity.Student;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StudentDao {

    List<Student> findAll();

    Student findById(int id);

    void insert(Student student);

    void update(Student student);

    void delete(int id);

}

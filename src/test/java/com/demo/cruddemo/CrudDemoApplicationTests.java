package com.demo.cruddemo;

import com.demo.cruddemo.dao.StudentDao;
import com.demo.cruddemo.entity.Student;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CrudDemoApplicationTests {

    @Autowired
    StudentDao studentDao;

    @Test
    void testFindAllStudent() {
        System.out.println(studentDao.findAll());
    }

}

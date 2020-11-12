CREATE TABLE employees (
    emp_no int   NOT NULL primary key,
    emp_title_id VARCHAR(50)   NOT NULL,
    birth_date VARCHAR(50)  ,
    first_name VARCHAr(100) ,
    last_name VARCHAR(100)  ,
    sex varchar(50)   ,
    hire_date VARCHAR(50)
);

CREATE TABLE salaries (
    emp_no INT   NOT NULL primary key,
    salary NUMERIC,
	foreign key (emp_no) REFERENCES employees(emp_no)
    
);
CREATE TABLE titles (
    title_id varchar(50)   NOT NULL primary key,
    title varchar(100)   NOT NULL
    
);

CREATE TABLE department (
    dept_no VARCHAR(100) NOT NULL primary key,
    dept_name VARCHAR(200)   NOT NULL
   
);

CREATE TABLE dept_manager (
    dept_no VARCHAR(100),
    emp_no int, 
	primary key(dept_no, emp_no), 
	foreign key (dept_no) REFERENCES department(dept_no) 
);

CREATE TABLE dept_emp (
    emp_no int,
    dept_no varchar(100),
    PRIMARY KEY (emp_no, dept_no),
	foreign key (dept_no) REFERENCES department(dept_no) 	

);


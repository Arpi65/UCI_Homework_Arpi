--First queery
SELECT employees.emp_no, employees.last_name,
employees.first_name, employees.sex, salaries.salary
FROM employees join salaries
ON employees.emp_no=salaries.emp_no;

--Second query name & last name hired after 1986
--had to change the type, as declared it with a wrong type

ALTER TABLE employees ALTER COLUMN hire_date TYPE DATE
USING TO_DATE(hire_date,'mm/dd/yyyy');

SELECT First_name, last_name, hire_date  FROM employees
WHERE hire_date>'12/31/1986'
;

--Third Query all managers=dep# dep name, employee number, last n first n
SELECT dept_manager.dept_no, department.dept_name, dept_manager.emp_no, employees.last_name, 
 employees.first_name
FROM dept_manager 
LEFT JOIN employees on dept_manager.emp_no=employees.emp_no
LEFT JOIN department on dept_manager.dept_no=department.dept_no;



--Fourth query emp #, last n, first n, dep n
SELECT employees.emp_no, employees.first_name, employees.last_name, department.dept_name
from dept_emp
LEFT JOIN department on dept_emp.dept_no=department.dept_no
RIGHT JOIN employees on employees.emp_no=dept_emp.emp_no
;


--Fifth Q
SELECT first_name, last_name, sex FROM employees
WHERE first_name='Hercules' and last_name LIKE 'B%';

--Sixth Q

SELECT employees.emp_no, employees.first_name, employees.last_name, department.dept_name
from dept_emp
LEFT JOIN department on dept_emp.dept_no=department.dept_no
RIGHT JOIN employees on employees.emp_no=dept_emp.emp_no
WHERE dept_name='Sales';


--Seventh Q

SELECT employees.emp_no, employees.first_name, employees.last_name, department.dept_name
from dept_emp
LEFT JOIN department on dept_emp.dept_no=department.dept_no
RIGHT JOIN employees on employees.emp_no=dept_emp.emp_no
WHERE dept_name='Sales' or dept_name='Development';

--Eighth 

SELECT last_name, count(last_name) AS CT FROM employees
GROUP BY last_name
ORDER BY CT DESC; 

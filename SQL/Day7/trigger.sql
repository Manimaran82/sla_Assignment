create database college_db;

use college_db;

create table students (
    student_id int primary key,
    student_name varchar(50),
    department varchar(50),
    marks int
);

create table student_log (
    log_id int auto_increment primary key,
    student_id int,
    student_name varchar(50),
    action_time datetime
);

delimiter $$

create trigger student_after_insert
after insert
on students
for each row
begin
insert into student_log
(student_id, student_name, action_time)
values
(new.student_id, new.student_name, now());
end //

delimiter ;

insert into students
(student_id, student_name, department, marks)
values
(1, 'Arun', 'CSE', 85);

insert into students
(student_id, student_name, department, marks)
values
(2, 'Bala', 'ECE', 90);

insert into students
(student_id, student_name, department, marks)
values
(3, 'Charan', 'IT', 88);

insert into students
(student_id, student_name, department, marks)
values
(4, 'Divya', 'EEE', 92);

select * from students;

select * from student_log;

select 
students.student_id,
students.student_name,
students.department,
students.marks,
student_log.action_time
from students
inner join student_log
on students.student_id = student_log.student_id;

select * from students
where marks > 85;

select department, avg(marks) as average_marks
from students
group by department;

select * from students
order by marks desc;
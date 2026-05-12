create database sla;
create table persons (User_id int primary key ,
Name varchar(20) not null,
Age int not null,
Mark int not null,
Location varchar(20) not null );
INSERT INTO persons (User_id, Name, Age, Mark, Location)
VALUES
(1, 'Mani', 20, 98, 'chennai'),
(2, 'Dinesh', 21, 99, 'puducherry'),
(3, 'Ram', 19, 96, 'chennai'),
(4, 'Bala', 22, 97, 'madurai'),
(5, 'Ranjith', 20, 93, 'villupuram');
select count(Mark) from persons;
select AVG(Mark) from persons;
select sum(Mark) from persons;
select min(Mark) from persons;
select max(Mark) from persons;

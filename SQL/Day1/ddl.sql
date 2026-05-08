use cts;
create table stud(Id int primary key,Name Varchar(29),Gpa decimal(3,2));
alter table stud add dept varchar(20);
insert into stud values(1,'Aarthi',9.2);
insert into stud values(2,'Anitha',8.0);
insert into stud values(3,'Anitha',8.3);
insert into stud values(4,'Arul',7.5);
insert into stud values(5,'Balaji',9.4);
select*from stud;
alter table stud drop dept;
insert into stud(id,name) values(6,'sanjai');
select id,name from stud;
select*from stud where name like '%a';
update stud
set name='Mani' where name='Aarthi';
delete from stud where id=6;
alter table stud add column dept varchar(20);
select distinct name from stud;
select*from stud order by gpa asc;
alter table stud drop dept;
select*from stud order by gpa;
select*from stud order by(case name
when 'mani' then 1
when 'balaji' then 2
when 'arul' then 3
else 100 end),gpa;
select name,char_length(name)Character_count from stud;
select name,concat(gpa,'%')gpa from stud;
alter table stud add column Hire_Date date;
update stud set Hire_date='2002-03-12';
update stud set Hire_date='2012-04-13' where id=2 and id=4;
select*from stud;
select date_format(curdate(),'%m/%d/%y');
select datediff(curdate(),'2024/06/13');
select date_add(curdate(),interval 1 year);
select name,avg(gpa) from stud where id<3 group by name having avg(gpa)>8.3 order  by name;
alter table stud modify name varchar(29) not null;
select*from stud;
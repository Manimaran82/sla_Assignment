use mani;
create table branc(branch_id int primary key,branch_address varchar(20),managerid int);

create table employe(emplid int primary key ,
name varchar(20),
job_decs varchar(20),
salary int,
branch_id int,
constraint Fk_branchId foreign key (branch_id) references branc(branch_id));
select employe.name,branc.branch_address from employe join branc on employe.branch_id=branc.branch_id having name="mani";
select*from employe
where branch_id=(select branch_id from branc where branch_address='anna nagar');
insert into branc values(1,'anna nagar',3);
insert into branc values(2,'muthu nagar',5);

insert into employe values(1,'mani','mech',22000,2);
insert into employe values(2,'hani','it',33300,1);
insert into employe values(3,'pavii','ece',40000,2);
insert into employe values(4,'kani','mech',24000,2);
insert into employe values(5,'mani','ech',25000,1);
select*from branc;

select*from employe;
select employe.name,employe.job_decs from employe where exists(select*from branc where branch_address='anna nagar' and employe.branch_id=branc.branch_id);
select employe.name,employe.job_decs,employe.salary,branc.branch_address from
employe inner join branc
on employe.branch_id=branc.branch_id
order by name;
select * from employe where branch_id=
any(select branch_id from employe where salary >25000);
select  employe.name,employe.job_decs,employe.salary,branc.branch_address from
employe,branc 
where employe.branch_id=branc.branch_id;


select employe.name,employe.job_decs,employe.salary,branc.branch_address from
employe cross join branc



select employe.name,count(employe.emplid)
from employe join branc
on employe.branch_id =branc.branch_id
group by employe.branch_id;
create index Name_index on employe(name);

select employe.name,employe.job_decs,employe.salary,branc.branch_address from employe left join branc on employe.emplid=branc.branch_id;
create database bank;

use bank;

create table customers (
    customer_id int primary key,
    customer_name varchar(50),
    city varchar(50)
);

create table accounts (
    account_no int primary key,
    customer_id int,
    account_type varchar(20),
    balance decimal(10,2),
    foreign key (customer_id) references customers(customer_id)
);

insert into customers
(customer_id, customer_name, city)
values
(1, 'Arun', 'Chennai'),
(2, 'Bala', 'Madurai'),
(3, 'Charan', 'Coimbatore'),
(4, 'Divya', 'Salem');

insert into accounts
(account_no, customer_id, account_type, balance)
values
(101, 1, 'Savings', 50000),
(102, 2, 'Current', 75000),
(103, 3, 'Savings', 62000),
(104, 4, 'Current', 45000);

select 
customers.customer_id,
customers.customer_name,
customers.city,
accounts.account_no,
accounts.account_type,
accounts.balance
from customers
inner join accounts
on customers.customer_id = accounts.customer_id;

select 
customers.customer_name,
accounts.balance
from customers
inner join accounts
on customers.customer_id = accounts.customer_id;

select 
customers.customer_name,
accounts.account_type,
accounts.balance
from customers
inner join accounts
on customers.customer_id = accounts.customer_id
where accounts.account_type = 'Savings';

select 
customers.customer_name,
accounts.balance
from customers
inner join accounts
on customers.customer_id = accounts.customer_id
where accounts.balance > 60000;

select count(*) as total_accounts
from accounts;


select 
customers.customer_name,
accounts.account_no,
accounts.balance
from customers
right join accounts
on customers.customer_id = accounts.customer_id;

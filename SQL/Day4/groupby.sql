use sla;
create table election_results(result_id int primary key auto_increment
,candidate_name varchar(20) not null,
party_name varchar(20) not null,
district varchar(20) not null,
constituency varchar(20) not null,
total_votes varchar(20) not null,
election_year varchar(20) not null);


INSERT INTO election_results
(candidate_name, party_name, district, constituency, total_votes, election_year)
VALUES
('Stalin', 'DMK', 'Chennai', 'Kolathur', 105522, 2021),

('Palaniswami', 'AIADMK', 'Salem', 'Edappadi', 110398, 2021),

('Udhayanidhi', 'DMK', 'Chennai', 'Chepauk', 93285, 2021),

('Annamalai', 'BJP', 'Karur', 'Aravakurichi', 68553, 2021),

('Kamal', 'MNM', 'Coimbatore', 'South', 51381, 2021),

('Dhinakaran', 'AMMK', 'Theni', 'Kovilpatti', 55745, 2021),

('Nehru', 'DMK', 'Trichy', 'West', 86745, 2021),

('Udhayakumar', 'AIADMK', 'Madurai', 'Tirumangalam', 90214, 2021),

('Vanathi', 'BJP', 'Coimbatore', 'South', 72815, 2021),

('Balaji', 'DMK', 'Karur', 'Karur', 101290, 2021),

('Thiagarajan', 'DMK', 'Madurai', 'Central', 94562, 2021),

('Velumani', 'AIADMK', 'Coimbatore', 'Thondamuthur', 123456, 2021),

('Duraimurugan', 'DMK', 'Vellore', 'Katpadi', 85123, 2021),

('Panneerselvam', 'AIADMK', 'Theni', 'Bodinayakanur', 100789, 2021),

('Seeman', 'NTK', 'Chennai', 'Velachery', 45210, 2021);

select candidate_name,party_name from election_results ;
select candidate_name,sum(total_votes) from election_results group by candidate_name having sum(total_votes) > 70000;

select candidate_name,district from election_results where district ='Chennai';

select candidate_name,party_name from election_results where party_name ='DMK';

SELECT candidate_name, district, SUM(total_votes) FROM election_results WHERE district = 'Madurai' GROUP BY candidate_name, district HAVING SUM(total_votes) > 60000;

SELECT candidate_name, SUM(total_votes) FROM election_results GROUP BY candidate_name ORDER BY SUM(total_votes) ASC;

SELECT candidate_name, SUM(total_votes) FROM election_results GROUP BY candidate_name ORDER BY SUM(total_votes) desc;

SELECT district FROM election_results ORDER BY district ASC;

select count(candidate_name) from election_results ;

SELECT party_name, SUM(total_votes) AS total_votes FROM election_results GROUP BY party_name;

SELECT district, avg(total_votes) AS total_votes FROM election_results GROUP BY district;

SELECT party_name, sum(total_votes) AS total_votes FROM election_results GROUP BY party_name having sum(total_votes)>100000;


select district, max(total_votes) as highest_votes from election_results group by district;

select district, avg(total_votes) as average_votes from election_results group by district having avg(total_votes) > 60000;
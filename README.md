### Project Description
<pre>
<li>The project has three levels of users - admin, employee and user.
<li>The users registers their grievances / complaints.
<li>The admin creates and maps employees to the active complaints.
<li>The employees solves the complains assigned to them.
</pre>

### Technology Stack
<pre>
<li>Angular
<li>Spring Boot
<li>MySql
</pre>

### Database Schema
<pre>

mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| complaint      |
| status         |
| user           |
+----------------+


mysql> desc user;
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| id            | int          | NO   | PRI | NULL    | auto_increment |
| active        | bit(1)       | NO   |     | NULL    |                |
| email         | varchar(255) | YES  |     | NULL    |                |
| mobile_number | varchar(255) | YES  |     | NULL    |                |
| password      | varchar(255) | YES  |     | NULL    |                |
| role          | varchar(255) | YES  |     | NULL    |                |
| username      | varchar(255) | YES  |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+


mysql> desc complaint;
+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| complaint_id     | int          | NO   | PRI | NULL    | auto_increment |
| complaint_name   | varchar(255) | YES  |     | NULL    |                |
| created_on       | datetime(6)  | YES  |     | NULL    |                |
| created_by_id    | int          | YES  | MUL | NULL    |                |
| resolved_by_id   | int          | YES  | MUL | NULL    |                |
| status_status_id | int          | YES  | MUL | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+


mysql> desc status;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| status_id   | int          | NO   | PRI | NULL    | auto_increment |
| status      | varchar(255) | YES  |     | NULL    |                |
| status_desc | varchar(255) | YES  |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+

</pre>

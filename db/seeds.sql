INSERT INTO departments (name) VALUES ('Finance');
INSERT INTO departments (name) VALUES ('HR');
INSERT INTO departments (name) VALUES ('IT');
INSERT INTO departments (name) VALUES ('Marketing');
INSERT INTO departments (name) VALUES ('Operations');

INSERT INTO roles (title, salary, department_id) VALUES ('Finance Analyst', '20000', '1');
INSERT INTO roles (title, salary, department_id) VALUES ('HR Business Partner', '25000', '2');
INSERT INTO roles (title, salary, department_id) VALUES ('Junior Software Developer', '30000', '3');
INSERT INTO roles (title, salary, department_id) VALUES ('Senior Software Developer', '40000', '3');
INSERT INTO roles (title, salary, department_id) VALUES ('Tech Lead', '50000', '3');
INSERT INTO roles (title, salary, department_id) VALUES ('Marketing Executive', '18000', '4');
INSERT INTO roles (title, salary, department_id) VALUES ('Senior Marketing Executive', '24000', '4');
INSERT INTO roles (title, salary, department_id) VALUES ('Operations Manager', '60000', '5');

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Belcalis', 'Almanzar', '1');
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Megan', 'Pete', '2');
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Aubrey', 'Graham', '3', '4');
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Marshall', 'Mathers', '4', '5');
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Onika', 'Miraj', '5');
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Shawn', 'Carter', '6', '7');
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jermaine', 'Cole', '7');
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Amala', 'Dlamini', '8');
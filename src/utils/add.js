const mysql = require("mysql2/promise")

const { getDepartments, getRoles, getEmployees } = require("./view");

const Employee = require("../lib/Employee");
const Department = require("../lib/Department");
const Role = require("../lib/Role");


const {
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
} = require("./questions");
  
const departmentInfo = getDepartments();
const roleInfo = getRoles();
const employeeInfo = getEmployees();

const createDepartment = () => {
    const departmentAnswers = await inquirer.prompt(departmentQuestions);

    const department = new Department(
    departmentAnswers.name,
    );

    departmentInfo.push(department);

    INSERT INTO departments (name) VALUES (departmentInfo);

};

const createRole = () => {
    const roleAnswers = await inquirer.prompt(roleQuestions);

    const role = new Role(
    roleAnswers.title,
    roleAnswers.salary,
    roleAnswers.department,
    );

    roleInfo.push(role);

    INSERT INTO role (title, salary, department_id) VALUES (roleInfo);

};

const createEmployee = () => {
    
    const employeeAnswers = await inquirer.prompt(employeeQuestions);

    const employee = new Employee(
    employeeAnswers.firstName,
    employeeAnswers.lastName,
    employeeAnswers.role,
    employeeAnswers.manager,
    );

    employeeInfo.push(employee);

    INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (employeeInfo);

};




module.exports = {
 createDepartment,
 createRole,
 createEmployee,
}

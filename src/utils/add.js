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
};

const createRole = () => {
    const roleAnswers = await inquirer.prompt(roleQuestions);

    const role = new Role(
    roleAnswers.title,
    roleAnswers.salary,
    roleAnswers.department,
    );

    roleInfo.push(role);
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
};




module.exports = {
 createDepartment,
 createRole,
 createEmployee,
}

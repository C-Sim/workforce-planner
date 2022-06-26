const { getDepartments, getRoles, getEmployees } = require("./view");

const Employee = require("./lib/Employee");
const Department = require("./lib/Department");
const Role = require("./lib/Role");


const {
    departmentQuestions,
    roleQuestions,
    employeeQuestions,
} = require("./questions");
  
// const departmentInfo = [];
// const roleInfo = [];
// const employeeInfo = [];

const createDepartment = () => {
    const departmentAnswers = await inquirer.prompt(departmentQuestions);

    // const department = new Department(
    // departmentAnswers.name,
    // departmentAnswers.id,
    // departmentAnswers.email,
    // departmentAnswers.gitHub
    // );

    // departmentInfo.push(department);
};

const createRole = () => {
    const roleAnswers = await inquirer.prompt(roleQuestions);

    // const role = new Role(
    // roleAnswers.name,
    // roleAnswers.id,
    // roleAnswers.email,
    // roleAnswers.school
    // );

    // roleInfo.push(role);
};

const createEmployee = () => {
    
    const employeeAnswers = await inquirer.prompt(employeeQuestions);

    // const employee = new Employee(
    // employeeAnswers.name,
    // employeeAnswers.id,
    // employeeAnswers.email,
    // employeeAnswers.officeNumber,
    // employeeAnswers.teamName
    // );
    // employeeInfo.push(employee);
};




module.exports = {
 createDepartment,
 createRole,
 createEmployee,
}

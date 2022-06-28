const inquirer = require("inquirer");
const figlet = require("figlet");

const {
  confirmAction,
  viewOptions,
  addOptions,
  updateOptions,
  deleteOptions,
  // chooseDepartment,
  // chooseRole,
  // chooseEmployee,
  departmentQuestions,
  roleQuestions,
  employeeQuestions,
} = require("./questions");

const { createDepartment, createRole, createEmployee } = require("./utils/add");

const {
  getDepartments,
  getRoles,
  getEmployees,
  getEmployeesByManager,
  getEmployeesByDepartment,
  getSpendByDepartment,
} = require("./utils/view");

const { updateEmployeeRole, updateEmployeeManager } = require("./utils/update");

const {
  deleteDepartment,
  deleteRole,
  deleteEmployee,
} = require("./utils/delete");

const init = async () => {
  console.log(
    figlet.textSync("Workforce Planner", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 64,
      whitespaceBreak: true,
    })
  );

  let inProgress = true;

  while (inProgress) {
    const { action } = await inquirer.prompt(confirmAction);

    console.log(action);

    if (action === "view") {
      const viewOption = await inquirer.prompt(viewOptions);

      if (viewOption === "viewDepartments") {
        getDepartments();
      } else if (viewOption === "viewRoles") {
        getRoles();
      } else if (viewOption === "viewEmployees") {
        getEmployees();
      } else if (viewOption === "viewEmployeesByManager") {
        const manager = await inquirer.prompt(chooseManager);

        getEmployeesByManager(manager);
      } else if (viewOption === "viewEmployeesByDepartment") {
        const department = await inquirer.prompt(chooseDepartment);

        getEmployeesByDepartment(department);
      } else if (viewOption === "viewSpendByDepartment") {
        getSpendByDepartment();
      }
    } else if (action === "add") {
      const addChoice = await inquirer.prompt(addOptions);

      console.log(addChoice.addOptions);

      if (addChoice.addOptions === "addDepartment") {
        const departmentAnswers = await inquirer.prompt(departmentQuestions);

        createDepartment(departmentAnswers);
      } else if (addChoice.addOptions === "addRole") {
        const roleAnswers = await inquirer.prompt(roleQuestions);

        createRole(roleAnswers);
      } else if (addChoice.addOptions === "addEmployee") {
        const employeeAnswers = await inquirer.prompt(employeeQuestions);

        createEmployee(employeeAnswers);
      }
    } else if (action === "update") {
      const updateOption = await inquirer.prompt(updateOptions);

      if (updateOption === "updateEmployeeRole") {
        const employee = await inquirer.prompt(chooseEmployee);
        const role = await inquirer.prompt(chooseRole);

        updateEmployeeRole(employee, role);
      } else if (updateOption === "updateEmployeeManager") {
        const employee = await inquirer.prompt(chooseEmployee);
        const manager = await inquirer.prompt(chooseManager);

        updateEmployeeManager(employee, manager);
      }
    } else if (action === "delete") {
      const deleteOption = await inquirer.prompt(deleteOptions);

      if (deleteOption === "deleteDepartment") {
        const department = await inquirer.prompt(chooseDepartment);

        deleteDepartment(department);
      } else if (deleteOption === "deleteRole") {
        const role = await inquirer.prompt(chooseRole);

        deleteRole(role);
      } else if (deleteOption === "deleteEmployee") {
        const employee = await inquirer.prompt(chooseEmployee);

        deleteEmployee(employee);
      }
    } else {
      inProgress = false;
    }
  }
};

init();

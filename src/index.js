const inquirer = require("inquirer");
const figlet = require("figlet");

const {
  confirmAction,
  viewOptions,
  addOptions,
  updateOptions,
  deleteOptions,
} = require("./questions");

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

    if (action === "view") {
      const viewOption = await inquirer.prompt(viewOptions);

      if (viewOption === "viewDepartments") {
        getDepartments();
      } else if (viewOption === "viewRoles") {
        getRoles();
      } else if (viewOption === "viewEmployees") {
        getEmployees();
      } else if (viewOption === "viewEmployeesByManager") {
        getEmployeesByManager();
      } else if (viewOption === "viewEmployeesByDepartment") {
        getEmployeesByDepartment();
      } else if (viewOption === "viewSpendByDepartment") {
        getSpendByDepartment();
      }
    } else if (action === "add") {
      const addOption = await inquirer.prompt(addOptions);

      if (addOption === "addDepartment") {
        createDepartment();
      } else if (addOption === "addRole") {
        createRole();
      } else if (addOption === "addEmployee") {
        createEmployee();
      }
    } else if (action === "update") {
      const updateOption = await inquirer.prompt(updateOptions);

      if (updateOption === "updateEmployeeRole") {
        updateEmployeeRole();
      } else if (updateOption === "updateEmployeeManager") {
        updateEmployeeManager();
      }
    } else if (action === "delete") {
      const deleteOption = await inquirer.prompt(deleteOptions);

      if (deleteOption === "deleteDepartment") {
        deleteDepartment();
      } else if (deleteOption === "deleteRole") {
        deleteRole();
      } else if (deleteOption === "deleteEmployee") {
        deleteEmployee();
      }
    } else {
      inProgress = false;
    }
  }
};

init();

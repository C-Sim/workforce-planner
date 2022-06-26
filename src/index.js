const inquirer = require("inquirer");
const figlet = require("figlet");

const {
  confirmAction,
  viewOptions,
  addOptions,
  updateOptions,
  deleteOptions,
  chooseDepartment,
  chooseRole,
  chooseEmployee,
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
        const manager = await inquirer.prompt(chooseManager);

        getEmployeesByManager(manager);
      } else if (viewOption === "viewEmployeesByDepartment") {
        const department = await inquirer.prompt(chooseDepartment);

        getEmployeesByDepartment(department);
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

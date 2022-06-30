require("dotenv").config();

// const cTable = require("console.table");
const inquirer = require("inquirer");
const figlet = require("figlet");
const mysql = require("mysql2/promise");

const {
  confirmAction,
  viewOptions,
  addOptions,
  updateOptions,
  deleteOptions,
  chooseDepartment,
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
const { config } = require("dotenv");

// const { updateEmployeeRole, updateEmployeeManager } = require("./utils/update");

// const {
//   deleteDepartment,
//   deleteRole,
//   deleteEmployee,
// } = require("./utils/delete");

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

  try {
    const config = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };

    const db = await mysql.createConnection(config);

    let inProgress = true;

    while (inProgress) {
      const { action } = await inquirer.prompt(confirmAction);

      if (action === "view") {
        const viewChoice = await inquirer.prompt(viewOptions);

        if (viewChoice.viewOptions === "viewDepartments") {
          await getDepartments(db);
        } else if (viewChoice.viewOptions === "viewRoles") {
          await getRoles(db);
        } else if (viewChoice.viewOptions === "viewEmployees") {
          await getEmployees(db);
        } else if (viewChoice.viewOptions === "viewEmployeesByManager") {
          const manager = await inquirer.prompt(chooseManager);

          await getEmployeesByManager(db, manager);
        } else if (viewChoice.viewOptions === "viewEmployeesByDepartment") {
          const department = await inquirer.prompt(chooseDepartment);

          await getEmployeesByDepartment(db, department);
        } else if (viewChoice.viewOptions === "viewSpendByDepartment") {
          await getSpendByDepartment(db);
        }
      } else if (action === "add") {
        const addChoice = await inquirer.prompt(addOptions);

        console.log(addChoice.addOptions);

        if (addChoice.addOptions === "addDepartment") {
          const departmentAnswers = await inquirer.prompt(departmentQuestions);

          createDepartment(db, departmentAnswers);
        } else if (addChoice.addOptions === "addRole") {
          const roleAnswers = await inquirer.prompt(roleQuestions);

          createRole(db, roleAnswers);
        } else if (addChoice.addOptions === "addEmployee") {
          const employeeAnswers = await inquirer.prompt(employeeQuestions);

          createEmployee(db, employeeAnswers);
        }
        // } else if (action === "update") {
        //   const updateOption = await inquirer.prompt(updateOptions);

        //   if (updateOption === "updateEmployeeRole") {
        //     const employee = await inquirer.prompt(chooseEmployee);
        //     const role = await inquirer.prompt(chooseRole);

        //     updateEmployeeRole(employee, role);
        //   } else if (updateOption === "updateEmployeeManager") {
        //     const employee = await inquirer.prompt(chooseEmployee);
        //     const manager = await inquirer.prompt(chooseManager);

        //     updateEmployeeManager(employee, manager);
        //   }
      } else if (action === "delete") {
        const deleteChoice = await inquirer.prompt(deleteOptions);

        if (deleteChoice.deleteOptions === "deleteDepartment") {
          await getDepartments(db);

          const department = await inquirer.prompt(chooseDepartment);

          deleteDepartment(department);
          //   } else if (deleteChoice.deleteOptions === "deleteRole") {
          //     const role = await inquirer.prompt(chooseRole);

          //     deleteRole(role);
          //   } else if (deleteChoice.deleteOptions === "deleteEmployee") {
          //     const employee = await inquirer.prompt(chooseEmployee);

          //     deleteEmployee(employee);
        }
      } else {
        await db.end();
        inProgress = false;
        console.log(
          figlet.textSync("Thank you, goodbye", {
            font: "Standard",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 64,
            whitespaceBreak: true,
          })
        );
      }
    }
  } catch (error) {
    console.log(`[ERROR]: Internal error | ${error.message}`);
  }
};

init();

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
  departmentQuestions,
  roleCreationQuestions,
  employeeCreationQuestions,
  chooseDepartment,
  chooseRole,
  chooseEmployee,
  chooseManager,
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
          const departments = await getDepartments(db);

          console.table(departments);
        } else if (viewChoice.viewOptions === "viewRoles") {
          const roles = await getRoles(db);

          console.table(roles);
        } else if (viewChoice.viewOptions === "viewEmployees") {
          const employees = await getEmployees(db);

          console.table(employees);
        } else if (viewChoice.viewOptions === "viewEmployeesByManager") {
          // const employee = await chooseEmployee(db);
          const manager = await chooseManager(db);

          const employees = await getEmployeesByManager(db, manager);

          if (employees.length) {
            console.table(employees);
          } else {
            console.log("This person is not a manager.");
          }
        } else if (viewChoice.viewOptions === "viewEmployeesByDepartment") {
          const department = await chooseDepartment(db);

          const employees = await getEmployeesByDepartment(db, department);

          if (employees.length) {
            console.table(employees);
          } else {
            console.log("This department has no employees.");
          }
        } else if (viewChoice.viewOptions === "viewSpendByDepartment") {
          const spend = await getSpendByDepartment(db);

          console.table(spend);
        }
      } else if (action === "add") {
        const addChoice = await inquirer.prompt(addOptions);

        if (addChoice.addOptions === "addDepartment") {
          const departmentAnswers = await inquirer.prompt(departmentQuestions);

          createDepartment(db, departmentAnswers);
        } else if (addChoice.addOptions === "addRole") {
          const roleAnswers = await roleCreationQuestions(db);

          createRole(db, roleAnswers);
        } else if (addChoice.addOptions === "addEmployee") {
          const employeeAnswers = await employeeCreationQuestions(db);

          createEmployee(db, employeeAnswers);
        }
      } else if (action === "update") {
        const updateChoice = await inquirer.prompt(updateOptions);

        if (updateChoice.updateOptions === "updateEmployeeRole") {
          const employee = await chooseEmployee(db);
          const role = await chooseRole(db);

          updateEmployeeRole(db, employee, role);
        } else if (updateChoice.updateOptions === "updateEmployeeManager") {
          const employee = await chooseEmployee(db);
          const manager = await chooseManager(db);

          updateEmployeeManager(db, employee, manager);
        }
      } else if (action === "delete") {
        const deleteChoice = await inquirer.prompt(deleteOptions);

        if (deleteChoice.deleteOptions === "deleteDepartment") {
          const department = await chooseDepartment(db);

          await deleteDepartment(db, department);
        } else if (deleteChoice.deleteOptions === "deleteRole") {
          const role = await chooseRole(db);

          await deleteRole(db, role);
        } else if (deleteChoice.deleteOptions === "deleteEmployee") {
          const employee = await chooseEmployee(db);

          await deleteEmployee(db, employee);
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

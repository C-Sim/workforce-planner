require("dotenv").config();

// const cTable = require("console.table");
const inquirer = require("inquirer");
const figlet = require("figlet");
const mysql = require("mysql2/promise");

const {
  departmentList,
  roleList,
  employeeList,
  managerList,
} = require("./utils/helpers");

const {
  confirmAction,
  viewOptions,
  addOptions,
  updateOptions,
  deleteOptions,
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

// const { updateEmployeeRole, updateEmployeeManager } = require("./utils/update");

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
          const managers = await getEmployees(db);

          const manager = await inquirer.prompt([
            {
              name: "manager",
              type: "list",
              message: "Which managers?",
              choices: managerList(managers),
            },
          ]);

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
          const departments = await getDepartments(db);

          const department = await inquirer.prompt([
            {
              name: "department",
              type: "list",
              message: "Which department?",
              choices: departmentList(departments),
            },
          ]);

          await deleteDepartment(db, department);
        } else if (deleteChoice.deleteOptions === "deleteRole") {
          const roles = await getRoles(db);

          const role = await inquirer.prompt([
            {
              name: "role",
              type: "list",
              message: "Which role?",
              choices: roleList(roles),
            },
          ]);

          await deleteRole(db, role);
        } else if (deleteChoice.deleteOptions === "deleteEmployee") {
          const employees = await getEmployees(db);

          const employee = await inquirer.prompt([
            {
              name: "employee",
              type: "list",
              message: "Which employee?",
              choices: employeeList(employees),
            },
          ]);

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

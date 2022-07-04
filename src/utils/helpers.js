const departmentList = (departments) => {
  return departments.map((department) => ({
    name: department.department_name,
    value: department.id,
  }));
};

const roleList = (roles) => {
  return roles.map((role) => ({
    name: role.role,
    value: role.id,
  }));
};

const employeeList = (employees) => {
  return employees.map((employee) => ({
    name: employee.employee,
    value: employee.id,
  }));
};

const managerList = (managers) => {
  return managers.map((manager) => ({
    name: employee.employee,
    value: employee.manager_id,
  }));
};

module.exports = {
  departmentList,
  roleList,
  employeeList,
  managerList,
};

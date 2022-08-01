const connection = require ("./connection");
class DB{
    constructor(connection){
        this.connection = connection
    }

    findAllEmployees(){
      return this.connection.promise().query(
        "SELECT * FROM employee"
      );
    }

    findAllManagers(employeeId){
        return this.connection.promise().query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeId
        )
    }
    // Create a new employee
  createEmployee(employee) {

}

// Remove an employee with the given id
removeEmployee(employeeId) {

}

// Update the given employee's role
updateEmployeeRole(employeeId, roleId) {

}

// Update the given employee's manager
updateEmployeeManager(employeeId, managerId) {

}

// Find all roles, join with departments to display the department name
findAllRoles() {
    
}

// Create a new role
createRole(role) {

}

// Remove a role from the db
removeRole(roleId) {

}

// Find all departments
findAllDepartments() {

}

// Find all departments, join with employees and roles and sum up utilized department budget
viewDepartmentBudgets() {

}

// Create a new department
createDepartment(department) {

}

// Remove a department
removeDepartment(departmentId) {

}

// Find all employees in a given department, join with roles to display role titles
findAllEmployeesByDepartment(departmentId) {

}

// Find all employees by manager, join with departments and roles to display titles and department names
findAllEmployeesByManager(managerId) {

}
}

module.exports = new DB(connection);

INSERT INTO department    (name)


VALUES 
    ('Sales'),
    ('Accounting'),
    ('Human Resources'),
    ('Lawyer')

INSERT INTO role
    (title, salary, department_id)

VALUES
    ('HR Manager', 100000, 1),
    ('HR', 50000, 1),
    ('Sales', 65000, 2),
    ('Human Resources', 195000, 3),
    ('Lawyer', 110000, 4),
    ('Accountant', 90000, 4);

    INSERT INTO employee
    (first_name, last_name, role_id, manager_id)

    ('mike','amaya', 1, NULL),
    ('david','amaya', 2, 1),
    ('chris','amaya', 3, NULL),
    ('julian','amaya', 4, 3),
    ('jojo','amaya', 4, NULL),
    ('juan','amaya', 5, 6),
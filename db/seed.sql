-- Seed Departments
INSERT INTO "Departments" (name) VALUES ('Engineering'), ('Sales'), ('HR');

-- Seed Roles
INSERT INTO "Roles" (title, salary, department_id) VALUES
('Software Engineer', 80000, (SELECT id FROM "Departments" WHERE name='Engineering')),
('Sales Manager', 60000, (SELECT id FROM "Departments" WHERE name='Sales')),
('HR Specialist', 50000, (SELECT id FROM "Departments" WHERE name='HR'));

-- Seed Employees
INSERT INTO "Employees" (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', (SELECT id FROM "Roles" WHERE title='Software Engineer'), NULL),
('Jane', 'Smith', (SELECT id FROM "Roles" WHERE title='Sales Manager'), NULL),
('Sara', 'Connor', (SELECT id FROM "Roles" WHERE title='HR Specialist'), NULL);

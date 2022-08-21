SELECT 
    CONCAT(Employee.first_name,' ',Employee.last_name) AS 'Nome da Pessoa Colaboradora',
    CONCAT(Manager.first_name,' ',Manager.last_name) AS 'Nome Gerente'
FROM
    hr.employees AS Employee
        INNER JOIN
    hr.employees AS Manager ON Employee.manager_id = Manager.employee_id;

# 1 - Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT 
    CONCAT(Employee.first_name,' ',Employee.last_name) AS 'Nome da Pessoa Colaboradora',
    CONCAT(Manager.first_name,' ',Manager.last_name) AS 'Nome Gerente'
FROM
    hr.employees AS Employee
        INNER JOIN
    hr.employees AS Manager ON Employee.manager_id = Manager.employee_id
WHERE Employee.manager_id <> Manager.employee_id;

# 2 - Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerent
SELECT
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
	hr.employees AS manager
INNER JOIN
	hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY
	manager.employee_id;
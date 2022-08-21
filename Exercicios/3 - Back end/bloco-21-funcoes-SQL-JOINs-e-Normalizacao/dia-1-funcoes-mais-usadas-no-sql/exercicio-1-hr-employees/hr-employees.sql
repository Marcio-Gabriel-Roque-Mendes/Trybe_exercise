# 3 -  Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
SELECT job_id, ROUND(AVG(salary), 2) AS 'Média Salarial'
FROM hr.employees
GROUP BY job_id
ORDER BY `Média Salarial` DESC;

# 7 - Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
SELECT job_id, ROUND(SUM(salary), 2) AS 'Total por profissão'
FROM hr.employees
GROUP BY job_id
ORDER BY `Total por profissão` DESC;

# 8 - Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).
SELECT job_id, ROUND(SUM(salary), 2) AS 'Total por profissão'
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

# 9 - Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).
SELECT job_id, ROUND(AVG(salary), 2) AS 'Média salarial por profissão (exceto programação)'
FROM hr.employees
GROUP BY job_id
HAVING NOT job_id = 'it_prog'
ORDER BY `Média salarial por profissão (exceto programação)` DESC;

# 10.  Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id
SELECT department_id, COUNT(*) 'Nº funcs por Dep',AVG(salary) 'Média Salarial'
FROM hr.employees
GROUP BY department_id
HAVING `Nº funcs por Dep` > 10;


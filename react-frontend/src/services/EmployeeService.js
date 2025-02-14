import axios from 'axios';

class EmployeeService {
    getEmployees() {
        return axios.get('http://api-backend-service:8020/employees/all');
    }

    createEmployee(employee) {
        return axios.post('http://api-backend-service:8020/employees/create', employee);
    }

    getEmployeeById(employeeId) {
        return axios.get('http://api-backend-service:8020/employees/' + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return axios.put('http://api-backend-service:8020/employees/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete('http://api-backend-service:8020/employees/' + employeeId);
    }
}

export default new EmployeeService();
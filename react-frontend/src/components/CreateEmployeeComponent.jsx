import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ManageEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeId: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: ''
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount() {
        if (this.state.employeeId === '_add') {
            return;
        } else {
            EmployeeService.getEmployeeById(this.state.employeeId).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
        console.log('employee => ' + JSON.stringify(employee));

        if (this.state.employeeId === '_add') {
            EmployeeService.createEmployee(employee).then((res) => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.employeeId).then((res) => {
                this.props.history.push('/employees');
            });
        }
    };

    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    };

    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.employeeId === '_add') {
            return <h3 className="text-center">Add Employee</h3>;
        } else {
            return <h3 className="text-center">Update Employee</h3>;
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input
                                            placeholder="First Name"
                                            name="firstName"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.handleFirstNameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input
                                            placeholder="Last Name"
                                            name="lastName"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.handleLastNameChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input
                                            placeholder="Email Address"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.handleEmailChange}
                                        />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageEmployeeComponent;
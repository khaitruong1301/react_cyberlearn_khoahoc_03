import React, { Component } from 'react'
import './UserProfile.css'
import Swal from 'sweetalert2'


export default class UserProfile extends Component {



    state = {
        values: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: '',
        },
        errors: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordConfirm: '',
        }

    }

    handleChangeValue = (event) => {
        let { name, value, type } = event.target;
        console.log(name, value);

        let newValue = { ...this.state.values, [name]: value };
        let newErrors = { ...this.state.errors };

        if (value.trim() === '') {
            newErrors[name] = name + ' is required !'
        } else {
            newErrors[name] = '';
        }


        if (type === 'email') {
            const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!regexEmail.test(value)) { //Nếu email không hợp lệ
                newErrors[name] = name + 'is invalid !';
            } else {
                newErrors[name] = ''; //Nếu email hợp lệ 
            }
        }
        if (name === 'passWordConfirm') {
            if (value === newValue['passWord']) {
                newErrors[name] = '';
            } else {
                newErrors[name] = name + ' is invalid';
            }
        }

        this.setState({
            values: newValue,
            errors: newErrors
        })

    }

    handleSubmit = (event) => {
        //Cản trình duyệt submit reload lại trang
        event.preventDefault();
        //Xét điều kiện khi submit
        let { values, errors } = this.state;
        //Biến xác định form hợp lệ
        let valid = true;
        let profileContent = '';
        let errorsContent = '';
        for (let key in values) {
            if (values[key] === '') {
                valid = false;
                errorsContent += `
                <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
                valid = false;
            }

            profileContent += `
                <p class="text-left"> <b>${key}:</b> ${values[key]}</p>
            `
        }

        for (let key in errors) {
            if (errors[key] !== '') {
                errorsContent += `
                <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
                valid = false;
            }


        }

        if (!valid) {

            Swal.fire({
                title: 'Your profile!',
                html: errorsContent,
                icon: 'error', //success, error, warning, question
                confirmButtonText: 'OK'
            })
            return;
        }

        // alert('Thành công!')
        Swal.fire({
            title: 'Your profile!',
            html: profileContent,
            icon: 'success', //success, error, warning, question
            confirmButtonText: 'OK'
        })
    }


    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={this.handleSubmit} style={{ fontSize: 'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif', width: 600 }} className=" bg-white p-5 m-5" >
                    <h1 className="text-center mt-0 mb-5">User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.firstName} type="text" required name="firstName" onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>firstName</label>
                                <span className="text text-danger">{this.state.errors.firstName}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input type="text" value={this.state.values.lastName} name="lastName" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>lastName</label>
                                <span className="text text-danger">{this.state.errors.lastName}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.userName} type="text" name="userName" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>userName</label>
                                <span className="text text-danger">{this.state.errors.userName}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.email} type="email" name="email" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>email</label>
                                <span className="text text-danger">{this.state.errors.email}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passWord} name="passWord" type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>password</label>
                                <span className="text text-danger">{this.state.errors.passWord}</span>

                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passWordConfirm} name="passWordConfirm" type="password" required onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>passwordConfirm</label>
                                <span className="text text-danger">{this.state.errors.passWordConfirm}</span>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <button className="btn text-white bg-dark w-100 col-12" style={{ fontSize: 25 }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

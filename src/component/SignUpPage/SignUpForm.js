import React from 'react';
import './SignUpForm.css';
const SignUpForm = () => {
    return (
        <div className='signUp-section'>
                <div className="signUp-form-area d-flex">
                    <div className="signUp-form">
                        <div className="signUp-form-container">
                            <h1 className="logtxt fs-4 text-white mt-3 mt-sm-1 mb-5 mb-sm-3">SIgn Up</h1>
                            <form>
                                <div className="input-container">
                                        <div className="mb-3 w-100">
                                            <label htmlFor="userName" className="form-label text-white">Your Name</label>
                                            <input type="text" className="form-control" id="userName" placeholder="Type your name" />
                                        </div>
                                        <div className="mb-3 w-100">
                                            <label htmlFor="userMail" class="form-label text-white">Email address</label>
                                            <input type="email" className="form-control" id="userMail" placeholder="name@example.com"/>
                                        </div>
                                        <div className="mb-3 w-100">
                                            <label htmlFor="password" className="form-label text-white">Password</label>
                                            <input type="password" className="form-control mb-2" id="password" placeholder="ex: wznPvC%@ye" />
                                        </div>
                                        <div className="mb-3 w-100">
                                            <label htmlFor="conPassword" class="form-label text-white">Confirm password</label>
                                            <input type="password" className="form-control" id="conPassword" placeholder="Confirm password"/>
                                        </div>
                                </div>
                                <div className="action-btns">
                                    <button type="submit" className="btn btn-warning fw-bold w-100 d-block mb-2 justify-center text-white">Signup</button>
                                    <span className='text-white'>Already have an account? <a href='' className='text-decoration-none text-warning text-white'>Sign In</a> </span>
                                    <span className="text-center text-dark fw-bold divider d-block">OR</span>
                                    <div className="signUpGoogle btn text-center bg-warning w-100"><a className='mt-1 text-decoration-none  fw-bold text-white' href="">SIGNUP WITH GOOGLE</a></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <div className='text-white company-link mt-md-1'><a href="#" className='text-decoration-none text-white'>(c) Company Name</a> | <a href="#" className='text-decoration-none text-white'>Privacy and Policy</a></div>
        </div>
    );
};

export default SignUpForm;
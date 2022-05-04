import React, { useState, useContext, useEffect } from 'react';
import { Close, Visibility, VisibilityOff } from "@material-ui/icons";
import Lottie from 'react-lottie';
import animationData from '../../lottie/login.json';
import { toast, ToastContainer } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

import './authDialog.scss';

import { AuthContext } from '../../context/authContext/AuthContext';
import { register, login } from '../../context/authContext/apiCalls';

const override = css`
  display: block;
`;

const AuthDialog = ({ setAuth }) => {
    const [showPass, setShowPass] = useState(false);
    const [userLogin, setUserLogin] = useState(null);
    const [userReg, setUserReg] = useState(null);
    const [isLogin, setIsLogin] = useState(true);

    const { user, isFetching, dispatch } = useContext(AuthContext);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const loginUser = () => {
        if (userLogin !== null) {
            if (userLogin.username === undefined || userLogin.password === undefined) {
                toast.error('Please complete all fields!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                login(userLogin, dispatch, setAuth);
            }
        } else {
            toast.error('Please complete all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const registerUser = () => {
        if (userReg !== null) {
            if (userReg.usernameReg === undefined || userReg.passwordReg === undefined || userReg.rePasswordReg === undefined) {
                toast.error('Please complete all fields!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                if (userReg.passwordReg === userReg.rePasswordReg) {
                    register(userReg, dispatch, setAuth);
                } else {
                    toast.error('Passwords are not the same!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }
        } else {
            toast.error('Please complete all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className='authDialog'>
            {isLogin ?
                <div className='main'>
                    <Lottie
                        options={defaultOptions}
                        height={120}
                        width={120}
                    />

                    <div className='form'>
                        <div className='top'>
                            <h1>Login</h1>
                        </div>
                        <div className='middle'>
                            <div className='inpContain'>
                                <input
                                    type={'text'}
                                    maxLength={10}
                                    placeholder='Username'
                                    className='inp'
                                    name={'username'}
                                    onChange={(e) => setUserLogin({ ...userLogin, [e.target.name]: e.target.value })}
                                />
                            </div>
                            <div className='inpContain'>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    maxLength={10}
                                    placeholder='Password'
                                    className='inp'
                                    name={'password'}
                                    onChange={(e) => setUserLogin({ ...userLogin, [e.target.name]: e.target.value })}
                                />
                                <div onClick={() => setShowPass(!showPass)}>
                                    {showPass ?
                                        <Visibility className='icon' />
                                        :
                                        <VisibilityOff className='icon' />
                                    }
                                </div>
                            </div>

                            <button disabled={isFetching} className='loginBtn' onClick={loginUser}>
                                {!isFetching && 'Login'}
                                <DotLoader color={"#fff"} loading={isFetching} css={override} size={30} />
                            </button>

                        </div>
                        <div className='top'>
                            <h6>Do you haven't account?</h6>
                            <h5 onClick={() => setIsLogin(false)}>Register</h5>
                        </div>
                    </div>

                    <button
                        onClick={() => setAuth(false)}
                        className='close'>
                        <Close className='closeIcon' />
                    </button>
                </div>
                :
                <div className='main'>
                    <Lottie
                        options={defaultOptions}
                        height={120}
                        width={120}
                    />

                    <div className='form'>
                        <div className='top'>
                            <h1>Register</h1>
                        </div>
                        <div className='middle'>
                            <div className='inpContain'>
                                <input
                                    type={'text'}
                                    maxLength={10}
                                    placeholder='Username'
                                    className='inp'
                                    name={'usernameReg'}
                                    onChange={(e) => setUserReg({ ...userReg, [e.target.name]: e.target.value })}
                                />
                            </div>
                            <div className='inpContain'>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    maxLength={10}
                                    placeholder='Password'
                                    className='inp'
                                    name={'passwordReg'}
                                    onChange={(e) => setUserReg({ ...userReg, [e.target.name]: e.target.value })}
                                />
                                <div onClick={() => setShowPass(!showPass)}>
                                    {showPass ?
                                        <Visibility className='icon' />
                                        :
                                        <VisibilityOff className='icon' />
                                    }
                                </div>
                            </div>
                            <div className='inpContain'>
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    maxLength={10}
                                    placeholder='Re-Password'
                                    className='inp'
                                    name={'rePasswordReg'}
                                    onChange={(e) => setUserReg({ ...userReg, [e.target.name]: e.target.value })}
                                />
                            </div>

                            <button disabled={isFetching} className='loginBtn' onClick={registerUser}>
                                {!isFetching && 'Register'}
                                <DotLoader color={"#fff"} loading={isFetching} css={override} size={30} />
                            </button>

                        </div>
                        <div className='top'>
                            <h6>Do you already have account?</h6>
                            <h5 onClick={() => setIsLogin(true)}>Login</h5>
                        </div>
                    </div>

                    <button
                        onClick={() => setAuth(false)}
                        className='close'>
                        <Close className='closeIcon' />
                    </button>
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default AuthDialog;
import axios from "axios";
import { toast } from 'react-toastify';

import { authFailure, authStart, authSuccess } from "./AuthActions";

const CryptoJs = require("crypto-js");

export const testUser = async (dispatch) => {
    //dispatch(authStart());
    try {
        const user = JSON.parse(localStorage.getItem("phone"));
        const accessToken = user.accessToken;

        const res = await axios.get(`/api/testuser/${JSON.stringify(user.result[0])}`, {
            headers: {
                token: "Bearer " + accessToken
            }
        });
        let decryptInsertJwt = CryptoJs.AES.decrypt(res.data, process.env.REACT_APP_SECRET).toString(CryptoJs.enc.Utf8);

        if (decryptInsertJwt === "wrongToken") {
            dispatch(authFailure());
            localStorage.removeItem("phone");
        } else {
            dispatch(authSuccess(res.data));
            //localStorage.setItem("users", JSON.stringify(res.data));
        }
    } catch (err) {
        dispatch(authFailure());
    }
}

export const register = async (user, dispatch, setAuth) => {
    dispatch(authStart());

    try {
        await axios.post("/investor/register", user).then((res, err) => {
            if (err) {
                dispatch(authFailure());
                toast.error('Try again!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                dispatch(authSuccess(res.data));
                toast.success('Registration complete!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setAuth(false);
            }
        });
    } catch (err) {
        dispatch(authFailure());
        toast.error(err.response.data, {
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

export const login = async (user, dispatch, setAuth) => {
    dispatch(authStart());

    try {
        await axios.get(`/investor/login/${JSON.stringify(user)}`).then((res, err) => {
            if (err) {
                dispatch(authFailure());
                toast.error('Try again!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                dispatch(authSuccess(res.data));
                toast.success('Login complete!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setAuth(false);
            }
        });
    } catch (err) {
        dispatch(authFailure());
        toast.error(err.response.data, {
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
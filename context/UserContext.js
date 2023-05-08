import React, { useState } from "react";
import axios from "../axios-orders";

const UserContext = React.createContext();

const initialState = {
  saving: false,
  logginIn: false,
  error: null,
  errorCode: null,
  token: null,
  userId: null,
};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);

  const loginUserSucces = (token, userId) => {
    setState({
      ...state,
      logginIn: false,
      error: null,
      errorCode: null,
      token,
      userId,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setState(initialState);
  };

  const loginUser = (name, password) => {
    setState({ ...state, logginIn: true });

    const data = {
      name,
      password,
      returnSecureToken: true,
    };

    axios
      .post("http://143.198.90.131/api/v1/users/login", data)
      .then((result) => {
        console.log(result.data, "res");
        const token = result.data.token;
        const userId = result.result.user._id;
        loginUserSucces(token, userId);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
      })
      .catch((err) => {
        setState({
          ...state,
          logginIn: false,
          error: err.message,
          errorCode: err.code,
          token: null,
          userId: null,
        });
      });
  };

  const signupUser = (email, password) => {
    setState({ ...state, saving: true });

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEmDZW6k2XJlQritKoYeJG14ExYa1rRSM",
        data
      )
      .then((result) => {
        // LocalStorage ruu hadgalna
        const token = result.data.idToken;
        const userId = result.data.localId;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        setState({
          ...state,
          saving: false,
          token,
          userId,
          error: null,
          errorCode: null,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          saving: false,
          token: null,
          userId: null,
          error: err.message,
          errorCode: err.code,
        });
      });
  };

  return (
    <UserContext.Provider
      value={{ state, signupUser, loginUser, logout, loginUserSucces }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

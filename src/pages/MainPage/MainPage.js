// main.js
import React from "react";
import { auth } from "../../config/firebase/firebase.config";
import { Button } from "antd";
import cls from "./MainPage.module.css";

const Mainpage = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <div className={cls.wrapper}>
      <center>
        <h3>Добро пожаловать {auth.currentUser.phoneNumber}</h3>
        <Button type="primary" style={{ marginLeft: "20px" }} onClick={logout}>
          Выйти
        </Button>
      </center>
    </div>
  );
};

export default Mainpage;

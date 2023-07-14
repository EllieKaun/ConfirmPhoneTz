import { CustomInput } from "components/UI/CustomInput";
import { useState } from "react";
import { auth, firebase } from "config/firebase/firebase.config";
import { Button } from "antd";

const PhoneInputComponent = (props) => {
  const { setIsSent, setResult } = props;
  const [number, setNumber] = useState("");

  const signin = () => {
    if (!number) return;
    const verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(number, verify)
      .then((result) => {
        setResult(result);
        alert("Код отправлен");
        setIsSent(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  return (
    <>
      <CustomInput
        value={number}
        setValue={setNumber}
        placeholder={"Введите номер телефона"}
      />
      <div id="recaptcha-container"></div>
      <Button type="primary" onClick={signin}>
        Отпрвить код
      </Button>
    </>
  );
};

export default PhoneInputComponent;

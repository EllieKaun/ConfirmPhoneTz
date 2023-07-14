import { useState } from "react";
import { PhoneInputComponent, OTPInputComponent } from "components";
import cls from "./LoginPage.module.css";

const LoginPage = () => {
  const [isSent, setIsSent] = useState(false);
  const [result, setResult] = useState("");

  return (
    <>
      {!isSent ? (
        <div className={cls.wrapper}>
          <PhoneInputComponent setResult={setResult} setIsSent={setIsSent} />
        </div>
      ) : (
        <div className={cls.wrapper}>
          <OTPInputComponent result={result} />
        </div>
      )}
    </>
  );
};

export default LoginPage;

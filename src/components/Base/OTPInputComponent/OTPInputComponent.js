import { CustomInput } from "components/UI/CustomInput";
import { useState } from "react";
import { Button } from "antd";

const OTPInputComponent = (props) => {
  const { result } = props;
  const [otp, setOtp] = useState("");

  const validateOtp = () => {
    if (otp === null || result === null) return;
    result.confirm(otp).catch(() => {
      alert("Неверный код!");
    });
  };

  return (
    <>
      <CustomInput value={otp} setValue={setOtp} placeholder={"Введите код"} />
      <Button type="primary" onClick={validateOtp}>
        Подтвердить
      </Button>
    </>
  );
};

export default OTPInputComponent;

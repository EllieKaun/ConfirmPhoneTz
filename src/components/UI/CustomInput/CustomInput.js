import Input from "antd/es/input/Input";
import cls from "./CustomInput.module.css";

const CustomInput = (props) => {
  const { value, setValue, placeholder } = props;
  return (
    <>
      <Input
        className={cls.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;

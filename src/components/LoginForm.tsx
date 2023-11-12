import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const LoginForm: React.FC = (props) => {
  const {
    register, 
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: { value: /^\S+@\S+$/i, message: "Email не правельный" },
            validate: (value) => !value.includes(" ") || "Без пробелов",
          })}
        />
        {errors.email && (
          <span>
            Требуется указать адрес электронной почты, который должен быть
            действительным
          </span>
        )}
      </div>
      <div>
        <label>Пароль:</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 5,
              message: "Минимальное количество символов 5",
            },
            validate: (value) => !value.includes(" ") || "без пробелов",
          })}
        />
        {errors.password && (
          <span>Пароль обязателен и должен содержать не менее 5 символов</span>
        )}
      </div>
      <div>
        <label>Подтвердите пароль:</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: {
              matches: (value) => value === getValues("password"),
              noSpaces: (value) => !value.includes(" ") || "Без пробелов",
            },
          })}
        />
        {errors.confirmPassword && (
          <span>Пароли не совпадают или присутствуют пробелы</span>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

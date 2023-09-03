import { useState } from "react";

interface Props {
  setLogin: (login: boolean) => void;
}

const LoginPage = ({ setLogin }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const verifyEmailAndPassword = (email: string, password: string) => {
    const isEmailValid = email.length > 7;
    const isPasswordValid = password.length > 8;

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isEmailFormatValid = emailPattern.test(email);

    return {
      isEmailValid,
      isPasswordValid,
      isEmailFormatValid,
    };
  };

  const handleSubmit = () => {
    const { isEmailValid, isPasswordValid, isEmailFormatValid } =
      verifyEmailAndPassword(email, password);

    if (isEmailValid && isPasswordValid && isEmailFormatValid) {
      setLogin(true);
    } else {
      if (!isEmailFormatValid) {
        alert("Invalid email format. Please enter a valid email address.");
      } else if (!isEmailValid) {
        alert("Email is too short. Please enter a valid email address.");
      } else if (!isPasswordValid) {
        alert("Password is too short. Please enter a valid password.");
      }
    }
  };

  return (
    <div className="min-h-[50vh] w-80 flex flex-col justify-start items-center pt-5">
      <h1 className="text-2xl mb-4">Login</h1>

      <form className="flex flex-col justify-start items-center">
        <input
          type="text"
          placeholder="email"
          name="email"
          className="mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="password"
          name="password"
          className="mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;

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

    return {
      isEmailValid,
      isPasswordValid,
    };
  };

  const handleSubmit = () => {
    const { isEmailValid, isPasswordValid } = verifyEmailAndPassword(
      email,
      password
    );

    if (isEmailValid && isPasswordValid) {
      console.log(true);
      setLogin(true);
    }
  };

  return (
    <div className="min-h-[50vh] w-80 flex flex-col justify-start items-center pt-5">
      <h1 className="text-2xl mb-4">Login</h1>

      <form className="flex flex-col justify-start items-center">
        <input
          type="text"
          name="email"
          className="mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
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

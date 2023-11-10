import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const successUrl = "https://app.loch.one/welcome";

export default function SignUp() {
  const [values, setValues] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const validateAndSubmitForm = (e) => {
    e.preventDefault();

    const errors = {};

    if (!isEmail(values.email)) {
      errors.email = "Wrong email";
    }

    setErrors(errors);

    if (!Object.keys(errors).length) {
      window.location.href = successUrl;
    }
  };

  const setEmail = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };
  console.log("hello", errors);

  console.log("gs", Object.keys(errors).length);

  useEffect(() => {
    document.body.classList.add("signup-page");
    return () => {
      document.body.classList.remove("signup-page");
    };
  }, []);
  return (
    <>
      <Link to="/">
        <div className="w-8 h-8 my-3 ml-auto mr-10 lg:mr-40 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001ZM11 13.0001V19.0001H13V13.0001H11Z"></path>
          </svg>
          <p className="text-xs -ml-0.5">Home</p>
        </div>
      </Link>
      <div className="signup flex flex-col justify-center w-full h-screen px-8">
        <div className="w-full lg:w-1/2 mx-auto">
          <h1 className="text-[#b0b0b0] text-4xl font-medium my-4 text-left w-full lg:w-1/2 leading-snug">
            Sign up for exclusive access
          </h1>
          <form onSubmit={validateAndSubmitForm}>
            <input
              type="text"
              value={values.email}
              onChange={setEmail}
              placeholder="Your email address"
              className="border-2 p-3 w-full mt-2 mb-4"
            />

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 text-lg w-full rounded mt-2 mb-4"
            >
              Get Started
            </button>

            {Object.entries(errors).map(([key, error]) => (
              <span key={`${key}: ${error}`} className="text-red-600">
                {key}: {error}
              </span>
            ))}
          </form>

          <p className="mt-2 font-medium">
            You'll receieve an email with an invite link to join.
          </p>
        </div>
      </div>
    </>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import { ErrorMessage, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { LoginSchema } from "../validation/loginSchema";
import { useState } from "react";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen border ">
        <div className="grid grid-row-2 justify-center mt-30 mb-20  ">
          <div className="">
            <img className="w-100 " src="SocioGram.png" alt="logo" />
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={toFormikValidationSchema(LoginSchema)}
            onSubmit={(values, { resetForm }) => {
              const users = JSON.parse(localStorage.getItem("users")) || [];
              const user = users.find((user) => user.email === values.email);

              if (!user) {
                setErrorMessage("User does not exist, please register.");
              } else if (user.password !== values.password) {
                setErrorMessage("Incorrect Password");
              } else {
                setErrorMessage("");
                resetForm();
                navigate("/Profile");
              }
            }}
          >
            {() => (
              <Form>
                <div className="border  rounded-2xl p-10 w-100 grid justify-center gap-y-5 ">
                  <div>
                    <label htmlFor="email address" className="block text-2xl">
                      Email Address
                    </label>
                    <input
                      className="border w-70 rounded-2xl h-10 p-2"
                      placeholder="Enter your Email address."
                      type="email"
                      name="email"
                      id="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-2xl">
                      Password
                    </label>
                    <input
                      className="border w-70 rounded-2xl h-10 p-2"
                      placeholder="Enter password."
                      type="password"
                      name="password"
                      id="password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-red-600 text-center ">{errorMessage}</p>
                  )}

                  <div>
                    <Button text={"Login"} />
                  </div>
                  <div className="flex">
                    <p>Don't have an account?</p>
                    <Link to={"/register"} className="text-cyan-600">
                      Register
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import { ErrorMessage, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";
import { RegisterSchema } from "../validation/registerSchema";


export const Register = () => {
  const [completedMsg, setCompletedMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const Navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen border ">
        <Formik
          initialValues={{
            name: "",
            phonenumber: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={toFormikValidationSchema(RegisterSchema)}
          onSubmit={(values, { resetForm }) => {
            const existingUsers =
              JSON.parse(localStorage.getItem("users")) || [];

            const emailExists = existingUsers.some(
              (user) => user.email === values.email
            );

            if (emailExists) {
              setErrorMsg("Email already registered.Please Login.");
              setCompletedMsg("");
            }
            setCompletedMsg("Registred Successfully");
            setErrorMsg("");

            resetForm();
            setTimeout(() => Navigate("/Login"), 2000);

            existingUsers.push(values);
            localStorage.setItem("users", JSON.stringify(existingUsers));

            setCompletedMsg("Registred Successfully");
            setErrorMsg("");

            resetForm();
            setTimeout(() => Navigate("/Login"), 2000);
          }}
        >
          {() => (
            <Form>
              <div className="grid grid-row-2 justify-center mt-10 mb-20 ">
                <div className="">
                  <img className="w-100 " src="SocioGram.png" alt="logo" />
                </div>
                <div className="border  rounded-2xl p-10 w-100 grid justify-center gap-y-5 ">
                  <div>
                    <label htmlFor="username" className="block text-2xl">
                      Username
                    </label>
                    <input
                      className="border w-70 rounded-2xl h-10 p-2"
                      placeholder="Enter your full name."
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone number" className="block text-2xl">
                      Phone Number
                    </label>
                    <input
                      className="border w-70 rounded-2xl h-10 p-2"
                      placeholder="Enter your phone number."
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                    />
                  </div>
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
                  </div>
                  <div>
                    <label
                      htmlFor="confirm password"
                      className="block text-2xl"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="border w-70 rounded-2xl h-10 p-2"
                      placeholder="Re-enter password."
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                    />

                    <ErrorMessage
                      name="confirmpassword"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  {errorMsg && (
                    <p className="text-red-600 text-center">{errorMsg}</p>
                  )}
                  <div>
                    <Button text={"Register"} />
                  </div>
                  <div className="flex">
                    <p>Already have an account?</p>
                    <Link to={"/login"} className="text-cyan-600">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

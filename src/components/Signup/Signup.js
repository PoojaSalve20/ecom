import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Master from "../common/Master/Master";
import "../Login/login.css";
import { clearMessage } from "../../slice/message";
import { register } from "../../slice/auth";


const Register = () => {

  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("This field is required!"),
  });
  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;
    setSuccessful(false);
    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <Master>
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 border-bottom p-2">
              <h1 className="text-center h-hero">Xperia</h1>
              <p className="p-hero text-white text-center ">
                <strong>Create. Invite. Collaborate </strong>
              </p>
            </div>
          </div>
          <section className="ftco-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10">
                  <div className="wrap d-md-flex">
                    <div
                      className="img"
                      style={{
                        backgroundImage:
                          "url(https://www.nicepng.com/png/detail/43-431978_books-png-transparent-vector-freeuse-library-book-png.png)",
                      }}
                    ></div>
                    <div className="login-wrap p-4 p-md-4">
                      <div className="d-flex">
                        <div className="w-100">
                          <h3 className="mb-4">Sign Up</h3>
                        </div>
                        <div className="w-100">
                          <p className="social-media d-flex justify-content-end">
                            <a
                              href="#"
                              className="social-icon d-flex align-items-center justify-content-center"
                            >
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon d-flex align-items-center justify-content-center"
                            >
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleRegister}
                      >
                        <Form>
                          <div className="form-group mb-3">
                            <label className="label" for="name">
                              Username
                            </label>
                            <Field
                              type="text"
                              className="form-control"
                              name="username"
                              placeholder="Username"
                              required
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label" for="email">
                              Email
                            </label>
                            <Field
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              required
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label" for=" password">
                              Password
                            </label>
                            <Field
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label className="label" for="conform password">
                              {" "}
                              Conform Password
                            </label>
                            <Field
                              type="password"
                              className="form-control"
                              placeholder="Conform Password"
                              name="confirm_password"
                            />
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="form-control btn btn-black rounded submit px-3"
                            >
                              Sign Up
                            </button>
                          </div>
                        </Form>
                      </Formik>
                      <p className="text-center">
                        Already have an Account?{" "}
                        <Link to="/login">Sign In</Link>{" "}
                      </p>
                    </div>
                    {message && (
                      <div className="form-group">
                        <div
                          className={
                            successful
                              ? "alert alert-success"
                              : "alert alert-danger"
                          }
                          role="alert"
                        >
                          {message}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      </>
    </Master>
  );
};

export default Register;

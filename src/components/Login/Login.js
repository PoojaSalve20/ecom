import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../slice/auth";
import { clearMessage } from "../../slice/message";
import Master from "../common/Master/Master";
import "./login.css";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });
  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
  return (
    <Master>
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 border-bottom p-2">
              <h1 class="text-center h-hero">Xperia</h1>
              <p class="p-hero text-white text-center ">
                <strong>Create. Invite. Collaborate </strong>
              </p>
            </div>
          </div>
          <section class="ftco-section">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                  <div class="wrap d-md-flex">
                    <div
                      class="img"
                      style={{
                        backgroundImage:
                          "url(https://www.nicepng.com/png/detail/43-431978_books-png-transparent-vector-freeuse-library-book-png.png)",
                      }}
                    ></div>
                    <div class="login-wrap p-4 p-md-5">
                      <div class="d-flex">
                        <div class="w-100">
                          <h3 class="mb-4">Sign In</h3>
                        </div>
                        <div class="w-100">
                          <p class="social-media d-flex justify-content-end">
                            <a
                              href="#"
                              class="social-icon d-flex align-items-center justify-content-center"
                            >
                              <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                              href="#"
                              class="social-icon d-flex align-items-center justify-content-center"
                            >
                              <i class="fa-brands fa-twitter"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                      >
                        <Form>
                          <div class="form-group mb-3">
                            <label class="label" for="name">
                              Username
                            </label>
                            <Field
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              required
                              name="username"
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div class="form-group mb-3">
                            <label class="label" for="password">
                              Password
                            </label>
                            <Field
                              type="password"
                              class="form-control"
                              placeholder="Password"
                              required
                              name="password"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="alert alert-danger"
                            />
                          </div>
                          <div class="form-group">
                            <button
                              type="submit"
                              class="form-control btn btn-black rounded submit px-3"
                              disabled={loading}
                            >
                              Sign In
                            </button>
                            {loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                          </div>
                          <div class="form-group d-md-flex">
                            <div class="w-50 text-left">
                              <label class="checkbox-wrap checkbox-primary mb-0">
                                Remember Me
                                <input type="checkbox" checked />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                            <div class="w-50 text-md-right">
                              <a href="#">Forgot Password</a>
                            </div>
                          </div>
                        </Form>
                        <p class="text-center">
                          Not a member? <Link to="/register">Sign up</Link>
                        </p>
                      </Formik>
                    </div>
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

export default Login;

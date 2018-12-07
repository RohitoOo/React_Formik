import React from "react"
import { withFormik } from "formik"

const App = ({ values, handleChange, handleSubmit }) => (
  <div >
    <form onSubmit={handleSubmit}>

    <input
      type="email"
      name="email"
      placeholder="Email..."
      value={values.email}
      onChange={handleChange}
    />
    <br />
    <input
      type="password"
      name="password"
      placeholder="Password..."
      value={values.password}
      onChange={handleChange}
    />
    <br />
    <button type="submit">Submit</button>
    </form>
  </div>
)

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    }
  },
  handleSubmit(values) {
    console.log( values)
  }
})(App)

export default FormikApp

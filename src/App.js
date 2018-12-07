import React from "react"
import { withFormik, Form, Field } from "formik"

const App = ({values}) => (
  <div >
  {/* {console.log(values)} */}
    <Form>
    <Field
      type="email"
      name="email"
      placeholder="Email..."
    />
    <br />
    <Field
      type="password"
      name="password"
      placeholder="Password..."
    />
    <Field
      type="checkbox"
      name="newsletter"
      checked={Boolean(values.newsletter)}
    />
    <br />
    <button type="submit">Submit</button>
    </Form>  
  </div>
)

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter }) {
    return {
      email: email || "",
      password: password || "",
      newsletter:  newsletter || true
    }
  },
  handleSubmit(values) {
    // console.log(values)
  }
})(App)

export default FormikApp

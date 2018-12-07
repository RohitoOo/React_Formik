import React from "react"
import { withFormik, Form, Field} from "formik"
const  Yup = require( "yup")

const App = ({

  values,
  errors,
  touched,
  isSubmitting

}) => (
  <div >
  {/* {console.log({isSubmitting})} */}
  {touched.email && errors.email && <p>{errors.email}</p> }
    <Form>
    <Field
      type="email"
      name="email"
      placeholder="Email..."
    />
    <br />
    {touched.password && errors.password && <p>{errors.password}</p> }
    <Field
      type="password"
      name="password"
      placeholder="Password..."
    />
    <label>
      <Field
        type="checkbox"
        name="newsletter"
        checked={Boolean(values.newsletter)}
      />
      Join The Newsletter
    </label>
    <br />
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <br />
    <button disabled={isSubmitting} type="submit">Submit</button>
    </Form>  
  </div>
)

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter:  newsletter || true,
      plan: plan || "premium"
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(9, "Dude! Make the password longer than 9 characters").required()
  }),
  handleSubmit({email}, {resetForm, setErrors, setSubmitting}) {
    // console.log(email)
    setTimeout( () => {
      // Check Database for Exisiting Emails
      if(email === "rohito@gmail.com"){
        setErrors({email: "This email is already taken"})
      }
      else{
        resetForm()
      }
      setSubmitting(false)

    },2000 )
   
  }
})(App)

export default FormikApp

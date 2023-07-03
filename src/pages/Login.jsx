import SignIn from '../components/SignIn'

const Login = () => {
  return (
    <main className="main bg-light">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignIn />
      </section>
    </main>
  )
}

export default Login

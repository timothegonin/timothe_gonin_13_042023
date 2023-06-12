import AuthView from '../features/auth/AuthView'

const Login = () => {
  return (
    <main className="main bg-light">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <AuthView />
      </section>
    </main>
  )
}

export default Login

import { Helmet, HelmetProvider } from 'react-helmet-async'
import SignIn from '../components/SignIn'

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Argent Bank | Login</title>
      </Helmet>
      <main className="main bg-light">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignIn />
        </section>
      </main>
    </HelmetProvider>
  )
}

export default Login

import { Helmet, HelmetProvider } from 'react-helmet-async'
import SignIn from '../components/SignIn'

/**
 * Login page component representing the login page of the application.
 * @component
 * @returns {JSX.Element} The rendered Login page component.
 */
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

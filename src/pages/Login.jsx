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
      <main className="bg-[#12002b] flex-1">
        <section className="bg-white mx-auto w-80 mt-14 p-8 rounded-md">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignIn />
        </section>
      </main>
    </HelmetProvider>
  )
}

export default Login

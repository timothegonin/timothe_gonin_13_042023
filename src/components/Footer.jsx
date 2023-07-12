import { Copyright } from 'current-year-copyright-react'
/**
 * Component for rendering the footer.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="footer">
      <Copyright nameEntry="Argent Bank" className="footer-text" />
    </footer>
  )
}

export default Footer

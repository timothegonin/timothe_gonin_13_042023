/**
 * Component for rendering the footer.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  const actualYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-text">Copyright {actualYear} Argent Bank</p>
    </footer>
  )
}

export default Footer

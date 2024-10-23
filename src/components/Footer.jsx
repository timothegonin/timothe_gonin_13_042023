import { Copyright } from 'current-year-copyright-react'
/**
 * Component for rendering the footer.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="flex justify-center pt-8 pb-6 px-0 border-t-2 border-[#ccc]">
      <Copyright nameEntry="Argent Bank" className="m-0 p-0" />
    </footer>
  )
}

export default Footer

import './footer.css'
import { poppins } from '../../fonts'

export default function Footer() {
    return (
        <footer className='genius-footer'>
                <ul className="genius-footer-address">
                    <h3 className={`genius-footer-title ${poppins.variable}`}>INNOVATORS FOR PURPOSE</h3>
                    <h4>91 1st Street #425475</h4>
                    <h4>Cambridge, MA 02141-1804</h4>
                    <h4>857-285-3842</h4>
                    <h4><i>Empowering Our Next Generation of Innovators.</i></h4>
                    <h3 className="genius-footer-copyright">© 2014-22 INNOVATORS FOR PURPOSE</h3>
                </ul>
                <ul className="genius-footer-info">
                    <h3 className={`genius-footer-title ${poppins.variable}`}>INFO</h3>
                    <h4><a href="https://innovatorsforpurpose.org/our-story">Our Story</a></h4>
                    <h4><a href="https://innovatorsforpurpose.org/our-programs">Our Programs</a></h4>
                    <h4><a href="https://innovatorsforpurpose.org/our-work">Our Work</a></h4>
                    <h4><a href="https://innovatorsforpurpose.org/blog">News + Updates</a></h4>
                </ul>
                <ul className="genius-footer-action">
                    <h3 className={`genius-footer-title ${poppins.variable}`}>ACTION</h3>
                    <h4><a href="https://innovatorsforpurpose.org/donate">Donate</a></h4>
                    <h4><a href="https://innovatorsforpurpose.org/contact">Contact</a></h4>
                </ul>
                <div className="genius-footer-social">
                    <h1>Join Our Email List</h1>
                    <button>
                        <a href="http://eepurl.com/djlvpH">Subscribe</a>
                    </button>
                </div>
        </footer>
    )
}

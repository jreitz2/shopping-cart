import phone from '../assets/phone.jpeg';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import tt from '../assets/tt.png'

const Contact = () => {
    return ( 
        <div className="contact-container">
            <img src={phone} alt="old phone" className='phone-img'/>
            <div className='socials'>
                <img src={fb} alt="facebook icon" />
                <img src={insta} alt="instagram icon" />
                <img src={tt} alt="tiktok icon" />
            </div>
        </div> 
    );
}
 
export default Contact;
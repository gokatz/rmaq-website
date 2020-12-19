import styles from '../styles/ContactUs.module.css';
import Button from './button';
import SectionHeader from './section-header';

const ContactUs = () => {

  // use https://developers.google.com/maps/documentation/embed/map-generator
  let googleMapFrame = 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ96l_0NP7ST4RhkcUEXKPpcU&key=AIzaSyCOgOXJR3nVkPdL10CEDejBLEtCx9erqwc';
  let email = 'tradingrmaq@gmail.com';
  let primaryPhone = '+966 013 832 1790';
  let secPhone =' +966 509 059 407';

  return (
    <>
      <SectionHeader title="Contact Us" id="contact-us" />

      <div className="container mx-auto mb-16">

        <div className="text-lg text-center -mt-5 mb-12 px-5">
          Reach out to us! We’ll thrive hard to meet your needs!
        </div>

        <div className="flex flex-col md:flex-row justify-around w-full mx-auto mb-16">

          <ContactCard iconUrl="./assets/icons/map.svg">
            P.O. Box 11022, Dammam <br />
            Kingdom of Saudi Arabia <br />
            Zip Code:  31453
          </ContactCard>

          <ContactCard iconUrl="./assets/icons/email.svg">
            <a href={`mailto:${email}`} className="underline"> {email} </a>
          </ContactCard>

          <ContactCard iconUrl="./assets/icons/phone.svg">
            <div>
              Tel & Fax: <a href={`tel:${primaryPhone}`} className="underline"> {primaryPhone} </a>  <br />
              Mob: <a href={`tel:${secPhone}`} className="underline"> {secPhone} </a>
            </div>
          </ContactCard>
        </div>


        <div className="flex flex-col md:flex-row">
          <iframe 
            frameBorder="0" 
            className={`flex-shrink-0 flex-grow-0 w-full md:w-1/2 lg:mr-12 border rounded shadow ${styles['google-map-frame']}`}
            src={googleMapFrame} 
            allowFullScreen
          />

          <div className="w-full lg:ml-12 mt-6 md:mt-0">
            <form className="border rounded px-5 py-10 md:px-10" name="contact" method="POST" data-netlify="true">
              <input name="name" placeholder="Your Name" className={styles['contact-field']} required />
              <input name="mobile" placeholder="Mobile" className={styles['contact-field']} required />
              <input name="email" placeholder="Email (Optional)" className={styles['contact-field']} />
              <textarea name="message" placeholder="Your Message (Optional)" rows="5" className={styles['contact-field']} />
              <div className="text-center mt-10">
                <Button className="bg-brand-blue text-white" type="submit"> Send Message </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default ContactUs;

const ContactCard = (props) => {

  let { iconUrl, children } = props;

  return (
    <div className="flex shadow rounded-md p-8 m-3">
      <div className="mr-6 flex items-center flex-shrink-0">
        <img src={iconUrl} className="h-10 max-h-full" />
      </div>
      <div className="flex items-center">
        {children}
      </div>
    </div>
  )
}
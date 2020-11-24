import styles from '../styles/ContactUs.module.css';
import Button from './button';
import SectionHeader from './section-header';

const ContactUs = () => {

  let googleMapFrame = 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYTN9T-plUjoRM9RjaAunYW4&key=AIzaSyCOgOXJR3nVkPdL10CEDejBLEtCx9erqwc';
  googleMapFrame = ''

  return (
    <>
      <SectionHeader title="Contact Us" id="contact-us" />

      <div className="container mx-auto mb-16">

        <div className="text-lg text-center -mt-5 mb-16">
          Reach out to us! We’ll thrive hard to meet your needs!
        </div>

        <div className="flex flex-col md:flex-row text-center justify-between w-full md:w-3/5 mx-auto mb-16">
          <div>
            <div className="font-semibold"> 
              Address
            </div>
            <div className="mt-4">
              123, DWT Building <br/>
              ABC Street, Riyadh, <br/>
              Saudi Arabia - 11564
            </div>
          </div>

          <div>
            <div className="font-semibold mt-10 md:mt-0">
              Email Address
            </div>
            <div className="mt-4">
              contactus@mraq.com <br />
              sales@mraq.com
            </div>
          </div>

          <div>
            <div className="font-semibold mt-10 md:mt-0">
              Phone
            </div>
            <div className="mt-4">
              +966 - 123456789 <br />
              +966 - 98765432110
            </div>
          </div>
        </div>


        <div className="flex flex-col md:flex-row">
          <iframe 
            frameBorder="0" 
            className={`flex-shrink-0 flex-grow-0 w-full md:w-1/2  md:mr-12 border-none ${styles['google-map-frame']}`}
            src={googleMapFrame} 
            allowFullScreen
          />

          <div className="w-full md:ml-12 mt-6 md:mt-0">
            <form className="border rounded p-10">
              <input placeholder="Your Name" className={styles['contact-field']} />
              <input placeholder="Mobile" className={styles['contact-field']} />
              <input placeholder="Email (Optional)" className={styles['contact-field']} />
              <textarea placeholder="Your Message (Optional)" rows="5" className={styles['contact-field']} />
              <div className="text-center mt-10">
                <Button className="bg-brand-blue text-white"> Send Message </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
};

export default ContactUs;
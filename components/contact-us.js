import styles from '../styles/ContactUs.module.css';
import Button from './button';
import SectionHeader from './section-header';

const ContactUs = () => {
  return (
    <>
      <SectionHeader title="Contact Us" id="contact-us" />

      <div className="container mx-auto mb-16">

        <div className="text-lg text-center -mt-5 mb-16">
          Reach out to us! We’ll thrive hard to meet your needs!
        </div>

        <div className="flex text-center justify-between w-3/5 mx-auto mb-16">
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
            <div className="font-semibold">
              Email Address
            </div>
            <div className="mt-4">
              contactus@mraq.com <br />
              sales@mraq.com
            </div>
          </div>

          <div>
            <div className="font-semibold">
              Phone
            </div>
            <div className="mt-4">
              +966 - 123456789 <br />
              +966 - 98765432110
            </div>
          </div>
        </div>


        <div className="flex">
          <iframe 
            width="600" 
            height="450" 
            frameBorder="0" 
            className="flex-shrink-0"
            style={{ border: '0' }} 
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYTN9T-plUjoRM9RjaAunYW4&key=AIzaSyCOgOXJR3nVkPdL10CEDejBLEtCx9erqwc" 
            allowFullScreen
          />

          <div className="w-full ml-24">
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
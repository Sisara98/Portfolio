import { FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateEmail = (email) => {
    // Basic email validation using regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validation checks
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("All fields are required.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const formObject = {
      ...formData,
      access_key: "d702f6c6-0fd4-46b5-b742-a78d96885c7e", // Your access key for the API
    };

    const json = JSON.stringify(formObject);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success(" Thank you!, Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Clear form data on successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error("Message failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="contact section">
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">Let&apos;s talk!</h3>
            <p className="contact__description">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon" />
                <div>
                  <span className="info__title">Mail me</span>
                  <h4 className="info__desc"><strong>sisaradilhari.1998@gmail.com</strong></h4>
                </div>
              </div>

              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <span className="info__title">Call me</span>
                  <h4 className="info__desc"><strong>+94715747238</strong></h4>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://www.facebook.com/share/15FBTviYCa/?mibextid=qi2Omg" className="contact__social-link" target="_blank">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/sisara-dilhari/" className="contact__social-link" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Sisara98" className="contact__social-link" target="_blank">
                 <FaGithub/>
               </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form__control"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form__input-div">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form__control"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form__input-div">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject"
                  className="form__control"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form__control textarea"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button className="button">
              Send Message
              <span className="button__icon contact__button_icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;

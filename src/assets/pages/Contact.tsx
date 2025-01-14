/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Body from '../layouts/Body';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const formStyle = css({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1rem',
  '& input, textarea': {
    borderRadius: '5px',
    border: 'thin solid gray',
    fontSize: '1rem',
    padding: '.5rem',
    marginBottom: '1rem',
  },
  '& button': {
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: 'var(--navy)',
    padding: '.6rem 2rem',
    width: '100%',
    color: 'var(--winter)',
    '&: hover': {
      color: 'var(--winter)',
      backgroundColor: 'var(--orange)',
      transition: '0.5s',
    },
  },
});

export default function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm('service_364ohnh', 'template_e00j55m', formRef.current, {
        publicKey: 'nYwWgOkehNBXEy1MO',
      })
      .then(
        () => {
          console.log('Success');
        },
        (error) => {
          console.log('Failed', error.text);
        }
      );

    setSent(true);
  };

  if (sent) {
    return (
      <>
        <Body>
          <p>Thank you for contacting us.</p>

          <p>We will reply to you soon.</p>
        </Body>
      </>
    );
  } else {
    return (
      <>
        <Body>
          <h2>Club Contact Information</h2>
          <p>
            Use the form below to contact us. We look forward to hearing from
            you!
          </p>

          <form ref={formRef} css={formStyle} onSubmit={sendEmail}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" required />
            <label htmlFor="">Email</label>
            <input type="email" name="email" required />
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" />
            <label htmlFor="">Message</label>
            <textarea
              rows={5}
              css={{ resize: 'none' }}
              name="message"
              required
            />
            <button>Send Message</button>
          </form>
        </Body>
      </>
    );
  }
}

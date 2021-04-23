import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className='bck_red'>
      <Fade triggerOnce delay={500}>
        <div className='font_righteous footer_logo_venue'>The Oasis</div>
        <div className='footer_copyright'>
          © 2021 The Oasis. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;

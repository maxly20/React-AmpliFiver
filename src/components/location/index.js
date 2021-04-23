import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.7225650842875!2d144.981255251251!3d-37.81996687965193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64295571a6281%3A0x63575fd647a0b2f9!2sMelbourne%20Cricket%20Ground!5e0!3m2!1sen!2sau!4v1619137004461!5m2!1sen!2sau'
        width='100%'
        height='500px'
        frameBorder='0'
        title='gglemaps'
        allowFullScreen
      ></iframe>

      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;

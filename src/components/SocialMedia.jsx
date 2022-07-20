import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/mohamed-nishath-m-049516191/"><BsLinkedin/></a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100017396850931"><FaFacebookF /></a>
    </div>
    <div>
    <a href="https://www.instagram.com/nishath_nich_06/"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
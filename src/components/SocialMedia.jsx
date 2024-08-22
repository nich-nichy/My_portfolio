import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/mohamed-nishath-m-049516191/"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/nich-nichy"><BsGithub /></a>
    </div>
  </div>
);

export default SocialMedia;
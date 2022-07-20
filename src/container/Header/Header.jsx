import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import pdf from '../About/Pdf/Pdf.js'
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import { FaRust } from 'react-icons/fa';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  let navigate = useNavigate();
  const [toggle, setToggle] = useState(false)
return (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Nishath</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Programmer</p>
          <p className="p-text">React Native Developer</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <button onClick={() => { navigate("/pdf") }}>Pdf</button> */}
      {/* <ul>
        {['Pdf'].map((item) => (
          <div key={item}>
          <a href={`${item}`} onClick={() => setToggle(false)}>
                    {item}
          </a>
          
        </div>
          ))}
        </ul> */}
        {/* <p >Resume</p> */}
        <a href={require("../../assets/pdf/20BIT303-Resume - Copy.pdf")} download="20bit303_Resume" className="resume__button">Resume</a>
    </motion.div>
  
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.myn} alt="profile_bg" className="myn"/>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.html, images.react, images.python].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
  );
}
export default AppWrap(Header, 'home');
// transition={{duration: 0.5, delayChildren: 0.5}}
//         className="app__header-img"
//         >
//             <img src={images.profile} alt = "profile_bg" />
//             <motion.img
//             whileInView={{ scale: [0, 1]}}
//             transition={{duration: 1, ease: 'easeInOut'}}
//             className="app__header-img"
//             src={images.circle}
//             alt="profile_circle"
//             className="overlay_circle"
//             />
//         </motion.div>
//         <motion.div
//         variant={scaleVariants}
//         >

//         </motion.div>
//         </div>
//     )
// }


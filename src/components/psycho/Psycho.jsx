import React from 'react'
import { assets } from '../../assets/assets'
import './Psycho.css'
import { useNavigate } from 'react-router-dom';

const Psycho = () => {
  const navigate = useNavigate();
  const reload = () => {
    const hearts = document.querySelectorAll('.heart');

    hearts.forEach(heart => {
      heart.classList.add('rotate');
    });

    setTimeout(() => {
      navigate('/');
    }, 6000);
  };

  return (
    <div>
      <div className="hearts left-hearts">
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
      </div>

      <div className="hearts right-hearts">
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
        <span className="heart">❤️</span>
      </div>

      <div className="aboutP">
        <div className="container1">
          <div className="itemP" data-message="I">
            <img src={assets.k1} alt="" className='imgP-1' />
          </div>
          <div className="itemP" data-message="Hate">
            <img src={assets.k2} alt="" className='imgP-2' />
          </div>
          <div className="itemP" data-message="Life">
            <img src={assets.k5} alt="" className='imgP-3' />
          </div>
          <div className="itemP" data-message="More than">
            <img src={assets.k4} alt="" className='imgP-1' />
          </div>
          <div className="itemP" data-message="Anything.">
            <img src={assets.k3} alt="" className='imgP-2' />
          </div>
        </div>
        <div className="container2">
          <div className="con2-textP">
            <h2>HAPPY BIRTHDAY</h2>
          </div>
          <div className="con2-para">
            <p>Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!</p>
          </div>
          <div className="con2-foot">
            <p>-By: Rajdeep Singh</p>
          </div>
          <div className="btn1P">
            <button className="btnP" onClick={reload}>Thank You</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Psycho

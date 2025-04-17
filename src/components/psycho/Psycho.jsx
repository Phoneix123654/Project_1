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

      <div className="about">
        <div className="container1">
          <div className="item" data-message="In">
            <img src={assets.k1} alt="" className='img-1' />
          </div>
          <div className="item" data-message="The">
            <img src={assets.k2} alt="" className='img-2' />
          </div>
          <div className="item" data-message="End">
            <img src={assets.k5} alt="" className='img-3' />
          </div>
          <div className="item" data-message="Its">
            <img src={assets.k3} alt="" className='img-1' />
          </div>
          <div className="item" data-message="My Fault.">
            <img src={assets.k4} alt="" className='img-2' />
          </div>
        </div>
        <div className="container2">
          <div className="con2-text">
            <h2>HAPPY BIRTHDAY</h2>
          </div>
          <div className="con2-para">
            <p>Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!</p>
          </div>
          <div className="con2-foot">
            <p>-By: Rajdeep Singh</p>
          </div>
          <div className="btn1">
            <button className="btn" onClick={reload}>Thank You</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Psycho

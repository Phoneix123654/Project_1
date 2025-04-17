import React from 'react'
import { assets } from '../../assets/assets'
import './My.css'
import { useNavigate } from 'react-router-dom';

const My = () => {
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
          <div className="item" data-message="I">
            <img src={assets.r1} alt="" className='img-1' />
          </div>
          <div className="item" data-message="Hate">
            <img src={assets.r2} alt="" className='img-2' />
          </div>
          <div className="item" data-message="Life">
            <img src={assets.r3} alt="" className='img-3' />
          </div>
          <div className="item" data-message="More than">
            <img src={assets.r4} alt="" className='img-1' />
          </div>
          <div className="item" data-message="Anything.">
            <img src={assets.r5} alt="" className='img-2' />
          </div>
        </div>
        <div className="container2">
          <div className="con2-text">
            <h2>HAPPY BIRTHDAY</h2>
          </div>
          <div className="con2-para">
            <p>Today, I celebrate how far I’ve come and embrace the endless possibilities ahead. 🌟 <br />
              This is my year to shine, grow, and conquer—let’s make it unforgettable! 💪</p>
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

export default My

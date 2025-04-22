import React from 'react';
import { assets } from '../../assets/assets';
import './My.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const My = () => {
  const navigate = useNavigate();
  
  const reload = () => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart-rain';
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 4000); 
    }, 100); 
  
    setTimeout(() => {
      clearInterval(interval);
      navigate('/');
    }, 6000);
  };
  

  useEffect(() => {
    const audio = new Audio(assets.kanMp3);
    audio.play();
  
    const createHeart = (e) => {
      const heart = document.createElement('div');
      heart.className = 'heart-cursor';
      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 1000);
    };
  
    window.addEventListener('mousemove', createHeart);
  
    return () => {
      window.removeEventListener('mousemove', createHeart);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  
  return (
    <div className='booody'>

      <div className="about">
        <div className="contMy1">
          <div className="imgRow1">
            <div className="itemRow1" data-message="I">
              <img src={assets.r1} alt="" className='img-1' />
            </div>
            <div className="itemRow1" data-message="Hate">
              <img src={assets.r2} alt="" className='img-2' />
            </div>
          </div>
          <div className="imgRow2">
            <div className="itemRow2" data-message="Life">
              <img src={assets.r3} alt="" className='img-3' />
            </div>
          </div>
          <div className="imgRow3">
            <div className="itemRow3" data-message="More than">
              <img src={assets.r4} alt="" className='img-1' />
            </div>
            <div className="itemRow3" data-message="Anything.">
              <img src={assets.r5} alt="" className='img-2' />
            </div>
          </div>
        </div>
        <div className="contMy2">
          <div className="con2-text">
            <h2>HAPPY BIRTHDAY</h2>
          </div>
          <div className="conMy2-para">
            <p>Today, I celebrate how far I’ve come and embrace the endless possibilities ahead. 🌟 <br />
              This is my year to shine, grow, and conquer—let’s make it unforgettable! 💪</p>
          </div>
          <div className="conMy2-foot">
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

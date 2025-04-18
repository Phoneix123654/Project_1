import React from 'react'
import { assets } from '../../assets/assets'
import './Rahul.css'
import { useNavigate } from 'react-router-dom';

const Rahul = () => {
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

      <div className="aboutV">
        <div className="container1">
          <div className="item" data-message="God">
            <img src={assets.v3} alt="" className='imgV-1' />
          </div>
          <div className="item" data-message="May">
            <img src={assets.v4} alt="" className='imgV-2' />
          </div>
          <div className="item" data-message="Bless">
            <img src={assets.v2} alt="" className='imgV-3' />
          </div>
          <div className="item" data-message="You">
            <img src={assets.v4} alt="" className='imgV-1' />
          </div>
          <div className="item" data-message="Buddy.">
            <img src={assets.v5} alt="" className='imgV-2' />
          </div>
        </div>
        <div className="container2">
          <div className="con2-textV">
            <h2>HAPPY BIRTHDAY</h2>
          </div>
          <div className="con2-para">
            <p>🎉 Happy birthday to the one who makes my heart skip a beat every day! 🎂 <br />
                    Thank you for being my rock, my joy, and my everything. 💖<br />
                    Let’s make this year the best one yet—I love you endlessly! 🌟</p>
          </div>
          <div className="con2-foot">
            <p>-By: Rajdeep Singh</p>
          </div>
          <div className="btn1V">
            <button className="btnV" onClick={reload}>Thank You</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rahul

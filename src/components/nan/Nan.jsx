import React from 'react'
import { assets } from '../../assets/assets'
import './Nan.css'
import { useNavigate } from 'react-router-dom';

const Nan = () => {
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

      <div className="aboutN">
        <div className="container1">
          <div className="item" data-message="Thanks">
            <img src={assets.n1} alt="" className='imgN-1' />
          </div>
          <div className="item" data-message="For">
            <img src={assets.n2} alt="" className='imgN-2' />
          </div>
          <div className="item" data-message="Being">
            <img src={assets.n3} alt="" className='imgN-3' />
          </div>
          <div className="item" data-message="My">
            <img src={assets.n4} alt="" className='imgN-1' />
          </div>
          <div className="item" data-message="Friend.">
            <img src={assets.n5} alt="" className='imgN-2' />
          </div>
        </div>
        <div className="container2">
          <div className="con2-textN">
            <h2>HAPPY BIRTHDAY</h2>
          </div>
          <div className="con2-para">
            <p>Even though life has taken us in different directions, I’ll always cherish the memories we created together. Thank you for being a part of the best moments of my life. Wishing you a year filled with joy, success, and all the happiness you deserve. Cheers to you!</p>
          </div>
          <div className="con2-foot">
            <p>-By: Rajdeep Singh</p>
          </div>
          <div className="btn1N">
            <button className="btnN" onClick={reload}>Thank You</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nan

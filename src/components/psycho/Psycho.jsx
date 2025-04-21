// import React from 'react'
// import { assets } from '../../assets/assets'
// import './Psycho.css'
// import { useNavigate } from 'react-router-dom';

// const Psycho = () => {
//   const navigate = useNavigate();
//   const reload = () => {
//     const hearts = document.querySelectorAll('.heart');

//     hearts.forEach(heart => {
//       heart.classList.add('rotate');
//     });

//     setTimeout(() => {
//       navigate('/');
//     }, 6000);
//   };

//   return (
//     <div>
//       <div className="aboutP">
//         <div className="container1">
//           <div className="itemP" data-message="I">
//             <img src={assets.k1} alt="" className='imgP-1' />
//           </div>
//           <div className="itemP" data-message="Hate">
//             <img src={assets.k2} alt="" className='imgP-2' />
//           </div>
//           <div className="itemP" data-message="Life">
//             <img src={assets.k5} alt="" className='imgP-3' />
//           </div>
//           <div className="itemP" data-message="More than">
//             <img src={assets.k4} alt="" className='imgP-1' />
//           </div>
//           <div className="itemP" data-message="Anything.">
//             <img src={assets.k3} alt="" className='imgP-2' />
//           </div>
//         </div>
//         <div className="container2">
//           <div className="con2-textP">
//             <h2>HAPPY BIRTHDAY</h2>
//           </div>
//           <div className="con2-para">
//             <p>Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!</p>
//           </div>
//           <div className="con2-foot">
//             <p>-By: Rajdeep Singh</p>
//           </div>
//           <div className="btn1P">
//             <button className="btnP" onClick={reload}>Thank You</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Psycho


import React from 'react';
import { assets } from '../../assets/assets';
import './Psycho.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Psycho = () => {
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
    };
  }, []);

  return (
    <div className='booody'>

      <div className="about">
        <div className="contMy1">
          <div className="imgRow1">
            <div className="itemRow1" data-message="Please forgive me for everything I've done.">
              <img src={assets.k1} alt="" className='img-1' />
            </div>
            <div className="itemRow1" data-message="I’ll always regret the way things ended. You deserved better, and I wish I had realized that before it was too late.">
              <img src={assets.k2} alt="" className='img-2' />
            </div>
          </div>
          <div className="imgRow2">
            <div className="itemRow2" data-message="I never meant to hurt you. Looking back, I wish I could undo my mistakes. You mean everything to me, and I’m truly sorry for the pain I’ve caused.">
              <img src={assets.k4} alt="" className='img-3' />
            </div>
          </div>
          <div className="imgRow3">
            <div className="itemRow3" data-message="You deserved better. I wish I had been better.">
              <img src={assets.k3} alt="" className='img-1' />
            </div>
            <div className="itemRow3" data-message="I’d give anything to hear your voice again.">
              <img src={assets.k5} alt="" className='img-2' />
            </div>
          </div>
        </div>
        <div className="contMy2">
          <div className="con2-text">
            <h2>HAPPY BIRTHDAY</h2>
          </div>
          <div className="conMy2-para">
            <p>This is my last wish—I hope you can forgive me for everything I’ve done to you. It was all my fault, after all, because you are special to me. I pray you have a good and healthy life, and may God grant all your wishes. Lastly, I just want to say that since we can’t meet now, please fulfill my final wish: to hear your voice one last time.</p>
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

export default Psycho

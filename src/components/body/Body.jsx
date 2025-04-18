import React, { useState } from 'react'
import './Body.css'
import './BodyRespon.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name === 'raj' && password === '24022005') {
      navigate('/my');
    }else if(name === 'nan' && password === '29092004'){
      navigate('/nan');
    }else if(name === 'cpr' && password === '29092005'){
      navigate('/rahul');
    }else if(name === 'adi' && password === '21022005'){
      alert('done');
    }else if(name === 'nyl' && password === '23052004'){
      navigate('/psy');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className='container'>
      {/* Callendar */}
      <div className='slider'>
        <img src={assets.feb1} alt="" className="feb1" />
        <img src={assets.feb2} alt="" className="feb2" />
        <img src={assets.may} alt="" className="may" />
        <img src={assets.sep} alt="" className="sep" />
      </div>
      {/* Input field */}
      <div className="login-box">
        <form className='form'>
          <span className='input-span'>
            <label htmlFor="name" className='label'>Name</label>
            <input
              type="text"
              id='name'
              autoComplete='off'
              placeholder='in small letters'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span className='input-span'>
            <label htmlFor="password" className='label'>Password</label>
            <input
              type="password"
              id='password'
              placeholder='ddmmyyyy'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <button
            type='button'
            className='submit'
            onClick={handleSubmit}
          >
            Log in
          </button>
        </form>
      </div>
      {/* Panda area */}
      {/* <div className="panda-gif left">
        <img src={assets.panda} alt="panda-error" />
      </div>
      <div className="panda-gif right">
        <img src={assets.panda} alt="panda-error" />
      </div> */}
    </div>
  );
}

export default Body;

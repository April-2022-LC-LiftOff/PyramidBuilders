import React from "react"; 
import './pages.css';


export default function Profile() {



  return (
    <div className="root">
      <section className='profile-page'>
        <form className="formStyles">
        <div id='aviurl' className="formInputs">
          <img src=
          "https://st4.depositphotos.com/1012074/25277/v/1600/depositphotos_252773324-stock-illustration-young-avatar-face-with-sunglasses.jpg" alt='' className="imgStyles" />
        </div>
        <div className="formInputs">
          <label><p className="textStylingInputs"> My Username: </p>
            <input name='userName' type='text'
            className="input" />
          </label>
          <label><p className="textStylingInputs">Password:</p>
            <input name='password' type='text' className="input2" />
          </label>
          <label><p className="textStylingInputs">Confirm Password: </p>
            <input name='password' type='text' className="input2" />
          </label>
          <label><p className="textStylingInputs">Email: </p>
            <input name='email' type='email' className="input"/>
          </label>
          <label><p className="textStylingInputs">About Me: </p>
            <textarea name='bio' className="input2" />
          </label>
            <p className="textStylingRadios">Social Media Apps??</p>
          </div>
        </form>
      </section>
    </div>
  );
}


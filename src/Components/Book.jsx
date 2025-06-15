import './Book.css'
import Navigation from './Navigation';
import Footer from './Footer';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Book(){

    const [formData, setFormData] = useState({
        name:'',
        option:'',
        date:'',
        time:'',
        email:'',
        message:'',
    })

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate('/confirm');
    } else {
      alert('Error saving reservation.');
    }
  } catch (err) {
    console.error(err);
    alert('Server error.');
  }
};


    return(
        <>
        <Navigation></Navigation>

        <section className="book">
            <h3>Book a Table</h3>
            
            <form className="form" onSubmit={handleSubmit}>
                 <label className='name-t'>
        Name
        <br></br>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <br /><br />

      <label className='option-t'>
        Location
        <br></br>
        <select name="option" value={formData.option} onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="DownTown Branch">DownTown Branch</option>
          <option value="Riverwalk Branch">RiverWalk Branch</option>
          <option value="UpTown Roof">UpTown Roof</option>
          <option value="Garden ViewCaaef">Garden View Cafe</option>
          <option value="University Nook">University Nook</option>
          <option value="Seaside Escape">SeaSide Escape</option>
        </select>
      </label>

      <br /><br />

      <label className='time-t'>
        Time
        <br></br>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>

      <br /><br />

      <label className='date-t'>
        Date
        <br></br>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>

      <br /><br />

      <label className='email-t'>
        Email
        <br></br>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <br /><br />

      <label className='msg-t'>
        Any thing you would like us to know
        <br></br>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>

      <br /><br />

      <button className='sbmt' type="submit">Submit</button>
  
            </form>
        </section>

        <Footer></Footer>
        </>
    );
}

export default Book;
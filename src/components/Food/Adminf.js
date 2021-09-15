import React from 'react';
import { useState } from 'react';
import addFoodItem from './helpers/addFood';

function Adminf()
{
  let [username, setUsername] = useState('');
  let [price, setPrice] = useState(0);
  let [availability, setAvailability] = useState(0);

  const [buttonText, setButtonText] = useState("Add item!");  

  return(
      <>
        <h1>Hello Admin</h1>
        <form className="form-horizontal">
              <label>
                Set username:
                <input 
                  type="text"
                  name="name"
                  value={username}
                  onChange={ e => setUsername(e.target.value) } />
              </label>
              <br></br>
              <label>
                Set price:
                <input 
                  type="text"
                  name="name"
                  value={price}
                  onChange={ e => setPrice(e.target.value) } />
              </label>
              <br></br>
              <label>
                Set Availability:
                <input 
                  type="text"
                  name="name"
                  value={availability}
                  onChange={ e => setAvailability(e.target.value) } />
              </label>
              <br></br>
              <label>
                Checkbox utility:
                <input
                type="checkbox" name="something" value="1"
                />
                <br></br>
                
              </label>

        </form>
        <button
          type="submit"
          className="btn btn-outline-dark my-3"
          onClick={() => addFoodItem(username, price, availability)}
        >
          {buttonText}
        </button>
        <br></br>
      </>
  )
}

export default Adminf;

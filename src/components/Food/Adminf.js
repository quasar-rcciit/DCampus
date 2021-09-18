import React, { Component } from 'react';
import './adminstyle.css'

class Adminf extends Component
{
  render() {
    console.log(this.props);
    return(
      <div className="admincont">
        <h1>Hello Admin</h1>
        <div className="adminformcont ">
             
            <form className="form-horizontal adminstyleinput"
              onSubmit={(event) => {
              event.preventDefault();
              const address = this.owner_address.value;
              this.props.changeOwner(address);
              alert('Owners Address will be changed. Sure?')
              }}>
              <label>
                {"Current owner: "+this.props.ownerAddress}
              </label>
              <input 
                type="text"
                id="address"
                maxLength="42"
                required
                placeholder="Enter owner's address"
                ref={(input) => {
                  this.owner_address = input;
                }} />
              <br></br>
              <button
                type="submit"
                className="changebtn"
              >
              Change!
              </button>
            </form>
            <br></br>
            <form className="form-horizontal adminstyleinput"
              onSubmit={(event) => {
              event.preventDefault();
              const fees = this.college_fees.value;
              this.props.changeFees(fees);
              alert('College fees will be changed. Sure?')
              }}>
              <label>
                {"Current fees: "+this.props.collegeFees}
              </label>
              <input 
                type="number"
                name="fees"
                required
                max="99"
                min="0"
                placeholder="Enter college fees"
                ref={(input) => {
                  this.college_fees = input;
                }} />
              <br></br>
              <button
                type="submit"
                className="changebtn"
              >
              Change!
              </button>
            </form>
        </div>
     </div>
    );
  }
}

export default Adminf;

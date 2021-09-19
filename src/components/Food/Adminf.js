import React, { Component } from 'react';
import './adminstyle.css'

class Adminf extends Component
{
  render() {
    console.log("undefined");
    return(
      <div className="admincont">
        <h1>Hello Admin</h1>
        <div className="adminformcont ">
             
            <form className="form-horizontal adminstyleinput"
              onSubmit={(event) => {
              event.preventDefault();
              const address = this.owner_address.value;
              if(window.confirm("Owner's Address will be changed to "+address+". Sure?")){
                this.props.changeOwner(address);
              }}}>
              <label>
                {"Current owner: "+this.props.ownerAddress}
              </label>
              <input 
                type="text"
                id="address"
                maxLength="42"
                disabled={this.props.admin != this.props.account}
                required
                placeholder="Enter owner's address"
                ref={(input) => {
                  this.owner_address = input;
                }} />
              <br></br>
              <button
                type="submit"
                disabled={this.props.admin != this.props.account}
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
              if(window.confirm('College fees will be changed. Sure?')){
                this.props.changeFees(fees);
              }}}>
              <label>
                {"Current fees: "+this.props.collegeFees}
              </label>
              <input 
                type="number"
                name="fees"
                required
                disabled={this.props.admin != this.props.account}
                max="99"
                min="0"
                placeholder="Enter college fees"
                ref={(input) => {
                  this.college_fees = input;
                }} />
              <br></br>
              <button
                type="submit"
                disabled={this.props.admin != this.props.account}
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

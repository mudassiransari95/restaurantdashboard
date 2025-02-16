import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const SettingOne = () => {
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const obj = {
        user: userRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      };
      console.log(obj); // Just for testing purposes, you can remove this later
      // Add your logic here to handle form submission
    };
  return (
    <div>
      
    <div className="container mt-3">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand"  to="#">Navbar</Link>
  </div>
</nav>
</div>


<nav className="container navbar bg-body-tertiary mt-4">
<div className="container">
  <span className="navbar-brand mb-0 h1" style={{color:'darkgreen',backgroundColor:"green"}}>In demo You can not Add/Edit/Delete anything</span>
</div>
</nav>


<form> 
<div><h4>Sittings</h4></div>
<div className="mb-3 mt-4 w-100 d-flex justify-content-around alie-items-center">
  <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
  <input type="text"  className="form-control" id="exampleInputPassword1" placeholder='Admin'/>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='admin@admin.com' />
</div>
<div className="mb-3 w-100 d-flex justify-content-between alie-items-center">
  <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
  <input type="number"  className="form-control" id="exampleInputPassword1" />
  <label htmlFor="exampleInputPassword1" className="form-label">Whatsapp Number</label>
  <input type="number"  className="form-control" id="exampleInputPassword1" />
  <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
  <input type="password"  className="form-control" id="exampleInputPassword1" placeholder='admin' />
</div>
</form>


<form> 
<div><h4> App Sittings</h4></div>
<div className="mb-3 mt-4 w-100 d-flex justify-content-around alie-items-center">
  <label htmlFor="exampleInputPassword1" className="form-label">App Default Language</label>
  <input type="password" className="form-control" id="exampleInputPassword1" placeholder='English'/>
    <label htmlFor="exampleInputEmail1" className="form-label">Currency</label>
  <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Rs' />
</div>
<div className="mb-3 w-100 d-flex justify-content-around alie-items-center">
  <label htmlFor="exampleInputPassword1" className="form-label">Web App URL</label>
  <input type="url" className="form-control" id="exampleInputPassword1" />
  <label htmlFor="exampleInputPassword1" className="form-label">Referral Point for Who Referr</label>
  <input type="password" className="form-control" id="exampleInputPassword1" placeholder='10' />
 
</div>
</form>







  </div>
  )
}

export default SettingOne
import React from 'react';
import GoogleAuth from './Googleauth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FlashMessage from 'react-flash-message'
class Header extends React.Component{
	 success=(s)=>{
if(s===true)
		{
			return (<div><FlashMessage duration={3000}>
    <div class='alert alert-success text-center'><h3>you are Sucessfully Signed in </h3> </div>
  </FlashMessage></div>)
		}
		return null;
	}
	render(){
		return (
			<div>
			
					<nav class="navbar fixed-top navbar-dark bg-dark">
					  <a href="/" class="navbar-brand">Home</a>
					  <div className="right menu">
				        
				        <GoogleAuth />
				      </div>
					 
					</nav>
							{this.success(this.props.signed)}
					</div>



		         

			);
	}
}
const mapstatetoprops=state=>{
return { signed:state.auth.isSignedIn};
}
export default connect(mapstatetoprops)(Header);
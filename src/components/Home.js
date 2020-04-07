import React from 'react';
import {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {Link}from 'react-router-dom'
import FlashMessage from 'react-flash-message'


const Home= (props)=>{
	
	const check=(s)=>{
		
		if(s===true||s===null)
		{
			return null;
		}
		return(<div><FlashMessage duration={3000}>
    <div class='alert alert-danger'><h3>Please Sign In First</h3> </div>
  </FlashMessage></div>);
		
	}
	console.log(props.signed);
	return (
		
				
						<div class="card text-center">
						{check(props.signed)}
			  <div class="card-header">
			  
			    <h1 class='badge badge-primary'>NewsHub</h1>
			  </div>
			  <div class="card-body">
			    <h5 class="card-title">20 Trending News</h5>
			    <p class="card-text">Get the most recent 20 news headlines of most popular country in the World</p>
			    
			  </div>
			  <div class="card-footer text-muted">
			  Popular Countries
			    
			  </div>
			 
			  
			  <div class="ui horizontal list">
  <Link class="item mr-4" to='/in'>
    <i class="ui avatar image india flag" />
    <div class="content">
      <div class="header">India</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/us'>
    <i class="ui avatar image us flag" />
    <div class="content">
      <div class="header">USA</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/gb'>
    <i class="ui avatar image uk flag" />
    <div class="content">
      <div class="header">UK</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/au'>
    <i class="ui avatar image au flag" />
    <div class="content">
      <div class="header">Australia</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/br'>
    <i class="ui avatar image br flag" />
    <div class="content">
      <div class="header">Brazil</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/it'>
    <i class="ui avatar image it flag" />
    <div class="content">
      <div class="header">Italy</div>
      
    </div>
  </Link>
   <Link class="item ml-4 mr-4" to='/cn'>
    <i class="ui avatar image cn flag" />
    <div class="content">
      <div class="header">China</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/jp'>
    <i class="ui avatar image jp flag" />
    <div class="content">
      <div class="header">Japan</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/nz'>
    <i class="ui avatar image nz flag" />
    <div class="content">
      <div class="header">New Zealand</div>

      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/fr'>
    <i class="ui avatar image fr flag" />
    <div class="content">
      <div class="header">France</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/de'>
    <i class="ui avatar image de flag" />
    <div class="content">
      <div class="header">Germany</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/za'>
    <i class="ui avatar image za flag" />
    <div class="content">
      <div class="header">South Africa</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/nl'>
    <i class="ui avatar image nl flag" />
    <div class="content">
      <div class="header">Netherlands</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/ch'>
    <i class="ui avatar image ch flag" />
    <div class="content">
      <div class="header">Switzerland</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/sg'>
    <i class="ui avatar image sg flag" />
    <div class="content">
      <div class="header">Singapore</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/ca'>
    <i class="ui avatar image ca flag" />
    <div class="content">
      <div class="header">Canada</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/be'>
    <i class="ui avatar image be flag" />
    <div class="content">
      <div class="header">Belgium</div>
      
    </div>
  </Link>
  <Link class="item ml-4 mr-4" to='/mx'>
    <i class="ui avatar image mx flag" />
    <div class="content">
      <div class="header">Maxico</div>
      
    </div>
  </Link>
  
  
</div>
			</div>

			  
			
);
		
}
const mapstatetoprops=(state)=>
{
	return {signed:state.show.signed,signedauth:state.auth.isSignedIn};
}

export default connect(mapstatetoprops)(Home);
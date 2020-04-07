import React from 'react';
import {useEffect,useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import Rendernews from './rendernews';
import Signin from './signin'
import history from '../history'
import {shownews} from '../actions'

const Newsfetch= (props)=>{
	const {id,signed}=props.match.params;
	useEffect(()=>{
		props.shownews(id,signed);

	},[])
	
	
	
	const checker=()=>{
		
		if(!props.signed)
					{
						history.push('/');
					}
					else
					{
					return <Rendernews news={props.news}/>
				   }
				   
	}
				return (
					
					<div>
					
					{checker()}
				
					</div>
					);
			
		
		
		

}
const mapstatetoprops=state=>{
return { signed:state.auth.isSignedIn,news:state.show.news};
}
export default connect(mapstatetoprops,{shownews})(Newsfetch)


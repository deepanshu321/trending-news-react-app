import {
  SIGN_IN,
  SIGN_OUT,
  SHOW_NEWS
} from './types';
import history from '../history';
import axios from 'axios';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
export const shownews=(id,signed)=>async(dispatch,getState)=>{
	
	
  
	const res=await axios.get(`http://newsapi.org/v2/top-headlines?country=${id}&apiKey=1c5ea35ceed84ee9914ea6ab2743563e`)
	
  	dispatch({type:SHOW_NEWS,payload:{data:res.data.articles,
      signed:signed}})
  
	

	
};
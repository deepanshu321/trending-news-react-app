import React from 'react';

const datesolve=(d)=>{
		const u=d.split('T')
		return u[0]+"  "+ u[1]
	}
 const typ= ({news})=>{

	const ress=news.map((newp)=>{
		return(
						<div class="card mt-5 border border-warning">
						  <div class="card-header mx-auto" >
						    <img class="  rounded-circle img-fluid"  src={newp.urlToImage} alt="image not found"/>
						  </div>
						  <div class="card-body">
						  	<div class="  badge badge-primary">{datesolve(newp.publishedAt)}</div>
						    <div class="alert alert-success"><h5 class="card-title">{newp.title}</h5></div>
							
						    <p class="card-text">{newp.description}</p>
						    
						  </div>
						</div>
			)
	});

	return (
		<div>
			{ress}
		</div>
		);
}
export default typ;
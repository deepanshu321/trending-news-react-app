import React from 'react';

export default ()=>{
	return(
		<div>
			<div class="modal" tabIndex="-1" role="dialog">
									  <div class="modal-dialog" role="document">
									    <div class="modal-content">
									      <div class="modal-header">
									        <h5 class="modal-title"></h5>
									        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div class="modal-body">
									        <h3 class='aler alert-danger'>You have to Sign In First</h3>
									      </div>
									      <div class="modal-footer">
									        <button type="button" href='/' class="btn btn-primary">Ok</button>
									        
									      </div>
									    </div>
									  </div>
									</div>
		</div>
		);
}
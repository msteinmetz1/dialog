import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(){
    return(
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './PaymentModal.css'
import PaymentInput from './PaymentInput' 

const PaymentModal = ({ isShowing, hide, price, title}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>

    <div className="modal-overlay"></div>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div style={{marginTop:"30%"}}>
            <PaymentInput/>
          </div>
          <div id="form-container">
            <div id="sq-card-number"></div>
              <div className="third" id="sq-expiration-date"></div>
              <div className="third" id="sq-cvv"></div>
            <div className="third" id="sq-postal-code"></div>
          </div> 
        </div>
      </div>
    
  </React.Fragment>, document.body
) : null;

export default PaymentModal;




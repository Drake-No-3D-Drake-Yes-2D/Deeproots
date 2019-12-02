import React from 'react';
import ReactDOM from 'react-dom';
import './PaymentModal.css'

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
          <p>{price}</p>
          <p>{title}</p>
          <div id="form-container">
            <div id="sq-card-number"></div>
              <div className="third" id="sq-expiration-date"></div>
              <div className="third" id="sq-cvv"></div>
            <div className="third" id="sq-postal-code"></div>
            <button id="sq-creditcard" className="button-credit-card" onClick="onGetCardNonce(event)">Pay $1.00</button>
          </div> 
        </div>
      </div>
    
  </React.Fragment>, document.body
) : null;

export default PaymentModal;




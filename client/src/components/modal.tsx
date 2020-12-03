import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({
  title,
  body,
  submit,
  cancel,
  negative,
  primary,
  onDismiss,
  onSubmit
}: any) => {
  const portal = document.querySelector('#modal');

  const btnClass = () => {
    if (negative) return 'ui button negative';
    else if (primary) return 'ui button primary';
    else return 'ui button';
  };

  return portal
    ? ReactDOM.createPortal(
        <div onClick={onDismiss} className='ui dimmer modals visible active'>
          <div
            onClick={e => e.stopPropagation()}
            className='ui standart modal visible active'
          >
            <div className='header'>{title}</div>
            <div className='content'>{body}</div>
            <div className='actions'>
              <button onClick={onSubmit} className={btnClass()}>
                {submit}
              </button>
              <button className='ui button'>{cancel}</button>
            </div>
          </div>
        </div>,
        portal
      )
    : null;
};

export default Modal;

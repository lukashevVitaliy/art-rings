import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

const Modal = ({ active, setActive, children }) => {
  useEffect(() => {
    // ширина всего окна - ширина Body
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

    if (active) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = paddingOffset;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = 0;
    }
  }, [active]);

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className={active ? 'modal__content active' : 'modal__content'}>
        <div className="relative text-center mb-5">
          <div className="w-20 mx-auto sm:w-24 md:w-28 lg:w-36">
            <Link href="/">
              <a>
                <Image
                  src="/assets/icons/logo-burger.svg"
                  width={135}
                  height={80}
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <button
            onClick={() => setActive(false)}
            className="block absolute top-4 left-0 w-5 h-5 sm:top-5 md:top-7 lg:top-7 lg:w-8 lg:h-8"
          >
            <Image
              src={'/assets/icons/close-modal.svg'}
              width={30}
              height={30}
              alt="close"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propsTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

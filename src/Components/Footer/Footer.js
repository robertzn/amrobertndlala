import React from 'react';
export const Footer = () => {
  return (
    <footer>
      <div className='wrap size-80'>
        <div className='row footer--line'>
          <div className='col-1-of-2 footer__first'>
            <h3 className='oo'>
              Hey, feel free to shoot through an email or view my folio.
            </h3>
            <h4 className='secondary-heading-lnger--checkMeOut'>
              Don't be shy.
            </h4>
            <h1 className='secondary-heading-lnger'>
              © Robert Ndlala. 2021
            </h1>
          </div>

          <div className='col-1-of-2 footer__second'>
            <div className='iner'>
            <h3 className='important__links'>Important Links!</h3>
            <p className='hero__paragraph'>
              VIEW PORTFOLIO
            </p>
              <a  className='secondary-heading-lnger button' href='/#'>
                Download Portfolio (pdf)
              </a>
            <a className='secondary-heading-lnger button' href='/#'>
              WhatsApp Me
            </a>
              <a className='secondary-heading-lnger button' href='/#'>
                Github Portfolio
              </a>
              <a className='secondary-heading-lnger button' href='/#'>
                linkedin Portfolio
              </a>
         </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import React from 'react';
//import { Document } from 'react-pdf'

/*class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}*/
class Footer  extends React.Component {
  render() {
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
                  PORTFOLIO
            </p>
              
                <a className='secondary-heading-lnger button' href="https://wa.me/+2771285212" target="_blank" rel="noreferrer">
                  WhatsApp Me
            </a>
            
              
                
              
                <a className='secondary-heading-lnger button' href='/Robert-Ndlala-Profile.pdf' target="_blank" rel="noreferrer">
                  Download Portfolio (pdf)
              </a>
                
                <a className='secondary-heading-lnger button' href="mailto:robert.ndlala@gmail.com" target="_blank" rel="noreferrer">
                  Request Download Certificates (pdf)
              </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
};
export default Footer;

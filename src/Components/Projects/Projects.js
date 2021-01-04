import React from 'react';
import EventsList from "../Crd/EventsList";
import { eventsData } from "../Crd/data";

class Projects extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = [{
      editable: true,
      display: true
    }];
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  
  render() { 
    return (
    <div>
        <div className='project-features'>
          <section className='section-features'>
            <div className='bg-gradient-v wrap size-80'>
              <div className='crd'>
                <div className='row'>
                  <h3 className='Heading-sc-3p94va-0 fGYjRx'>Selected Works</h3>
                  <div>
                    <EventsList data={eventsData} />
                  </div>
                </div>   
              </div>             
            </div>
          </section>
        </div>
    </div>
  );
};

/*
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      editable: true
    };
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  render = () => {
    return (
      <div>
        <button onClick={this.toggleEditable}>
          Make {this.state.editable ? "readonly" : "editable"}
        </button>
      </div>
    );
  }
}


/*
const Projects = (props) => {
  
  const [showText, setShowText] = useState(false);


  return (
    <div>
      <div className='project-features'>
        <section className='section-features'>
          <div className='bg-gradient-v wrap size-80'>
            <div className='row'>
              <h3 className='Heading-sc-3p94va-0 fGYjRx'>
                Selected Works
              </h3>
              <div className='row'>
                <div className='col-1-of-3'>
                  <div className='feature-box'>
                    <span className='show--project'><MdLaunch />
                    </span>
                    <span className='feature-box--icon '><img src={icon } alt='robert' />
                    </span>
                    <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}
                    </h3>
                    <p className='feature-box__text'>{props.ApplicationDiscription}
                    </p>
                    <p className='feature-box__text'>{props.ApplicationTech}</p>
                  </div>
                </div>


              <div className='col-1-of-3'>
                <div className='feature-box'>

                    <span className='show--project'>
                      <MdLaunch />
                    </span>
                  <span className='feature-box--icon '>
                      <img src={icon } alt='robert' />
                    </span>

                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    {props.ApplicationName}
                  </h3>
                  <p className='feature-box__text'>
                    {props.ApplicationDiscription}

                  </p>
                  <p className='feature-box__text'>
                    {props.ApplicationTech}
                  </p>
                </div>
              </div>

              <div className='col-1-of-3'>
                <div className='feature-box'>

                    <span className='show--project'>
                      <MdLaunch />
                    </span>
                  <span className='feature-box--icon '>
                      <img src={icon } alt='robert' />
                    </span>

                  <h3 className='heading-tertiary u-margin-bottom-small'>
                    {props.ApplicationName}
                  </h3>
                  <p className='feature-box__text'>
                    {props.ApplicationDiscription}

                  </p>
                  <p className='feature-box__text'>
                    {props.ApplicationTech}
                  </p>
                </div>
              </div>
            </div>

            </div>


            <div className='row'>
              <div className='col-1-of-3'>
                <div className='feature-box'>
                  <span className='show--project'><MdLaunch /></span>
                  <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                  <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                  <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                  <p className='feature-box__text'>{props.ApplicationTech}</p>
                </div>
              </div>
              <div className='col-1-of-3'>
                <div className='feature-box'>
                  <span className='show--project'><MdLaunch /></span>
                  <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                  <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                  <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                  <p className='feature-box__text'>{props.ApplicationTech}</p>
                </div>
              </div>
              <div className='col-1-of-3'>
                <div className='feature-box'>
                  <span className='show--project'><MdLaunch /></span>
                  <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                  <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                  <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                  <p className='feature-box__text'>{props.ApplicationTech}</p>
                </div>
              </div>
            </div>

            <div className='show-hide-project'>
              {showText && (
                <div>
                  <div className='row'>
                    <div className='col-1-of-3'>
                      <div className='feature-box'>
                        <span className='show--project'><MdLaunch /></span>
                        <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                        <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                        <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                        <p className='feature-box__text'>{props.ApplicationTech}</p>
                      </div>
                    </div>

                    <div className='col-1-of-3'>
                      <div className='feature-box'>
                        <span className='show--project'><MdLaunch /></span>
                        <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                        <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                        <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                        <p className='feature-box__text'>{props.ApplicationTech}</p>
                      </div>
                    </div>

                    <div className='col-1-of-3'>
                      <div className='feature-box'>
                        <span className='show--project'><MdLaunch /></span>
                        <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
                        <h3 className='heading-tertiary u-margin-bottom-small'>{props.ApplicationName}</h3>
                        <p className='feature-box__text'>{props.ApplicationDiscription}</p>
                        <p className='feature-box__text'>{props.ApplicationTech}</p>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <div className='feature-box__btn__lst'>
              <button
                onClick={() => setShowText(!showText)}
                className='btn btn--full' href='/#'
              >
                View More Projects
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};*/

/*
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      editable: true
    };
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  render = () => {
    return (
      <div>
        <button onClick={this.toggleEditable}>
          Make {this.state.editable ? "readonly" : "editable"}
        </button>
      </div>
    );
  };*/
}

export default Projects;

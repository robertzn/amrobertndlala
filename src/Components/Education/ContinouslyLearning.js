import React, {Fragment} from 'react';

function ContinouslyLearningContent(props) {
  return (
    <Fragment>
      <p className="hero__paragraph heading_two">{props.year}</p>
      <p className='hero__paragraph heading_two'>{props.schoolName}</p>
      <p className='about--b heading-tertiary'>{props.qualification}</p>
    </Fragment>
  );
}

export default class ContinouslyLearning extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bwEffect: false };
    this.toggleEffect = this.toggleEffect.bind(this);
  }

  toggleEffect() {
    this.setState(prevState => ({
      bwEffect: !prevState.bwEffect
    }));
  }

  render() {
    return (      
      <div className='about--container' id={this.props.id}>       
          <ContinouslyLearningContent
            year={this.props.year}
            schoolName={this.props.schoolName}
            qualification={this.props.qualification}
          />        
      </div>      
    );
  }
}

ContinouslyLearning.defaultProps = {
  year: "year",
  schoolName: "School Name",
  qualification: "qualification"
};

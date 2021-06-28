//import React from "react";
import React, {Fragment} from 'react';
import icon from '../../images/folder-open.svg';
import { MdLaunch } from 'react-icons/md';

/*function CardImage(props) {
  const isImageURL = props.project;
  let listOfClasses = null;

  if (props.effect) {
    listOfClasses = "styleImage bw";
  } else {
    listOfClasses = "styleImage";
  }

  if (isImageURL) {
    return (
      <div className={listOfClasses} onClick={props.onClick}>
        <a className='show--project' href={props.project}> <MdLaunch /> </a>
      </div>
    );
  }
  return null;
}*/



function CardContent(props) {
  return (
    <Fragment>
      <span className='feature-box--icon '><img src={icon } alt='robert' /></span>
     <a className='show--project' href={props.project} target="_blank" rel="noreferrer"> <MdLaunch /> </a>
      <h3 className="heading-tertiary u-margin-bottom-small">{props.title}</h3>
      <p className='feature-box__text'>{props.location}</p>
      <p className='feature-box__text'>{props.description}</p>
        <p className='text'>{props.tech}</p>
    </Fragment>
  );
}

export default class Card extends React.Component {
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
      <div className='col-1-of-3' id={this.props.id}>
        <div className='feature-box'>          
          <CardContent
            project={this.props.project}
            title={this.props.title}
            location={this.props.location}
            description={this.props.description}
            tech={this.props.tech}
          />
        </div>
      </div>      
    );
  }
}

Card.defaultProps = {
  title: "Card Title",
    project: 'project',
  location: "Location label",
  description: "Template textbox",
    tech: 'tech'
};

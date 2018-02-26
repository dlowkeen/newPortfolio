import React from "react";
import { Container, Image } from "semantic-ui-react";
import img11 from '../../../assets/images/img11.jpg';
import TypingHeader from './TypingHeader';
require('./landing.css');

const CoverImage = () => {
  return (
    <Container fluid>
      <TypingHeader
        
        strings={[
            "<strong>I am:</strong> a high altitude <i>mountaineer</i>",
            "<strong>I am:</strong> a software <i>engineer</i>",
            "<strong>I am:</strong> a tree <i>lover</i>",
            "<strong>I am:</strong> an ice cream <i>connoisseur</i>",
            "<strong>I am:</strong> a <i>feminist</i>"
        ]}
      />
      <Image className="backgroundImg" src={img11} />
    </Container>
  );
};

export default CoverImage;

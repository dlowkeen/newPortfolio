import React from "react";
import { Container, Image } from "semantic-ui-react";
import img11 from '../../assets/images/img11.jpg';
import TypingHeader from './TypingHeader';
require('./landing.css');

const CoverImage = () => {
  return (
    <Container fluid>
      <TypingHeader
        strings={[
            "I am: a high altitude <i>mountaineer</i>",
            "I am: a software <i>engineer</i>",
            "I am: a tree <i>lover</i>",
            "I am: an ice cream <i>connoisseur</i>",
            "I am: a <i>feminist</i>"
        ]}
      />
      <Image className="backgroundImg" src={img11} />
    </Container>
  );
};

export default CoverImage;

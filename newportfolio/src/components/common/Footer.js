import React from "react";
import { Container } from "semantic-ui-react";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";

class Footer extends React.Component {
  render() {
    return (
      <Container id="footer-container" style={styles.footerStyle}>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/donovanlowkeen/">
          <img alt="linkedin" className="logos" src={linkedin} />
        </a>
        <a href="https://www.github.com/dlowkeen">
          <img alt="github" className="logos" src={github} />
        </a>
        <a href="https://www.facebook.com/donovan.lowkeen">
          <img alt="facebook" className="logos" src={facebook} />
        </a>
        <a href="https://www.instagram.com/highkeylowkeen">
          <img alt="instagram" className="logos" src={instagram} />
        </a>
        <br />
        <br />
      </Container>
    );
  }
}

const styles = {
  footerStyle: {
    width: "35%",
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 30
  },
  imageStyle: {
    padding: 3
  }
};

export default Footer;

import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';
import donovan from '../../assets/images/dlow.jpeg';
import SectionHead from '../common/SectionHead';

const Bio = () => {
    return <div id="bio"><br/><br/><br/>
        <SectionHead name="Bio" />
        <Grid columns="equal">
          <Grid.Column>
            <div />
          </Grid.Column>
          <Grid.Column width="6">
            <Image src={donovan} size="medium" circular floated="left" />
          </Grid.Column>
          <Grid.Column width="6">
            <div>
              <p className="bio-title">
                <strong>Current Location: </strong>
              </p>
              <p className="bio-text">Los Angeles, CA</p>
              <p className="bio-title">
                <strong>Education: </strong>
              </p>
              <p className="bio-text">
                B.A. Business Administration, UC Irvine
              </p>
              <p className="bio-title">
                <strong>Links: </strong>
              </p>
              <p className="bio-text">
                <a href="https://www.github.com/dlowkeen">GitHub</a>, <a href="https://www.linkedin.com/in/donovanlowkeen">
                  LinkedIn
                </a>
              </p>
              <p className="bio-title">
                <strong>Interests: </strong>
              </p>
              <p className="bio-text">
                Basketball, Climbing, Surfing, Hiking
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div />
          </Grid.Column>
        </Grid>
        <br/><br/><br/><br/><br/><br/>
      </div>;
}

export default Bio;

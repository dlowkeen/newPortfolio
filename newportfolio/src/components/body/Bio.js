import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import donovan from '../../assets/images/dlow.jpeg';
import SectionHead from '../common/SectionHead';

const Bio = () => {
    return (
      <div id="bio">
        <SectionHead name="Bio" />
        <Grid celled>  
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={donovan} />
            </Grid.Column>
            <Grid.Column width={11}>
              <div>
                <p className="bio-text">
                  I am an operations management specialist turned software engineer. 
                  I've always had a passion for big challenges in the outdoors. Whether
                  it was scoring barrels along the coast of California, trekking up a 
                  frozen Russian mountain, or climbing some crags at Stoney Point, I 
                  have always looked to nature to supply the answer to my curious soul.
                  And then I stumblined into programming. Now I get all of the rigorous
                  puzzles and challenges but from the comforts of my own home! 
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <br />
      </div>
    );
}

export default Bio;

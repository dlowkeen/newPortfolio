import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import donovan from '../../assets/images/dlow.jpeg';

const Bio = () => {
    return <Grid celled id="bio">
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src={donovan} />
          </Grid.Column>
          <Grid.Column width={11}>
            <div>
              <p className="bio-text">
                Whenever I am asked to compose an “About Me” section I
                always shudder at the thought of categorizing myself into
                the confines of a 6"x4" text box. There is much more to who
                I am than what I put on this website. Much of what you see
                in this website will seem like a travel or hiking blog with
                a few outlier posts on various topics. And if that is all
                you use this for, then that makes me happy. But I am far
                from just an adventure seeker. I am a student, teacher,
                feminist, and friend, just to name a few. For those who take
                the opportunity to ponder my posts, I welcome the feedback,
                criticism, and dialogue that sprouts from these thoughts.
                Not everything I say is undisputedly fact. This is merely
                one man’s thoughts. Welcome to my online collection of
                memories, ideas, and dreams.
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>;
}

export default Bio;

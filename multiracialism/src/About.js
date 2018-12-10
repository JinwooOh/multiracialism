import React, { Component } from 'react';
import Nav from './Nav';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container--about">
          <h3 className="about__title">About The Project</h3>
          <p>
            &emsp; While I was in a class, I had a chance to see a Time Magazine image that shows a
            grid image gallery. The gallery represents seven different races with future child
            images that are made by Morph 2.0 program. I was interested in this gallery because the
            child images show how Americans look in the near future. In another lecture and from
            assigned reading, I had a chance to see the Hapa project images created by Kip Fulbeck.
            According to Kip Fulbeck, Hapa means that mixed ethnic heritage with partial roots in
            Asian and or Pacific Islander ancestry
            (https://kipfulbeck.com/the-hapa-project/hapa-about/). The way the authors captured
            images is somehow similar to the Time Magazine gallery: unclothed from the shoulders up,
            and without jewelry, glasses. Even though each page of the book shows a race of a
            person, the author mentions, "The Hapa Project is fundamentally a project about identity
            rather than race: “It’s about identity using race as a starting point.” " in his
            homepage (https://kipfulbeck.com/the-hapa-project/hapa-about/). My motivation for
            creating "Who are my parents." is connecting the Hapa project's idea with morphic
            technology, which allows people to combine two images with its similarities.
          </p>
          <br />
          <p>
            &emsp; By creating the project, I mainly want to achieve two goals: spread an ideology
            of multiracialism and ask people whether we should label people by their races. As a
            Korean who had been living in Korea for more than twenty years, I hadn't seen people who
            have multi-race in Korea. The word multiracialism was unfamiliar to me. I understood
            what is multi-race, but couldn't think about the meaning of multiracialism until I came
            to the United States. There are many aspects of multiracialism, such as the difficulties
            of having multi-race as a child, collision with social structure, and confusion of
            having multiple heritage from parents. Even though the project doesn't show the
            complexity of having multi-race, I hope parents of a multi-race child provide their
            children with appropriate cultural education about their heritage, so that the child can
            embrace his or her identity. That’s why I label the images with father, mother, and
            child.
          </p>
          <br />
          <p>
            &emsp; The technologies that I used to develop this application are HTML, CSS,
            Javascript, Sass and React. The images are from Time magazine that was released on
            Nov.18, 1993. There is an improvement that I want to implement if I have more time to
            spend on this project. Instead of using images from Time Magazine, I want to make a user
            upload their picture. After a user uploads his or her photo, the website finds a random
            person with a different race, and then the site produces a child image that combines
            those two people. In this way, people can participate in this project as similar to the
            Hapa project. Fundamental differences of this project from the Hapa project is that this
            project focuses on multiracialism and future children who have multi-races, and people
            who are not mixed races can also participate it.{' '}
          </p>
          <br />
          <p>Images are from Time magazine that was released on Nov.18, 1993.</p>
          <p>
            Source code is available at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JinwooOh/multiracialism"
            >
              Github
            </a>
          </p>
          <br />
          <p>
            About creator:{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://jinwoo-oh.com/">
              Jinwoo Oh
            </a>
          </p>
        </div>
      </div>
    );
  }
}

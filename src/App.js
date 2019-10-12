// locale-en
// must be querry string

import React, { useState } from 'react';
import './App.css';
import AniversaryMilestone from './AniversaryMilestone';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Store from './store';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
} from 'react-share';

function App() {
  let storeId = 1006; // nie wiem gdzie moge znalezc storeId
  const store = {
    name: 'Dale Vale',
    descrption: 'Test Description',
    shareableStoreImageUrl: './assets/aniversary.jpg',
    milestones: [
      {
        type: 'aniversary',
        value: 333,
      },
      {
        type: 'mealsSaved',
        value: 2000,
      },
    ],
  };
  console.log(store);

  const [milestoneType, setMilestoneType] = useState(store.milestones[0].type);
  const [milestoneValue, setMilestoneValue] = useState(
    store.milestones[0].value,
  );

  function handleAniversaryMilestone() {
    setMilestoneType('aniversary');
    setMilestoneValue(store.milestones[0].value);
  }
  function handleMealsMilestone() {
    setMilestoneType('mealsSaved');
    setMilestoneValue(store.milestones[1].value);
  }
  const baseUrl = 'http://localhost:3007/';
  const milestoneUrl = `${baseUrl}?${milestoneType}?${milestoneValue}`;
  console.log(milestoneUrl);
  return (
    <main>
      {/* <Router> */}
      <section className='section__socialshare'>
        <article className='mealssaved__article'>
          <section>
            <img
              alt='badge meals'
              src='./assets/meals-saved-badge-many-bags.png'
            ></img>
          </section>
          <section className='buttons__container'>
            <button onClick={handleMealsMilestone}>Meals</button>
            <FacebookShareButton
              url={milestoneUrl}
              onClick={handleMealsMilestone}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton
              url={milestoneUrl}
              onClick={handleMealsMilestone}
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <button onClick={handleMealsMilestone}>
              <TwitterShareButton
                url={milestoneUrl}
                onClick={handleMealsMilestone}
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
            </button>
          </section>
        </article>
        <article className='mealssaved__article'>
          <section>
            <img alt='badge' src='./assets/months-on-tgtg-badge-12.png'></img>
          </section>
          <section className='buttons__container'>
            <button onClick={handleAniversaryMilestone}>aniversary</button>
            <FacebookShareButton
              onClick={handleAniversaryMilestone}
              url={milestoneUrl}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton
              onClick={handleAniversaryMilestone}
              url={milestoneUrl}
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <TwitterShareButton
              onClick={handleAniversaryMilestone}
              url={milestoneUrl}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </section>
        </article>
      </section>
      <p> {milestoneUrl}</p>
      {/* <Route
          path='/store/:storeId/:milestoneType/:milestoneValue'
          component={AniversaryMilestone}
        />
      </Router> */}
      <AniversaryMilestone></AniversaryMilestone>
    </main>
  );
}

export default App;

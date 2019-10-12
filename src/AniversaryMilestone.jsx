import React from 'react';
// import { Helmet } from 'react-helmet';

function AniversaryMilestone() {
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
  const og = {
    title: store.name,
    description: store.description,
    imageUrl: store.shareableStoreImageUrl,
  };
  return (
    <>
      {/* <Helmet> */}
      <title>{og.title}</title>
      <meta name='description' content={og.description} />
      <meta property='og:title' content={og.title} />
      <meta property='og:description' content={og.description} />

      <meta property='og:image:url' content={og.imageUrl} />
      <meta property='og:image:width' content={1200} />
      <meta property='og:image:height' content={630} />

      <meta
        property='al:ios:url'
        content={`toogoodtogoapp://store/${storeId}`}
      />
      <meta property='al:ios:app_store_id' content='1060683933' />
      <meta property='al:ios:app_name' content='TGTG' />

      <meta
        property='al:android:url'
        content={`toogoodtogoapp://store/${storeId}`}
      />
      <meta property='al:android:package' content='com.app.tgtg' />
      <meta property='al:android:app_name' content='TooGoodToGo' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={og.title} />
      <meta name='twitter:description' content={og.description} />
      <meta name='twitter:image' content={og.imageUrl} />
      {/* </Helmet> */}
      <div>AniversaryMilestone component</div>
      <img alt='' src='./assets/aniversary.jpg'></img>
    </>
  );
}

export default AniversaryMilestone;

import React, { useEffect, useState } from 'react';
import { GiftGridItem } from './GiftGridItem';
import { getGift } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GiftGrid = ({ category }) => {
  // api key giphy api.giphy.com/v1/gifs/search?api_key=okZw3zthSiahvRQcG9wzdvNhXkzLCJTL&q=Rick&limit=10

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {data.map((data) => {
          return <GiftGridItem key={data.id} {...data} />;
        })}
      </div>
    </>
  );
};

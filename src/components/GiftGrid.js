import React from 'react';
import { GiftGridItem } from './GiftGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GiftGrid = ({ category }) => {
  // api key giphy api.giphy.com/v1/gifs/search?api_key=okZw3zthSiahvRQcG9wzdvNhXkzLCJTL&q=Rick&limit=10

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h5 className="animate__animated animate__bounceInDown">{category}</h5>
      {loading && (
        <p
          className="animate__animated animate__flash "
          style={{ fontSize: '1.5rem' }}
        >
          Loading
        </p>
      )}
      <div className="card-grid">
        {data.map((data) => {
          return <GiftGridItem key={data.id} {...data} />;
        })}
      </div>
    </>
  );
};

import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
import './styles.css';

export default function App() {
  const [categories, setCategories] = useState(['One Punch']);
  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => {
        return <GiftGrid key={category} category={category} />;
      })}
    </>
  );
}

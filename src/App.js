import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
import './styles.css';

export default function App() {
  const [categories, setCategories] = useState(['One Punch']);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            GiftExpertApp <AddCategory setCategories={setCategories} />
          </a>
        </div>
      </nav>
      <div className="container">
        {categories.map((category) => {
          return <GiftGrid key={category} category={category} />;
        })}
      </div>
    </>
  );
}

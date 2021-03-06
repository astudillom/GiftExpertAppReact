import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
import './styles.css';

export default function App() {
  const [categories, setCategories] = useState(['Coding']);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid row">
          <a className="navbar-brand " href="#">
            GiftExpertApp
          </a>
          <a className="navbar-brand col">
            <AddCategory setCategories={setCategories} />
          </a>
        </div>
      </nav>

      <div className="container">
        <hr />
        {categories.map((category) => {
          return <GiftGrid key={category} category={category} />;
        })}
      </div>
    </>
  );
}

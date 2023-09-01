import React, { useEffect, useState, useRef } from 'react';
import gamesData from '../../data/gamesData';
import CircularButton from '../../components/buttons/CircularButton';
import './Categories.css';

const Category = (props) => {
  const [mixedGames, setMixedGames] = useState([]);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    mixGames();
  }, []);

  const mixGames = () => {
    const mixed = [...gamesData];
    for (let i = mixed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
    }
    setMixedGames(mixed);
  };

  const handleScroll = (scrollOffset) => {
    if (scrollbarRef.current) {
      scrollbarRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="category">
      <div className="category-header">
        <p className="category-name">{props.name}</p>
        <div className="category-switcher">
          <a href="#" alt="view-more" style={{ fontSize: '0.75rem', paddingRight: '0.5rem' }}>View more</a>
          <CircularButton action="&lt;" color="var(--bars-color)" onClick={() => handleScroll(-350)} />
          <CircularButton action="&gt;" color="var(--primary-color)" onClick={() => handleScroll(350)} />
        </div>
      </div>
      <div className="scrollBar" ref={scrollbarRef}>
        {mixedGames.map((game, id) => (
          <div key={id}>
            <img className="gameCard" src={game.img} alt="gameimg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

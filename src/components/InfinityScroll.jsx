import React, { useRef, useState, useEffect } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import PropTypes from 'prop-types'
import './InfinityScroll.css'


function InfinityScroll({ items, width = 360 }) {
  const [cards] = useState([...items, ...items])
  const scrollerRef = useRef(null)


  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = width;
    }
  }, [width])

  const goToLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }

    
    if (scrollerRef.current.scrollLeft >= scrollerRef.current.scrollWidth / 2) {
      setTimeout(() => {
        scrollerRef.current.scrollLeft = width;
      }, width * 2);
    }
  }

  const goToRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    }

    
    if (scrollerRef.current.scrollLeft === 0) {
      setTimeout(() => {
        scrollerRef.current.scrollLeft = scrollerRef.current.scrollWidth / 2;
        scrollerRef.current.scrollBy({ left: -width, behavior: 'smooth' });
      }, 5); 
    }
  }

  return (
    <div className="content-scroller">
      <GrPrevious className="button" onClick={goToLeft} />
      <div className="scroller" style={{ width }} ref={scrollerRef}>
        {cards.map((card, index) => (
          <div key={index} className="card" style={{ width }}>
            <h1>{card.name}</h1>
            <img src={card.img} alt="cover" />
            <p>{card.article}</p>
          </div>
        ))}
      </div>
      <GrNext className="button" onClick={goToRight} />
    </div>
  )
}


InfinityScroll.propTypes = {
  items: PropTypes.array.isRequired,
  width: PropTypes.number,
}

export default InfinityScroll;

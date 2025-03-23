import React, { useRef, useState, useEffect } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr'
import PropTypes from 'prop-types'
import './InfinityScroll.css'



function InfinityScroll({ 
  items, 
  width = 360, 
  scrollerHeight = 400, 
  cardBgColor = '#888888', 
  cardNameColor = '#444444', 
  cardImgSize = '50%', 
  cardTextColor = '#ffffff', 
  articleFontSize = '13px' 
}) {
  // Duplicating the items for infinite scrolling
  const [cards] = useState([...items, ...items])
  const scrollerRef = useRef(null)


  // Scroll the content to the initial position when component mounts
  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft = width;
    }
  }, [width])


  // Function to scroll left
  const goToLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: width, behavior: 'smooth' })
    }

    // Reset scroll position if we've scrolled enough
    if (scrollerRef.current.scrollLeft >= scrollerRef.current.scrollWidth / 2) {
      setTimeout(() => {
        scrollerRef.current.scrollLeft = width;
      }, width * 2)
    }
  };


  // Function to scroll right
  const goToRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -width, behavior: 'smooth' })
    }

    // Reset scroll position if we're at the beginning
    if (scrollerRef.current.scrollLeft === 0) {
      setTimeout(() => {
        scrollerRef.current.scrollLeft = scrollerRef.current.scrollWidth / 2
        scrollerRef.current.scrollBy({ left: -width, behavior: 'smooth' })
      }, 5)
    }
  }


  return (
    <div className="content-scroller">
      {/* Left arrow button */}
      <GrPrevious className="button" onClick={goToLeft} />

      {/* Scrollable content container */}
      <div 
        className="scroller" 
        style={{ 
          width,
          height: `${scrollerHeight}px` 
        }} 
        ref={scrollerRef}
      >
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="card" 
            style={{ 
              width, 
              backgroundColor: cardBgColor 
            }}
          >
            {/* Card name */}
            <h1 
              style={{ color: cardNameColor }}
            >
              {card.name}
            </h1>
            
            {/* Card image */}
            <img 
              src={card.img} 
              alt="cover" 
              style={{ width: cardImgSize }} 
            />

            {/* Card article */}
            <p 
              style={{ 
                color: cardTextColor, 
                fontSize: articleFontSize 
              }}
            >
              {card.article}
            </p>
          </div>
        ))}
      </div>

      {/* Right arrow button */}
      <GrNext className="button" onClick={goToRight} />
    </div>
  )
}



InfinityScroll.propTypes = {
  items: PropTypes.array.isRequired,
  width: PropTypes.number,
  scrollerHeight: PropTypes.number,
  cardBgColor: PropTypes.string,
  cardNameColor: PropTypes.string,
  cardImgSize: PropTypes.string,
  cardTextColor: PropTypes.string,
  articleFontSize: PropTypes.string
}



export default InfinityScroll

import React,{useState} from 'react';
import people from './data';
import './reviews.css';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [index, setindex] = useState(0);
    const {name, job, image, text} = people[index]

    function handlenext(){
        setindex(index+1)
    }
    function handleprev(){
        setindex(index-1)
    }
    function handlenextdisable(){
        if(index === people.length - 1){
            return true
        }
    }
  
    function handleprevdisable(){
        if(index === 0){
            return true
        }
    }
    return (
        
      <article className="review">
          <div className="img-container">
              <img src={image} alt={name} className="person-img"/>
              <span className="quote-icon">
                <FaQuoteRight/>
              </span>
          </div>

          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          <div>
          <button disabled={handleprevdisable()} className="prev-btn" onClick={(()=>handleprev())}><FaChevronLeft/></button>
          <button disabled={handlenextdisable()} className="next-btn" onClick={(()=>handlenext())}><FaChevronRight/></button>
          </div>
      </article>  
    )
}


export default Reviews;
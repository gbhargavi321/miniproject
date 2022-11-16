
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://www.revv.co.in/blogs/wp-content/uploads/2020/08/Haridwar-and-Rishikesh.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.talaviation.com/Talaviation/UploadFiles/pgallery/201612711253290.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://www.commonwealthunion.com/wp-content/uploads/2022/01/illustration-tourism.jpg',
    caption: 'Slide 3'
  },
];

const Sliders = () => {
    return (
      <div className="slide-container" style={{height:'500px',padding:'0px',margin:'0 0 70px'}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{height:'500px'}}>
                <img style={{height:'100%',width:'100%',objectFit:'fill'}} src={slideImage.url} />
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}


export default Sliders;
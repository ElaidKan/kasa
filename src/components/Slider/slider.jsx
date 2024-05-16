/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function Slider({ images, alt }) {
    const numeroSlide = images.length
    const [slideIndex, setSlideIndex] = useState(0)
    const slideSuivant = () => {
        setSlideIndex(slideIndex === numeroSlide - 1 ? 0 : slideIndex + 1)
    }
    const slidePrecedent = () => {
        setSlideIndex(slideIndex === 0 ? numeroSlide - 1 : slideIndex - 1)
    }
    let slide
    if (numeroSlide > 1) {
        slide = (
            <div>
                <div>
                    <FaChevronLeft onClick={slidePrecedent} />
                    <FaChevronRight onClick={slideSuivant} />
                </div>
                <div>{slideIndex + 1}/{numeroSlide}</div>
            </div>
        )
    }

    return (
        <div>
            {images.map((image, index) => (
                slideIndex === index && (<img key={index} src={image} alt={alt} />)
            ))}

            {slide}
        </div>
    )
}

export default Slider
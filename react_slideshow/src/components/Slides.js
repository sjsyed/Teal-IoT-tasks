import { useState } from "react";
import React from 'react';

function Slides({ slides }) {
    // Declaring the state variable using State Hooks
    // where currentSlide is the state varible and setCurrentSlide is the function that helps to update the value of state variable
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div>
            <div id="navigation" className="text-center">
                {/* when we click on the restart button, we update the value of state variable to zero and disable it if the currentSlide value is zero*/}
                <button data-testid="button-restart" disabled={currentSlide == 0} onClick={() => setCurrentSlide(0)} className="small outlined">Restart</button>
                {/* when we click on Prev button, we decrement the state value by -1 and disable it if the currentSlide value is zero*/}
                <button data-testid="button-prev" disabled={currentSlide == 0} onClick={() => setCurrentSlide(currentSlide - 1)} className="small">Prev</button>
                {/* when we click on Next button, we increment the state value by +1 and and disable it if the currentSlide value is last slide */}
                <button data-testid="button-next" onClick={() => setCurrentSlide(currentSlide + 1)} disabled={currentSlide == slides.length - 1} className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                {/* Indexing used to get the properties of current slide and to get the title of the slide*/}
                <h1 data-testid="title">{slides[currentSlide]["title"]}</h1>
                {/* Indexing used to get the properties of current slide and to get the text of the slide*/}
                <p data-testid="text">{slides[currentSlide]["text"]}</p>
            </div>
        </div>
    );

}

export default Slides;
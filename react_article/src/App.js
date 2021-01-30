import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    // Declaring state variable using State Hooks
    const [storedArticles, updateStoredArticles] = useState(articles);
    console.log(storedArticles);
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                {/* when clicked , call the updateStoredArticles with the articles sorted based on upvotes */}
                <button onClick={() => updateStoredArticles([...storedArticles].sort((a, b) => b.upvotes - a.upvotes))} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                {/* when clicked , call the updateStoredArticles with the articles sorted based on dates */}
                <button onClick={() => updateStoredArticles([...storedArticles].sort((a, b) => new Date(b.date) - new Date(a.date)))} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={storedArticles} />
        </div>
    );

}

export default App;

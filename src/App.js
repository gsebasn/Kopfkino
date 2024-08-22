import './css/App.min.css';
import ImageGallery from "./components/ImageGallery";
import React, { useState } from 'react';
import GalleryContext from './state/GalleryContext';

function App() {
    const [theme, setTheme] = useState('');

    const showTiles = () => {
        setTheme('gallery-grid');
    }

    const showFullView = () => {
        setTheme('');
    }

    return (
      <div className="app">
          <div className="header">
              <div className="view-options">
                  <div className="option">
                      <button onClick={showTiles}>Tiles</button>
                  </div>
                  <div>
                      Kopfkino
                  </div>
                  <div className="option">
                        <button onClick={showFullView}>Single</button>
                  </div>
              </div>
          </div>
          <div className="main-content">
              <GalleryContext.Provider value={{ theme, setTheme }}>
                <ImageGallery/>
              </GalleryContext.Provider>
          </div>
      </div>
    );
}

export default App;

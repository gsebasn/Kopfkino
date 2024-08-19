import './css/App.min.css';
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
      <div className="app">
          <div className="header">
              <div className="view-options">
                  <div className="option">
                      Tiles
                  </div>
                  <div>
                      Kopfkino
                  </div>
                  <div className="option">
                      Single
                  </div>
              </div>
          </div>
          <div className="main-content">
          <ImageGallery/>
          </div>
      </div>
    );
}

export default App;

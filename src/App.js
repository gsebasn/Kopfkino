import './css/App.min.css';
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
      <div className="app">
          <div className="header">
              Kopfkino
          </div>
          <div className="main-content">
              <ImageGallery/>
          </div>
      </div>
    );
}

export default App;

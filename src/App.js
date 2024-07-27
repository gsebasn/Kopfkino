import './App.css';
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
      <div className="app">
          <div className="fixed">
              Kopfkino
          </div>
          <div className="content">
              <ImageGallery></ImageGallery>
          </div>
      </div>
    );
}

export default App;

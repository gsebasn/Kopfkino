import React from 'react';

// Define a context with a default value
const GalleryContext = React.createContext({
  theme: "default", // assign a default theme
  setTheme: () => {}, // this will be replaced by a function in Gallery Provider
});
export default GalleryContext;
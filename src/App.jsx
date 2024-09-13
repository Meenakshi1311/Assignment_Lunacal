import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [activeTab, setActiveTab] = useState("About Me");
  const [images, setImages] = useState([
    "https://placehold.co/300x319",
    "https://placehold.co/300x319",
    "https://placehold.co/300x319",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="absolute right-10 bottom-20">
      <div className="space-y-4 p-4 text-white">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex w-full">
              <button
                className={`flex-grow px-4 py-2 rounded-l-lg ${activeTab === "About Me"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-400"
                  }`}
                onClick={() => setActiveTab("About Me")}
              >
                About Me
              </button>
              <button
                className={`flex-grow px-4 py-2 ${activeTab === "Experiences"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-400"
                  }`}
                onClick={() => setActiveTab("Experiences")}
              >
                Experiences
              </button>
              <button
                className={`flex-grow px-4 py-2 rounded-r-lg ${activeTab === "Recommended"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-800 text-gray-400"
                  }`}
                onClick={() => setActiveTab("Recommended")}
              >
                Recommended
              </button>
            </div>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-gray-400 ml-4"
            />
          </div>
          <div className="mt-4 p-4 bg-gray-700 rounded-lg scrollbar overflow-y-auto h-32 w-[720px]">
            {activeTab === "About Me" && (
              <div>
                <p className="text-gray-300">
                  Hello! I'm Dave, your sales rep here from Salesforce. I've been
                  working at this awesome company for 3 years now. I was born and
                  raised in Albany, NY & have been living in Santa Carla for the
                  past 10 years my wife Tiffany and my 4 year old twin daughters-
                  Emma and Ella. Both of them are just starting school, so my
                  calender is usually blocked between 9–10 AM. This is a...
                </p>
              </div>
            )}
            {activeTab === "Experiences" && (
              <div className="w-[720px]">
                <p className="text-gray-300">
                  Here are some of my experiences...
                </p>
              </div>
            )}
            {activeTab === "Recommended" && (
              <div className="w-[720px]">
                <p className="text-gray-300">Here are some recommendations...</p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-gray-400"
              />
              <button className="px-4 py-2 rounded-lg bg-gray-700 text-white">
                Gallery
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <label className="bg-gray-700 px-4 py-2 rounded-lg cursor-pointer">
                + ADD IMAGE
                <input type="file" className="hidden" onChange={handleAddImage} />
              </label>
              <button
                className="bg-gray-700 px-4 py-2 rounded-full"
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="bg-gray-700 px-4 py-2 rounded-full"
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="mt-4 gallery-container flex justify-between">
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

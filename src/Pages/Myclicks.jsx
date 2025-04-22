import { useEffect, useState } from 'react';
import Navbar from "../Components/NavBar";
import clicksdata from '../Utils/clicks.js';
import { MdNavigateNext ,MdNavigateBefore, MdClose} from "react-icons/md";
const ClicksPage = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch or set your images data here
    setImages(clicksdata);
  }, []);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigateImage = (step) => {
    const newIndex = selectedImageIndex !== null ? selectedImageIndex + step : null;
    if (newIndex !== null && newIndex >= 0 && newIndex < images.length) {
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="bg-black w-screen h-screen">
      <Navbar />
      <div className="bg-black flex flex-col">
        <section className="max-w-3xl px-4 pb-16 mx-auto lg:mt-10">
          <div className="">
            <h1 className="text-4xl font-bold mb-4 mt-2 text-white ">Gallery</h1>
            <p className="pb-5 text-zinc-50 font-semibold">
              Welcome to my Gallery!! <br/>
              Click on the image to view in full screen.
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-2 md:gap-4">
            {images.map((image, index) => (
              <div key={image.id} className="mb-2 md:mb-4">
                <img
  className={`w-full h-auto rounded-lg grayscale transition-all duration-500 ease-in-out hover:filter-none transform cursor-pointer ${isLoading ? 'blur-2xl' : 'blur-0'}`}
  onLoad={() => setLoading(false)}
  onClick={() => openModal(index)}
  width={1000}
  height={1000}
  src={image.src}
  alt=""
  loading="lazy"
/>

              </div>
            ))}
          </div>
        </section>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className=" max-w-3xl max-h-3xl">
            <button className="absolute md:top-0 top-9 right-0 m-4 bg-slate-300 text-3xl text-blacks" onClick={closeModal}>
              <MdClose/>
            </button>
            <img
              className="w-full h-auto"
              src={images[selectedImageIndex].src}
              alt=""
            />
            {selectedImageIndex !== 0 && (
              <button className="absolute top-1/2 left-0 m-4 bg-slate-300 text-3xl text-black" onClick={() => navigateImage(-1)}>
                <MdNavigateBefore/>
              </button>
            )}
            {selectedImageIndex !== images.length - 1 && (
              <button className="absolute top-1/2 right-0 m-4 bg-slate-300 text-3xl text-black" onClick={() => navigateImage(1)}>
                <MdNavigateNext/>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClicksPage;

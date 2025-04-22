import React, { useState, useEffect } from 'react';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';
import lofiData from '../Utils/lofi.json';

const AudioPlayer = ({ isMuted, toggleMute }) => {
  const [audio] = useState(new Audio());
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * lofiData.songs.length)
  );

  const currentSong = lofiData.songs[currentSongIndex];

  useEffect(() => {
    audio.loop = false;
    audio.src = currentSong.audio;

    if (isMuted) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [audio, currentSong.audio, isMuted]);

  useEffect(() => {
    const handleEnded = () => {
      const nextSongIndex = (currentSongIndex + 1) % lofiData.songs.length;
      setCurrentSongIndex(nextSongIndex);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audio, currentSongIndex]);

  useEffect(() => {
    if (!isMuted) {
      const newCurrentSongIndex = Math.floor(
        Math.random() * lofiData.songs.length
      );
      setCurrentSongIndex(newCurrentSongIndex);
    }
  }, [isMuted]);

  // Define a CSS class name based on isMuted
  const musicButtonClass = isMuted
    ? 'music-button text-3xl rounded-3xl bg-[#3282B8] text-white p-2 mr-3'
    : 'music-button text-3xl rounded-3xl bg-[#3282B8] text-white p-2 mr-3 animate-bounce animate-infinite animate-duration-1000 animate-ease-in-out';

  return (
    <div className="lofi-cont fixed bottom-0 left-0 mb-1 ml-4 z-10 flex items-center">
      <div className={musicButtonClass} onClick={toggleMute}>
        {isMuted ? <MdMusicOff /> : <MdMusicNote />}
      </div>
      {!isMuted && (
        <div className="lofi-artist text-white font-semibold hidden md:block">
          <div className="mr-3">{currentSong.name}</div>
          <div>{currentSong.artist}</div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;

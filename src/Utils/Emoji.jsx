import { useEffect, useState } from "react";
import React from "react";
const EMOJI = [
  "🤹",
  "👀",
  "🇮🇳",
  "⛺",
  "✨",
  "🌚",
  "🌱",
  "🌸",
  "🌹",
  "🍂",
  "🍬",
  "🍭",
  "🎀",
  "🎈",
  "🎉",
  "🎨",
  "🏝️",
  "👋",
  "👒",
  "📚",
  "🔮",
  "🗿",
  "🥖",
  "🦋",
  "🧩",
  "🧶",
  "🪀",
  "🪁",
  "🪐",
];

function getRandomEmoji(exclude) {
  const emoji = exclude ? EMOJI.filter((emoji) => emoji !== exclude) : EMOJI;

  return emoji[Math.trunc(emoji.length * Math.random())];
}

export function Emoji(props) {
  const [emoji, setEmoji] = useState(EMOJI[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setEmoji((emoji) => getRandomEmoji(emoji));
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return React.createElement("span", props, emoji);
}

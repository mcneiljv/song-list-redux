import { combineReducers } from "redux";

// List of songs
const songsReducer = () => {
  return [
    { title: "FALL", duration: "7:01" },
    { title: "Persuasion System", duration: "3:49" },
    { title: "Nightmare", duration: "3:08" },
    { title: "Number One Fan", duration: "3:26" }
  ];
};

// Handle song select
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

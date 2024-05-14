// Import the React library
import React from "react";
// Import the generated hook from our RTK Query API slice
import { useGetAllPlayersQuery } from "../api/puppies";
// Import the CSS styles for this component
import '../index.css'
// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data, error, isLoading } = useGetAllPlayersQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    <p>Loading...</p>;
  }

  // Show an error message if the fetch failed
  if (error) {
    <p>There was an error</p>;
  }

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data?.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          <img
            // style={{ width: "200px" }}
            className="player-image"
            src={player.imageUrl}
            alt={player.name}
          />
          <div className="player-details">
            <h2> Name: {player.name} </h2>

            <p> Breed: {player.breed} </p>

            <p> Status: {player.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files

export default Players;

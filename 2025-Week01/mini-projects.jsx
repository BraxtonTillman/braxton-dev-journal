// Imports
import { useEffect, useState } from "react";

// Component SearchBar() it will change its state based on the event handler and input using useState
function SearchBar() {
  // Here is where the useState hook will live
  const [location, setLocation] = useState("");

  return (
    // Here is where the search box will live. It will take te
    <div className="search-bar">
      <div className="search-bar-box">
        <input
          id="location"
          type="text"
          placeholder="Enter Location"
          // Here is the location variable that will be changed
          value={location}
          // onChange is the event handler that calls setLocation (event's target is value)
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
}

// Component Hello() it will return hello world and log that the effect worked
function Hello() {
  // This is the hook. It needs a function and a dependency array
  useEffect(() => {
    console.log("Component mounted");
  }, []); // This is the dependency array. Since it is empty it will only be called on once.

  return <div>Hello world</div>;
}

// Component Timer() uses useEffect and useState. useState to re-render the current state based on the changing data,
//  and useEffect to start and clear timer
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000); // sets interval using setSeconds function
    return () => clearInterval(interval); // Clears interval
  }, []); // Runs initially

  return <div>Seconds passed: {seconds}</div>;
}

function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in</h1>;
  }
}

function Status({ online }) {
  return (
    // {value} ? if true do this : if false do this
    <p>Status: {online ? "Online" : "Offline"}</p>
  );
}

function Dashboard({ hasNotifications }) {
  return (
    // {value} && show this or nothing
    <div>
      <h1>Dashboard</h1>
      {hasNotifications && <p>You have new notifications!</p>}
    </div>
  );
}

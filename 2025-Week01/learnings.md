// June 16th
I was following a tutorial to help learn React and JS. I am not used to JS because I've only worked with python and C style languages. So I am not used to the dynamic and functional programming that JS is. 

What I've learned in React is useState, useEffect, API calls in react js, conditional rendering, and hooks.

Use State is a hook that lets us add state variables to function components. This helps with keeping the current state updated dynamically. 

For instance, if we want to type into a search bar we need a useState hook to be called everytime there is a change inside the search bar. We could do this by having an event handling like onChange. This will re-render everytime there is a change inside the search bar. That is the power of the useState hook.

```React

// Imports
import { useState } from "react";

// Component
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

export default SearchBar;

```
Use Effect is a hook that lets you perform side effects (like fetching data, timers, subscriptions, etc.) The setup is the useEffect calls a function that does something dependent on something. I know this sounds dumb but it's far easier to show the code than explain it in my opinion

```react

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
    return () => clearInterval(clearInterval); // Clears interval
  }, []); // Runs initially
  
  return <div>Seconds passed: {seconds}</div>
}

```
Conditional rendering is just like what the name implies. There is a condition and based on that condition is what gets rendered. If statements, Ternary operators, and && are all examples of conditions. This is good for making decisions based on what you want rendered on the screen or not on the screen. 

```react

```

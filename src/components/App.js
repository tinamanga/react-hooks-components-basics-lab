import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
// ✅ Here's your new <About> component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>This is a blog about programming and perfection in lecture delivery.</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

function Article() {
  return <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>;
}

function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}



export default App;

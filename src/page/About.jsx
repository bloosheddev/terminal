function About() {
  return (
    <div className="terminal-content about-content">
      <div className="terminal-command">
        <span className="prompt">bloosheddev@cloud.blooshed.dev:~$ </span>{" "}
        <span className="command">about</span>
      </div>
      <div className="about-copy">
        <p>
          Just a guy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur vitae justo nec lorem tincidunt tincidunt.
        </p>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
}

export default About;

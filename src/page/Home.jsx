const details = [
  ["###########################################", "me@bloosheddev"],
  ["###########################################", "----------------"],
  [
    "###########################################",
    "Fullname:",
    "Angger Bagas Saputra",
  ],
  ["###########################################", "Nickname:", "Angger"],
  [
    "###########################################",
    "Uptime:",
    "15 years, 9 months, 7 days",
  ],
  ["###########################################", "GitHub:", "@bloosheddev"],
  [
    "#############    #######    ###############",
    "Favorite Lang:",
    "Java(script), Flutter",
  ],
  ["#############    #######    ###############", "Shell:", "diy@1.0.0"],
  ["###########################################", "Resolution:", "4k uhd"],
  ["###########################################", "DE:", "Eye"],
  ["###########################################", "WM:", "Brain"],
  [
    "###########################################",
    "WM Theme:",
    "Brain (darkmode)",
  ],
  ["#########                          ########", "Theme:", "Dark Mode"],
  ["###########################################", "Icons:", "His apps"],
  ["###########################################", "CPU:", "Brain 15.0.1"],
  ["###########################################", "GPU:", "Imagination 16.0.2"],
  ["###########################################"],
];

const palette = [
  "color-black",
  "color-red",
  "color-green",
  "color-yellow",
  "color-blue",
  "color-purple",
  "color-cyan",
  "color-white",
];

function ColorPalette({ dark = false }) {
  return (
    <span
      className={`color-palette${dark ? " dark" : ""}`}
      aria-label="Color palette"
    >
      {palette.map((color) => (
        <span className={color} key={color} />
      ))}
    </span>
  );
}

function TerminalLine({ ascii, label, value, children }) {
  return (
    <div className="terminal-line">
      <span className="ascii-art">{ascii}</span>
      {label && (
        <span className="terminal-details">
          <span className="info-label">{label}</span>
          {value && <span className="info-value">{value}</span>}
        </span>
      )}
      {children}
    </div>
  );
}

function Home() {
  return (
    <div className="terminal-content">
      <div className="terminal-command">
        <span className="prompt">bloosheddev@cloud.blooshed.dev:~$ </span>{" "}
        <span className="command">home</span>
      </div>
      <div className="terminal-spacer" />
      {details.map(([ascii, label, value]) => (
        <TerminalLine
          ascii={ascii}
          label={label}
          value={value}
          key={`${ascii}-${label}`}
        />
      ))}
      <TerminalLine ascii="###########################################" />
      <TerminalLine ascii="###########################################">
        <ColorPalette dark />
      </TerminalLine>
      <TerminalLine ascii="###########################################">
        <ColorPalette />
      </TerminalLine>
      <TerminalLine ascii="###########################################" />
      <div className="terminal-spacer" />
      <div className="terminal-command">
        <span className="prompt">bloosheddev@cloud.blooshed.dev:~$</span>
      </div>
    </div>
  );
}

export default Home;

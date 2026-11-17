import { useState, useRef, useEffect } from "react";
import "./style/App.css";
import Home from "./page/Home";
import About from "./page/About";
import Projects from "./page/Projects";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const terminalRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const centerTerminal = () => {
      const terminal = terminalRef.current;
      if (!terminal) return;

      setPosition({
        x: Math.max((window.innerWidth - terminal.offsetWidth) / 2, 0),
        y: Math.max((window.innerHeight - terminal.offsetHeight) / 2, 0),
      });
    };

    centerTerminal();
    window.addEventListener("resize", centerTerminal);

    return () => {
      window.removeEventListener("resize", centerTerminal);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e) => {
    const rect = terminalRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
    setIsDragging(true);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div
      className={`terminal-window ${isDragging ? "dragging" : ""}`}
      ref={terminalRef}
      style={
        position
          ? { left: position.x, top: position.y }
          : { visibility: "hidden" }
      }
    >
      <div
        className="terminal-nav"
        ref={headerRef}
        onMouseDown={handleMouseDown}
      >
        <div className="nav-tabs">
          <div
            className={`nav-tab ${activePage === "home" ? "active" : ""}`}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => handlePageChange("home")}
          >
            Home
          </div>
          <div
            className={`nav-tab ${activePage === "about" ? "active" : ""}`}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => handlePageChange("about")}
          >
            About
          </div>
          <div
            className={`nav-tab ${activePage === "projects" ? "active" : ""}`}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => handlePageChange("projects")}
          >
            Projects
          </div>
        </div>
        <div
          className="nav-minimize"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => {}}
        >
          —
        </div>
      </div>
      <div className="terminal-body">
        {activePage === "about" ? (
          <About />
        ) : activePage === "projects" ? (
          <Projects />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default App;

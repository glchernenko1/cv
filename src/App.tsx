import { useRef } from 'react';
import { Resume } from './components/Resume';
import { DownloadButton } from './components/DownloadButton';
import './App.css';

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="app-container">
      <div className="controls">
        <DownloadButton targetRef={resumeRef} />
      </div>
      <div className="resume-wrapper">
        <Resume ref={resumeRef} />
      </div>
    </div>
  );
}

export default App;

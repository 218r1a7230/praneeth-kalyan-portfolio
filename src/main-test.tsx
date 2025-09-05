import { createRoot } from 'react-dom/client'
import './index.css'

const TestApp = () => {
  return (
    <div style={{ padding: '20px', fontSize: '24px' }}>
      <h1>Test App Working!</h1>
      <p>If you see this, React is working.</p>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<TestApp />);
import { useLocalStorage } from './useLocalStorage';

function App() {
  // Use our custom hook instead of standard useState
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Inline styles to make the visual change obvious
  const appStyle = {
    backgroundColor: theme === 'dark' ? '#222' : '#fff',
    color: theme === 'dark' ? '#fff' : '#222',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  };

  return (
    <div style={appStyle}>
      <h1>Themed Application</h1>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Switch Theme
      </button>
    </div>
  );
}

export default App;
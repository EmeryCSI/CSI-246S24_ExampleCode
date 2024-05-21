import useLocalStorage from "../hooks/useLocalStorage";
function ThemeSelector() {
  //bring in our custom hook
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const orangeTheme = () => "orange";
  return (
    <>
      <h2>Theme Selector</h2>
      <button onClick={() => setTheme("light")}>Light Theme</button>
      <button onClick={() => setTheme("dark")}>Dark Theme</button>
      <button onClick={() => setTheme(orangeTheme)}>Orange Theme</button>
      <h3>Current Theme: {theme}</h3>
    </>
  );
}
export default ThemeSelector;

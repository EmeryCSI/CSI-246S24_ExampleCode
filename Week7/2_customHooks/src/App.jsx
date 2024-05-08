import MyForm from "./components/MyForm";
import ThemeSelector from "./components/ThemSelector";
function App() {
  return (
    <>
      <h2>App</h2>
      <hr />
      <h4>Component that uses a custom hook for Forms</h4>
      <MyForm></MyForm>
      <h4>Component that uses a custom hook to access localStorage</h4>
      <p>
        Because this value is being retrieved from localStorage, it persists
        after page refreshes
      </p>
      <ThemeSelector></ThemeSelector>
    </>
  );
}

export default App;

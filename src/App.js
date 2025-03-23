import './App.css';
import FetchData from './Hooks/FetchData';
import GlobalContextProvider from './Hooks/GlobalContext';
import MyRoustes from './MyRoustes';


function App() {
  return (
    <>
      <GlobalContextProvider>
      <MyRoustes />
      </GlobalContextProvider>
    </>
  );
}

export default App;

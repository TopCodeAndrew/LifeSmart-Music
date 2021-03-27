import Home from './pages/Home'
import GlobalStyles from './components/globals/GlobalStyles'
import routes from './routes';


function App() {
  return (
    <>
      <GlobalStyles />
      {routes}
    </>
  );
}

export default App;

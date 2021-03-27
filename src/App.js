import Home from './pages/Home'
import GlobalStyles from './components/globals/GlobalStyles'
import routes from './routes';
import Header from './components/globals/Header'
import styled from 'styled-components'


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      {routes}
    </>
  );
}

export default App

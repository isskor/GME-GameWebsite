import GlobalStyles from './components/GlobalStyles';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// components
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Browse from './pages/Browse';
import Footer from './components/Footer';
// actions
import { loadGames, loadFilters } from './actions/gamesAction';
import ScrollTop from './components/ScrollTop';
function App() {
  // initial fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
    dispatch(loadFilters());
  }, [dispatch]);
  return (
    <div className='App'>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/game' />
        </Route>
        <Route path={['/game/:id', '/game']}>
          <Home />
        </Route>
        <Route path={['/browse/:id', '/browse']}>
          <Browse />
        </Route>
      </Switch>
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;

import GlobalStyles from './components/GlobalStyles';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadGames, loadFilters } from './actions/gamesAction';
// Components and pages
// import Nav from './components/Nav';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import Browse from './pages/Browse';
import Footer from './components/Footer';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect from App.js');
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
        <Route path={['/search/:id', '/search']}>
          <SearchPage />
        </Route>
        <Route path={['/browse/:id', '/browse']}>
          <Browse />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

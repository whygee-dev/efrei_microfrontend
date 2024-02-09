import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PokemonList from './PokemonList';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header />
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>

    <PokemonList />

    <Footer />
  </div>
);

export default App;

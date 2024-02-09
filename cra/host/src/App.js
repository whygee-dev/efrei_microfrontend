import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PokemonList from './PokemonList';
import UploadImageButton from './UploadImageButton';
import UploadedImagesList from './UploadedImagesList';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => {
  const [refetchFiles, setRefetchFiles] = React.useState(false);

  function handleUploadSuccess() {
    setRefetchFiles(!refetchFiles);
  }

  return (
    <div>
      <Header />
      <h2>Host</h2>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>

      <PokemonList />

      <UploadImageButton handleUploadSuccess={handleUploadSuccess} />

      <UploadedImagesList refetchFiles={refetchFiles} />

      <Footer />
    </div>
  );
};

export default App;

import React from 'react';

const SharedHeader = React.lazy(() => import('cra_sharedcomponent/Header'));

export default function Header() {
  return (
    <React.Suspense fallback="Loading Header">
      <SharedHeader title="Host Header" />
    </React.Suspense>
  );
}

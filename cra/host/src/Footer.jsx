import React from 'react';

const SharedFooter = React.lazy(() => import('cra_sharedcomponent/Footer'));

export default function Footer() {
  return (
    <React.Suspense fallback="Loading Footer">
      <SharedFooter title="Host Footer" />
    </React.Suspense>
  );
}

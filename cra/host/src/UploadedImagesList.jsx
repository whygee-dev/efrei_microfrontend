import React, { useEffect, useState } from 'react';

import { listOfFiles, UploadcareSimpleAuthSchema } from '@uploadcare/rest-client';

const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
  publicKey: process.env.REACT_APP_UPLOADCARE_PUBLIC_KEY,
  secretKey: process.env.REACT_APP_UPLOADCARE_PRIVATE_KEY,
});

function UploadedImagesList({ refetchFiles }) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  async function fetchFiles() {
    return (await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema })).results;
  }

  useEffect(() => {
    fetchFiles()
      .then(result => {
        setList(result);
      })
      .finally(() => setLoading(false));
  }, [refetchFiles]);

  if (loading) {
    return <p>Loading Images...</p>;
  }

  return (
    <div>
      <p>Images:</p>
      {list.map(item => (
        <img key={item.uuid} src={item.originalFileUrl} width={100}>
          {item.originalFileName}
        </img>
      ))}
    </div>
  );
}

export default UploadedImagesList;

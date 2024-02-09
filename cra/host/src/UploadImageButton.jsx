import React, { useEffect } from 'react';
import * as LR from '@uploadcare/blocks';

LR.registerBlocks(LR);

function UploadImageButton({ handleUploadSuccess }) {
  useEffect(() => {
    const ctx = document.querySelector('lr-upload-ctx-provider');

    ctx.addEventListener('common-upload-success', handleUploadSuccess);

    return () => {
      ctx.removeEventListener('common-upload-success', handleUploadSuccess);
    };
  }, []);

  return (
    <div>
      <lr-config ctx-name="uploader" pubkey="3d23bbce991373d72741" />
      <lr-file-uploader-regular
        ctx-name="uploader"
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks/web/lr-file-uploader-regular.min.css"
      />
      <lr-upload-ctx-provider ctx-name="uploader"></lr-upload-ctx-provider>
    </div>
  );
}

export default UploadImageButton;

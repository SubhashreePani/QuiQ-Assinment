import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ userId }) => {
  const url = `http://localhost:5000/profile/${userId}`;

  return (
    <div>
      <QRCode value={url} />
      <p>Scan to view profile</p>
    </div>
  );
};

export default QRCodeGenerator;

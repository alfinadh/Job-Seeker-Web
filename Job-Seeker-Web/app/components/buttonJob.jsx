import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import FormJob from './formJob';

const ButtonJob = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className='pt-5'>
      <Button onClick={handleClick}>Tambah Pekerjaan</Button>
      {showComponent && <FormJob />} {/* Tampilkan komponen jika showComponent bernilai true */}
    </div>
  );
};

export default ButtonJob;

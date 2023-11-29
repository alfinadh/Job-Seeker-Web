import React, { useState } from 'react';
import FormEducation from './formEducation';
import { Button } from 'flowbite-react';

const ButtonEducation = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className='pt-5'>
      <Button onClick={handleClick}>Tambah Pendidikan</Button>
      {showComponent && <FormEducation />} {/* Tampilkan komponen jika showComponent bernilai true */}
    </div>
  );
};

export default ButtonEducation;

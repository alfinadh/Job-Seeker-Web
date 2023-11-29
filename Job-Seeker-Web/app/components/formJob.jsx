
'use client';

import { Datepicker, Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';

function FormJob() {
  return (
    <div> 
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Pekerjaan terdahulu" />
          </div>
          <TextInput id="base" type="text" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Perusahaan terdahulu" />
          </div>
          <TextInput id="base" type="text" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Tahun Mulai" />
            <Datepicker />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Tahun selesai" />
            <Datepicker />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Pengalaman kerja" />
          </div>
          <TextInput id="address" type="text" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Keahlian" />
          </div>
          <TextInput id="base" type="text" sizing="md" />
        </div>
        <Button type="submit">Tambah Pekerjaan</Button>
      </form>
    </div>
  );
}

export default FormJob;

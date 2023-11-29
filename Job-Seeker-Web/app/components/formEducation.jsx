'use client'

import axios from 'axios';
import { useState } from 'react';
import { Datepicker, Button, Label, TextInput } from 'flowbite-react';

function FormEducation() {
  const [lastEdu, setLastEdu] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [grade, setGrade] = useState('');
  const [organization, setOrganization] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      lastEdu,
      startDate,
      finishDate,
      grade,
      organization
    };

    try {
      const response = await axios.post('/api/userEdu/create', formData);
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error as needed
    }
  };

  return (
    <div>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastEdu" value="Pendidikan Terakhir" />
          </div>
          <TextInput
            id="lastEdu"
            type="text"
            placeholder="Pendidikan Terakhir"
            value={lastEdu}
            onChange={(e) => setLastEdu(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="startDate" value="Tahun Mulai" />
            <Datepicker
              id="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="finishDate" value="Tahun Selesai" />
            <Datepicker
              id="finishDate"
              selected={finishDate}
              onChange={(date) => setFinishDate(date)}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="grade" value="Nilai" />
          </div>
          <TextInput
            id="grade"
            type="number"
            placeholder="Nilai"
            value={grade}
            onChange={(e) => setGrade(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="organization" value="Organisasi" />
          </div>
          <TextInput
            id="organization"
            type="text"
            placeholder="Organisasi"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FormEducation;

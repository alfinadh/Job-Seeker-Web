
'use client';

import ButtonEducation from '../buttonEducation';
import ButtonJob from '../buttonJob';
import EducationHistory from '../educationHistories';
import JobHistory from '../jobHistories';

function BodyProfile() {
  return (
    <div className="flex gap-3">
      <div className='p-10 w-1/2 text-sm'>
        <div>
        Dedicated and results-driven IT professional with over 8 years of experience in full-stack web development. Proven track record of delivering high-quality software solutions for diverse clients. Skilled in frontend and backend technologies, with a passion for clean and efficient code. Committed to staying current with emerging technologies and industry trends.
        </div>
        <EducationHistory />
        <JobHistory />
      </div>
      <div className='w-1/2 p-5'>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mt-4">Edit Data</h2>
        <div>
          <ButtonEducation/>
          <ButtonJob />
        </div>
      </div>
    </div>
  );
}

export default BodyProfile;
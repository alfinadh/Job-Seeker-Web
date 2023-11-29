
'use client';

import { Avatar } from 'flowbite-react';

function ProfilePicture() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 pl-16 pt-10">
        <Avatar img="/images/people/profile-picture-5.jpg" rounded size="xl" bordered color="gray" />
        <div className="flex flex-col items-start pl-5">
          <div className="text-2xl font-bold">Jese Leos</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
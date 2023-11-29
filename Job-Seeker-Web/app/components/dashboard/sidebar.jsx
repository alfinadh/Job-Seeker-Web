
'use client';

import { Sidebar, Checkbox, Label } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function SidebarComponent() {
  return (
    <Sidebar className='m-8 border-2 border-solid rounded-mdp-4' aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Filter
          </Sidebar.Item>
          <Sidebar.Item>
            <div className='font-semibold py-2'>Job Category</div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">Full Time</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">Part Time</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">Internship</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">Contract</Label>
            </div>
          </Sidebar.Item>
          <Sidebar.Item>
            <div className='font-semibold py-2'>Skill</div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">Frontend Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">Backend Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">Android Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">IOS Developer</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">UI/UX</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="age" />
              <Label htmlFor="age">Lain-Lain</Label>
            </div>

          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;
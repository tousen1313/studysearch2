'use client';

import { useState } from 'react';

import Image from 'next/image';

type JobSeekerPanelProps = {
  jobSeekers: Array<FooterServiceInfo>;
};

type FooterServiceInfo = {
  id: string;
  group: string;
  site: string;
  siteSub: string;
  siteUrl: string;
  siteAlt: string;
  siteImage: string;
};

export const JobSeekerPanel = (props: JobSeekerPanelProps) => {
  const { jobSeekers } = props;
  const [displayJobSeeker, setDisplayJobSeeker] = useState(false);

  const onToggleJobSeeker = () => {
    setDisplayJobSeeker(!displayJobSeeker);
  };

  return (
    <div
      className={`group flex w-full cursor-pointer border-b border-solid py-2 pl-5 text-xs hover:bg-[#FFFFEE]`}
      onClick={onToggleJobSeeker}
    >
      <div className="flex w-full max-w-[180px] items-center">
        <span className="mr-2">求職者様向け求人サービス</span>
        <span
          className={`${
            displayJobSeeker
              ? 'bg-toggle-left  group-hover:bg-toggle-left-hover'
              : 'bg-toggle-right group-hover:bg-toggle-right-hover'
          } h-2.5 w-2.5 bg-no-repeat`}
        />
      </div>
      <div className={`${displayJobSeeker ? 'block h-full' : 'hidden h-1'} cursor-auto`}>
        {jobSeekers.map((jobSeeker) => (
          <li
            key={jobSeeker.id}
            className="flex h-14 list-none items-center border-b border-solid px-2.5 text-xs text-gray-600 last:border-0"
          >
            <div>
              <Image src={jobSeeker.siteImage} width={110} height={26} alt={jobSeeker.siteAlt} />
            </div>
            <div>
              <a className="flex" href={jobSeeker.siteUrl} target="_blank" rel="noreferrer">
                <span className="ml-2.5 flex items-center justify-center hover:text-orange-1">
                  {jobSeeker.site}
                </span>
              </a>
              <span className="ml-2.5 flex items-center justify-center text-[10px]">
                {jobSeeker.siteSub}
              </span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

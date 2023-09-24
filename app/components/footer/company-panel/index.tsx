'use client';

import { useState } from 'react';

import Image from 'next/image';

type CompanyPanelProps = {
  companies: Array<FooterServiceInfo>;
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

export const CompanyPanel = (props: CompanyPanelProps) => {
  const { companies } = props;
  const [displayCompany, setDisplayCompany] = useState(false);

  const onToggleCompany = () => {
    setDisplayCompany(!displayCompany);
  };

  return (
    <div
      className={`group flex w-full cursor-pointer border-b border-solid py-2 pl-5 text-xs hover:bg-[#FFFFEE]`}
      onClick={onToggleCompany}
    >
      <div className="flex w-full max-w-[180px] items-center">
        <span className="mr-2">企業様向けサービス</span>
        <span
          className={`${
            displayCompany
              ? 'bg-toggle-left  group-hover:bg-toggle-left-hover'
              : 'bg-toggle-right group-hover:bg-toggle-right-hover'
          } h-2.5 w-2.5 bg-no-repeat`}
        />
      </div>
      <div className={`${displayCompany ? 'block h-full' : 'hidden h-0'} cursor-auto`}>
        {companies.map((company) => (
          <li
            key={company.id}
            className="flex h-14 list-none items-center border-b border-solid px-2.5 text-xs text-gray-600 last:border-0"
          >
            <div>
              <Image src={company.siteImage} width={110} height={26} alt={company.siteAlt} />
            </div>
            <div>
              <a className="flex" href={company.siteUrl} target="_blank" rel="noreferrer">
                <span className="ml-2.5 flex items-center justify-center hover:text-orange-1">
                  {company.site}
                </span>
              </a>
              <span className="ml-2.5 flex items-center justify-center text-[10px]">
                {company.siteSub}
              </span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

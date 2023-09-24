import Image from 'next/image';

import { objectToCamel } from 'ts-case-convert';

import { CompanyPanel } from '@/app/components/footer/company-panel';
import { JobSeekerPanel } from '@/app/components/footer/job-seeker-panel';

import { ArrowRightIcon } from '@/components/icon';

import { ENGAGE_IMG } from '@/const';

type FooterLinkProps = {
  footerMenus: Array<FooterMenuInfo>;
};

type FooterMenuInfo = {
  title: string;
  href: string;
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

export const Footer = () => {
  return (
    <footer className="h-full w-full border-t border-solid bg-white py-10">
      <div className="relative mx-auto h-[28px] w-[178px]">
        <Image src={ENGAGE_IMG} alt="engage Logo" fill={true} priority={true} />
      </div>
      <div className="md:hidden">
        <SmallFooterPanel />
      </div>
      <div className="hidden md:block">
        <LargeFooterPanel />
      </div>
      <div>
        <small className="mt-8 flex justify-center text-[10px] md:text-sm">
          Copyright © 2021 en Japan Inc. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

const SmallFooterPanel = () => {
  const SmallFooterLink = (props: FooterLinkProps) => {
    const { footerMenus } = props;
    return (
      <ul className="mt-2 flex flex-wrap justify-center">
        {footerMenus.map((footerMenu, index) => (
          <li
            key={index}
            className={`${
              index !== footerMenus.length - 1 ? 'w-[45%]' : 'w-[90%]'
            } mt-3 flex items-center text-[10px]`}
          >
            <ArrowRightIcon className="mr-1 text-gray-3" />
            <a
              href={footerMenu.href}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] hover:text-orange-1"
            >
              {footerMenu.title}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return <SmallFooterLink footerMenus={footerMenus} />;
};

const LargeFooterPanel = async () => {
  const footerData = await getFooter();
  const formatFooterData = objectToCamel(footerData);
  const jobSeekers = formatFooterData.filter((entity) => entity.group === 'JobSeeker');
  const companies = formatFooterData.filter((entity) => entity.group === 'Company');

  const LargeFooterLink = (props: FooterLinkProps) => {
    const { footerMenus } = props;
    return (
      <div className="flex justify-center">
        <ul className="mt-2 flex w-full flex-wrap justify-center">
          {footerMenus.map((footerMenu, index) => (
            <li
              key={index}
              className={`${
                index !== 0 && 'border-l-2 border-solid px-2'
              } mt-3 flex justify-center pr-2 text-xs hover:text-orange-1`}
            >
              <a href={footerMenu.href} target="_blank" rel="noreferrer">
                {footerMenu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <LargeFooterLink footerMenus={footerMenus} />
      <div className="m-auto hidden w-[870px] flex-col items-center md:flex">
        <div className="mt-8 flex h-[31px] w-full items-center border-y border-solid bg-[#f4f4f4] pl-2.5 text-sm font-bold">
          【エン・ジャパングループ】サービス一覧
        </div>
        <JobSeekerPanel jobSeekers={jobSeekers} />
        <CompanyPanel companies={companies} />
      </div>
    </>
  );
};

const getFooter = async (): Promise<Array<FooterServiceInfo>> => {
  const url = `${process.env.API_URL_FOOTER_DEV}`;
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch footer data');
  }
  return json;
};

const footerMenus: FooterMenuInfo[] = [
  {
    title: 'ヘルプ・お問い合わせ',
    href: 'https://help.en-gage.net/hc/ja',
  },
  {
    title: 'プライバシーポリシー・ご利用規約',
    href: '/user/privacy/',
  },
  {
    title: 'サイトマップ',
    href: '/search/',
  },
  {
    title: '運営会社',
    href: 'https://corp.en-japan.com/profile/outline.html',
  },
  {
    title: '求人掲載（無料）について',
    href: '/html/engage/001/index.html',
  },
];

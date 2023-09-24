import Image from 'next/image';

import type { CategoryResourceType } from '@/types';

import { Accordion } from '@/app/components/side-bar/accordion';
import { Navigation } from '@/app/components/side-bar/navigation';

type Props = {
  sideBar: CategoryResourceType;
};

export const SideBar = (props: Props) => {
  const { sideBar } = props;
  return (
    <nav className="md:w-64">
      {sideBar.categories.map((entity, index) => (
        <div
          key={index}
          className="mb-5 rounded-2xl border-4 border-solid border-white bg-white shadow-md"
        >
          <h2 className={'flex items-center p-1.5 pl-4 font-semibold'}>{entity.title}</h2>
          <ul>
            {entity.subCategories.map((subCategory, index) => (
              <li
                key={index}
                className="relative flex cursor-pointer border-t border-solid px-5 py-4 text-xs font-bold text-gray-600"
              >
                {subCategory.detailCategories ? (
                  <Accordion subCategory={subCategory} />
                ) : (
                  <Navigation subCategory={subCategory} />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="cursor-pointer md:h-[75px]">
        <a
          href="https://en-gage.net/html/special/remote/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/lpBanner.png" alt="lpBanner" loading="lazy" width={750} height={200} />
        </a>
      </div>
    </nav>
  );
};

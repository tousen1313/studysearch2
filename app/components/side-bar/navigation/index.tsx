import Link from 'next/link';

import type { SubCategoryType } from '@/types';

import { ArrowRightIcon } from '@/components/icon';

import { createUrlWithParams, getNofollowAttribute } from '@/utils/link';

type Props = {
  subCategory: SubCategoryType;
};

export const Navigation = (props: Props) => {
  const { subCategory } = props;

  return (
    <div className="block w-full hover:text-orange-1">
      {subCategory.search1Url ? (
        <a
          href={`${process.env.SEARCH1}/${subCategory.search1Url}`}
          rel={getNofollowAttribute(subCategory.isNofollow)}
        >
          <ArrowRightIcon className="absolute right-2.5 text-xs text-gray-3" />
          {subCategory.title}
        </a>
      ) : (
        <Link
          href={`${createUrlWithParams(subCategory.urlParam)}`}
          rel={getNofollowAttribute(subCategory.isNofollow)}
        >
          <ArrowRightIcon className="absolute right-2.5 text-xs text-gray-3" />
          {subCategory.title}
        </Link>
      )}
      {subCategory.note && <div className="text-[10px] text-gray-500">{subCategory.note}</div>}
    </div>
  );
};

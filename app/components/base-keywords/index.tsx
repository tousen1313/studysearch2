import Link from 'next/link';

import { TagLeftIcon } from '@/components/icon';

type Props = {
  keywords: Array<string>;
};

export const BaseKeywords = (props: Props) => {
  const { keywords } = props;
  return (
    <div>
      <div className="flex items-center">
        <TagLeftIcon className="mr-1 h-5 w-5 text-red-1" data-testid="title-tag-left-icon" />
        <h2 className="flex items-center py-2 text-xl font-semibold">求人検索</h2>
      </div>
      <div className="mb-8 mt-5 text-center md:mb-[72px] md:mt-6">
        {keywords.map((keyword: string, index) => (
          <Link key={index} href={`/求人?keyword=${keyword}`}>
            <div className="mx-2 mb-2 inline-flex cursor-pointer rounded-md border-2 border-slate-200 bg-white p-2 text-xs leading-none hover:text-orange-1">
              <TagLeftIcon className="mr-1 text-red-1" data-testid="keyword-tag-left-icon" />
              {keyword}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

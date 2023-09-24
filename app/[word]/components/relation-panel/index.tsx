import Link from 'next/link';

import { TagLeftIcon } from '@/components/icon';
import type { RelatedKeywordType } from '@/types';
import { createUrlWithParams, getNofollowAttribute } from '@/utils/link';

type Props = {
  relatedKeywords: Array<RelatedKeywordType>;
};

export const RelationPanel = (props: Props) => {
  const { relatedKeywords } = props;
  return (
    <>
      <div className="mt-16 flex w-full justify-center">
        <h2 className="flex items-center px-2.5 py-2 text-xl font-semibold">
          他の人はこんな検索をしています
        </h2>
      </div>
      <div className="my-8">
        {relatedKeywords.map((entity, index) => (
          <Link
            key={index}
            href={`${createUrlWithParams(entity.urlParam)}`}
            rel={getNofollowAttribute(entity.isNofollow)}
          >
            <div className="mx-2 mb-2 inline-flex cursor-pointer rounded-md border-2 border-slate-200 bg-white p-2 text-xs leading-none hover:text-orange-1">
              <TagLeftIcon className="mr-1 text-red-1" data-testid="keyword-tag-left-icon" />
              {entity.word}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

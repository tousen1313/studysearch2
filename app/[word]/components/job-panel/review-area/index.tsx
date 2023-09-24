import type { WorkType } from '@/types';

import { ArrowRightIcon, ReviewIcon, StarFillIcon, StarHalfIcon } from '@/components/icon';

type Props = {
  work: WorkType;
};

export const ReviewArea = (props: Props) => {
  const { work } = props;
  const { hyobanUrl, kuchikomiCount, hyobanScoreTotal, companyName } = work;

  return (
    <>
      {hyobanUrl && kuchikomiCount && hyobanScoreTotal && (
        <div className="rounded-b-2xl border-solid border-white bg-gray-1 shadow-md">
          <div className="relative p-3.5">
            {starArea(hyobanScoreTotal, kuchikomiCount)}
            <span className="text-sm text-gray-3">
              {companyName} の評判スコア
              <span>(by en Lighthouse)</span>
            </span>
            <div></div>
            <ArrowRightIcon className="absolute right-3 top-9 text-gray-3" />
          </div>
        </div>
      )}
    </>
  );
};

const starArea = (hyobanScoreTotal: number, kuchikomiCount: number) => {
  const MAX_SCORE = 5;

  const stars = Array.from({ length: MAX_SCORE }, (_, index) => {
    if (index < hyobanScoreTotal - 1 && index >= hyobanScoreTotal) {
      return <StarHalfIcon key={index} className="text-red-1" />;
    }
    return index < hyobanScoreTotal ? (
      <StarFillIcon className="text-red-1" />
    ) : (
      <StarFillIcon className="text-silver-1" />
    );
  });

  return (
    <div className="flex items-center">
      {stars}
      <span className="mx-2.5 text-lg text-red-1">{hyobanScoreTotal}</span>(
      <ReviewIcon className="mx-1 text-gray-3" />
      <span className="text-gray-2">{kuchikomiCount}件の口コミ</span>)
    </div>
  );
};

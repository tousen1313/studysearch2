import type { WorkType } from '@/types';

import { UserIcon } from '@/components/icon';

type Props = {
  work: WorkType;
};

type PastDaysProps = {
  pastDays: string;
};

export const JobTitleArea = (props: Props) => {
  const { work } = props;
  const { employmentStatus, recruitmentFeatures, isNew, elapsedDaysText, title } = work;

  return (
    <div className="relative mb-5 ml-5 overflow-hidden">
      <div className="mt-1 text-lg">
        <span className="mr-2.5 mt-2 inline-flex whitespace-pre rounded-md border-2 border-slate-200 bg-white p-1.5 text-xs font-bold text-black">
          <UserIcon className="mr-[1px] mt-[1px] text-orange-1" />
          {employmentStatus}
        </span>
        {recruitmentFeatures &&
          recruitmentFeatures.map((recruitmentTitle, recruitment_index) => (
            <span
              key={recruitment_index}
              className="mr-2.5 mt-2 inline-block whitespace-pre rounded-md border-2 border-slate-200 bg-white p-1.5 text-xs font-bold text-black"
            >
              {recruitmentTitle}
            </span>
          ))}
      </div>
      {isNew ? <NewBadge /> : <PastDays pastDays={elapsedDaysText} />}
      <div className="mb-5 mt-2 text-xl font-bold">{title}</div>
    </div>
  );
};

const NewBadge = () => {
  return (
    <div className="absolute -right-6 top-3 flex w-24 rotate-45 justify-center bg-red-1 text-sm text-white">
      NEW
    </div>
  );
};

const PastDays = (props: PastDaysProps) => {
  const { pastDays } = props;
  return <div className="absolute right-4 top-4 w-16 text-center text-sm">{pastDays}</div>;
};

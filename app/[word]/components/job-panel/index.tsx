import { JobInfoArea } from '@/app/[word]/components/job-panel/job-info-area';
import { JobTitleArea } from '@/app/[word]/components/job-panel/job-title-area';
import { RequestArea } from '@/app/[word]/components/job-panel/request-area';
import { ReviewArea } from '@/app/[word]/components/job-panel/review-area';

type Props = {
  // jsonの日付をDate型として読み取れないのでコメントアウト
  // works: Array<WorkType>;
  works: Array<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export const JobPanel = (props: Props) => {
  const { works } = props;

  return (
    <div className="mx-3 rounded-2xl border-transparent">
      <div className="mb-2 ml-2 mt-7 flex items-baseline">
        <span className="mr-1 text-xl font-bold text-red-1">9999</span>
        <span className="text-xs">件中</span>
        <span className="ml-2 mr-1 text-xl font-bold">10〜20</span>
        <span className="text-xs">件を表示</span>
      </div>
      {works.map((work) => (
        <div
          key={work.workId}
          className="mb-9 rounded-2xl border-2 border-slate-200 bg-white md:mb-20"
        >
          <JobTitleArea work={work} />
          <JobInfoArea work={work} />
          <RequestArea work={work} />
          <ReviewArea work={work} />
        </div>
      ))}
    </div>
  );
};

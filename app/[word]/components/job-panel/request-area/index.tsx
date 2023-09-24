'use client';

import type { WorkType } from '@/types';

import { HeartIcon, SendIcon } from '@/components/icon';

type Props = {
  work: WorkType;
};
export const RequestArea = (props: Props) => {
  const { work } = props;
  const { url } = work;
  return (
    <div className="my-5 w-full bg-white">
      <div className="m-auto flex w-5/6">
        <LikeButton />
        <a
          href={url}
          className="relative mx-2.5 flex w-full max-w-sm items-center justify-center rounded-full border-2 bg-red-1 py-2.5 text-xl font-bold text-white"
        >
          <SendIcon className="mr-1" />
          応募する
        </a>
      </div>
    </div>
  );
};

const LikeButton = () => {
  const onChangeJobLike = () => {
    //wip いいねAPI
  };

  return (
    <div
      className="mx-2.5 flex w-20 cursor-pointer items-center justify-center rounded-full border-2 border-slate-200 bg-white py-1 text-2xl md:w-3/5"
      onClick={onChangeJobLike}
    >
      <div className="relative flex flex-col items-center md:hidden">
        <HeartIcon className="absolute right-[7px] block h-6 w-6 text-red-1" />
        <span className="mt-6 text-xs">いいね</span>
      </div>
      <div className="hidden md:flex">
        <HeartIcon className="m-auto mr-1 text-red-1" />
        いいね！
      </div>
    </div>
  );
};

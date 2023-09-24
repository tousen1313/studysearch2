'use client';

import { useState } from 'react';

import Image from 'next/image';

import type { WorkType } from '@/types';

import {
  AreaIcon,
  ArrowUnderIcon,
  ClockIcon,
  JobIcon,
  MoneyIcon,
  TagRightIcon,
} from '@/components/icon';

type Props = {
  work: WorkType;
};

type PanelItemProps = {
  icon: React.ReactNode;
  mainText: string;
  subText?: string;
};

export const JobInfoArea = (props: Props) => {
  const { work } = props;
  const { salary, salaryNote, officeList, workingTime, workingTimeFeatures, imageUrl } = work;
  const [displayJobDetailInfoArea, setDisplayJobDetailInfoArea] = useState(false);

  const onShowJobDetailInfo = () => {
    setDisplayJobDetailInfoArea(!displayJobDetailInfoArea);
  };

  return (
    <div className="relative ml-5 table h-[200px] w-[94%] border-y-2 border-solid">
      <PanelItem
        icon={<MoneyIcon className="text-red-1" />}
        mainText={salary}
        subText={salaryNote}
      />
      <PanelItem
        icon={<AreaIcon className="text-red-1" />}
        mainText={officeList[0]?.areaMain || ''}
        subText={officeList[0]?.areaSecondary}
      />
      <PanelItem
        icon={<ClockIcon className="text-red-1" />}
        mainText={workingTime}
        subText={formatWorkingTimeFeaturesText(workingTimeFeatures || [])}
      />
      {imageUrl && (
        <div className="absolute right-0 top-5 h-[120px] w-[160px]">
          <Image src={imageUrl} alt="" fill={true} />
        </div>
      )}
      {displayJobDetailInfoArea ? (
        // 仕事内容、応募資格は現在のworks返却値に入ってないので仮データ表示
        <>
          <PanelItem
            icon={<JobIcon className="text-red-1" />}
            mainText={officeList[0]?.areaMain || ''}
            subText={officeList[0]?.areaSecondary}
          />
          <PanelItem
            icon={<TagRightIcon className="text-red-1" />}
            mainText={officeList[0]?.areaMain || ''}
            subText={officeList[0]?.areaSecondary}
          />
        </>
      ) : (
        <div
          className="flex h-14 cursor-pointer items-center justify-center text-xs font-bold"
          onClick={onShowJobDetailInfo}
        >
          仕事内容・応募資格を見る
          <ArrowUnderIcon className="mb-1 ml-1" />
        </div>
      )}
    </div>
  );
};

const PanelItem = (props: PanelItemProps) => {
  const { icon, mainText, subText } = props;
  return (
    <div className="relative flex w-[70%] items-center py-2.5">
      <span className="absolute top-4">{icon}</span>
      <div className="ml-4 table-cell pl-2.5 align-baseline">
        <div className="text-base font-black">{mainText}</div>
        {subText && <div className="text-xs">{subText}</div>}
      </div>
    </div>
  );
};

const formatWorkingTimeFeaturesText = (workingTimeFeatures: string[]) => {
  return workingTimeFeatures.join(' / ');
};

'use client';

import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import type { SubCategoryType } from '@/types';

import { ArrowUnderIcon } from '@/components/icon';

import { createUrlWithParams, getNofollowAttribute } from '@/utils/link';

type Props = {
  subCategory: SubCategoryType;
};

export const Accordion = (props: Props) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.setAttribute('aria-expanded', showAccordion.toString());
    }
  }, [showAccordion]);

  const onToggleChildren = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setShowAccordion(!showAccordion);
  };

  // 親要素のイベントを発火させないようにする
  const onClickStopPropagation = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const { subCategory } = props;

  return (
    <div
      className="relative w-full"
      onClick={onToggleChildren}
      data-testid="accordion"
      ref={parentRef}
    >
      <div
        className="absolute -right-2.5"
        style={iconReverseStyle(showAccordion)}
        data-testid="tag-under-icon"
      >
        <ArrowUnderIcon className="text-xs text-gray-3" />
      </div>
      <h3>{subCategory.title}</h3>
      {subCategory.note && <p className="text-[10px] text-gray-500">{subCategory.note}</p>}
      <ul style={accordionStyle(showAccordion, subCategory)}>
        {subCategory.detailCategories &&
          subCategory.detailCategories.map((detailCategory, index) => (
            <li key={index} className="relative py-2.5 pl-4">
              <div className="absolute left-0 top-3 h-2 w-[2px] bg-gray-3" />
              <div className="absolute left-0 top-5 h-[2px] w-2 bg-gray-3" />
              <div className="w-full hover:text-orange-1" onClick={onClickStopPropagation}>
                {subCategory.search1Url ? (
                  <a
                    href={`${process.env.SEARCH1}/${detailCategory.search1Url}`}
                    rel={getNofollowAttribute(detailCategory.isNofollow)}
                  >
                    {detailCategory.title}
                  </a>
                ) : (
                  <Link
                    href={`${createUrlWithParams(detailCategory.urlParam)}`}
                    rel={getNofollowAttribute(detailCategory.isNofollow)}
                  >
                    {detailCategory.title}
                  </Link>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

const accordionStyle = (showAccordion: boolean, subCategory: SubCategoryType) => {
  return {
    height:
      showAccordion && subCategory.detailCategories
        ? `${subCategory.detailCategories.length * 35}px`
        : '0px',
    overflow: 'hidden',
    transition: '0.5s ease-out',
  };
};

const iconReverseStyle = (showAreaDetail: boolean) => {
  return {
    transition: '0.5s ease-out',
    transform: showAreaDetail ? 'rotate(180deg)' : 'rotate(0deg)',
  };
};

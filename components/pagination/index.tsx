'use client';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { PageInfoType } from '@/types';

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icon';

type Props = PageInfoType;

export const Pagination = (props: Props) => {
  const { currentPage, lastPage } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);
  const pageRangeDisplayed = isMobile ? 2 : 3;
  const marginPagesDisplayed = isMobile ? 0 : 1;
  const breakLabel = isMobile ? null : '...';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // クエリパラメータにpage要素を追加します
  // page=1以下は表示しません
  const generateUrlForPage = (page: number) => {
    if (page <= 1) return pathname;
    const updatedParams = new URLSearchParams(Array.from(searchParams.entries()));
    updatedParams.set('page', String(page));
    return `${pathname}?${updatedParams.toString()}`;
  };

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;
    // URL表示用に＋1
    const url = generateUrlForPage(page);

    router.push(url);
  };

  return (
    <div className="flex w-full justify-center">
      <ReactPaginate
        pageCount={lastPage}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        initialPage={currentPage - 1}
        breakLabel={breakLabel}
        previousLabel={<PrevButton />}
        nextLabel={<NextButton />}
        onPageChange={handlePageClick}
        disableInitialCallback={true}
        renderOnZeroPageCount={null}
        containerClassName="flex mb-[60px]"
        previousClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-1 md:w-40"
        previousLinkClassName="p-4"
        nextLinkClassName="p-4"
        nextClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-1 font-bold md:w-40"
        pageClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-red-1 font-bold"
        pageLinkClassName="p-4 w-full flex justify-center"
        activeClassName="mr-2 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-red-1 text-white"
        breakClassName="mr-2 mt-4 flex"
        disabledClassName="bg-gray-3"
      />
    </div>
  );
};

const PrevButton = () => {
  return (
    <>
      <div className="relative hidden w-full font-bold md:flex">
        <ArrowLeftIcon className="absolute -left-4 top-2 text-[8px]" />
        <span className="text-base">前のページへ</span>
      </div>
      <div className="flex w-full justify-center font-bold md:hidden">
        <ArrowLeftIcon className="text-[8px]" />
      </div>
    </>
  );
};

const NextButton = () => {
  return (
    <>
      <div className="relative hidden w-full justify-center font-bold md:flex">
        <ArrowRightIcon className="absolute -right-4 top-2 text-[8px]" />
        <span className="text-base">次のページへ</span>
      </div>
      <div className="flex w-full justify-center font-bold md:hidden">
        <ArrowRightIcon className="text-[8px]" />
      </div>
    </>
  );
};

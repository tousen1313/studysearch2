import type { BaseKeywordsType } from '@/types';
import type { CategoryResourceType } from '@/types';
import { objectToCamel } from 'ts-case-convert';

import { BaseKeywords } from '@/app/components/base-keywords';
import { Breadcrumb } from '@/app/components/breadcrumb';
import { SideBar } from '@/app/components/side-bar';

import { Pagination } from '@/components/pagination';

export default async function Index({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = searchParams?.page ?? '1';
  const baseKeywordsData = await getBaseKeywords(page);
  const formatBaseKeywords = objectToCamel(baseKeywordsData);
  const categoriesData = await getCategories();
  const formatSideBar = objectToCamel(categoriesData);

  return (
    <>
      <div className="mx-auto mb-[60px] mt-36 flex flex-col md:mt-28 md:w-[1000px] md:flex-row-reverse md:justify-center">
        <div className="mx-3 md:w-[700px] md:pl-6">
          <BaseKeywords keywords={formatBaseKeywords.keywords} />
          <Pagination {...formatBaseKeywords.pageInfo} />
        </div>
        <div className="mx-3 md:mx-0 md:w-[300px]">
          <SideBar sideBar={formatSideBar} />
        </div>
      </div>
      <Breadcrumb />
    </>
  );
}

export const getBaseKeywords = async (page: string): Promise<BaseKeywordsType> => {
  const url =
    page === '1'
      ? `${process.env.API_BASE_URL}/base-keywords`
      : `${process.env.API_BASE_URL}/base-keywords?page=${page}`;
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch base-keywords data');
  }
  return json;
};

const getCategories = async (): Promise<CategoryResourceType> => {
  const url = `${process.env.API_BASE_URL}/categories`;
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch categories data');
  }
  return json;
};

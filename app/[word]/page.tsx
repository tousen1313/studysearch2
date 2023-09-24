import { Suspense } from 'react';

import type { RelatedKeywordResourceType } from '@/types';
import type { CategoryResourceType } from '@/types';
import { objectToCamel } from 'ts-case-convert';

import { Breadcrumb } from '@/app/components/breadcrumb';
import { SideBar } from '@/app/components/side-bar';

import { Pagination } from '@/components/pagination';

import { JobPanel } from '@/app/[word]/components/job-panel';
import { RelationPanel } from '@/app/[word]/components/relation-panel';
import { TitlePanel } from '@/app/[word]/components/title-panel';

import relatedKeywordsJson from '@/json/related-keywords.json';
import worksJson from '@/json/works.json';

const workData = objectToCamel(worksJson);
const relatedKeywords: RelatedKeywordResourceType = objectToCamel(relatedKeywordsJson);

export default async function WorkPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const urlParam = searchParams;
  const { keyword = '', area = '' } = searchParams ?? {};
  const path = `/categories?keyword=${keyword}${area ? `&area=${area}` : ''}`;
  const categoriesData = await getCategories(path);
  const formatSideBar = objectToCamel(categoriesData);

  return (
    <>
      <div className="mx-auto mb-[60px] mt-36 flex flex-col md:mt-28 md:w-[1000px] md:flex-row-reverse md:justify-center">
        <div className="md:w-[700px] md:pl-6">
          <TitlePanel urlParam={urlParam} />
          <Suspense fallback={<div>🌀 Loading...</div>}>
            <JobPanel works={workData.works} />
            <Pagination {...workData.pageInfo} />
          </Suspense>
          <Suspense fallback={<div>🌀 Loading...</div>}>
            <RelationPanel relatedKeywords={relatedKeywords.relatedKeywords} />
          </Suspense>
        </div>
        <div className="mx-3 md:mx-0  md:w-[300px]">
          <SideBar sideBar={formatSideBar} />
        </div>
      </div>
      <Breadcrumb />
    </>
  );
}

//mockサーバ繋げるまで？コメントアウト
// const getWorks = async (word: string) => {
//   const tasks = await fetch(`${process.env.URL}/search2/api/get_work_data/?${word}`).then((res) => {
//     return res.json();
//   });
//   return tasks;
// };

const getCategories = async (path: string): Promise<CategoryResourceType> => {
  const url = `${process.env.API_BASE_URL}${path}`;
  const response = await fetch(url);
  const json = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch categories data');
  }
  return json;
};

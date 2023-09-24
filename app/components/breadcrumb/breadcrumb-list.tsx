'use client';

import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icon';

type Props = {
  currentPath: string;
};

type BreadcrumbItem = {
  title: string;
  link: string;
  isCurrent: boolean;
};

export const BreadcrumbList = (props: Props) => {
  const { currentPath } = props;
  const individualPath =
    currentPath !== '/' ? decodeURIComponent(currentPath.replace('/', '')) : '';
  const breadcrumbs = individualPath ? generateBreadcrumb(individualPath) : [];

  return (
    <div className="w-full bg-white">
      <nav className="m-auto flex h-10 w-11/12 items-center overflow-x-auto md:max-w-[1000px]">
        <ul className="flex whitespace-nowrap px-2 text-sm text-gray-500">
          <li>
            <Link href="/">求人TOP</Link>
          </li>
          <li className="relative flex items-center">
            <ArrowRightIcon className="mx-2 text-xs text-gray-3" />
            <Link href="/">求人検索</Link>
          </li>
          {individualPath &&
            breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                <ArrowRightIcon className="mx-2 text-xs text-gray-3" />
                {breadcrumb.isCurrent ? (
                  <span>{breadcrumb.title}</span>
                ) : (
                  <Link href={`/${breadcrumb.link}の求人`}>{breadcrumb.title}</Link>
                )}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

const generateBreadcrumb = (path: string): BreadcrumbItem[] => {
  const breadcrumbItems: BreadcrumbItem[] = [];
  const pathSegments = path.split('-');

  // 最後のパンくずリストアイテムが 掛け合わせによる'×'を含む場合の処理
  const lastSegment = pathSegments[pathSegments.length - 1];
  if (lastSegment.includes('×')) {
    const splitLastSegment = lastSegment.split('×');
    pathSegments[pathSegments.length - 1] = splitLastSegment[0];
    pathSegments.push(`×${splitLastSegment[1]}`);
  }

  pathSegments.reduce((breadcrumbLink, segment, index) => {
    const isLastItem = index === pathSegments.length - 1;
    const nextBreadcrumbLink = breadcrumbLink ? `${breadcrumbLink}-${segment}` : segment;
    const breadcrumbTitle = segment.startsWith('×')
      ? `${pathSegments[index - 1]}${segment}`
      : segment;
    const title = isLastItem ? breadcrumbTitle : `${breadcrumbTitle}の求人`;
    breadcrumbItems.push({
      title,
      link: nextBreadcrumbLink,
      isCurrent: isLastItem,
    });
    return nextBreadcrumbLink;
  }, '');

  return breadcrumbItems;
};

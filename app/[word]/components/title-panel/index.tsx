import { SearchIcon } from '@/components/icon';

type Props = {
  urlParam: { [key: string]: string | undefined };
};

export const TitlePanel = (props: Props) => {
  const { urlParam } = props;

  return (
    <div className="mx-0 rounded-none bg-red-1 pb-5 md:mx-3 md:rounded-2xl">
      <div className="flex items-center justify-center py-3 font-semibold text-white">
        キーワードで探した求人
      </div>
      <div className="m-auto mx-5 flex flex-col items-center justify-center rounded-2xl bg-white py-2">
        <TitleArea urlParam={urlParam} />
        <div className="w-11/12 border-t-2 border-solid pt-2">
          <TitleDetailArea urlParam={urlParam} />
          <a
            href="/"
            className="m-auto mt-3.5 flex w-3/4 max-w-sm justify-center rounded-3xl border-2 border-red-1 bg-white py-2.5"
          >
            <SearchIcon className="mr-1 mt-1 text-red-1" />
            条件を変更して探す
          </a>
        </div>
      </div>
    </div>
  );
};

const TitleArea = (props: Props) => {
  const { urlParam } = props;
  const { word, area } = formatTitleWord(urlParam);

  return (
    <>
      <h1 className="text-3xl font-bold">{word}</h1>
      {area && (
        <>
          <span className="text-3xl font-bold">×</span>
          <h1 className="text-3xl font-bold">{area}</h1>
        </>
      )}
      <span className="mb-2 font-bold">の求人情報</span>
    </>
  );
};

const TitleDetailArea = (props: Props) => {
  const { urlParam } = props;
  const { word, area } = formatTitleWord(urlParam);

  return (
    <>
      エンゲージに掲載されている「{word} {area && `×${area}`}
      」の求人一覧です。
    </>
  );
};

// WIP
// 検索クエリを表示用に加工します
// 単一エリア＋単一keywordのみ対応しています。細かい仕様が決まってないのでとりあえずの対応
const formatTitleWord = (urlParam: { [key: string]: string | undefined }) => {
  const areaQueryKey = ['area'];
  const otherQueryKey = [
    'salary',
    'industry',
    'employment-type',
    'occupation',
    'feature',
    'keyword',
  ];
  let word = '';
  let area = '';
  Object.entries(urlParam).forEach(([key, value]) => {
    if (typeof value === 'string') {
      if (areaQueryKey.includes(key)) {
        area = value;
      } else if (otherQueryKey.includes(key)) {
        word = value;
      }
    }
  });

  // エリア単一の場合はwordに設定する
  if (word === '') {
    word = area;
    area = '';
  }

  const keywords = {
    word,
    area,
  };

  return keywords;
};

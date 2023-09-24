export type SideBarType = 'Employment' | 'Occupation' | 'Industry' | 'Area' | 'Feature' | 'Salary';

// TODO swaggerからinterfaceを吐き出して参照するように変更予定
export type SideArea = {
  list: Array<SideAreaCategory>;
};

export type SideAreaCategory = {
  type: SideBarType;
  title: string;
  categoryTitleLink: boolean;
  list: Array<Category>;
};

export type Category = {
  categoryTitle: string;
  subTitle?: string;
  subCategoryList?: Array<SubCategory>;
};

export type SubCategory = {
  subCategoryTitle: string;
  areas?: Array<Area>;
};

export type Area = {
  area_id: number;
  area_name: string;
  area_details: Array<AreaDetail>;
};

export type AreaDetail = {
  area_detail_id: number;
  area_detail_name: string;
};

export type WorkResourceType = {
  /**
   *
   * @type {PageInfoType}
   */
  pageInfo: PageInfoType;
  /**
   * 検索キーワード一覧
   * @type {Array<WorkType>}
   */
  works: Array<WorkType>;
};

export type WorkType = {
  /**
   * 求人ID
   * @type {string}
   */
  workId: string;
  /**
   * 有料求人フラグ
   * @type {boolean}
   */
  isPaidPublication: boolean;
  /**
   * 掲載日Newフラグ
   * @type {boolean}
   */
  isNew: boolean;
  /**
   * 掲載経過日表示用
   * @type {string}
   */
  elapsedDaysText: string;
  /**
   * 掲載経過日数
   * @type {number}
   */
  intElapsedDays: number;
  /**
   * 更新日
   * @type {Date}
   */
  updateDatetime: Date;
  /**
   * タイトル
   * @type {string}
   */
  title: string;
  /**
   * 雇用形態
   * @type {string}
   */
  employmentStatus: string;
  /**
   * 応募資格系（募集の特徴）
   * @type {Array<string>}
   */
  recruitmentFeatures?: Array<string> | null;
  /**
   * 勤務地
   * @type {Array<OfficeListType>}
   */
  officeList: Array<OfficeListType>;
  /**
   * 勤務時間
   * @type {string}
   */
  workingTime: string;
  /**
   * 勤務詳細
   * @type {Array<string>}
   */
  workingTimeFeatures?: Array<string> | null;
  /**
   * 給与
   * @type {string}
   */
  salary: string;
  /**
   * 給与詳細
   * @type {string}
   */
  salaryNote?: string;
  /**
   * 給与
   * @type {string}
   */
  imageUrl?: string;
  /**
   * 求人詳細のリンク
   * @type {string}
   */
  url: string;
  /**
   * ES掲載フラグ
   * @type {boolean}
   */
  // ESフラグはsearchでは使ってないので不要？
  workEsSiteReviewFlg: boolean;
  /**
   * TSRID
   * @type {number}
   */
  tsrId: number;
  /**
   * 会社名
   * @type {string}
   */
  companyName: string;
  /**
   * 評判スコア
   * @type {number}
   */
  hyobanScoreTotal?: number;
  /**
   * 口コミカウント
   * @type {number}
   */
  kuchikomiCount?: number;
  /**
   * 評判リンク
   * @type {string}
   */
  hyobanUrl?: string;
  /**
   * キャッシュ時刻
   * @type {Date}
   */
  cachedDatetime?: Date;
};

export type OfficeListType = {
  /**
   * リモート勤務地
   * @type {string}
   */
  areaRemote?: string;
  /**
   * メイン勤務地
   * @type {string}
   */
  // booleanではなくstring 一時的に手動でstringに修正
  areaMain?: string;
  /**
   * メイン勤務地住所
   * @type {string}
   */
  // booleanではなくstring 一時的に手動でstringに修正
  areaSecondary?: string;
};

export type BaseKeywordsType = {
  /**
   * 検索キーワード
   * @type {Array<string>}
   */
  keywords: Array<string>;
  /**
   *
   * @type {PageInfoType}
   */
  pageInfo: PageInfoType;
};

export type PageInfoType = {
  /**
   * 現在のページ
   * @type {number}
   */
  currentPage: number;
  /**
   * 前のページ
   * @type {number}
   */
  prevPage?: number | null;
  /**
   * 次のページ
   * @type {number}
   */
  nextPage?: number | null;
  /**
   * 最後のページ
   * @type {number}
   */
  lastPage: number;
};

export type RelatedKeywordResourceType = {
  /**
   * 関連語キーワード一覧
   * @type {Array<RelatedKeywordType>}
   */
  relatedKeywords: Array<RelatedKeywordType>;
};

export type RelatedKeywordType = {
  /**
   * 関連語キーワード
   * @type {string}
   */
  word: string;
  /**
   *
   * @type {UrlParamType}
   */
  urlParam: UrlParamType;
  /**
   * ノーフォロー有無
   * @type {boolean}
   */
  isNofollow: boolean;
};

export type UrlParamType = {
  /**
   * 給与
   * @type {string}
   */
  salary?: string;
  /**
   * 業種
   * @type {string}
   */
  industry?: string;
  /**
   * 雇用形態
   * @type {string}
   */
  employmentType?: string;
  /**
   * エリア
   * @type {string}
   */
  area?: string;
  /**
   * 職種
   * @type {string}
   */
  occupation?: string;
  /**
   * 特徴
   * @type {string}
   */
  feature?: string;
  /**
   * 関連語キーワード
   * @type {string}
   */
  keyword?: string;
};

export type CategoryResourceType = {
  /**
   * 検索キーワード一覧
   * @type {Array<Category>}
   */
  categories: Array<CategoryType>;
};

export type CategoryType = {
  /**
   * 項目タイプ
   * @type {string}
   */
  kind: CategoryKindEnum;
  /**
   * カテゴリータイトル
   * @type {string}
   */
  title: string;
  /**
   * サブカテゴリー一覧
   * @type {Array<SubCategoryType>}
   */
  subCategories: Array<SubCategoryType>;
};

export type SubCategoryType = {
  /**
   * サブカテゴリータイトル
   * @type {string}
   */
  title: string;
  /**
   *
   * @type {UrlParamType}
   */
  urlParam: UrlParamType;
  /**
   * サブカテゴリ詳細
   * @type {string}
   */
  note?: string | null;
  /**
   * ノーフォロー有無
   * @type {boolean}
   */
  isNofollow: boolean;
  /**
   * search1用URL
   * @type {string}
   */
  search1Url?: string;
  /**
   * 詳細一覧
   * @type {Array<DetailCategoryType>}
   */
  detailCategories?: Array<DetailCategoryType> | null;
};

export const CategoryKindEnum = {
  Employment: 'Employment',
  Occupation: 'Occupation',
  Industry: 'Industry',
  Area: 'Area',
  Feature: 'Feature',
  Salary: 'Salary',
} as const;
export type CategoryKindEnum = (typeof CategoryKindEnum)[keyof typeof CategoryKindEnum];

export type DetailCategoryType = {
  /**
   * 詳細タイトル
   * @type {string}
   */
  title: string;
  /**
   *
   * @type {UrlParamType}
   */
  urlParam: UrlParamType;
  /**
   * ノーフォロー有無
   * @type {boolean}
   */
  isNofollow: boolean;
  /**
   * search1用URL
   * @type {string}
   */
  search1Url?: string;
};

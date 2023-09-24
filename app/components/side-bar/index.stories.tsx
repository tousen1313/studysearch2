import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from '.';

const meta = {
  title: 'App/Components/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    sideBar: {
      control: 'object',
      description: 'サイドバーのデータ',
    },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  args: {
    sideBar: {
      categories: [
        {
          kind: 'Employment',
          title: '雇用形態で探す',
          subCategories: [
            {
              title: '中途採用（正社員）',
              urlParam: {
                employmentType: '中途採用（正社員）',
              },
              isNofollow: false,
              search1Url: 'koyokeitai/chuto-seishain/',
            },
            {
              title: '新卒採用（正社員）',
              urlParam: {
                employmentType: '新卒採用（正社員）',
              },
              isNofollow: false,
              search1Url: 'koyokeitai/shinsotsu-seishain/',
            },
            {
              title: '中途採用（契約）',
              urlParam: {
                employmentType: '中途採用（契約）',
              },
              isNofollow: false,
              search1Url: 'koyokeitai/chuto-keiyaku/',
            },
            {
              title: '新卒採用（契約）',
              urlParam: {
                employmentType: '新卒採用（契約）',
              },
              isNofollow: false,
              search1Url: 'koyokeitai/shinsotsu-keiyaku/',
            },
            {
              title: 'アルバイト・パート',
              urlParam: {
                employmentType: 'アルバイト・パート',
              },
              isNofollow: false,
              search1Url: 'koyokeitai/part-time/',
            },
            {
              title: '業務委託',
              urlParam: {
                employmentType: '業務委託',
              },
              isNofollow: false,
              search1Url: 'koyokeitai/gyomu-itaku/',
            },
            {
              title: 'インターン',
              urlParam: {
                employmentType: 'インターン',
              },
              isNofollow: false,
              search1Url: 'koyokeitai/internship/',
            },
          ],
        },
        {
          kind: 'Occupation',
          title: '職種で探す',
          subCategories: [
            {
              title: '営業系',
              urlParam: {
                occupation: '営業系',
              },
              note: '営業、MR、人材コーディネーター 他',
              isNofollow: false,
              search1Url: 'job/sales/',
            },
            {
              title: '企画・事務・管理系',
              urlParam: {
                occupation: '企画・事務・管理系',
              },
              note: '経営企画、広報、人事、事務 他',
              isNofollow: false,
              search1Url: 'job/officework/',
            },
            {
              title: '販売・接客・サービス系',
              urlParam: {
                occupation: '販売・接客・サービス系',
              },
              note: 'ファッション、フード、小売 他',
              isNofollow: false,
              search1Url: 'job/retailing/',
            },
            {
              title: '専門サービス系（医療、福祉、教育、その他',
              urlParam: {
                occupation: '専門サービス系（医療、福祉、教育、その他',
              },
              note: '医療、福祉、教育、ブライダル 他',
              isNofollow: false,
              search1Url: 'job/pro-service/',
            },
            {
              title: '専門職系（コンサルタント、金融、不動産）',
              urlParam: {
                occupation: '専門職系（コンサルタント、金融、不動産）',
              },
              note: 'コンサルタント、金融・不動産 他',
              isNofollow: false,
              search1Url: 'job/professional/',
            },
            {
              title: 'クリエイティブ系',
              urlParam: {
                occupation: 'クリエイティブ系',
              },
              note: 'WEB・ゲーム制作、プランナー 他',
              isNofollow: false,
              search1Url: 'job/creative/',
            },
            {
              title: '技術系（IT・Web・ゲーム・通信）',
              urlParam: {
                occupation: '技術系（IT・Web・ゲーム・通信）',
              },
              note: 'アプリ開発、ITコンサル、PM 他',
              isNofollow: false,
              search1Url: 'job/itengineer/',
            },
            {
              title: '技術系（電気、電子、機械）',
              urlParam: {
                occupation: '技術系（電気、電子、機械）',
              },
              note: '回路・制御設計、研究 他',
              isNofollow: false,
              search1Url: 'job/electronic/',
            },
            {
              title: '技術系（建築、土木）',
              urlParam: {
                occupation: '技術系（建築、土木）',
              },
              note: '建築・設備設計、施工管理 他',
              isNofollow: false,
              search1Url: 'job/construction/',
            },
            {
              title: '技術系（医薬、化学、素材、食品）',
              urlParam: {
                occupation: '技術系（医薬、化学、素材、食品）',
              },
              note: '研究、生産管理、品質管理 他',
              isNofollow: false,
              search1Url: 'job/bio/',
            },
            {
              title: '警備、清掃、設備管理、運輸・配送、軽作業系',
              urlParam: {
                occupation: '警備、清掃、設備管理、運輸・配送、軽作業系',
              },
              note: '警備、清掃、ドライバー 他',
              isNofollow: false,
              search1Url: 'job/technique/',
            },
            {
              title: '公務員、団体職員、その他',
              urlParam: {
                occupation: '公務員、団体職員、その他',
              },
              note: '公務員、警察・消防、学校法人 他',
              isNofollow: false,
              search1Url: 'job/komuin/',
            },
          ],
        },
        {
          kind: 'Industry',
          title: '業種で探す',
          subCategories: [
            {
              title: 'メーカー（機械・電気・電子）',
              urlParam: {
                industry: 'メーカー（機械・電気・電子）',
              },
              note: '電気、機械、自動車、医療機器 他',
              isNofollow: false,
              search1Url: 'industry/denkidenshi/',
            },
            {
              title: 'メーカー（食材・商品・衣料品 他）',
              urlParam: {
                industry: 'メーカー（食材・商品・衣料品 他）',
              },
              note: '化学、鉄鋼、医薬品、日常品 他',
              isNofollow: false,
              search1Url: 'industry/sozai/',
            },
            {
              title: 'サービス',
              urlParam: {
                industry: 'サービス',
              },
              note: '飲食、教育、アミューズメント 他',
              isNofollow: false,
              search1Url: 'industry/service/',
            },
            {
              title: 'コンサルティング',
              urlParam: {
                industry: 'コンサルティング',
              },
              note: 'シンクタンク、マーケティング 他',
              isNofollow: false,
              search1Url: 'industry/consul/',
            },
            {
              title: '不動産・建設・設備',
              urlParam: {
                industry: '不動産・建設・設備',
              },
              note: '建設、土木、不動産 他',
              isNofollow: false,
              search1Url: 'industry/building/',
            },
            {
              title: '運輸・交通・物流・倉庫',
              urlParam: {
                industry: '運輸・交通・物流・倉庫',
              },
              note: '鉄道、空輸、海運、物流、倉庫 他',
              isNofollow: false,
              search1Url: 'industry/logistics/',
            },
            {
              title: '商社',
              urlParam: {
                industry: '商社',
              },
              note: '総合商社、食料品、アパレル、インテリア 他',
              isNofollow: false,
              search1Url: 'industry/trading/',
            },
            {
              title: '金融・保険',
              urlParam: {
                industry: '金融・保険',
              },
              note: '銀行、証券、生保、クレジット 他',
              isNofollow: false,
              search1Url: 'industry/finance/',
            },
            {
              title: 'マスコミ・広告・デザイン',
              urlParam: {
                industry: 'マスコミ・広告・デザイン',
              },
              note: '放送、出版、広告、ゲーム、デザイン 他',
              isNofollow: false,
              search1Url: 'industry/ad/',
            },
            {
              title: '流通・小売',
              urlParam: {
                industry: '流通・小売',
              },
              note: '百貨店、コンビニ、ドラックストア 他',
              isNofollow: false,
              search1Url: 'industry/ryutsu/',
            },
            {
              title: 'IT・通信・インターネット',
              urlParam: {
                industry: 'IT・通信・インターネット',
              },
              note: 'ソフトウェア、インターネット 他',
              isNofollow: false,
              search1Url: 'industry/it/',
            },
            {
              title: 'その他',
              urlParam: {
                industry: 'その他',
              },
              note: '電気、ガス、インフラ、官公庁 他',
              isNofollow: false,
              search1Url: 'industry/other/',
            },
          ],
        },
        {
          kind: 'Area',
          title: 'エリアで探す',
          subCategories: [
            {
              title: '北海道・東北',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '北海道',
                  urlParam: {
                    area: '北海道',
                  },
                  isNofollow: false,
                  search1Url: 'area/hokkaido/',
                },
                {
                  title: '青森県',
                  urlParam: {
                    area: '青森県',
                  },
                  isNofollow: false,
                  search1Url: 'area/aomori/',
                },
                {
                  title: '岩手県',
                  urlParam: {
                    area: '岩手県',
                  },
                  isNofollow: false,
                  search1Url: 'area/iwate/',
                },
                {
                  title: '宮城県',
                  urlParam: {
                    area: '宮城県',
                  },
                  isNofollow: false,
                  search1Url: 'area/miyagi/',
                },
                {
                  title: '秋田県',
                  urlParam: {
                    area: '秋田県',
                  },
                  isNofollow: false,
                  search1Url: 'area/akita/',
                },
                {
                  title: '山形県',
                  urlParam: {
                    area: '山形県',
                  },
                  isNofollow: false,
                  search1Url: 'area/yamagata/',
                },
                {
                  title: '福島県',
                  urlParam: {
                    area: '福島県',
                  },
                  isNofollow: false,
                  search1Url: 'area/fukushima/',
                },
              ],
            },
            {
              title: '関東',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '東京都',
                  urlParam: {
                    area: '東京都',
                  },
                  isNofollow: false,
                  search1Url: 'area/tokyo/',
                },
                {
                  title: '神奈川県',
                  urlParam: {
                    area: '神奈川県',
                  },
                  isNofollow: false,
                  search1Url: 'area/kanagawa/',
                },
                {
                  title: '千葉県',
                  urlParam: {
                    area: '千葉県',
                  },
                  isNofollow: false,
                  search1Url: 'area/chiba/',
                },
                {
                  title: '茨城県',
                  urlParam: {
                    area: '茨城県',
                  },
                  isNofollow: false,
                  search1Url: 'area/ibaraki/',
                },
                {
                  title: '栃木県',
                  urlParam: {
                    area: '栃木県',
                  },
                  isNofollow: false,
                  search1Url: 'area/tochigi/',
                },
                {
                  title: '群馬県',
                  urlParam: {
                    area: '群馬県',
                  },
                  isNofollow: false,
                  search1Url: 'area/gunma/',
                },
                {
                  title: '埼玉県',
                  urlParam: {
                    area: '埼玉県',
                  },
                  isNofollow: false,
                  search1Url: 'area/saitama/',
                },
              ],
            },
            {
              title: '北陸・甲信越',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '富山県',
                  urlParam: {
                    area: '富山県',
                  },
                  isNofollow: false,
                  search1Url: 'area/toyama/',
                },
                {
                  title: '石川県',
                  urlParam: {
                    area: '石川県',
                  },
                  isNofollow: false,
                  search1Url: 'area/ishikawa/',
                },
                {
                  title: '福井県',
                  urlParam: {
                    area: '福井県',
                  },
                  isNofollow: false,
                  search1Url: 'area/fukui/',
                },
                {
                  title: '新潟県',
                  urlParam: {
                    area: '新潟県',
                  },
                  isNofollow: false,
                  search1Url: 'area/nigata/',
                },
                {
                  title: '山梨県',
                  urlParam: {
                    area: '山梨県',
                  },
                  isNofollow: false,
                  search1Url: 'area/yamanashi/',
                },
                {
                  title: '長野県',
                  urlParam: {
                    area: '長野県',
                  },
                  isNofollow: false,
                  search1Url: 'area/nagano/',
                },
              ],
            },
            {
              title: '東海',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '岐阜県',
                  urlParam: {
                    area: '岐阜県',
                  },
                  isNofollow: false,
                  search1Url: 'area/gifu/',
                },
                {
                  title: '静岡県',
                  urlParam: {
                    area: '静岡県',
                  },
                  isNofollow: false,
                  search1Url: 'area/shizuoka/',
                },
                {
                  title: '愛知県',
                  urlParam: {
                    area: '愛知県',
                  },
                  isNofollow: false,
                  search1Url: 'area/aichi/',
                },
                {
                  title: '三重県',
                  urlParam: {
                    area: '三重県',
                  },
                  isNofollow: false,
                  search1Url: 'area/mie/',
                },
              ],
            },
            {
              title: '関西',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '滋賀県',
                  urlParam: {
                    area: '滋賀県',
                  },
                  isNofollow: false,
                  search1Url: 'area/shiga/',
                },
                {
                  title: '京都府',
                  urlParam: {
                    area: '京都府',
                  },
                  isNofollow: false,
                  search1Url: 'area/kyoto/',
                },
                {
                  title: '大阪府',
                  urlParam: {
                    area: '大阪府',
                  },
                  isNofollow: false,
                  search1Url: 'area/osaka/',
                },
                {
                  title: '兵庫県',
                  urlParam: {
                    area: '兵庫県',
                  },
                  isNofollow: false,
                  search1Url: 'area/hyogo/',
                },
                {
                  title: '奈良県',
                  urlParam: {
                    area: '奈良県',
                  },
                  isNofollow: false,
                  search1Url: 'area/nara/',
                },
                {
                  title: '和歌山県',
                  urlParam: {
                    area: '和歌山県',
                  },
                  isNofollow: false,
                  search1Url: 'area/wakayama/',
                },
              ],
            },
            {
              title: '中国',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '鳥取県',
                  urlParam: {
                    area: '鳥取県',
                  },
                  isNofollow: false,
                  search1Url: 'area/tottori/',
                },
                {
                  title: '島根県',
                  urlParam: {
                    area: '島根県',
                  },
                  isNofollow: false,
                  search1Url: 'area/shimane/',
                },
                {
                  title: '岡山県',
                  urlParam: {
                    area: '岡山県',
                  },
                  isNofollow: false,
                  search1Url: 'area/okayama/',
                },
                {
                  title: '広島県',
                  urlParam: {
                    area: '広島県',
                  },
                  isNofollow: false,
                  search1Url: 'area/hiroshima/',
                },
                {
                  title: '山口県',
                  urlParam: {
                    area: '山口県',
                  },
                  isNofollow: false,
                  search1Url: 'area/yamaguchi/',
                },
              ],
            },
            {
              title: '四国',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '徳島県',
                  urlParam: {
                    area: '徳島県',
                  },
                  isNofollow: false,
                  search1Url: 'area/tokushima/',
                },
                {
                  title: '香川県',
                  urlParam: {
                    area: '香川県',
                  },
                  isNofollow: false,
                  search1Url: 'area/kagawa/',
                },
                {
                  title: '愛媛県',
                  urlParam: {
                    area: '愛媛県',
                  },
                  isNofollow: false,
                  search1Url: 'area/ehime/',
                },
                {
                  title: '高知県',
                  urlParam: {
                    area: '高知県',
                  },
                  isNofollow: false,
                  search1Url: 'area/kochi/',
                },
              ],
            },
            {
              title: '九州・沖縄',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '福岡県',
                  urlParam: {
                    area: '福岡県',
                  },
                  isNofollow: false,
                  search1Url: 'area/fukuoka/',
                },
                {
                  title: '佐賀県',
                  urlParam: {
                    area: '佐賀県',
                  },
                  isNofollow: false,
                  search1Url: 'area/saga/',
                },
                {
                  title: '長崎県',
                  urlParam: {
                    area: '長崎県',
                  },
                  isNofollow: false,
                  search1Url: 'area/nagasaki/',
                },
                {
                  title: '熊本県',
                  urlParam: {
                    area: '熊本県',
                  },
                  isNofollow: false,
                  search1Url: 'area/kumamoto/',
                },
                {
                  title: '大分県',
                  urlParam: {
                    area: '大分県',
                  },
                  isNofollow: false,
                  search1Url: 'area/oita/',
                },
                {
                  title: '宮崎県',
                  urlParam: {
                    area: '宮崎県',
                  },
                  isNofollow: false,
                  search1Url: 'area/miyazaki/',
                },
                {
                  title: '鹿児島県',
                  urlParam: {
                    area: '鹿児島県',
                  },
                  isNofollow: false,
                  search1Url: 'area/kagoshima/',
                },
                {
                  title: '沖縄県',
                  urlParam: {
                    area: '沖縄県',
                  },
                  isNofollow: false,
                  search1Url: 'area/okinawa/',
                },
              ],
            },
          ],
        },
        {
          kind: 'Feature',
          title: '特徴で探す',
          subCategories: [
            {
              title: '会社の特徴',
              urlParam: {},
              note: '上場企業、官公庁・学校関連 他',
              isNofollow: false,
              detailCategories: [
                {
                  title: '上場企業',
                  urlParam: {
                    feature: '上場企業',
                  },
                  isNofollow: false,
                  search1Url: 'feature/jojo-kigyo/',
                },
                {
                  title: '官公庁・学校関連',
                  urlParam: {
                    feature: '官公庁・学校関連',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kankocho-gakko/',
                },
                {
                  title: 'ベンチャー企業',
                  urlParam: {
                    feature: 'ベンチャー企業',
                  },
                  isNofollow: false,
                  search1Url: 'feature/venture-kigyo/',
                },
                {
                  title: '外資系企業',
                  urlParam: {
                    feature: '外資系企業',
                  },
                  isNofollow: false,
                  search1Url: 'feature/gaishikei-kigyo/',
                },
                {
                  title: '株式公開準備中',
                  urlParam: {
                    feature: '株式公開準備中',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kabushiki-kokai-jumbi/',
                },
                {
                  title: '設立30年以上',
                  urlParam: {
                    feature: '設立30年以上',
                  },
                  isNofollow: false,
                  search1Url: 'feature/setsuritsu30nen/',
                },
                {
                  title: '女性管理職登用実績あり',
                  urlParam: {
                    feature: '女性管理職登用実績あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/josei-kanrishoku-toyo/',
                },
                {
                  title: '駅から徒歩5分以内',
                  urlParam: {
                    feature: '駅から徒歩5分以内',
                  },
                  isNofollow: false,
                  search1Url: 'feature/eki-toho5fun/',
                },
                {
                  title: '転勤なし',
                  urlParam: {
                    feature: '転勤なし',
                  },
                  isNofollow: false,
                  search1Url: 'feature/tenkin-nashi/',
                },
              ],
            },
            {
              title: '雇用・勤務時間の特徴',
              urlParam: {},
              note: '試用期間あり、正社員登用あり 他',
              isNofollow: false,
              detailCategories: [
                {
                  title: '試用期間あり',
                  urlParam: {
                    feature: '試用期間あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shiyo-kikan/',
                },
                {
                  title: '正社員登用あり',
                  urlParam: {
                    feature: '正社員登用あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/seishain-toyo/',
                },
                {
                  title: '残業なし',
                  urlParam: {
                    feature: '残業なし',
                  },
                  isNofollow: false,
                  search1Url: 'feature/zangyo-nashi/',
                },
                {
                  title: '完全土日祝休み',
                  urlParam: {
                    feature: '完全土日祝休み',
                  },
                  isNofollow: false,
                  search1Url: 'feature/donichishuku-yasumi/',
                },
                {
                  title: '1日4h以内OK',
                  urlParam: {
                    feature: '1日4h以内OK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/1nichi4jikan-ok/',
                },
                {
                  title: '週1日からOK',
                  urlParam: {
                    feature: '週1日からOK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shu1nichi-ok/',
                },
                {
                  title: '週2～3日からOK',
                  urlParam: {
                    feature: '週2～3日からOK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shu2-3nichi-ok/',
                },
                {
                  title: '単発・1日のみOK',
                  urlParam: {
                    feature: '単発・1日のみOK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/tampatsu-ok/',
                },
                {
                  title: '短期(1ヶ月以内)',
                  urlParam: {
                    feature: '短期(1ヶ月以内)',
                  },
                  isNofollow: false,
                  search1Url: 'feature/tanki-ok/',
                },
                {
                  title: '土日祝のみOK',
                  urlParam: {
                    feature: '土日祝のみOK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/donichishuku-ok/',
                },
                {
                  title: '10時以降に始業',
                  urlParam: {
                    feature: '10時以降に始業',
                  },
                  isNofollow: false,
                  search1Url: 'feature/10ji-shigyo/',
                },
                {
                  title: '夜勤・深夜・早朝（22時～7時）',
                  urlParam: {
                    feature: '夜勤・深夜・早朝（22時～7時）',
                  },
                  isNofollow: false,
                  search1Url: 'feature/yakin-shinya-socho/',
                },
                {
                  title: '16時前までの仕事',
                  urlParam: {
                    feature: '16時前までの仕事',
                  },
                  isNofollow: false,
                  search1Url: 'feature/16jimade/',
                },
                {
                  title: '17時以降に始業',
                  urlParam: {
                    feature: '17時以降に始業',
                  },
                  isNofollow: false,
                  search1Url: 'feature/17jiiko/',
                },
                {
                  title: '春・夏・冬休み期間限定',
                  urlParam: {
                    feature: '春・夏・冬休み期間限定',
                  },
                  isNofollow: false,
                  search1Url: 'feature/haru-natsu-fuyuyasumi-gentei/',
                },
                {
                  title: 'シフト制',
                  urlParam: {
                    feature: 'シフト制',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shifuto-sei/',
                },
              ],
            },
            {
              title: '仕事の特徴',
              urlParam: {},
              note: '英語・外国語を使う仕事 他',
              isNofollow: false,
              detailCategories: [
                {
                  title: '英語・外国語を使う仕事',
                  urlParam: {
                    feature: '英語・外国語を使う仕事',
                  },
                  isNofollow: false,
                  search1Url: 'feature/eigo-gaikokugo/',
                },
                {
                  title: 'マネージャー・管理職採用',
                  urlParam: {
                    feature: 'マネージャー・管理職採用',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kanrishoku-saiyo/',
                },
                {
                  title: '新規事業',
                  urlParam: {
                    feature: '新規事業',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shinki-jigyo/',
                },
                {
                  title: '高校生歓迎',
                  urlParam: {
                    feature: '高校生歓迎',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kokosei-kangei/',
                },
                {
                  title: '既卒・第二新卒歓迎',
                  urlParam: {
                    feature: '既卒・第二新卒歓迎',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kisotsu-ok/',
                },
                {
                  title: 'シニア歓迎',
                  urlParam: {
                    feature: 'シニア歓迎',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shinia-kangei/',
                },
                {
                  title: '障がい者積極採用',
                  urlParam: {
                    feature: '障がい者積極採用',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shogaisha-boshu/',
                },
                {
                  title: '副業・WワークOK',
                  urlParam: {
                    feature: '副業・WワークOK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/fukugyo-wwaku/',
                },
                {
                  title: '英語力不問',
                  urlParam: {
                    feature: '英語力不問',
                  },
                  isNofollow: false,
                  search1Url: 'feature/eigoryoku-fumon/',
                },
                {
                  title: '未経験OK',
                  urlParam: {
                    feature: '未経験OK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/mikeiken-ok/',
                },
                {
                  title: '学歴不問',
                  urlParam: {
                    feature: '学歴不問',
                  },
                  isNofollow: false,
                  search1Url: 'feature/gakureki-fumon/',
                },
              ],
            },
            {
              title: '募集の特徴',
              urlParam: {},
              note: '10名以上の大量募集 他',
              isNofollow: false,
              detailCategories: [
                {
                  title: '10名以上の大量募集',
                  urlParam: {
                    feature: '10名以上の大量募集',
                  },
                  isNofollow: false,
                  search1Url: 'feature/tairyo-boshu/',
                },
                {
                  title: '急募！内定まで2週間',
                  urlParam: {
                    feature: '急募！内定まで2週間',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kyubo-naitei2shukan/',
                },
                {
                  title: '欠員補充',
                  urlParam: {
                    feature: '欠員補充',
                  },
                  isNofollow: false,
                  search1Url: 'feature/ketsuin-hoju/',
                },
                {
                  title: '増員',
                  urlParam: {
                    feature: '増員',
                  },
                  isNofollow: false,
                  search1Url: 'feature/zoin/',
                },
              ],
            },
            {
              title: '福利厚生の特徴',
              urlParam: {},
              note: '年間休日120日以上、夏季休暇 他',
              isNofollow: false,
              detailCategories: [
                {
                  title: '年間休日120日以上',
                  urlParam: {
                    feature: '年間休日120日以上',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kyujitsu120nichiijo/',
                },
                {
                  title: '夏季休暇',
                  urlParam: {
                    feature: '夏季休暇',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kaki-kyuka/',
                },
                {
                  title: '年末年始休暇',
                  urlParam: {
                    feature: '年末年始休暇',
                  },
                  isNofollow: false,
                  search1Url: 'feature/nemmatsunenshi-kyuka/',
                },
                {
                  title: '雇用保険',
                  urlParam: {
                    feature: '雇用保険',
                  },
                  isNofollow: false,
                  search1Url: 'feature/koyo-hoken/',
                },
                {
                  title: '労災保険',
                  urlParam: {
                    feature: '労災保険',
                  },
                  isNofollow: false,
                  search1Url: 'feature/rosai-hoken/',
                },
                {
                  title: '厚生年金',
                  urlParam: {
                    feature: '厚生年金',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kosei-nenkin/',
                },
                {
                  title: '健康保険',
                  urlParam: {
                    feature: '健康保険',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kenko-hoken/',
                },
                {
                  title: '交通費支給あり',
                  urlParam: {
                    feature: '交通費支給あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/kotsuhi-shikyu/',
                },
                {
                  title: '資格取得支援・手当あり',
                  urlParam: {
                    feature: '資格取得支援・手当あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/shikakuteate/',
                },
                {
                  title: '寮・社宅・住宅手当あり',
                  urlParam: {
                    feature: '寮・社宅・住宅手当あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/ryo-shataku-jutakuteate/',
                },
                {
                  title: '育児支援・託児所あり',
                  urlParam: {
                    feature: '育児支援・託児所あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/ikujishien-takujijo/',
                },
                {
                  title: 'U・Iターン支援あり',
                  urlParam: {
                    feature: 'U・Iターン支援あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/uitan-shien/',
                },
                {
                  title: '時短勤務制度あり',
                  urlParam: {
                    feature: '時短勤務制度あり',
                  },
                  isNofollow: false,
                  search1Url: 'feature/jitankimmu/',
                },
                {
                  title: '日払い・週払い・即日払いOK',
                  urlParam: {
                    feature: '日払い・週払い・即日払いOK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/hi-shu-sokujitsubarai/',
                },
                {
                  title: 'テレワーク・在宅OK',
                  urlParam: {
                    feature: 'テレワーク・在宅OK',
                  },
                  isNofollow: false,
                  search1Url: 'feature/zaitaku-naishoku/',
                },
                {
                  title: '服装自由',
                  urlParam: {
                    feature: '服装自由',
                  },
                  isNofollow: false,
                  search1Url: 'feature/fukuso-jiyu/',
                },
              ],
            },
          ],
        },
        {
          kind: 'Salary',
          title: '給与で探す',
          subCategories: [
            {
              title: '年収',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '200万円〜',
                  urlParam: {
                    feature: '200万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu200/',
                },
                {
                  title: '250万円〜',
                  urlParam: {
                    feature: '250万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu250/',
                },
                {
                  title: '300万円〜',
                  urlParam: {
                    feature: '300万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu300/',
                },
                {
                  title: '350万円〜',
                  urlParam: {
                    feature: '350万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu350/',
                },
                {
                  title: '400万円〜',
                  urlParam: {
                    feature: '400万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu400/',
                },
                {
                  title: '450万円〜',
                  urlParam: {
                    feature: '450万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu450/',
                },
                {
                  title: '500万円〜',
                  urlParam: {
                    feature: '500万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu500/',
                },
                {
                  title: '550万円〜',
                  urlParam: {
                    feature: '550万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu550/',
                },
                {
                  title: '600万円〜',
                  urlParam: {
                    feature: '600万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu600/',
                },
                {
                  title: '650万円〜',
                  urlParam: {
                    feature: '650万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu650/',
                },
                {
                  title: '700万円〜',
                  urlParam: {
                    feature: '700万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu700/',
                },
                {
                  title: '750万円〜',
                  urlParam: {
                    feature: '750万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu750/',
                },
                {
                  title: '800万円〜',
                  urlParam: {
                    feature: '800万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu800/',
                },
                {
                  title: '850万円〜',
                  urlParam: {
                    feature: '850万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu850/',
                },
                {
                  title: '900万円〜',
                  urlParam: {
                    feature: '900万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu900/',
                },
                {
                  title: '950万円〜',
                  urlParam: {
                    feature: '950万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu950/',
                },
                {
                  title: '1,000万円〜',
                  urlParam: {
                    feature: '1000万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nenshu1000/',
                },
              ],
            },
            {
              title: '月給',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '15万円〜',
                  urlParam: {
                    feature: '15万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu15/',
                },
                {
                  title: '20万円〜',
                  urlParam: {
                    feature: '20万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu20/',
                },
                {
                  title: '25万円〜',
                  urlParam: {
                    feature: '25万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu25/',
                },
                {
                  title: '30万円〜',
                  urlParam: {
                    feature: '30万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu30/',
                },
                {
                  title: '35万円〜',
                  urlParam: {
                    feature: '35万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu35/',
                },
                {
                  title: '40万円〜',
                  urlParam: {
                    feature: '40万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu40/',
                },
                {
                  title: '45万円〜',
                  urlParam: {
                    feature: '45万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu45/',
                },
                {
                  title: '50万円〜',
                  urlParam: {
                    feature: '50万円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/gekkyu50/',
                },
              ],
            },
            {
              title: '日給',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '6,000円〜',
                  urlParam: {
                    feature: '6,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu6000/',
                },
                {
                  title: '7,000円〜',
                  urlParam: {
                    feature: '7,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu7000/',
                },
                {
                  title: '8,000円〜',
                  urlParam: {
                    feature: '8,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu8000/',
                },
                {
                  title: '9,000円〜',
                  urlParam: {
                    feature: '9,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu9000/',
                },
                {
                  title: '10,000円〜',
                  urlParam: {
                    feature: '10,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu10000/',
                },
                {
                  title: '11,000円〜',
                  urlParam: {
                    feature: '11,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu11000/',
                },
                {
                  title: '12,000円〜',
                  urlParam: {
                    feature: '12,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu12000/',
                },
                {
                  title: '13,000円〜',
                  urlParam: {
                    feature: '13,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu13000/',
                },
                {
                  title: '14,000円〜',
                  urlParam: {
                    feature: '14,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu14000/',
                },
                {
                  title: '15,000円〜',
                  urlParam: {
                    feature: '15,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu15000/',
                },
                {
                  title: '16,000円〜',
                  urlParam: {
                    feature: '16,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu16000/',
                },
                {
                  title: '17,000円〜',
                  urlParam: {
                    feature: '17,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu17000/',
                },
                {
                  title: '18,000円〜',
                  urlParam: {
                    feature: '18,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu18000/',
                },
                {
                  title: '19,000円〜',
                  urlParam: {
                    feature: '19,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu19000/',
                },
                {
                  title: '20,000円〜',
                  urlParam: {
                    feature: '20,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu20000/',
                },
                {
                  title: '21,000円〜',
                  urlParam: {
                    feature: '21,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu21000/',
                },
                {
                  title: '22,000円〜',
                  urlParam: {
                    feature: '22,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu22000/',
                },
                {
                  title: '23,000円〜',
                  urlParam: {
                    feature: '23,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu23000/',
                },
                {
                  title: '24,000円〜',
                  urlParam: {
                    feature: '24,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu24000/',
                },
                {
                  title: '25,000円〜',
                  urlParam: {
                    feature: '25,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu25000/',
                },
                {
                  title: '26,000円〜',
                  urlParam: {
                    feature: '26,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu26000/',
                },
                {
                  title: '27,000円〜',
                  urlParam: {
                    feature: '27,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu27000/',
                },
                {
                  title: '28,000円〜',
                  urlParam: {
                    feature: '28,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu28000/',
                },
                {
                  title: '29,000円〜',
                  urlParam: {
                    feature: '29,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu29000/',
                },
                {
                  title: '30,000円〜',
                  urlParam: {
                    feature: '30,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/nikkyu30000/',
                },
              ],
            },
            {
              title: '時給',
              urlParam: {},
              isNofollow: false,
              detailCategories: [
                {
                  title: '850円〜',
                  urlParam: {
                    feature: '850円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu850/',
                },
                {
                  title: '900円〜',
                  urlParam: {
                    feature: '900円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu900/',
                },
                {
                  title: '950円〜',
                  urlParam: {
                    feature: '950円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu950/',
                },
                {
                  title: '1,000円〜',
                  urlParam: {
                    feature: '1,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1000/',
                },
                {
                  title: '1,050円〜',
                  urlParam: {
                    feature: '1,050円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1050/',
                },
                {
                  title: '1,100円〜',
                  urlParam: {
                    feature: '1,100円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1100/',
                },
                {
                  title: '1,150円〜',
                  urlParam: {
                    feature: '1,150円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1150/',
                },
                {
                  title: '1,200円〜',
                  urlParam: {
                    feature: '1,200円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1200/',
                },
                {
                  title: '1,250円〜',
                  urlParam: {
                    feature: '1,250円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1250/',
                },
                {
                  title: '1,300円〜',
                  urlParam: {
                    feature: '1,300円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1300/',
                },
                {
                  title: '1,350円〜',
                  urlParam: {
                    feature: '1,350円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1350/',
                },
                {
                  title: '1,400円〜',
                  urlParam: {
                    feature: '1,400円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1400/',
                },
                {
                  title: '1,450円〜',
                  urlParam: {
                    feature: '1,450円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1450/',
                },
                {
                  title: '1,500円〜',
                  urlParam: {
                    feature: '1,500円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1500/',
                },
                {
                  title: '1,550円〜',
                  urlParam: {
                    feature: '1,550円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1550/',
                },
                {
                  title: '1,600円〜',
                  urlParam: {
                    feature: '1,600円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1600/',
                },
                {
                  title: '1,650円〜',
                  urlParam: {
                    feature: '1,650円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1650/',
                },
                {
                  title: '1,700円〜',
                  urlParam: {
                    feature: '1,700円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1700/',
                },
                {
                  title: '1,750円〜',
                  urlParam: {
                    feature: '1,750円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1750/',
                },
                {
                  title: '1,800円〜',
                  urlParam: {
                    feature: '1,800円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1800/',
                },
                {
                  title: '1,850円〜',
                  urlParam: {
                    feature: '1,850円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1850/',
                },
                {
                  title: '1,900円〜',
                  urlParam: {
                    feature: '1,900円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1900/',
                },
                {
                  title: '1,950円〜',
                  urlParam: {
                    feature: '1,950円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu1950/',
                },
                {
                  title: '2,000円〜',
                  urlParam: {
                    feature: '2,000円〜',
                  },
                  isNofollow: false,
                  search1Url: 'salary/jikyu2000/',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

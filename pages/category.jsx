import Layout from "../components/layoutParts/Layout";

const category = () => {
  const category = [
    {
      id: 1,
      name: "焼肉",
    },
    {
      id: 2,
      name: "寿司",
    },
    {
      id: 3,
      name: "和食",
    },
    {
      id: 4,
      name: "イタリアン",
    },
    {
      id: 5,
      name: "焼き鳥",
    },
    {
      id: 6,
      name: "中華",
    },
    {
      id: 7,
      name: "ラーメン",
    },
    {
      id: 1,
      name: "B級",
    },
    {
      id: 1,
      name: "韓国料理",
    },
    {
      id: 1,
      name: "フレンチ",
    },
    {
      id: 1,
      name: "エスニック",
    },
    {
      id: 1,
      name: "カレー",
    },
    {
      id: 1,
      name: "ハンバーガー",
    },
    {
      id: 1,
      name: "海鮮系",
    },
    {
      id: 1,
      name: "メキシカン",
    },
    {
      id: 1,
      name: "スペイン",
    },
    {
      id: 1,
      name: "ステーキ",
    },
    {
      id: 1,
      name: "アフリカ",
    },
    {
      id: 1,
      name: "ビーガン",
    },
    {
      id: 1,
      name: "肉料理",
    },
    {
      id: 1,
      name: "鍋",
    },
    {
      id: 1,
      name: "おでん",
    },
    {
      id: 1,
      name: "洋食",
    },
    {
      id: 1,
      name: "麺類",
    },
    {
      id: 1,
      name: "天ぷら",
    },
    {
      id: 1,
      name: "日本酒",
    },
    {
      id: 1,
      name: "ワイン",
    },
    {
      id: 1,
      name: "ピザ",
    },
    {
      id: 1,
      name: "カフェ",
    },
    {
      id: 1,
      name: "BAR",
    },
    {
      id: 1,
      name: "パン",
    },
    {
      id: 1,
      name: "スイーツ",
    },
    {
      id: 1,
      name: "その他",
    },
  ];

  return (
    <Layout title={"カテゴリー選択"}>
      <div className="p-3">
        <p className="text-center my-4 text-lg">
          お好きなジャンル　※最低3つ選択
        </p>
        <div className="text-center">
        {category.map((tag) => (
          <button
            style={{ border: "solid #f00a00 2px" }}
            className="bg-transparent hover:bg-red-500 text-lg font-bold hover:text-white py-1 px-5 hover:border-transparent rounded-lg "
            key={tag.id}
          >
            #{tag.name}
          </button>
        ))}
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          className="text-lg hover:bg-red-700 text-white font-bold py-2 px-10 rounded"
          style={{ background: "#f00a00" }}
        >
          登録
        </button>
      </div>
    </Layout>
  );
};

export default category;

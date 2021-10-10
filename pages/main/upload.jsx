import Layout from "../../components/layoutParts/Layout";

const upload = () => {
  return (
    <Layout title="メシラン投稿">
      <div className="flex items-center justify-between mt-2 px-3">
        <div
          className="w-20 h-20 text-center align-middle pt-5 text-white text-bold"
          style={{ background: "#f00a00" }}
        >
          写真を
          <br />
          アップ
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex items-center flex-col mt-4">
        <div
          className="mb-4 w-3/4 py-2"
          style={{ borderBottom: "solid #f00a00 1px" }}
        >
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="お店選択"
          />
        </div>
        <div
          className="mb-4 w-3/4 py-2"
          style={{ borderBottom: "solid #f00a00 1px" }}
        >
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="お店で食べた"
          />
        </div>
        <div className="mb-4 w-3/4">
          <textarea
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="6"
            style={{ border: "solid #f00a00 1px" }}
            placeholder="コメント(150字以内)"
          />
        </div>
        <div className="w-3/4 flex align-center">
          <p className="text-lg">評価：</p>
          <p className="ml-2 text-lg" style={{ color: "#f00a00" }}>
            また行きたい
          </p>
        </div>
        <div className="mb-4 w-3/4">
          <p className="text-yellow-600 text-5xl">★★★★☆</p>
        </div>
        <div className="mb-4 w-3/4">
          {/* <!-- Toggle --> */}
          <div className="flex w-full">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="toggleB" className="sr-only" />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">Facebook</div>
            </label>
          </div>
          <div className="flex w-full mt-2">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="toggleB" className="sr-only" />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">Twitter</div>
            </label>
          </div>
          <div className="flex w-full mt-5 justify-between">
            <button
              className="text-lg hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
              style={{ background: "#f00a00" }}
            >
              投稿する
            </button>
            <button
              className="text-lg hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
              style={{ background: "#f00a00" }}
            >
              下書き保存
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default upload;

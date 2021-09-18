import Layout from "../../components/layoutParts/Layout";
import Image from "next/image";
import icon from "../../public/img01.jpg";

const storeUpload = () => {
  return (
    <Layout title="お店選択">
      <div className="flex flex-col items-center justify-between mt-2 px-3">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
          type="text"
          placeholder="検索する"
        />
      </div>
      <div className="mt-2 text-yellow-500 text-lg text-bold border w-full text-center py-4">
        現在地　▼
      </div>
      <div className="flex text-bold border w-full h-full pt-1">
        <Image
          src={icon}
          alt=""
          className="object-cover justify-center z-0"
          width="100"
          height="100"
        />
        <div className="pl-3">
          <p className="pt-3">キッチン　Cat</p>
          <p className="pt-7">新宿　歌舞伎町　洋食</p>
        </div>
      </div>
      <div className="flex text-bold border w-full h-full pt-1">
        <Image
          src={icon}
          alt=""
          className="object-cover justify-center z-0"
          width="100"
          height="100"
        />
        <div className="pl-3">
          <p className="pt-3">キッチン　Cat</p>
          <p className="pt-7">新宿　歌舞伎町　洋食</p>
        </div>
      </div>
      <div className="flex text-bold border w-full h-full pt-1">
        <Image
          src={icon}
          alt=""
          className="object-cover justify-center z-0"
          width="100"
          height="100"
        />
        <div className="pl-3">
          <p className="pt-3">キッチン　Cat</p>
          <p className="pt-7">新宿　歌舞伎町　洋食</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <button className="text-lg bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded">
          新しくお店を追加する
        </button>
      </div>
    </Layout>
  );
};

export default storeUpload;

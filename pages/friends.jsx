import icon from "../public/img01.jpg";
import Image from "next/image";
import Layout from "../components/layoutParts/Layout";

export default function mainIndex() {
  return (
    <Layout title="飯トモ一覧">
      <div className="flex flex-wrap items-center justify-center p-4 bg-white ">
        <div className="flex flex-col items-center m-3">
          <Image
            src={icon}
            alt=""
            className="object-cover rounded-full flex items-center justify-center"
            width="80"
            height="80"
          />
          <p className="font-bold pt-2">ユーザー名</p>
        </div>
        <div className="flex flex-col items-center m-3">
          <Image
            src={icon}
            alt=""
            className="object-cover rounded-full flex items-center justify-center"
            width="80"
            height="80"
          />
          <p className="font-bold pt-2">ユーザー名</p>
        </div>
        <div className="flex flex-col items-center m-3">
          <Image
            src={icon}
            alt=""
            className="object-cover rounded-full flex items-center justify-center"
            width="80"
            height="80"
          />
          <p className="font-bold pt-2">ユーザー名</p>
        </div>
        <button
          type="submit"
          className="text-lg hover:bg-red-700 text-white font-bold py-2 px-16 rounded mt-10"
          style={{ background: "#f00a00" }}
        >
          他の飯トモを探す
        </button>
      </div>
    </Layout>
  );
}

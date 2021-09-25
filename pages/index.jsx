import Image from "next/image";
import Link from "next/link";
import Logo from "../public/meshiran_logo-03.png";
import { useState } from "react";
import Layout from "../components/layoutParts/Layout";

const index = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout title="飯ラン">
      <div className="p-5">
        <div className="text-center">
          <Image src={Logo} alt="logo" width="200" height="200" />
          <p className="text-center mb-5">メールアドレスでログイン</p>
        </div>
        <p className="mb-2">メールアドレス</p>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-6"
          placeholder="例）xxx@xxxco.jp"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="mb-2">パスワード</p>
        <input
          name="password"
          type="password"
          autoComplete="password"
          required
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
          placeholder=""
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="text-gray-400">5文字以上の英数字</p>
      </div>
      <div className="flex flex-col items-center justify-between mt-2 px-3">
        <button
          type="submit"
          className="text-lg hover:bg-red-700 text-white font-bold py-2 px-16 rounded"
          style={{ background: "#f00a00" }}
        >
          ログイン
        </button>
        <p className="text-center mt-6 mb-2">はじめてご利用の方</p>
        <Link href="/register">
          <button
            className="text-lg hover:bg-yellow-700 text-white font-bold py-2 px-9 rounded"
            style={{ background: "#ff8c00" }}
          >
            会員登録に進む
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default index;

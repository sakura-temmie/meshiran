import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layoutParts/Layout";
import Link from "next/link";

export default function Country() {
  const router = useRouter();
  const [countryName, setCountryName] = useState("");
  const [prefectures, setPrefectures] = useState("");
  const [area, setArea] = useState("");

  const createUserCountry = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}register`, {
        method: "POST",
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          role: "20",
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 400) {
          throw "新規登録が失敗しました";
        } else if (res.ok) {
          return res.json();
        }
      });
      router.push("/login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Layout title="新規登録">
      <div className="max-w-md w-full space-y-8 bg-white rounded p-10">
        <div className="flex flex-col items-center">
          <h2 className="mt-3 text-center text-3xl font-extrabold text-gray">
            新規登録
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={createUserCountry}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px">
            <div>
              <p>国</p>
              <input
                name="username"
                type="username"
                autoComplete="username"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="例）日本"
                value={countryName}
                onChange={(e) => {
                  setCountryName(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <p>都道府県</p>
              <input
                name="prefectures"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="例）東京都"
                value={prefectures}
                onChange={(e) => {
                  setPrefectures(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <p>エリア</p>
              <input
                name="area"
                type="text"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="例）中央区"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              />
            </div>
            <div className="text-center pt-8">
              <button
                type="submit"
                className="text-lg hover:bg-red-700 text-white font-bold py-2 px-16 rounded"
                style={{ background: "#f00a00" }}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                次へ
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

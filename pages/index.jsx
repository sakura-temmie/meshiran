import Image from "next/image";
import Link from "next/link";
import Logo from "../public/meshiran_logo-03.png";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/layoutParts/Layout";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://nobucom.sakura.ne.jp/meshiran/public/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 400) {
            throw "認証が失敗しました";
          } else if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          localStorage.setItem("access_token", JSON.stringify(data.token));
        });
      router.push("/main");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Layout title="メシラン">
      <form onSubmit={login}>
        <div className="p-5">
          <div className="text-center">
            <Image src={Logo} alt="logo" width="200" height="200" />
            <p className="text-center mb-5">メールアドレスでログイン</p>
          </div>
          <p className="mb-2">メールアドレス</p>
          <input
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm mb-6"
            placeholder="例）xxx@xxxco.jp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="mb-2">パスワード</p>
          <input
            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            value={password}
            type="password"
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
          <Link href="/register" passHref>
            <button
              className="text-lg hover:bg-yellow-700 text-white font-bold py-2 px-9 rounded"
              style={{ background: "#ff8c00" }}
            >
              会員登録に進む
            </button>
          </Link>
        </div>
      </form>
    </Layout>
  );
};

export default Index;

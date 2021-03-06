import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layoutParts/Layout";
import Logo from "../public/Portrait_Placeholder.png";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [u_country_id, setU_country_id] = useState("");
  const [u_prefecture_id, setU_prefecture_id] = useState("");
  const [u_district, setU_district] = useState("");
  const [profile_text, setProfile_text] = useState("");
  const [profile_image_url, setProfile_image_url] = useState("");
  const [truePassword, setTruePassword] = useState("");

  const regex =
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  const isTrueEmail = regex.test(email);
  const isTruePassword = password === truePassword;
  const isTrueRegister =
    isTrueEmail == true &&
    isTruePassword == true &&
    !(password == null || password == "");

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/register`, {
        method: "POST",
        body: JSON.stringify({
          name: username,
          birthday: birthday,
          sex: sex,
          email: email,
          password: password,
          u_country_id: u_country_id,
          u_prefecture_id: u_prefecture_id,
          u_district: u_district,
          profile_text: profile_text,
          // profile_image_url: profile_image_url,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          // if (res.status === 400) {
          //   throw "新規登録が失敗しました";
          // } else if (res.ok) {
            return res.json();
          // }
        })
        .then((data) => {
          console.log(data);
          router.push("/");
        });
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
          <p className="mt-2 text-center text-sm text-gray-600">
            アカウントをお持ちの場合は
            <Link href="/">
              <a className="font-medium text-red-400 hover:text-red-500">
                ログイン
              </a>
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={createUser}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="shadow-sm -space-y-px">
            {/* <div className="pt-4 text-center mb-4">
              <Image
                src={Logo}
                alt="Logo"
                width="200"
                height="200"
                objectFit="cover"
              />
              <p>プロフィール画像をアップロード</p>
            </div> */}
            <div>
              <p>名前</p>
              <input
                name="username"
                type="username"
                autoComplete="username"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="※本名での登録を推奨"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <p>生年月日</p>
              <input
                type="date"
                name="calendar"
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                max="3000-12-31"
                value={birthday}
                onChange={(e) => {setBirthday(e.target.value)}}
              />
            </div>
            <div className="pt-4">
              <p>性別</p>
              <div className="flex justify-between pr-20 pl-5">
                <select name="pref" value={sex} onChange={(e) => setSex(e.target.value)}>
                  <option value="0">選択してください</option>
                  <option value="1">男性</option>
                  <option value="2">女性</option>
                  <option value="3">その他</option>
                </select>
              </div>
            </div>
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
                  value={u_country_id}
                  onChange={(e) => {
                    setU_country_id(e.target.value);
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
                  value={u_prefecture_id}
                  onChange={(e) => {
                    setU_prefecture_id(e.target.value);
                  }}
                />
              </div>
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
                value={u_district}
                onChange={(e) => {
                  setU_district(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <p>メールアドレス</p>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="例）xxx@xxx.co.jp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <p>パスワード</p>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="パスワード"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <p>パスワード（確認）</p>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="パスワード（確認）"
                value={truePassword}
                onChange={(e) => {
                  setTruePassword(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <p>自己紹介</p>
              <textArea
                name="text"
                type="textArea"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="※150字以内"
                value={profile_text}
                onChange={(e) => {
                  setProfile_text(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="text-center pt-8">
            {isTrueRegister ? (
              <button
                type="submit"
                className="text-lg hover:bg-red-700 text-white font-bold py-2 px-16 rounded"
                style={{ background: "#f00a00" }}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                次へ
              </button>
            ) : (
              <div>
                <span className="text-xs pl-2 text-red-400">
                  入力されている情報が正しくありません
                </span>
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 cursor-not-allowed">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  次へ
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
}

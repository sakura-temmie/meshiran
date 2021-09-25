import movie from "../../public/kz3zu-jc3v1.mp4";
import icon from "../../public/img01.jpg";
import Image from "next/image";
import Layout from "../../components/layoutParts/Layout";

export default function mainIndex() {
  return (
    <Layout title="みんなの投稿">
      <div className="fullPageScroll">
        <section id="section1" className="section section1 relative">
          <div className="relative">
            <div className="flex items-center justify-between px-5 bg-white">
              <Image
                src={icon}
                alt=""
                className="object-cover rounded-full flex items-center justify-center"
                width="60"
                height="60"
              />
              <p className="font-bold">ユーザー名</p>
              <p
                className="text-white font-bold p-2 rounded"
                style={{ background: "#f00a00" }}
              >
                Lv.5
              </p>
              <button
                className="hover:bg-yellow-700 font-bold py-2 px-4 rounded "
                style={{ color: "#f00a00", border: "2px solid #f00a00" }}
              >
                フォローする
              </button>
            </div>
            <div className="absolute p-4 bg-gray-50 bg-opacity-80 w-full">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-auto "
                  style={{ color: "#f00a00" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-xs	">
                30いいね！　14いきたい！　3コメント
              </p>
              <p>評価：また行きたい</p>
              <p style={{ color: "#f00a00" }}>★★★★☆</p>
              <p className="w-full">
                とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。
              </p>
            </div>
            <video
              autoPlay
              width="414"
              height="620"
              muted
              loop
              src={require("../../public/kz3zu-jc3v1.mp4")}
            >
              {" "}
            </video>
          </div>
        </section>
        <section id="section1" className="section section1 relative">
          <div className="relative">
            <div className="flex items-center justify-between px-5 bg-white">
              <Image
                src={icon}
                alt=""
                className="object-cover rounded-full flex items-center justify-center"
                width="60"
                height="60"
              />
              <p className="font-bold">ユーザー名</p>
              <p
                className="text-white font-bold p-2 rounded"
                style={{ background: "#f00a00" }}
              >
                Lv.5
              </p>
              <button
                className="hover:bg-yellow-700 font-bold py-2 px-4 rounded "
                style={{ color: "#f00a00", border: "2px solid #f00a00" }}
              >
                フォローする
              </button>
            </div>
            <div className="absolute p-4 bg-gray-50 bg-opacity-80 w-full">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-auto "
                  style={{ color: "#f00a00" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-xs	">
                30いいね！　14いきたい！　3コメント
              </p>
              <p>評価：また行きたい</p>
              <p style={{ color: "#f00a00" }}>★★★★☆</p>
              <p className="w-full">
                とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。
              </p>
            </div>
            <video
              autoPlay
              width="414"
              height="620"
              muted
              loop
              src={require("../../public/kz3zu-jc3v1.mp4")}
            >
              {" "}
            </video>
          </div>
        </section>
        <section id="section1" className="section section1 relative">
          <div className="relative">
            <div className="flex items-center justify-between px-5 bg-white">
              <Image
                src={icon}
                alt=""
                className="object-cover rounded-full flex items-center justify-center"
                width="60"
                height="60"
              />
              <p className="font-bold">ユーザー名</p>
              <p
                className="text-white font-bold p-2 rounded"
                style={{ background: "#f00a00" }}
              >
                Lv.5
              </p>
              <button
                className="hover:bg-yellow-700 font-bold py-2 px-4 rounded "
                style={{ color: "#f00a00", border: "2px solid #f00a00" }}
              >
                フォローする
              </button>
            </div>
            <div className="absolute p-4 bg-gray-50 bg-opacity-80 w-full">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-auto "
                  style={{ color: "#f00a00" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-xs	">
                30いいね！　14いきたい！　3コメント
              </p>
              <p>評価：また行きたい</p>
              <p style={{ color: "#f00a00" }}>★★★★☆</p>
              <p className="w-full">
                とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。とてもおいしかったです。ご飯によく合います。
              </p>
            </div>
            <video
              autoPlay
              width="414"
              height="620"
              muted
              loop
              src={require("../../public/kz3zu-jc3v1.mp4")}
            >
              {" "}
            </video>
          </div>
        </section>
      </div>
    </Layout>
  );
}

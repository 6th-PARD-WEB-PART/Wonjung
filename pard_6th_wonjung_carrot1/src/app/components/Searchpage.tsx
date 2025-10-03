import type { FC } from "react";
import Image from "next/image";

const Searchpage: FC = () => {
  return (
    <div className="w-full max-w-[896px] mx-auto px-8 py-12 flex flex-col justify-center items-center mb-4">
      <div className="w-full max-w-[672px] flex flex-col justify-center items-center mb-6">
        <div className="mb-4">
          <div className="pr-2 flex justify-center items-center">
            <Image
              src="/point.png"
              alt="포인터 이미지"
              width={32}
              height={32}
              className="mr-2"
            />
            <div className="text-center justify-center text-gray-800 text-3xl font-bold leading-9">
              송도동에서 알바 찾고 계신가요?
            </div>
          </div>
        </div>

        {/* 동네 표시 */}
        <div className="flex justify-start items-start w-full">
          <div className="w-full max-w-[672px] flex justify-center items-center">
            <div className="pr-4 flex justify-start items-start">
              <button className="w-28 h-12 px-4 py-3 bg-gray-800 rounded-full flex justify-start items-center hover:bg-gray-700 transition cursor-pointer">
                <Image
                  src="/white-point.png"
                  alt="포인터 아이콘"
                  width={16}
                  height={16}
                  className="w-4 h-4 mr-2"
                />

                <span className="text-white text-base font-normal whitespace-nowrap">
                  송도동
                </span>
                <Image
                  src="/white-down.png"
                  alt="드롭다운 화살표"
                  width={12}
                  height={12}
                  className="w-3 h-3 ml-2"
                />
              </button>
            </div>

            {/* 검색 입력창 */}
            <div className="flex-grow h-12 relative inline-flex flex-col justify-start items-start">
              <div className="self-stretch inline-flex justify-center items-start">
                <div className="w-full h-12 px-4 py-3 relative bg-white rounded-lg outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center">
                  <input
                    type="text"
                    placeholder="물건이름을 입력해주세요"
                    className="w-full text-gray-400 text-base font-medium focus:outline-none"
                  />

                  <button className="w-8 h-10 p-2 absolute right-1 top-[4.50px] bg-orange-500 rounded-lg flex justify-center items-center hover:bg-orange-600 transition">
                    <Image
                      src="/search.png"
                      alt="검색 아이콘"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 인기 검색어 */}
        <div className="pt-6 flex justify-center items-start w-full">
          <div className="w-full px-4 flex justify-center items-start gap-2 flex-wrap content-start">
            <span className="text-gray-700 text-sm font-normal">
              인기 검색어:
            </span>
            {[
              "에어팟",
              "에어팟3",
              "노트북",
              "원룸",
              "현대 중고차",
              "아침일감",
              "급식당",
              "배달",
            ].map((keyword) => (
              <span
                key={keyword}
                className="text-orange-500 text-sm font-normal cursor-pointer hover:underline"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchpage;

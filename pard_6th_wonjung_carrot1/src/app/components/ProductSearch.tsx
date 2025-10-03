import type { FC } from "react";
import Image from "next/image";

const POPULAR = [
  "#에어팟",
  "#아이폰",
  "#삼성",
  "#냉장고",
  "#자전거",
  "#노트북",
  "#의자",
  "#책상",
];

const ProductSearch: FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 flex flex-col items-center">
      {/* 검색창 영역 */}
      <div className="w-full max-w-6xl mx-auto py-4 px-4 sm:px-6 flex flex-col items-center gap-4">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1000px] flex items-center">
            <div className="flex-1 relative mr-2">
              <input
                type="text"
                placeholder="물건 이름을 입력해주세요"
                className="w-full h-14 px-4 py-3 bg-white rounded-lg  outline-1 outline-gray-200 text-gray-700 text-base font-medium focus:outline-none"
              />
              <button className="w-10 h-10 p-2 absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 rounded-lg flex justify-center items-center hover:bg-orange-600 transition">
                <Image
                  src="/search.png"
                  alt="검색 아이콘"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </div>

            {/* 동네 설정 버튼 */}
            <div>
              <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
                <Image
                  src="/point.png"
                  alt="포인터 아이콘"
                  width={16}
                  height={16}
                />
                <span className="ml-2 text-gray-700 text-sm font-normal whitespace-nowrap">
                  송도동
                </span>
                <Image src="/down.png" alt="드롭다운" width={16} height={16} />
              </div>
            </div>
          </div>
        </div>

        {/* 인기 검색어 */}
        <div className="w-full flex justify-center pt-2">
          <div className="w-full max-w-[1000px] flex flex-wrap gap-2 overflow-hidden">
            {POPULAR.map((tag) => (
              <div
                key={tag}
                className="px-3 py-1.5 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 transition"
              >
                <div className="text-gray-700 text-sm font-normal leading-tight">
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;

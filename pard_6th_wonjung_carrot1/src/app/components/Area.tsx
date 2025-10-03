import type { FC } from "react";

const CATEGORIES = [
  "중고거래",
  "알바",
  "부동산",
  "중고차",
  "동네업체",
  "동네생활",
  "모임",
];

const CITY = [
  "송도동",
  "역삼동",
  "홍대동",
  "협실동",
  "배광동",
  "서교동",
  "우정동",
  "신림동",
  "광당동",
  "합정동",
  "회동동",
  "다선동",
  "미금동",
  "업구장동",
  "배곡동",
  "오정동",
];

const Area: FC = () => {
  const CateogryItem: FC<{ name: string }> = ({ name }) => (
    <div className="w-36 h-32 p-4 bg-white rounded-2xl flex flex-col justify-start imtes-center cursor-pointer hover:shadow-lg transition">
      <div className="pb-3 flex justify-center items-center">
        <div className="w-12 h-12 bg-orange-100 rounded-full flex justify-center items-center">
          <span className="text-xl text-orange-500"></span>
        </div>
      </div>

      {/* 카테고리 이름 */}
      <div className="text-center text-gray-700 text-sm font-medium leading-tight whitespace-nowrap">
        {name}
      </div>
    </div>
  );

  // 동네 이름 들어가는 칸
  const CityTag: FC<{ name: string }> = ({ name }) => (
    <div className="w-32 h-9 px-4 py-2 bg-white rounded-full flex justify-center items-center border border-gray-200 cursor-pointer hover:bg-gray-50 transition">
      <div className="text-center text-gray-700 text-sm font-normal leading-tight">
        {name}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 p-8 flex flex-col  items-center">
      {/*카테고리 */}
      <div className="pb-12 w-full flex justify-center">
        <div className="w-full flex justify-center items-center gap-4 flex-wrap">
          {CATEGORIES.map((category) => (
            <CateogryItem key={category} name={category} />
          ))}
        </div>
      </div>

      {/* 동네목록*/}
      <div className="w-full flex justify-start items-start">
        <div className="w-full flex justify-start items-start gap-3 flex-wrap">
          {CITY.map((city) => (
            <CityTag key={city} name={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Area;
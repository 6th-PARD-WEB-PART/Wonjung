import type { FC } from "react";
import Image from "next/image";

const PRODUCT_DATA = [
  {
    name: "아이폰 14 프로 128GB 퍼플 깨끗한 상태",
    price: "850,000원",
    location: "송도동",
    time: "몇초 전",
  },
];

const ProductCard: FC<(typeof PRODUCT_DATA)[0]> = ({
  name,
  price,
  location,
  time,
}) => (
  <div className="w-48 h-80 bg-white rounded-lg flex flex-col justify-start items-start gap-2 overflow-hidden">
    <div className="self-stretch h-44 bg-orange-100 rounded-tl-lg rounded-tr-lg"></div>

    {/* 정보 */}
    <div className="self-stretch px-2.5 flex flex-col justify-center items-start">
      <div className="w-40 h-12 text-gray-900 text-base font-medium leading-normal">
        {name}
      </div>
      <div className="text-gray-900 text-xl font-bold leading-7">{price}</div>
      <div className="text-gray-500 text-sm font-normal leading-tight">
        {location} • {time}
      </div>
    </div>

    {/* 하트랑 버튼 */}
    <div className="self-stretch p-2.5 flex justify-end items-center gap-2.5">
      <Image
        src="/heart.png"
        alt="하트"
        width={20}
        height={16}
        className="w-5 h-4 cursor-pointer"
      />

      <div className="w-14 h-7 px-3 py-1.5 bg-orange-500 rounded-lg flex justify-center items-center cursor-pointer hover:bg-orange-600 transition">
        <div className="justify-center text-white text-xs font-medium font-['Roboto'] leading-none whitespace-nowrap">
          자세히
        </div>
      </div>
    </div>
  </div>
);

const ProductDetail: FC = () => {
  const TOWNS = ["송도동", "송도1동", "송도2동", "연수동", "동춘동", "청학동"];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 flex justify-center items-start gap-6">
      {/* 왼쪽 */}
      <div className="w-64 p-4 bg-white rounded-lg flex flex-col gap-4 flex-shrink-0">
        <div className="self-stretch flex justify-between items-center">
          <div className="text-gray-900 text-base font-semibold">필터</div>
          <div className="text-orange-500 text-sm font-normal cursor-pointer">
            초기화
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4 border border-neutral-500 rounded text-blue-500 focus:ring-0"
          />
          <div className="pl-2 text-gray-700 text-sm font-normal">
            거래 가능만 보기
          </div>
        </div>


        <div className="text-gray-900 text-base font-semibold">위치</div>
        <div className="text-gray-600 text-sm font-normal mb-2">
          인천광역시 연수구
        </div>

        {/* 디오 버튼 */}
        <div className="w-full flex flex-col gap-2">
          {TOWNS.map((town, index) => (
            <div key={town} className="flex items-center">
              <input
                type="radio"
                name="location"
                className="w-4 h-4 border border-gray-500 text-blue-500 focus:ring-blue-500"
                defaultChecked={index === 0}
              />
              <div className="pl-2 text-gray-700 text-sm font-normal">
                {town}
              </div>
            </div>
          ))}
        </div>

        <div className="text-orange-500 text-sm font-normal pt-2 cursor-pointer">
          더보기
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="flex-1 flex flex-col justify-start items-start gap-3.5 overflow-hidden">
        <div className="text-gray-900 text-xl font-bold leading-7">
          전체 상품
        </div>
        <div className="self-stretch flex justify-start items-start gap-3.5 flex-wrap overflow-hidden">
          {PRODUCT_DATA.concat(PRODUCT_DATA, PRODUCT_DATA, PRODUCT_DATA).map(
            (product, index) => (
              <ProductCard key={index} {...product} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

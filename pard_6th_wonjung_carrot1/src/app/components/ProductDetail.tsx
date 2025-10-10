"use client"; // 서버가 아닌 client에서 사용하는 것을 알림?

import { useState, type FC } from "react";
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
}) => {
  // useState 사용 => 하트 변경
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 모달창 띄웠는지
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 조회수
  const [viewCount, setViewCount] = useState(20);

  // 채팅
  const [chatCount, setChatCount] = useState(5);

  // 이미지
  const [mainImage, setMainImage] = useState("/img_1.png");

  // 클릭 하면  바뀌도록
  const handleLike = () => {
    if (liked) {
      // 눌려 있으면 원래대로
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      // 빈 상태면 빨간 하트로, + 1
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  // 모달 열기 및 조회수 늘리기
  const openModal = () => {
    setIsModalOpen(true);
    setViewCount((prev) => prev+1);
  };

  // 채팅 수 증가시키기
  const handleChat = () => {
    setChatCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="w-48 h-80 bg-white rounded-lg flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="self-stretch h-44 bg-orange-100 rounded-tl-lg rounded-tr-lg"></div>

        {/* 정보 */}
        <div className="self-stretch px-2.5 flex flex-col justify-center items-start">
          <div className="w-40 h-12 text-gray-900 text-base font-medium leading-normal">
            {name}
          </div>
          <div className="text-gray-900 text-xl font-bold leading-7">
            {price}
          </div>
          <div className="text-gray-500 text-sm font-normal leading-tight">
            {location} • {time}
          </div>
        </div>

        {/* 하트랑 버튼 */}
        <div className="self-stretch p-2.5 flex justify-end items-center gap-2.5">
          <Image
            src={liked ? "/red_heart.png" : "/heart.png"}
            alt="하트"
            width={20}
            height={16}
            className="w-5 h-4 cursor-pointer"
            onClick={handleLike}
          />

          {/* 숫자 표시 */}
          <div className="justify-center text-gray-500 text-xs font-normal font-['Roboto'] leading-tight">
            {likeCount}
          </div>

          {/* 자세히 버튼 */}
          <div
            className="w-14 h-7 px-3 py-1.5 bg-orange-500 rounded-lg flex justify-center items-center cursor-pointer hover:bg-orange-600 transition"
            onClick={openModal}
          >
            <div className="justify-center text-white text-xs font-medium font-['Roboto'] leading-none whitespace-nowrap">
              자세히
            </div>
          </div>
        </div>
      </div>

      {/* 모달창 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-[300]"
          onClick={closeModal} // 바깥에 클릭하면 닫기
        >
          <div
            className="bg-white w-[896px] rounded-lg p-6 shadow-lg relative"
            onClick={(e) => e.stopPropagation()} // 버블링 막기
          >
            <div className="w-full h-16 px-4 py-4 border-b border-gray-200 inline-flex justify-between items-center">
              <div className=" h-7 flex justify-start items-center">
                <div className="text-gray-900 text-lg font-semibold  ">
                  상품 상세
                </div>
              </div>
              <div className="w-6 h-8 flex justify-center items-center cursor-pointer">
                <Image
                  src="/x.png"
                  alt="닫기 이미지"
                  width={20}
                  height={20}
                  className=" w-6 h-6"
                  onClick={closeModal}
                />
              </div>
            </div>

            {/* 본문 */}
            <div className="w-[896px] h-[540px] p-6 inline-flex justify-start items-start gap-6 flex-wrap content-start">
              {/* 왼쪽(이미지) */}
              <div className="w-96 h-[492px] inline-flex flex-col justify-start items-start">
                <div className="pb-4">
                  <Image
                    src={mainImage}
                    alt="상품 이미지"
                    width={384}
                    height={384}
                    className="w-96 h-96 rounded-lg"
                  />
                </div>

                {/* 아래 이미지들 */}
                <div className="w-96 h-16 flex items-center gap-2">
                  <div className={`w-16 h-16 p-0.5 rounded-lg cursor-pointer ${mainImage === "/img_1.png" ? "outline ouline-2 outline-orange-500" : "" }`}
                  onClick={() => setMainImage("/img_1.png")}
                  >
                    <Image
                      src="/img_1.png"
                      alt="작은 이미지1"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </div>
                  <div className={`w-16 h-16 p-0.5 rounded-lg cursor-pointer ${mainImage === "/img_2.jpg" ? "outline ouline-2 outline-orange-500" : ""}`}
                  onClick={() => setMainImage("/img_2.jpg")}
                  >
                    <Image
                      src="/img_2.jpg"
                      alt="작은 이미지2"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* 오른쪽: 상품 내용 등 상세 정보 */}
              <div className="w-96 h-[492px] inline-flex flex-col justify-start items-start">
                {/* 이름,가격, 위치, 시간 */}
                <div className="pb-6">
                  {/*이름 */}
                  <div className="pb-2">
                    <div className="text-gray-900 text-3xl font-bold">
                      너무 재미집니다
                    </div>
                  </div>

                  {/*가격 */}
                  <div className="pb-4">
                    <div className="text-gray-800 text-2xl font-bold">
                      22,222원
                    </div>
                  </div>

                  {/*위치 */}
                  <div className="pb-4 flex items-center text-gray-500 text-sm">
                    <span>송도동</span>
                    <span className="px-2">•</span>
                    <span>몇초 전</span>
                  </div>

                  {/* 정보(채팅, 관심, 조회) */}
                  <div className="pb-6 flex items-center text-gray-500 text-sm gap-6">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/chat.png"
                        alt="채팅"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span>채팅 {chatCount}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Image
                        src="/heart.png"
                        alt="관심"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span>관심 {likeCount}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Image
                        src="/eye.png"
                        alt="조회"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span>조회 {viewCount}</span>
                    </div>
                  </div>

                  {/* 설명 */}
                  <div className="pb-2 text-gray-700 text-base">
                    진짜 너무 재밌습니다. 매우. 입문용으로 좋아용
                  </div>
                </div>

                {/* 선 */}
                <div className="pt-5 pb-5 border-t border-gray-300 flex items-center gap-3 w-full">
                  {/* 판매자 정보 */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                    <Image
                      src="/man.png"
                      alt="사람 아이콘"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="flex flex-col justify-start">
                    <div className="text-gray-900 text-base font-medium">kksa</div>
                    <div className="text-gray-500 text-sm">왕십리도선동</div>
                  </div>
                  <div className="ml-auto text-green-600 text-sm font-medium">
                    39.4°C 😃
                  </div>
                </div>

                {/* 아래 버튼 */}
                <div className="w-full flex items-center gap-3">
                  {/*하트 */}
                  <div className="w-12 h-14 p-3 rounded-lg outline-1 outline-gray-300 flex justify-center items-center cursor-pointer"
                    onClick={handleLike}
                  >
                    <Image
                        src={liked ? "/red_heart.png" : "/heart_black.png"}
                        alt="하트"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                  </div>

                  {/* 채팅 버튼 */}
                  <button className="w-full h-14 bg-orange-500 text-white text-base font-medium rounded-lg hover:bg-orange-400 transition cursor-pointer"
                    onClick={handleChat}
                  >
                    당근 채팅하기
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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

"use client";
import type { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js 권장사항 => IMAGE 태그 쓰면 width, height 직접 설정

const Header: FC = () => {
  // 모바일 메뉴 열기용
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full py-2.5 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-14 px-4 sm:px-6">
        <div className="flex justify-start items-center h-10">
          <Link href="/">
            <Image
              src="/carrot.png"
              alt="당근마켓로고"
              className="max-w-16 cursor-pointer"
              width={64}
              height={40}
            />
          </Link>

          {/* 로고 옆 글자 */}
          <nav className="hidden sm:flex ml-8 space-x-6 text-gray-700 text-base font-medium">
            {[
              "중고거래",
              "부동산",
              "중고차",
              "알바",
              "동네업체",
              "동네생활",
              "모임",
            ].map((item) => (
              <Link
                href={item === "중고거래" ? `/detail` : `/${item}`}
                key={item}
                className="hover:text-orange-500 transition"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* 지역 정보, 글쓰기 버튼 묶음 */}
        <div className="flex justify-start items-center space-x-4">
          <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded transition">
            <Image
              src="/point.png"
              alt="위치아이콘"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="ml-2 text-gray-700 text-sm font-normal">
              송도동
            </span>
            <Image
              src="/down.png"
              alt="아래표시 아이콘"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </div>

          {/* 버튼 */}
          <button className="hidden sm:block px-4 py-2 bg-orange-500 rounded-lg text-center text-white text-base font-medium hover:bg-orange-600 transition">
            글쓰기
          </button>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block sm:hidden p-2 rounded transition"
          >
            <Image
              src="/hamburger.png"
              alt="메뉴 아이콘"
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>

      {/* 모바일 일 때 메뉴 버튼 */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center gap-6">
          {/* 닫기 버튼 (오른쪽 상단) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded transition"
          >
            <Image
              src="/hamburger2.png" // ✅ 닫기용 이미지 파일 경로
              alt="닫기 버튼"
              width={28}
              height={28}
              className="transition-transform duration-200"
            />
          </button>

          {/* 메뉴 목록 */}
          <nav className="flex flex-col items-start gap-6 text-gray-800 text-2xl font-medium pr-70">
            {[
              "중고거래",
              "부동산",
              "중고차",
              "알바",
              "동네업체",
              "동네생활",
              "모임",
            ].map((item) => (
              <Link
                key={item}
                href="/detail"
                onClick={() => setMenuOpen(false)}
                className="hover:text-orange-500 transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* 글쓰기 버튼 */}
          <button className="mt-10 px-10 py-3 bg-orange-500 rounded-lg text-white font-medium hover:bg-orange-600 transition">
            글쓰기
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

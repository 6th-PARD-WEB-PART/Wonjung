import { useState } from "react";

export default function Favorites() {
  // 훅?은 return 밖(함수 맨 위)에서 선언
  const [foodOpen, setFoodOpen] = useState(false);
  const [singerOpen, setSingerOpen] = useState(false);
  const [hobbyOpen, setHobbyOpen] = useState(false);

  return (
    <>
      {/* 왼쪽 사이드바 */}
      <div className="left-wrap">
        <aside className="sidebar">
          <div className="self-image">
            <img src="/wj.png" alt="profile image" className="circle-img" />
          </div>

          <div className="name-role">
            <h2>Kim, Wonjung</h2>
            <p>Handong Global University</p>
          </div>

          <hr />

          <div className="contact">
            <div className="contactWay">010-1234-1234</div>
            <div className="contactWay">example@naver.com</div>
            <div className="contactWay">
              <a
                href="https://github.com/wonjung0305"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </aside>
        {/* 본문*/}
        <main className="content">
          {/*상단 네비게이션*/}
          <header className="topnav">
            <b>Wonjung</b>
            <nav>
              <a href="/">Home</a>
              <a href="/about">ABOUT</a>
              <a href="/goals">GOALS</a>
              <a href="/favorites">FAVORITES</a>
            </nav>
          </header>

          <section className="section">
            <h3 className="section-title">Favorites</h3>

            {/* 좋아하는 음식*/}
            <div className="fav-grid">
              <div
                className="fav-card"
                onClick={() => setFoodOpen(true)}
                onMouseLeave={() => setFoodOpen(false)}
              >
                <div className="fav-imagewrap">
                  {foodOpen ? (
                    <img
                      src="/food.jpg"
                      alt="감자탕"
                      className="fav-image"
                    ></img>
                  ) : (
                    <img src="/question.jpg" alt="?" className="fav-image" />
                  )}
                </div>
                <p className="fav-desc">
                  {foodOpen ? "감자탕" : "가장 좋아하는 음식은?"}
                </p>
              </div>

              <div
                className="fav-card"
                onClick={() => setSingerOpen(true)}
                onMouseLeave={() => setSingerOpen(false)}
              >
                <div className="fav-imagewrap">
                  {singerOpen ? (
                    <img
                      src="/aimyong.jpg"
                      alt="아이묭"
                      className="fav-image"
                    ></img>
                  ) : (
                    <img src="/question.jpg" alt="?" className="fav-image" />
                  )}
                </div>
                <p className="fav-desc">
                  {singerOpen ? "아이묭" : "가장 좋아하는 가수는?"}
                </p>
              </div>

              {/* 취미 */}
              <div
                className="fav-card"
                onClick={() => setHobbyOpen(true)}
                onMouseLeave={() => setHobbyOpen(false)}
              >
                <div className="fav-imagewrap">
                  {hobbyOpen ? (
                    <img
                      src="/webtoon.jpg"
                      alt="웹툰"
                      className="fav-image"
                    ></img>
                  ) : (
                    <img src="/question.jpg" alt="?" className="fav-image" />
                  )}
                </div>
                <p className="fav-desc">{hobbyOpen ? "웹툰보기" : "취미는?"}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

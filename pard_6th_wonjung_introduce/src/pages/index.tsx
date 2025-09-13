import Link from "next/link";

export default function MainPage() {
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

          <section id="profile" className="section">
            <h3 className="section-title">Profile</h3>

            <div className="profile-row">
              <div className="profile-badge">
                <img
                  src="/onyou.png"
                  alt="온유의 세대"
                  className="circle-img"
                />
              </div>

              <div className="profile-text">
                <h4>안녕하세요</h4>
                <p>
                  현재 AI·컴퓨터 공학 심화를 전공하고 있는 22학번 김원중입니다.{" "}
                  <br />
                  이번 학기 PARD에서 멋진 프로젝트를 경험해보고 싶습니다.
                  감사합니다 :)
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="section">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              <ul className="timeline-list">
                <li className="timeline-item">
                  <div className="body">
                    <div className="title">
                      <b>2022/02 ~ 2022/12: </b> GLS
                    </div>
                    <p>
                      사회복지학개론, 발달심리학 등 상담심리 과목을 공부했습니다
                    </p>
                  </div>
                </li>

                <li className="timeline-item">
                  <div className="body">
                    <div className="title">
                      <b>2024/09 ~ 2024/12: </b> ICT창업학부
                    </div>
                    <p>
                      ICT 창업학부 소속으로 C Programming, 공학설계입문 등을
                      수강했습니다
                    </p>
                  </div>
                </li>

                <li className="timeline-item">
                  <div className="body">
                    <div className="title">
                      <b>2025/03 ~ : </b> AI·컴퓨터 공학 심화
                    </div>
                    <p>
                      전산전자공학부로 전공 변경 후 현재까지 개발자를 목표로
                      공부하고 있습니다
                    </p>
                  </div>
                </li>
              </ul>

              {/* 가운데 점선*/}
              <div className="divider" aria-hidden></div>

              {/*캠프*/}
              <div className="camp">
                <div className="title">
                  <b>Java Programming 기초</b>
                </div>
                <div className="title">
                  <b>PPS Camp</b>
                </div>
                <div className="title">
                  <b>Java Programming 기초</b>
                </div>
                <div className="title">
                  <b>실전 코딩 기초</b>
                </div>
              </div>
            </div>
          </section>

          {/* 동아리*/}
          <section id="club" className="section">
            <h3 className="section-title">Work Experience</h3>

            <ul className="club-list">
              <li className="club-item">
                <div className="body">
                  <div className="title">2024-2 ~ </div>
                  <b>SLE(슬기짜기)</b>
                  <p>2025년 1학기: 회계</p>
                </div>
              </li>

              <li className="club-item">
                <div className="body">
                  <div className="title">2025-1 ~ </div>
                  <b>SAMSON(삼손)</b>
                  <p>2025년 2학기: 회계</p>
                </div>
              </li>

              <li className="club-item">
                <div className="body">
                  <div className="title">2025-2 ~ </div>
                  <b>PARD(파드)</b>
                  <p>2025년 2학기: 웹 파트</p>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default function Goals() {
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
            <h3 className="section-title">This Semestal Goals</h3>
            {/* 학업 관련 */}
            <div className="goals-category">
              <h4>학업</h4>
              <div className="goal-progress">
                <span>
                  컴퓨터 구조 개념 확실히 잡기 <small>(10%)</small>
                </span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: "10%" }}></div>
              </div>
              <div className="goal-progress">
                <span>
                  시스템 프로그래밍 다음 학기 TA 목표 <small>(0%)</small>
                </span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: "0%" }}></div>
              </div>
              <div className="goal-progress">
                <span>
                  오픈소스 스튜디오 A+<small>(20%)</small>
                </span>
              </div>

              <div className="bar">
                <div className="fill" style={{ width: "20%" }}></div>
              </div>
            </div>

            {/*개발*/}
            <div className="goals-category">
              <h4>개발</h4>
              <div className="goal-progress">
                <span>
                  매일 잔디심기 <small>(90%)</small>
                </span>

                <div className="bar">
                  <div className="fill" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            {/*생활*/}
            <div className="goals-category">
              <h4>생활</h4>
              <div className="goal-progress">
                <span>
                  동기 새내기 마지막 <small>(94%)</small>
                </span>

                <div className="bar">
                  <div className="fill" style={{ width: "94%" }}></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

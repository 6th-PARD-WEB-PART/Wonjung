export default function About() {
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
            <b>About</b>
            <nav>
              <a href="/">Home</a>
              <a href="/about">ABOUT</a>
              <a href="/goals">GOALS</a>
              <a href="/favorites">FAVORITES</a>
            </nav>
          </header>

          {/* 사용 가능한 언어 */}
          <section className="section">
            <h3 className="section-title">Skills</h3>
            <ul className="skill-logos">
              <li><img src="/HTML.png" alt="HTML" /></li>
              <li><img src="/CSS3.png" alt="CSS" /></li>
              <li><img src="/C.png" alt="C" /></li>
              <li><img src="/C++.png" alt="C++" /></li>
              <li><img src="java.png" alt="java" /></li>
            </ul>
          </section>

          {/* 공동체/ 동아리*/}
          <section className="section">
            <h3 className="section-title">Communites</h3>

            <div className="about-grid">
              <div className="comm-card">
                <div className="logo-box">
                  <img src="/Palcone.png" alt="팔코네" className="comm-logo" />
                </div>

                <div className="comm-meta">
                  <div className="comm-title">Palcone</div>
                  <p className="comm-desc">2022.03 ~ : </p>
                </div>
              </div>

              <div className="comm-card">
                <div className="logo-box">
                  <img src="/SLE.png" alt="슬기짜기" className="comm-logo" />
                </div>

                <div className="comm-meta">
                  <div className="comm-title">slegizzagi</div>
                  <p className="comm-desc">2024-2 ~ :</p>
                </div>
              </div>

              <div className="comm-card">
                <div className="logo-box">
                  <img src="/SAMSON.png" alt="삼손" className="comm-logo" />
                </div>

                <div className="comm-meta">
                  <div className="comm-title">Samson</div>
                  <p className="comm-desc">2025-1 ~ : </p>
                </div>
              </div>

              <div className="comm-card">
                <div className="logo-box">
                  <img src="PARD.png" alt="파드" className="comm-logo" />
                </div>

                <div className="comm-meta">
                  <div className="comm-title">PARD</div>
                  <p className="comm-desc">2025-2 ~ :</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

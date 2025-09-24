// 2025.09.24(수) - 리팩토링한 페이지

// 유니온 타입 (타입 1)
// type 키워드로 별칭 만듦 (Category)
// 유니온(합집합): 여러 값 중 하나 선택
type Category = "학업" | "개발" | "생활";

// 객체 타입(인터페이스, 타입2)
// Goal 객체는 category, title, percent를 가지도록
interface Goal {
  category: Category;
  title: string;
  percent: number;
}

// 인터페이스 상속 (타입3)
// Goal을 확장 -> deadline 속성을 선택적으로 추가하도록
interface StudentGoal extends Goal {
  deadline?: string; // 마감일 없을 수도 있음
}

// 함수 타입(타입 4)
// (매개변수 타입) => 반환 타입 형태로 함수 모양을 타입으로 정의
// RenderLabel => Goal 타입을  매개변수로 받아서 string을 반환하는 함수
type RenderLabel = (g: Goal) => string;

// 함수 사용 (화살표 함수)
// RenderLabel을 따르는 renderLabel
const renderLabel: RenderLabel = (g) => `${g.title} (${g.percent}%)`;

// 데이터 (객체 선언)
// goals는 배열 (Goal 타입의 객체들로 이루어진)
// Goal[] 배열 안 요소들은 모두 Goal 인터페이스 구조를 따라야함
// category, title, percent가 있어야 함
const goals: Goal[] = [
  { category: "학업", title: "컴퓨터 구조 개념 확실히 잡기", percent: 10 },
  {
    category: "학업",
    title: "시스템 프로그래밍 다음 학기 TA 목표",
    percent: 0,
  },
  { category: "학업", title: "오픈소스 스튜디오 A+", percent: 20 },

  { category: "개발", title: "매일 잔디심기", percent: 90 },

  { category: "생활", title: "동기 새내기 마지막", percent: 94 },
];

// 제네릭 함수 사용
// T는 타입 변수로 함수 호출하면 자동으로 타입이 추론됨
function firstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}
// T가 Goal이 되거나 undefined로 반환
const firstGoal = firstItem(goals); // Goal이나 undefined

// 유틸리티 타입: Pick
// Pick<원본, "키1"|"키2"> 원본 타입에서 특정 키만 골라 새타입 생성
// Goal에서 title ,percent만 뽑아서 새 타입을 생성
// 아래의 previews는 그 새타입으로 만든 배열
type GoalPreview = Pick<Goal, "title" | "percent">;
const previews: GoalPreview[] = goals.map((g) => ({
  title: g.title,
  percent: g.percent,
}));

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

              {
                /*
                Category 유니온 타입으로 학업, 개발, 생활만 가능하도록
                
                */

                goals
                  .filter((g) => g.category === "학업")
                  .map((g) => (
                    <div key={g.title}>
                      <div className="goal-progress">
                        <span>{renderLabel(g)}</span>
                        <div className="bar">
                          <div
                            className="fill"
                            style={{ width: `${g.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))
              }
            </div>

            {/*개발*/}
            <div className="goals-category">
              <h4>개발</h4>
              {goals
                .filter((g) => g.category === "개발")
                .map((g) => (
                  <div key={g.title}>
                    <div className="goal-progress">
                      <span>{renderLabel(g)}</span>
                    </div>

                    <div className="bar">
                      <div
                        className="fill"
                        style={{ width: `${g.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>

            {/*생활*/}
            <div className="goals-category">
              <h4>생활</h4>
              {goals
                .filter((g) => g.category === "생활")
                .map((g) => (
                  <div key={g.title}>
                    <div className="goal-progress">
                      <span>{renderLabel(g)}</span>
                    </div>

                    <div className="bar">
                      <div
                        className="fill"
                        style={{ width: `${g.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

import { ArrowRight } from "./Icons";

const values = [
  {
    number: "01",
    title: "Integrated engineering",
    description:
      "IR/RF 통신부터 센서, 모션, I/O까지 장비 인터페이스에 필요한 기술을 하나의 흐름으로 설계합니다.",
  },
  {
    number: "02",
    title: "Verified reliability",
    description:
      "테스트베드와 현장 적용 경험을 바탕으로 공정이 요구하는 정밀도와 안정성을 반복해서 검증합니다.",
  },
  {
    number: "03",
    title: "Long-term partnership",
    description:
      "개발, 적용, 기술지원까지 고객의 장비 생애주기에 맞춰 지속적으로 대응하는 엔지니어링 파트너를 지향합니다.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="expertise-section" aria-labelledby="expertise-title">
      <div className="shell">
        <header className="editorial-intro">
          <div>
            <p className="section-eyebrow">WHY CANTOPS</p>
            <h2 id="expertise-title">
              기술의 깊이를 넘어,
              <br />현장의 결과까지 생각합니다.
            </h2>
          </div>
          <div className="editorial-intro__copy">
            <p>
              산업 자동화는 하나의 제품만으로 완성되지 않습니다. 캔탑스는 각 요소 기술을 유기적으로
              연결해 고객의 공정과 장비에 맞는 해답을 함께 설계합니다.
            </p>
            <a className="text-button" href="/company_intro/core-competencies/">
              핵심 역량 보기
              <ArrowRight />
            </a>
          </div>
        </header>

        <div className="company-stats" aria-label="캔탑스 주요 현황">
          <div>
            <strong>30+</strong>
            <span>Years of accumulated know-how</span>
          </div>
          <div>
            <strong>17</strong>
            <span>Product lines on the homepage</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Global partner regions</span>
          </div>
        </div>

        <div className="value-grid">
          {values.map((value) => (
            <article key={value.number}>
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import { news } from "../data/siteData";
import { ArrowRight, ChevronLeft, ChevronRight } from "./Icons";

export function NewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleNews = useMemo(
    () =>
      Array.from({ length: 3 }, (_, offset) => news[(activeIndex + offset) % news.length]),
    [activeIndex],
  );

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + news.length) % news.length);
  };

  return (
    <section id="news" className="news-section">
      <div className="shell section-content">
        <header className="news-header">
          <div>
            <p className="section-eyebrow">WHAT'S NEW</p>
            <h2>What's new at CanTops</h2>
            <p>전시회 참가와 새로운 제품 등 캔탑스의 최근 소식을 전합니다.</p>
          </div>
          <div className="news-header__actions">
            <a className="text-button" href="/exh/">
              모든 소식 보기
              <ArrowRight />
            </a>
            <div className="slider-toolbar">
              <p>
                <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
                <span>/ {String(news.length).padStart(2, "0")}</span>
              </p>
              <div>
                <button type="button" onClick={() => move(-1)} aria-label="이전 소식">
                  <ChevronLeft />
                </button>
                <button type="button" onClick={() => move(1)} aria-label="다음 소식">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="news-grid">
          {visibleNews.map((item, index) => (
            <article className="news-card" key={`${item.title}-${index}`}>
              <a href={item.href}>
                <div className="news-card__image">
                  <img src={item.image} alt={item.title} width="705" height="705" loading="lazy" decoding="async" />
                </div>
                <div className="news-card__content">
                  <span>NEWS / EXHIBITION</span>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <span className="card-link">
                    자세히 보기 <ArrowRight />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

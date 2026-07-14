import { useState } from "react";
import { ArrowRight, PlayIcon } from "./Icons";

export function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__gridlines" aria-hidden="true" />
      <div className="shell hero__content">
        <p className="hero__kicker">PRECISION AUTOMATION COMPONENTS</p>
        <h1 id="hero-title" lang="en">
          <span>Precision in motion.</span>
          <br />Built for smarter automation.
        </h1>
        <p className="hero__lead">
          30년 이상 축적한 기술과 노하우로 반도체·디스플레이 물류 제어의 핵심 부품을 설계하고,
          더 정밀하고 안정적인 자동화 현장을 만듭니다.
        </p>
        <div className="hero__actions">
          <a className="pill-button" href="#products">
            제품 솔루션 보기
            <ArrowRight />
          </a>
          <a className="text-button" href="/company_intro/">
            캔탑스 알아보기
            <ArrowRight />
          </a>
        </div>

        <div className="hero__media-frame">
          {playing ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/ZMZ6pSNuFG8?autoplay=1&rel=0"
              title="CanTops 기업 소개 영상"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="hero__media-trigger"
              type="button"
              aria-label="CanTops 기업 소개 영상 재생"
              onClick={() => setPlaying(true)}
            >
              <img
                src="/assets/hero-poster.jpg"
                alt="CanTops 산업 자동화 기술 소개"
                width="1280"
                height="720"
                fetchPriority="high"
              />
              <span className="hero__play">
                <PlayIcon />
                Play film
              </span>
            </button>
          )}
          <div className="hero__media-note">
            <span>EST. KNOW-HOW</span>
            <strong>30+ YEARS</strong>
          </div>
        </div>

        <ul className="hero__capabilities" aria-label="핵심 기술 분야">
          <li>IR / RF Communication</li>
          <li>Sensor &amp; Control</li>
          <li>Motion &amp; I/O</li>
          <li>Predictive IoT</li>
        </ul>
      </div>
    </section>
  );
}

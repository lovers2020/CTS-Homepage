import { useState } from "react";
import type { Video } from "../data/siteData";
import { videos } from "../data/siteData";
import { ArrowRight, PlayIcon } from "./Icons";

function VideoCard({ video, index }: { video: Video; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="video-card">
      <div className="video-card__media">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`${video.title} 재생`}>
            <img src={video.image} alt="" width="480" height="360" loading="lazy" decoding="async" />
            <span className="video-card__play">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <div className="video-card__content">
        <span>0{index + 1}</span>
        <h3>{video.title}</h3>
        <ArrowRight />
      </div>
    </article>
  );
}

export function VideoSection() {
  return (
    <section id="videos" className="video-section">
      <div className="shell section-content">
        <header className="editorial-intro editorial-intro--media">
          <div>
            <p className="section-eyebrow">TECHNOLOGY IN MOTION</p>
            <h2>
              기술을 설명하는 가장 확실한 방법은
              <br />직접 보여주는 것입니다.
            </h2>
          </div>
          <p className="editorial-intro__copy">
            주요 제품의 기능과 실제 테스트베드 적용 모습을 영상으로 확인하세요.
          </p>
        </header>
        <div className="video-grid">
          {[videos[2], videos[1], videos[0]].map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-cta">
        <div>
          <p className="section-eyebrow">LET'S SOLVE IT TOGETHER</p>
          <h2>
            다음 자동화 과제를
            <br />캔탑스와 함께 설계하세요.
          </h2>
        </div>
        <a className="pill-button" href="/about/">
          기술 문의하기
          <ArrowRight />
        </a>
      </div>
      <div className="shell footer-grid">
        <section className="footer-brand">
          <img src="/assets/logo.png" alt="CanTops" />
          <p>
            산업 자동화의 핵심 부품을 설계하고,
            <br />더 안정적인 현장을 만듭니다.
          </p>
        </section>

        <section>
          <h2>HEAD OFFICE</h2>
          <address>
            경기도 수원시 영통구 덕영대로 1556번길 16,
            <br />B동 1202~1205호, 1207~1208호
          </address>
          <dl>
            <div>
              <dt>구매 문의</dt>
              <dd>031-303-5238</dd>
            </div>
            <div>
              <dt>기술 문의</dt>
              <dd>031-303-5237</dd>
            </div>
            <div>
              <dt>이메일</dt>
              <dd>
                <a href="mailto:support@cantops.com">support@cantops.com</a>
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2>GLOBAL NETWORK</h2>
          <ul className="global-list">
            <li>
              <span>KOREA</span>
              Sebong Co., Ltd.
            </li>
            <li>
              <span>JAPAN</span>
              Sebong Corporation
            </li>
            <li>
              <span>CHINA</span>
              Sun-tech Electronics / Wisecen Technology
            </li>
            <li>
              <span>USA</span>
              TD7VII INC
            </li>
            <li>
              <span>TAIWAN</span>
              HongYuan Solution Co.
            </li>
            <li>
              <span>VIETNAM</span>
              SEBONG VINA Co., Ltd.
            </li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <div className="shell">
          <p>Copyright 2022. CanTops Co., Ltd. All rights reserved.</p>
          <a href="/privacy-policy/">개인정보처리방침</a>
        </div>
      </div>
    </footer>
  );
}

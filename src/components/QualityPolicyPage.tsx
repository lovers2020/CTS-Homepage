import { ArrowRight } from "./Icons";

const paidServiceReasons = [
  "고객의 관리 또는 취급 부주의로 제품이 손상된 경우",
  "고객사로부터 인증되지 않은 외부 협력사가 설치한 경우",
  "제품을 본래 기능과 다른 목적으로 사용한 경우",
  "캔탑스가 권장한 환경 조건을 벗어나 제품을 보관한 경우",
  "화재, 가스 피해, 지진 등 천재지변으로 고장이 발생한 경우",
  "사용 전원의 이상 또는 접속 기기의 불량으로 고장이 발생한 경우",
  "캔탑스의 사전 동의 없이 임의 수리, 부품 교체·제거 또는 개조하여 장애가 발생한 경우",
];

export function QualityPolicyPage() {
  return (
    <main id="main-content" className="route-main quality-page" data-page-path="/quality-policy/">
      <section id="top" className="route-hero quality-hero">
        <div className="route-hero__grid" aria-hidden="true" />
        <div className="shell route-hero__inner">
          <p className="section-eyebrow">QUALITY &amp; WARRANTY</p>
          <h1>품질보증 정책</h1>
          <p>신뢰할 수 있는 제품과 명확한 사후지원 기준으로 고객의 안정적인 운영을 지원합니다.</p>
        </div>
      </section>

      <section className="route-section quality-overview">
        <div className="shell">
          <div className="quality-overview__copy">
            <p className="section-eyebrow">OUR COMMITMENT</p>
            <h2>설계부터 사후지원까지,<br />품질을 하나의 기준으로 관리합니다.</h2>
            <blockquote>“무결점 제품 및 서비스를 고객에게 제공”</blockquote>
            <p>
              캔탑스는 고객 요구사항과 관련 기준을 충실히 반영하고, 제품의 설계·생산·검사·출하·사후지원
              전 과정에서 지속적인 개선을 통해 신뢰할 수 있는 제품과 서비스를 제공합니다.
            </p>
          </div>
          <div className="quality-principles">
            <article><span>01</span><h3>Customer First</h3><p>고객의 사용 환경과 요구사항을 품질 활동의 출발점으로 삼습니다.</p></article>
            <article><span>02</span><h3>Reliability</h3><p>현장 운영에서 안정적으로 동작하는 제품 신뢰성을 최우선으로 합니다.</p></article>
            <article><span>03</span><h3>Continuous Improvement</h3><p>품질 데이터와 고객 피드백을 제품과 프로세스 개선에 반영합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="quality-policy-section quality-reliability">
        <div className="shell">
          <header className="quality-section-heading">
            <div><p className="section-eyebrow">RELIABILITY VALIDATION</p><h2>출시 전 필수 검증으로<br />장기 신뢰성을 확보합니다.</h2></div>
            <p>캔탑스는 무결점 품질이라는 목표를 실현하기 위해 자체 신뢰성 시험실을 운영하며, 개발하는 모든 모델을 전문 인력이 전담 평가합니다.</p>
          </header>
          <div className="quality-validation-grid">
            <article className="quality-validation-lab">
              <span>FOUR-STAGE VALIDATION</span>
              <strong>개발품 3단계<br />양산품 1단계</strong>
              <p>자체 신뢰성 시험실과 전문 인력을 중심으로 총 4단계의 필수 검증을 수행합니다.</p>
              <div className="quality-validation-mark" aria-hidden="true"><i /><i /><i /></div>
            </article>
            <div className="quality-validation-process">
              <div className="quality-validation-steps">
                <article><span>01</span><div><div className="quality-validation-meta"><small>개발품</small><b>캔탑스</b></div><h3>환경 시험 12종</h3><p>열 충격, 고온·저온 동작 한계 등 다양한 환경 조건에서 제품의 안정성을 검증합니다.</p></div></article>
                <article><span>02</span><div><div className="quality-validation-meta"><small>개발품</small><b>외부기관</b></div><h3>진동·충격 및 EMC 시험</h3><p>고객사 평가 기준을 적용하여 기계적 내구성과 전자파 적합성을 전문 기관에서 평가합니다.</p></div></article>
                <article><span>03</span><div><div className="quality-validation-meta"><small>개발품</small><b>고객사 · 캔탑스</b></div><h3>HALT 가혹 평가</h3><p>고객사와 연계하여 제품의 한계와 잠재적 취약점을 조기에 확인합니다.</p></div></article>
                <article><span>04</span><div><div className="quality-validation-meta"><small>양산품</small><b>캔탑스</b></div><h3>Abnormal Test</h3><p>일부 시험 진행과 실제 사용자 환경을 고려한 비정상 조건 시험으로 양산 신뢰성을 점검합니다.</p></div></article>
              </div>
              <aside className="quality-validation-fail">
                <strong>FAIL</strong><p>시험 중 부적합이 확인되면 원인을 재검토하고 개발 설계에 반영한 뒤 다시 검증합니다.</p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-policy-section quality-warranty">
        <div className="shell">
          <header className="quality-section-heading">
            <div><p className="section-eyebrow">WARRANTY AT A GLANCE</p><h2>품질보증 기준</h2></div>
            <p>캔탑스는 아래 품질보증 정책에 따라 제품의 수리 또는 교환 서비스를 제공합니다.</p>
          </header>
          <div className="quality-summary-grid">
            <article><span>PERIOD</span><strong>2년</strong><p>제품 가동일로부터</p></article>
            <article><span>COVERAGE</span><strong>전 제품</strong><p>캔탑스 전 제품 적용</p></article>
            <article><span>EXTENSION</span><strong>최대 2년</strong><p>신규 구매 시 유상 연장 가능</p></article>
          </div>
          <div className="quality-exclusion">
            <strong>적용 예외</strong>
            <p>악세사리류 및 소모성 부품, 제품에 표기 또는 부착된 라벨(시리얼 번호)이 없는 경우</p>
          </div>
        </div>
      </section>

      <section className="quality-policy-section quality-service">
        <div className="shell">
          <header className="quality-section-heading">
            <div><p className="section-eyebrow">AFTER-SALES SERVICE</p><h2>제품 A/S</h2></div>
            <p>A/S는 품질보증기간과 고장 원인에 따라 무상 또는 유상으로 구분합니다.</p>
          </header>
          <div className="quality-service-grid">
            <article className="quality-service-card quality-service-card--free">
              <span>WARRANTY ACTIVE</span><h3>품질보증기간 이내</h3><strong>무상 A/S</strong>
              <p>정상적인 사용 환경에서 발생한 제품 품질 문제는 무상 수리 또는 교환을 원칙으로 합니다.</p>
            </article>
            <article className="quality-service-card">
              <span>WARRANTY EXPIRED</span><h3>품질보증기간 이후</h3><strong>유상 A/S</strong>
              <p>제품 상태 확인 후 처리 방법과 비용을 고객과 협의하여 진행합니다.</p>
            </article>
          </div>
          <div className="quality-paid-reasons">
            <div className="quality-paid-reasons__intro">
              <span>PAID SERVICE CONDITIONS</span>
              <h3>보증기간 이내라도 다음 사유는 유상 처리를 원칙으로 합니다.</h3>
            </div>
            <ol>
              {paidServiceReasons.map((reason, index) => (
                <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span><p>{reason}</p></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="quality-policy-section quality-customer-care">
        <div className="shell">
          <header className="quality-section-heading">
            <div><p className="section-eyebrow">CUSTOMER CARE &amp; VOC</p><h2>접수부터 개선까지,<br />고객의 목소리에 답합니다.</h2></div>
            <p>품질경영팀과 기술지원팀이 고객 불만을 신속하게 처리하고, 분석 결과를 제품과 서비스 개선에 반영합니다.</p>
          </header>

          <div className="quality-care-stats">
            <article><span>RESPONSE</span><strong>72시간</strong><p>고객 불만 1차 회신 및 대응 목표</p></article>
            <article><span>ORGANIZATION</span><strong>14명+</strong><p>품질경영 4명·기술지원 10명과 제품 담당 엔지니어</p></article>
            <article><span>EMERGENCY</span><strong>365일</strong><p>비상 연락망 상시 운영 체계</p></article>
            <article><span>SATISFACTION</span><strong>99점</strong><p>2023–2025년 고객 만족도 평균</p></article>
          </div>

          <div className="quality-care-layout">
            <article className="quality-cs-card">
              <div className="quality-care-card-heading"><span>C/S ORGANIZATION</span><h3>전담 조직이 빠르게 연결됩니다.</h3></div>
              <div className="quality-cs-route">
                <article><span>01</span><strong>접수</strong><p>A/S 양식 접수</p></article>
                <article><span>02</span><strong>처리</strong><p>고객 불만 해소</p></article>
                <article><span>03</span><strong>회신</strong><p>분석 자료 송부</p></article>
              </div>
              <div className="quality-cs-team">
                <div><span>QUALITY MANAGEMENT</span><strong>품질경영팀</strong></div>
                <div><span>TECHNICAL SUPPORT</span><strong>기술지원팀</strong></div>
              </div>
              <ul>
                <li>불만 접수 및 고객 상담</li>
                <li>전문 인력의 고객 불만 처리</li>
                <li>A/S 처리 계획 수립 및 제품 개선</li>
              </ul>
            </article>

            <article className="quality-voc-card">
              <div className="quality-care-card-heading"><span>VOC &amp; A/S PROCESS</span><h3>고객 VOC 접수·대응 프로세스</h3></div>
              <div className="quality-voc-survey">
                <div><strong>연 1회</strong><span>고객 만족도 정기 조사</span></div>
                <p>고객의 요구와 개선사항을 제품 및 서비스에 지속적으로 반영합니다.</p>
              </div>
              <ol className="quality-voc-flow">
                <li><span>01</span><p>VOC 및 A/S 접수</p></li>
                <li><span>02</span><p>제품 실물 확인</p></li>
                <li><span>03</span><p>A/S 처리</p></li>
                <li><span>04</span><p>불량 원인 분석</p></li>
                <li><span>05</span><p>시정·개선 조치</p></li>
                <li><span>06</span><p>처리 결과 확인</p></li>
                <li><span>07</span><p>유효성 검증·완료 보고</p></li>
                <li><span>08</span><p>이력 및 기록 관리</p></li>
              </ol>
              <div className="quality-voc-output"><span>OUTPUT</span><p>고객 불만 접수 · A/S 관리대장 · 수리 내역서 · ECO 및 시정조치 요구서</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="quality-policy-section quality-scope">
        <div className="shell">
          <header className="quality-section-heading">
            <div><p className="section-eyebrow">SERVICE SCOPE</p><h2>A/S 범위와 비용 부담</h2></div>
            <p>A/S는 제품의 수리 또는 교환을 의미하며, 설치 현장에서의 제품 교체 서비스는 별도로 제공하지 않습니다.</p>
          </header>
          <div className="quality-table-wrap">
            <table>
              <thead><tr><th scope="col">구분</th><th scope="col">무상 A/S</th><th scope="col">유상 A/S</th></tr></thead>
              <tbody>
                <tr><th scope="row">제품 수리·교환 비용</th><td>캔탑스 부담</td><td>고객사 부담</td></tr>
                <tr><th scope="row">현장 제품 교체 작업</th><td>고객사 수행</td><td>고객사 수행</td></tr>
                <tr><th scope="row">제품 운송비</th><td>고객사 부담</td><td>고객사 부담</td></tr>
                <tr><th scope="row">처리 방식</th><td>보증 조건 확인 후 진행</td><td>처리 방법과 비용 협의 후 진행</td></tr>
              </tbody>
            </table>
          </div>
          <p className="quality-table-note">※ 운송비 청구 기준은 국내와 해외에 동일하게 적용됩니다.</p>
        </div>
      </section>

      <section className="quality-policy-section quality-extension">
        <div className="shell">
          <header className="quality-section-heading">
            <div><p className="section-eyebrow">EXTENDED WARRANTY</p><h2>보증 기간 연장</h2></div>
            <p>신규 제품 구매 시 추가 비용으로 제품 보호 기간을 연장할 수 있습니다.</p>
          </header>
          <div className="quality-extension-grid">
            <article><span>01</span><h3>신규 구매 시 신청</h3><p>제품 신규 구매 단계에서 보증 연장 서비스를 함께 신청할 수 있습니다.</p></article>
            <article><span>02</span><h3>최대 2년 연장</h3><p>기본 품질보증기간 이후 최대 2년까지 추가로 연장할 수 있습니다.</p></article>
            <article><span>03</span><h3>동일한 서비스 범위</h3><p>기본 품질보증과 동일한 기준으로 무상 수리 또는 교환을 제공합니다.</p></article>
          </div>
        </div>
      </section>

      <section className="depth-page-cta">
        <div className="shell">
          <div><p className="section-eyebrow">SERVICE REQUEST</p><h2>제품 A/S와 보증 연장을 문의하세요.</h2></div>
          <div>
            <a className="pill-button" href="mailto:support@cantops.com">이메일 문의 <ArrowRight /></a>
            <a className="text-button" href="/about/">제품 문의 안내 <ArrowRight /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

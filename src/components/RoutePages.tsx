import { navigation, news, products, type NewsItem, type Product } from "../data/siteData";
import { pageContentByPath, type ContentSection } from "../data/pageContent";
import { productContentByName } from "../data/productContent";
import { ArrowRight } from "./Icons";

const normalizePath = (path: string) => {
  const clean = path.split("?")[0].split("#")[0];
  return clean === "/" ? clean : `${clean.replace(/\/+$/, "")}/`;
};

const categoryRoutes = [
  { path: "/product-menu/", label: "전체 제품" },
  { path: "/product-menu/pio/", label: "PIO Solution" },
  { path: "/product-menu/rfid/", label: "RFID Reader / N₂" },
  { path: "/product-menu/motion-io/", label: "Motion & I/O" },
  { path: "/product-menu/amhs/", label: "AMHS Solution" },
  { path: "/product-menu/iot/", label: "IoT Solution" },
  { path: "/product-menu/others/", label: "Others" },
];

const navRoutes = navigation.flatMap((group) =>
  (group.children ?? []).map((child) => ({
    group: group.label,
    title: child.label,
    path: normalizePath(child.href),
  })),
);

function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section id="top" className="route-hero">
      <div className="route-hero__grid" aria-hidden="true" />
      <div className="shell route-hero__inner">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}

function RouteTabs({ activePath }: { activePath: string }) {
  return (
    <nav className="route-tabs" aria-label="제품 카테고리">
      <div className="shell">
        {categoryRoutes.map((category) => (
          <a
            className={normalizePath(activePath) === category.path ? "is-active" : ""}
            href={category.path}
            key={category.path}
          >
            {category.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function matchesCategory(product: Product, path: string) {
  switch (normalizePath(path)) {
    case "/product-menu/pio/":
      return product.category === "PIO Solution";
    case "/product-menu/rfid/":
      return product.category.startsWith("RFID Reader");
    case "/product-menu/motion-io/":
      return product.category === "Motion & I/O";
    case "/product-menu/amhs/":
      return ["Guide Sensor", "FOUP Sensor"].includes(product.name);
    case "/product-menu/iot/":
      return product.category === "IoT Solution";
    case "/product-menu/others/":
      return product.category === "Others" && !["Guide Sensor", "FOUP Sensor"].includes(product.name);
    default:
      return true;
  }
}

export function ProductCatalogPage({ pathname }: { pathname: string }) {
  const activeCategory = categoryRoutes.find((item) => item.path === normalizePath(pathname)) ?? categoryRoutes[0];
  const visibleProducts = products.filter((product) => matchesCategory(product, activeCategory.path));

  return (
    <main id="main-content" className="route-main">
      <PageHero
        eyebrow="PRODUCT PORTFOLIO"
        title={activeCategory.label}
        lead="현장의 신뢰성과 확장성을 높이는 캔탑스의 자동화 부품과 제어 솔루션을 확인하세요."
      />
      <RouteTabs activePath={activeCategory.path} />
      <section className="route-section product-catalog">
        <div className="shell">
          <div className="route-section__header">
            <div>
              <p className="section-eyebrow">SOLUTIONS & PRODUCTS</p>
              <h2>{activeCategory.label}</h2>
            </div>
            <p>{visibleProducts.length}개의 제품</p>
          </div>
          <div className="catalog-grid">
            {visibleProducts.map((product) => (
              <article className="catalog-card" key={product.href}>
                <a href={product.href}>
                  <div className="catalog-card__image">
                    <img src={product.image} alt={product.name} width="705" height="705" />
                  </div>
                  <div className="catalog-card__content">
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                    <span>
                      자세히 보기 <ArrowRight />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
          {visibleProducts.length === 0 && (
            <div className="route-empty">해당 카테고리의 제품 정보를 준비하고 있습니다.</div>
          )}
        </div>
      </section>
    </main>
  );
}

const categoryPathFor = (product: Product) => {
  if (product.category === "PIO Solution") return "/product-menu/pio/";
  if (product.category.startsWith("RFID Reader")) return "/product-menu/rfid/";
  if (product.category === "Motion & I/O") return "/product-menu/motion-io/";
  if (product.category === "IoT Solution") return "/product-menu/iot/";
  if (["Guide Sensor", "FOUP Sensor"].includes(product.name)) return "/product-menu/amhs/";
  return "/product-menu/others/";
};

export function ProductDetailPage({ product }: { product: Product }) {
  const detail = productContentByName[product.name];

  return (
    <main id="main-content" className="route-main">
      <PageHero
        eyebrow={product.category}
        title={product.name}
        lead={detail?.summary ?? "정밀 물류 자동화 환경을 위해 설계된 캔탑스의 현장 검증형 솔루션입니다."}
      />
      <section className="route-section product-detail">
        <div className="shell product-detail__grid">
          <div className="product-detail__image">
            <img src={product.image} alt={product.name} width="705" height="705" />
          </div>
          <div className="product-detail__content">
            <p className="section-eyebrow">PRODUCT OVERVIEW</p>
            <h2>{product.name}</h2>
            <p>{detail?.summary}</p>
            <dl>
              <div><dt>Category</dt><dd>{product.category}</dd></div>
              {(detail?.specs ?? []).map((spec) => (
                <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>
              ))}
            </dl>
            <div className="product-detail__actions">
              <a className="pill-button" href="/about/">제품 문의 <ArrowRight /></a>
              <a className="text-button" href={categoryPathFor(product)}>목록으로 <ArrowRight /></a>
            </div>
          </div>
        </div>
      </section>
      {detail && (
        <section className="depth-section product-feature-section">
          <div className="shell">
            <header className="depth-section__header">
              <div>
                <p className="section-eyebrow">FEATURES & APPLICATIONS</p>
                <h2>제품 특징과 적용 분야</h2>
              </div>
              <p>제품의 핵심 기능과 대표적인 적용 시나리오를 확인하세요.</p>
            </header>
            <div className="depth-items">
              <article className="depth-item">
                <div className="depth-item__content">
                  <span>FEATURES</span>
                  <h3>핵심 특징</h3>
                  <ul>{detail.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </div>
              </article>
              <article className="depth-item">
                <div className="depth-item__content">
                  <span>APPLICATIONS</span>
                  <h3>적용 분야</h3>
                  <ul>{detail.applications.map((application) => <li key={application}>{application}</li>)}</ul>
                </div>
              </article>
              <article className="depth-item">
                <div className="depth-item__content">
                  <span>SUPPORT</span>
                  <h3>적용 검토 지원</h3>
                  <p>통신 규격, 배선, 호환 모델과 설치 조건은 기술팀이 프로젝트별로 검토합니다.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export function NewsArchivePage() {
  return (
    <main id="main-content" className="route-main">
      <PageHero
        eyebrow="CANTOPS NEWSROOM"
        title="캔탑스 소식"
        lead="전시회 참가와 기술 활동, 캔탑스의 새로운 소식을 전합니다."
      />
      <section className="route-section">
        <div className="shell">
          <div className="news-archive-grid">
            {news.map((item) => (
              <article className="news-archive-card" key={item.href}>
                <a href={item.href}>
                  <div className="news-archive-card__image">
                    <img src={item.image} alt="" width="705" height="520" loading="lazy" />
                  </div>
                  <div>
                    <time>{item.date}</time>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                    <span>소식 보기 <ArrowRight /></span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function NewsDetailPage({ item }: { item: NewsItem }) {
  return (
    <main id="main-content" className="route-main">
      <PageHero eyebrow="NEWS & EVENT" title={item.title} lead={item.summary} />
      <article className="route-section news-detail">
        <div className="shell news-detail__inner">
          <time>{item.date}</time>
          <img src={item.image} alt={item.title} width="1200" height="760" />
          <div className="news-detail__copy">
            <p>
              캔탑스의 기술과 솔루션을 소개하는 현장 소식입니다. 행사와 제품에 대한 자세한 내용은 기술 문의를 통해
              안내받으실 수 있습니다.
            </p>
            <a className="text-button" href="/exh/">목록으로 <ArrowRight /></a>
          </div>
        </div>
      </article>
    </main>
  );
}

const getPageCopy = (path: string, group: string) => {
  if (path.startsWith("/company_intro/")) return {
    eyebrow: "ABOUT CANTOPS",
    lead: "축적된 자동화 기술과 현장 경험으로 고객의 생산 환경을 더 정밀하고 안정적으로 만듭니다.",
    intro: "기술의 깊이와 실행력을 함께 갖춘 자동화 전문 기업",
    highlights: ["30년 이상 축적한 현장 경험", "설계부터 검증까지 이어지는 기술 체계", "글로벌 고객 대응 네트워크"],
  };
  if (["/company_tech/", "/company_eq/", "/patent-certificate/"].includes(path)) return {
    eyebrow: "TECHNOLOGY & FACILITIES",
    lead: "정밀 제어 기술과 검증 인프라를 기반으로 신뢰할 수 있는 자동화 솔루션을 제공합니다.",
    intro: "아이디어를 현장 성능으로 완성하는 기술 기반",
    highlights: ["무선·유선 정밀 통신 기술", "모션 및 디지털 I/O 제어", "제품 신뢰성 검증 설비"],
  };
  if (path.startsWith("/about/")) return {
    eyebrow: "CUSTOMER SUPPORT",
    lead: "제품 선정부터 적용 검토, 기술 지원까지 필요한 답을 빠르게 연결합니다.",
    intro: "현장 과제를 이해하는 기술 지원",
    highlights: ["제품 및 견적 상담", "적용 환경 기술 검토", "support@cantops.com"],
  };
  if (["/job/", "/wb/"].includes(path)) return {
    eyebrow: "CAREERS",
    lead: "자동화 기술의 다음 기준을 함께 만들 동료를 기다립니다.",
    intro: "집중하고 성장할 수 있는 캔탑스의 일하는 환경",
    highlights: ["기술 중심의 협업 문화", "직무 성장을 위한 지원", "안정적인 복리후생"],
  };
  if (path.startsWith("/contact")) return {
    eyebrow: "GLOBAL NETWORK",
    lead: "가까운 캔탑스 및 글로벌 파트너 네트워크를 통해 상담을 시작하세요.",
    intro: "현장과 가까운 글로벌 기술 네트워크",
    highlights: ["Korea · Suwon", "Asia · Japan · China · Taiwan · Vietnam", "USA technical partner"],
  };
  if (path.includes("gallery")) return {
    eyebrow: "CANTOPS GALLERY",
    lead: "아이디어가 제품으로 완성되는 캔탑스의 업무 공간과 테스트 환경을 소개합니다.",
    intro: "설계와 시험이 연결되는 개발 환경",
    highlights: ["R&D workspace", "OHT testbed", "Product verification"],
  };
  if (["/eng/", "/chn/", "/jap/"].includes(path)) return {
    eyebrow: "GLOBAL CANTOPS",
    lead: "The localized CanTops website is being prepared. Product and technical support is available now.",
    intro: "Precision components for smart automation",
    highlights: ["Product portfolio", "Technical capabilities", "Global support network"],
  };
  if (path === "/privacy-policy/") return {
    eyebrow: "PRIVACY POLICY",
    lead: "캔탑스는 고객의 개인정보를 안전하게 보호하고 관련 법령을 준수합니다.",
    intro: "개인정보 처리 원칙",
    highlights: ["필요한 범위 내에서 정보 수집", "안전한 보관과 접근 관리", "목적 달성 후 지체 없이 파기"],
  };
  return {
    eyebrow: group || "CANTOPS",
    lead: "해당 페이지의 정보를 확인하세요.",
    intro: "캔탑스의 기술과 서비스를 소개합니다.",
    highlights: ["Precision", "Reliability", "Connectivity"],
  };
};

export function LegacyContentPage({ pathname }: { pathname: string }) {
  const path = normalizePath(pathname);
  const route = navRoutes.find((item) => item.path === path);
  const languageTitles: Record<string, string> = {
    "/eng/": "English",
    "/chn/": "中文",
    "/jap/": "日本語",
    "/privacy-policy/": "개인정보처리방침",
  };
  const title = route?.title ?? languageTitles[path] ?? "페이지를 찾을 수 없습니다";
  const copy = getPageCopy(path, route?.group ?? "");
  const isMissing = !route && !languageTitles[path];

  return (
    <main id="main-content" className="route-main">
      <PageHero eyebrow={isMissing ? "404" : copy.eyebrow} title={title} lead={copy.lead} />
      <section className="route-section route-information">
        <div className="shell">
          <div className="route-information__intro">
            <p className="section-eyebrow">{route?.group ?? "CANTOPS"}</p>
            <h2>{isMissing ? "요청하신 주소를 다시 확인해 주세요." : copy.intro}</h2>
            <p>
              {isMissing
                ? "메인 화면이나 제품 포트폴리오에서 필요한 정보를 다시 찾아보실 수 있습니다."
                : "고객의 현장 조건을 세심하게 이해하고, 실제 운영에서 신뢰할 수 있는 결과로 연결합니다."}
            </p>
          </div>
          {!isMissing && (
            <div className="route-card-grid">
              {copy.highlights.map((highlight, index) => (
                <article className="route-info-card" key={highlight}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{highlight}</h3>
                </article>
              ))}
            </div>
          )}
          <div className="route-information__actions">
            <a className="pill-button" href={isMissing ? "/" : "/about/"}>
              {isMissing ? "메인으로" : "기술 문의"} <ArrowRight />
            </a>
            {!isMissing && <a className="text-button" href="/product-menu/">제품 보기 <ArrowRight /></a>}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContentSectionView({ section, index }: { section: ContentSection; index: number }) {
  const variant = section.variant ?? "cards";

  return (
    <section className={`depth-section depth-section--${variant}`}>
      <div className="shell">
        <header className="depth-section__header">
          <div>
            <p className="section-eyebrow">{section.eyebrow ?? `SECTION ${String(index + 1).padStart(2, "0")}`}</p>
            <h2>{section.title}</h2>
          </div>
          {section.body && <p>{section.body}</p>}
        </header>

        {variant === "faq" ? (
          <div className="depth-faq">
            {section.items.map((item, itemIndex) => (
              <details key={item.title} open={itemIndex === 0}>
                <summary>
                  <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                  {item.title}
                </summary>
                <p>{item.description}</p>
              </details>
            ))}
          </div>
        ) : (
          <div className={`depth-items depth-items--${variant}`}>
            {section.items.map((item, itemIndex) => (
              <article className="depth-item" key={`${item.title}-${itemIndex}`}>
                {item.image && (
                  <div className="depth-item__image">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={variant === "documents" ? 826 : 705}
                      height={variant === "documents" ? 1168 : 520}
                      loading={variant === "documents" ? "eager" : "lazy"}
                    />
                  </div>
                )}
                <div className="depth-item__content">
                  <span>{item.meta ?? String(itemIndex + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  {item.bullets && (
                    <ul>
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function ContentPage({ pathname }: { pathname: string }) {
  const path = normalizePath(pathname);
  const content = pageContentByPath[path];

  if (!content) {
    return (
      <main id="main-content" className="route-main" data-page-path={path}>
        <PageHero eyebrow="404" title="페이지를 찾을 수 없습니다" lead="요청하신 주소를 다시 확인해 주세요." />
        <section className="route-section route-information">
          <div className="shell route-information__intro">
            <h2>필요한 페이지를 다시 찾아보세요.</h2>
            <p>메인 화면이나 제품 포트폴리오에서 원하는 정보를 확인할 수 있습니다.</p>
            <a className="pill-button" href="/">메인으로 <ArrowRight /></a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content" className="route-main" data-page-path={path}>
      <PageHero eyebrow={content.eyebrow} title={content.title} lead={content.heroLead} />
      <section className="route-section route-information depth-intro">
        <div className="shell">
          <div className="route-information__intro">
            <p className="section-eyebrow">PAGE OVERVIEW</p>
            <h2>{content.introTitle}</h2>
            <p>{content.introBody}</p>
          </div>
          {content.stats && (
            <div className="depth-stats">
              {content.stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {content.sections.map((section, index) => (
        <ContentSectionView section={section} index={index} key={`${section.title}-${index}`} />
      ))}

      <section className="depth-page-cta">
        <div className="shell">
          <div>
            <p className="section-eyebrow">NEXT STEP</p>
            <h2>필요한 정보를 더 확인해 보세요.</h2>
          </div>
          <div>
            <a className="pill-button" href={content.primaryAction?.href ?? "/about/"}>
              {content.primaryAction?.label ?? "기술 문의"} <ArrowRight />
            </a>
            <a className="text-button" href={content.secondaryAction?.href ?? "/product-menu/"}>
              {content.secondaryAction?.label ?? "제품 보기"} <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const findProductByPath = (pathname: string) =>
  products.find((product) => normalizePath(product.href) === normalizePath(pathname));

export const findNewsByPath = (pathname: string) =>
  news.find((item) => normalizePath(item.href) === normalizePath(pathname));

export const isProductCategoryPath = (pathname: string) =>
  categoryRoutes.some((category) => category.path === normalizePath(pathname));

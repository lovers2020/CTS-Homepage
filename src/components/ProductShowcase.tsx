import { useMemo, useState } from "react";
import { products } from "../data/siteData";
import { ArrowRight, ChevronLeft, ChevronRight } from "./Icons";

const solutionGroups = [
    {
        number: "01",
        title: "PIO Solutions",
        description: "E84/E23 기반의 정밀하고 안정적인 무선 인터페이스 솔루션",
        image: "/assets/product-hybrid-pio.jpg",
        href: "/product-menu/pio/",
        productNames: ["Hybrid PIO", "Serial PIO", "IR PIO", "Hoist PIO"],
    },
    {
        number: "02",
        title: "RFID Reader / N₂",
        description:
            "물류 환경의 식별 정확도와 공정 안전성을 높이는 리더 솔루션",
        image: "/assets/product-hm12.jpg",
        href: "/product-menu/rfid/",
        productNames: ["HM12", "LC Series", "LM Series"],
    },
    {
        number: "03",
        title: "Motion & I/O",
        description:
            "장비와 시스템을 유연하게 연결하는 모션·디지털 제어 플랫폼",
        image: "/assets/product-ethernet-motion.jpg",
        href: "/product-menu/motion-io/",
        productNames: [
            "Hand Interface Board",
            "Ethernet Motion 제어 보드",
            "USB DIO 제어 보드",
        ],
    },
    {
        number: "04",
        title: "AMHS, Sensor & IoT",
        description:
            "현장 데이터를 감지하고 연결해 예지보전까지 확장하는 솔루션",
        image: "/assets/product-vibration.png",
        href: "/product-menu/iot/",
        productNames: [
            "PIM IoT",
            "진동기울기 센서",
            "Guide Sensor",
            "FOUP Sensor",
        ],
    },
];

export function ProductShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const visibleProducts = useMemo(
        () =>
            Array.from(
                { length: 3 },
                (_, offset) =>
                    products[(activeIndex + offset) % products.length],
            ),
        [activeIndex],
    );

    const move = (direction: number) => {
        setActiveIndex(
            (index) => (index + direction + products.length) % products.length,
        );
    };

    return (
        <section id="products" className="products-section">
            <div className="shell section-content">
                <header className="portfolio-statement">
                    <p className="section-eyebrow">WHAT WE DO</p>
                    <h2>
                        물류자동화의 핵심을 연결하는
                        <br />
                        <span>정밀 기술과 확장 가능한 솔루션</span>
                    </h2>
                </header>

                <div className="portfolio-layout">
                    <aside className="portfolio-intro">
                        <p className="section-eyebrow">OUR PORTFOLIO</p>
                        <h3>제품이 아니라 공정의 해답을 설계합니다.</h3>
                        <p>
                            통신, 센서, 제어, IoT를 하나의 흐름으로 연결해
                            반도체·디스플레이 물류 현장의 정확도와 안정성을
                            높입니다.
                        </p>
                        <a
                            className="text-button text-button--light"
                            href="/product-menu/"
                        >
                            전체 포트폴리오
                            <ArrowRight />
                        </a>
                    </aside>

                    <div className="solution-grid">
                        {solutionGroups.map((solution) => (
                            <article
                                className="solution-card"
                                key={solution.number}
                            >
                                <div className="solution-card__panel">
                                    <p>{solution.number} / 04</p>
                                    <h3>{solution.title}</h3>
                                    <span>{solution.description}</span>
                                    <ul>
                                        {solution.productNames.map((name) => {
                                            const product = products.find(
                                                (item) => item.name === name,
                                            );
                                            return (
                                                <li key={name}>
                                                    <a
                                                        href={
                                                            product?.href ??
                                                            solution.href
                                                        }
                                                    >
                                                        {name}
                                                        <ArrowRight />
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <a
                                    className="solution-card__image"
                                    href={solution.href}
                                    aria-label={`${solution.title} 보기`}
                                >
                                    <img
                                        src={solution.image}
                                        alt=""
                                        width="705"
                                        height="705"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span>
                                        Explore
                                        <ArrowRight />
                                    </span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="featured-products">
                    <div className="featured-products__header">
                        <div>
                            <p className="section-eyebrow">FEATURED PRODUCTS</p>
                            <h3>현장에서 검증된 대표 제품</h3>
                        </div>
                        <div className="slider-toolbar slider-toolbar--light">
                            <p>
                                <strong>
                                    {String(activeIndex + 1).padStart(2, "0")}
                                </strong>
                                <span>
                                    / {String(products.length).padStart(2, "0")}
                                </span>
                            </p>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => move(-1)}
                                    aria-label="이전 제품"
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => move(1)}
                                    aria-label="다음 제품"
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="product-grid">
                        {visibleProducts.map((product, index) => (
                            <article
                                className="product-card"
                                key={`${product.name}-${index}`}
                            >
                                <a
                                    href={product.href}
                                    aria-label={`${product.name} 자세히 보기`}
                                >
                                    <div className="product-card__image">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            width="705"
                                            height="705"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <span className="product-card__number">
                                            {String(
                                                ((activeIndex + index) %
                                                    products.length) +
                                                    1,
                                            ).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="product-card__content">
                                        <p>{product.category}</p>
                                        <h3>{product.name}</h3>
                                        <span className="card-link">
                                            자세히 보기 <ArrowRight />
                                        </span>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

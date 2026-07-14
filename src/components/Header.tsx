import { useEffect, useRef, useState } from "react";
import { languages, navigation } from "../data/siteData";
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon } from "./Icons";

const desktopNavigation = [
    navigation[1],
    navigation[2],
    navigation[0],
    navigation[3],
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const mobileNavRef = useRef<HTMLElement>(null);

    const closeMenu = (restoreFocus = false) => {
        setMenuOpen(false);
        if (restoreFocus) {
            window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        }
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 48);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("menu-is-open", menuOpen);
        return () => document.body.classList.remove("menu-is-open");
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        closeButtonRef.current?.focus();
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeMenu(true);
            if (event.key === "Tab") {
                const focusable = Array.from(
                    mobileNavRef.current?.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                    ) ?? [],
                );
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [menuOpen]);

    return (
        <>
            <a className="skip-link" href="#main-content">
                본문 바로가기
            </a>
            <header
                className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${menuOpen ? "site-header--menu-open" : ""}`}
            >
                <div className="utility-bar">
                    <div className="shell utility-bar__inner">
                        <p className="utility-tagline">
                            PRECISION COMPONENTS FOR SMART AUTOMATION
                        </p>
                        <div className="utility-actions">
                            <a href="/exh/">Newsroom</a>
                            <a
                                className="support-email"
                                href="mailto:support@cantops.com"
                            >
                                support@cantops.com
                            </a>
                            <div
                                className="language-list"
                                aria-label="언어 선택"
                            >
                                {languages.map((language) => (
                                    <a
                                        key={language.label}
                                        href={language.href}
                                    >
                                        {language.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shell primary-nav">
                    <a className="brand" href="/" aria-label="CanTops 홈으로">
                        <img src="/assets/logo.png" alt="CanTops" />
                    </a>

                    <nav className="desktop-nav" aria-label="주요 메뉴">
                        <ul>
                            {desktopNavigation.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={
                                            item.href ??
                                            item.children?.[0]?.href ??
                                            "#"
                                        }
                                    >
                                        {item.label}
                                        {item.children && <ChevronDown />}
                                    </a>
                                    {item.children && (
                                        <div className="nav-dropdown">
                                            <p>{item.label}</p>
                                            <ul className="nav-dropdown__links">
                                                {item.children.map((child) => (
                                                    <li key={child.label}>
                                                        <a href={child.href}>
                                                            {child.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="nav-actions">
                        <a className="header-contact" href="/about/">
                            기술 문의
                            <ArrowRight />
                        </a>
                        <button
                            ref={menuButtonRef}
                            className="menu-toggle"
                            type="button"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
                            onClick={() =>
                                menuOpen ? closeMenu(true) : setMenuOpen(true)
                            }
                        >
                            {menuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <nav
                        ref={mobileNavRef}
                        id="mobile-navigation"
                        className="mobile-nav mobile-nav--open"
                        aria-label="모바일 메뉴"
                    >
                        <div className="mobile-nav__top">
                            <a
                                href="/"
                                aria-label="CanTops 홈으로"
                                onClick={() => closeMenu()}
                            >
                                <img src="/assets/logo.png" alt="CanTops" />
                            </a>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                aria-label="메뉴 닫기"
                                onClick={() => closeMenu(true)}
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="mobile-nav__body">
                            {navigation.map((item) => (
                                <section key={item.label}>
                                    <a
                                        className="mobile-nav__title"
                                        href={
                                            item.href ??
                                            item.children?.[0]?.href ??
                                            "#"
                                        }
                                        onClick={() => closeMenu()}
                                    >
                                        {item.label}
                                    </a>
                                    {item.children && (
                                        <div className="mobile-nav__links">
                                            {item.children.map((child) => (
                                                <a
                                                    key={child.label}
                                                    href={child.href}
                                                    onClick={() => closeMenu()}
                                                >
                                                    {child.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                        <div className="mobile-nav__footer">
                            {languages.map((language) => (
                                <a key={language.label} href={language.href}>
                                    {language.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
}

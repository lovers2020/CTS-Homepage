export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export type Product = {
  name: string;
  category: string;
  image: string;
  href: string;
};

export type Video = {
  title: string;
  id: string;
  image: string;
};

export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  image: string;
  href: string;
};

export const languages = [
  { label: "KOR", href: "/" },
  { label: "ENG", href: "/eng/" },
  { label: "CHN", href: "/chn/" },
  { label: "JAP", href: "/jap/" },
];

export const navigation: NavItem[] = [
  {
    label: "회사소개",
    children: [
      { label: "CEO 인사말", href: "/company_intro/" },
      { label: "사업분야", href: "/company_intro/company-business/" },
      { label: "핵심역량", href: "/company_intro/core-competencies/" },
      { label: "조직도", href: "/company_intro/ochart/" },
      { label: "회사연혁", href: "/company_intro/company_history/" },
      { label: "인증정보", href: "/company_intro/ac/" },
      { label: "캔탑스 소식", href: "/exh/" },
    ],
  },
  {
    label: "제품소개",
    href: "/product-menu/",
    children: [
      { label: "PIO Solution", href: "/product-menu/pio/" },
      { label: "RFID Reader / N₂", href: "/product-menu/rfid/" },
      { label: "Motion & I/O", href: "/product-menu/motion-io/" },
      { label: "AMHS Solution", href: "/product-menu/amhs/" },
      { label: "IoT Solution", href: "/product-menu/iot/" },
      { label: "Others", href: "/product-menu/others/" },
    ],
  },
  {
    label: "보유기술 및 장비",
    children: [
      { label: "보유 기술", href: "/company_tech/" },
      { label: "보유 장비", href: "/company_eq/" },
      { label: "특허 정보", href: "/patent-certificate/" },
    ],
  },
  {
    label: "고객지원",
    children: [
      { label: "제품문의", href: "/about/" },
      { label: "품질보증", href: "/quality-policy/" },
      { label: "FAQ", href: "/about/faq/" },
    ],
  },
  {
    label: "인재채용",
    children: [
      { label: "채용공고", href: "/job/" },
      { label: "복리후생", href: "/wb/" },
    ],
  },
  {
    label: "Contact Us",
    children: [
      { label: "HEAD OFFICE", href: "/contact/" },
      { label: "KOREA", href: "/contact_korea/" },
      { label: "CHINA", href: "/contact_china/" },
      { label: "USA", href: "/contact_usa/" },
      { label: "JAPAN", href: "/contact_japan/" },
      { label: "Taiwan R.O.C.", href: "/contact_taiwan-roc/" },
      { label: "VIETNAM", href: "/contact_vietnam/" },
    ],
  },
  {
    label: "Gallery",
    children: [
      { label: "사무실 전경", href: "/office-gallery/" },
      { label: "Testbed", href: "/testbed-gallery/" },
    ],
  },
];

export const products: Product[] = [
  {
    name: "HM12",
    category: "RFID Reader / N₂",
    image: "/assets/product-hm12.jpg",
    href: "/product-menu/rfid-reader-hm12/",
  },
  {
    name: "LC Series",
    category: "RFID Reader / N₂",
    image: "/assets/product-lc-series.jpg",
    href: "/product-menu/rfid-reader-lc-series",
  },
  {
    name: "LM Series",
    category: "RFID Reader / N₂",
    image: "/assets/product-lm-series.jpg",
    href: "/product-menu/rifd-reader-lm-series",
  },
  {
    name: "진동기울기 센서",
    category: "IoT Solution",
    image: "/assets/product-vibration.png",
    href: "/product-menu/vibration-and-inclination-sensor/",
  },
  {
    name: "PIM IoT",
    category: "IoT Solution",
    image: "/assets/product-pim-iot.jpg",
    href: "/product-menu/iot-station-pim/",
  },
  {
    name: "Hand Interface Board",
    category: "Motion & I/O",
    image: "/assets/product-hand-interface.jpg",
    href: "/product-menu/hand-interface-board/",
  },
  {
    name: "USB DIO 제어 보드",
    category: "Motion & I/O",
    image: "/assets/product-usb-dio.jpg",
    href: "/product-menu/usb-dio-control-board/",
  },
  {
    name: "Ethernet Motion 제어 보드",
    category: "Motion & I/O",
    image: "/assets/product-ethernet-motion.jpg",
    href: "/product-menu/ethernet-motion-control-board/",
  },
  {
    name: "Ethernet DIO 제어 보드",
    category: "Motion & I/O",
    image: "/assets/product-ethernet-dio.jpg",
    href: "/product-menu/ethernet-dio-control-board/",
  },
  {
    name: "Camera Trigger",
    category: "Others",
    image: "/assets/product-camera-trigger.jpg",
    href: "/camera-trigger/",
  },
  {
    name: "Guide Sensor",
    category: "Others",
    image: "/assets/product-guide-sensor.png",
    href: "/product-menu/guide-sensor/",
  },
  {
    name: "FOUP Sensor",
    category: "Others",
    image: "/assets/product-foup-sensor.jpg",
    href: "/product-menu/foup-sensor/",
  },
  {
    name: "Serial PIO",
    category: "PIO Solution",
    image: "/assets/product-serial-pio.jpg",
    href: "/product-menu/serial-pio",
  },
  {
    name: "PNP Converter",
    category: "PIO Solution",
    image: "/assets/product-pnp-converter.jpg",
    href: "/product-menu/pnp-converter",
  },
  {
    name: "Hoist PIO",
    category: "PIO Solution",
    image: "/assets/product-hoist-pio.jpg",
    href: "/product-menu/pcom/",
  },
  {
    name: "IR PIO",
    category: "PIO Solution",
    image: "/assets/product-ir-pio.png",
    href: "/product-menu/e84-sensor-irpio",
  },
  {
    name: "Hybrid PIO",
    category: "PIO Solution",
    image: "/assets/product-hybrid-pio.jpg",
    href: "/h-pio-e84sensor/",
  },
];

export const videos: Video[] = [
  {
    title: "Main Product of CanTops",
    id: "wWJMLTEIB6Y",
    image: "/assets/video-main.jpg",
  },
  {
    title: "World 1st Hybrid PIO",
    id: "WcjVrsyqH3o",
    image: "/assets/video-hybrid.jpg",
  },
  {
    title: "CanTops OHT Testbed",
    id: "xwSPGJm3U98",
    image: "/assets/video-testbed.jpg",
  },
];

export const news: NewsItem[] = [
  {
    title: "2026 SEMICON Southeast Asia",
    date: "2026년 4월 10일",
    summary: "2026.05.05 ~ 2026.05.07",
    image: "/assets/news-sea.png",
    href: "/blog/2026/04/10/2026-semicon-southeast-asia/",
  },
  {
    title: "2026 SEMICON CHINA",
    date: "2026년 3월 16일",
    summary: "2026.03.25 ~ 2026.03.27",
    image: "/assets/news-china.png",
    href: "/blog/2026/03/16/2026-semicon-china/",
  },
  {
    title: "2026 Automation World",
    date: "2026년 2월 26일",
    summary: "2026.03.04 ~ 2026.03.06",
    image: "/assets/news-automation.png",
    href: "/blog/2026/02/26/2026-automation-world/",
  },
  {
    title: "2026 SEMICON KOREA",
    date: "2026년 2월 14일",
    summary: "2026.02.11 ~ 2026.02.13",
    image: "/assets/news-korea.png",
    href: "/blog/2026/02/14/2026-semicon-korea/",
  },
  {
    title: "2025 SEMICON JAPAN",
    date: "2025년 12월 20일",
    summary: "2025.12.17 ~ 2025.12.19",
    image: "/assets/news-japan.png",
    href: "/blog/2025/12/20/2025-semicon-japan/",
  },
  {
    title: "2025 SEMICON EUROPA",
    date: "2025년 11월 22일",
    summary: "2025.11.18 ~ 2025.11.21",
    image: "/assets/news-europa.png",
    href: "/blog/2025/11/22/2025-semicon-europa/",
  },
  {
    title: "SEDEX 2025",
    date: "2025년 10월 24일",
    summary: "2025.10.22 ~ 2025.10.24 전시회 참가",
    image: "/assets/news-sedex.png",
    href: "/blog/2025/10/24/7214/",
  },
  {
    title: "2025 SEMICON WEST",
    date: "2025년 10월 13일",
    summary: "2025.10.07 ~ 2025.10.09 전시회 참가",
    image: "/assets/news-west.png",
    href: "/blog/2025/10/13/7189/",
  },
  {
    title: "2025 SEMICON TAIWAN",
    date: "2025년 9월 16일",
    summary: "2025.09.10 ~ 2025.09.12 전시회 참가",
    image: "/assets/news-taiwan.png",
    href: "/blog/2025/09/16/2025-semicon-taiwan/",
  },
  {
    title: "2023 SEMICON JAPAN",
    date: "2023년 12월 13일",
    summary: "2023.12.13 ~ 2023.12.15 SEMICON JAPAN 참가",
    image: "/assets/news-2023-japan.png",
    href: "/blog/2023/12/13/2023-semicon-japan/",
  },
  {
    title: "2023 SEDEX 반도체대전",
    date: "2023년 10월 26일",
    summary: "2023.10.25 ~ 2023.10.27 SEDEX 참가",
    image: "/assets/news-2023-sedex.png",
    href: "/blog/2023/10/26/2023-sedex-%eb%b0%98%eb%8f%84%ec%b2%b4%eb%8c%80%ec%a0%84/",
  },
  {
    title: "2023 SEMICON TAIWAN",
    date: "2023년 9월 7일",
    summary: "2023.09.06 ~ 2023.09.08 SEMICON TAIWAN 참가",
    image: "/assets/news-2023-taiwan.png",
    href: "/blog/2023/09/07/2023-semicon-taiwan/",
  },
  {
    title: "2023 SEMICON WEST",
    date: "2023년 7월 18일",
    summary: "2023.07.13 ~ 2023.07.15 SEMICON WEST 참가",
    image: "/assets/news-2023-west.png",
    href: "/blog/2023/07/18/2023-semicon-west/",
  },
  {
    title: "2023 SEMICON CHINA",
    date: "2023년 7월 6일",
    summary: "2023.06.29 ~ 2023.07.01 SEMICON CHINA 참가",
    image: "/assets/news-2023-china.jpg",
    href: "/blog/2023/07/06/2023-semicon-china/",
  },
  {
    title: "칭화대학교 방문",
    date: "2023년 6월 29일",
    summary: "2023.06.12 대만 칭화대학교 방문",
    image: "/assets/news-tsinghua.png",
    href: "/blog/2023/06/29/6567/",
  },
  {
    title: "2023 SEMICON KOREA",
    date: "2023년 1월 25일",
    summary: "2023.02.01 ~ 2023.02.03 SEMICON KOREA 참가",
    image: "/assets/news-2023-korea.jpg",
    href: "/blog/2023/01/25/5734/",
  },
  {
    title: "2022 한국산업대전",
    date: "2022년 10월 24일",
    summary: "2022.10.19 ~ 2022.10.21 SEDEX 반도체 대전 전시회 참가",
    image: "/assets/news-2022-industry.jpg",
    href: "/blog/2022/10/24/5421/",
  },
  {
    title: "2022 SEDEX",
    date: "2022년 10월 10일",
    summary: "2022.10.05 ~ 2022.10.07 SEDEX 반도체 대전 전시회 참가",
    image: "/assets/news-2022-sedex.jpg",
    href: "/blog/2022/10/10/2022-sedex/",
  },
  {
    title: "2022 SEMICON TAIWAN",
    date: "2022년 9월 20일",
    summary: "2022.09.14 ~ 2022.09.16 SEMICON TAIWAN 2022 전시회 참가",
    image: "/assets/news-2022-taiwan.jpg",
    href: "/blog/2022/09/20/2022-semicon-taiwan/",
  },
];

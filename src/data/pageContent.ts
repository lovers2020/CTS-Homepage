export type ContentItem = {
  title: string;
  description?: string;
  meta?: string;
  bullets?: string[];
  image?: string;
};

export type ContentSection = {
  eyebrow?: string;
  title: string;
  body?: string;
  variant?: "cards" | "timeline" | "organization" | "faq" | "contact" | "gallery" | "list";
  items: ContentItem[];
};

export type PageContent = {
  eyebrow: string;
  title: string;
  heroLead: string;
  introTitle: string;
  introBody: string;
  stats?: { value: string; label: string }[];
  sections: ContentSection[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

export const pageContentByPath: Record<string, PageContent> = {
  "/company_intro/": {
    eyebrow: "ABOUT CANTOPS",
    title: "CEO 인사말",
    heroLead: "산업 현장의 요소 부품을 개발해 온 30년 이상의 기술과 경험으로 고객과 함께 성장합니다.",
    introTitle: "24시간 가동되는 현장에서 증명한 신뢰와 품질",
    introBody: "캔탑스 제품은 반도체와 디스플레이 공정의 연속 가동 환경에 적용되어 왔습니다. 음성·영상 신호 처리부터 모터·로봇 제어까지 축적한 상품화 경험을 바탕으로 짧은 개발 기간에도 높은 품질을 지향합니다.",
    stats: [
      { value: "30+", label: "산업 자동화 기술 경험" },
      { value: "24/7", label: "연속 가동 라인 적용" },
      { value: "Global", label: "국내외 고객 지원" },
    ],
    sections: [
      {
        eyebrow: "MESSAGE",
        title: "기술로 신뢰를 만들고 고객과 함께 발전하겠습니다.",
        body: "현재의 결과에 머무르지 않고 끊임없는 자기계발과 제품 혁신을 이어가겠습니다.",
        items: [
          { title: "현장 중심", description: "고객의 실제 운영 조건과 과제를 제품 설계의 출발점으로 삼습니다." },
          { title: "고품질 개발", description: "축적된 설계 자산과 검증 체계로 단납기와 신뢰성을 함께 확보합니다." },
          { title: "지속적인 성장", description: "고객의 조언을 제품과 조직의 개선으로 연결합니다." },
        ],
      },
      {
        eyebrow: "CEO",
        title: "대표이사 오학서",
        variant: "list",
        items: [
          { title: "감사합니다.", description: "캔탑스에 보내주시는 관심과 조언을 바탕으로 사회에 꼭 필요한 모범적인 기업이 되겠습니다." },
        ],
      },
    ],
  },
  "/company_intro/company-business/": {
    eyebrow: "OUR BUSINESS",
    title: "사업분야",
    heroLead: "무선 통신, 센서·제어, IoT 솔루션으로 정밀 물류 자동화의 핵심을 연결합니다.",
    introTitle: "부품부터 제어 시스템까지 이어지는 자동화 포트폴리오",
    introBody: "반도체·디스플레이 물류 현장의 통신, 인식, 모션, 상태 감시 과제를 하나의 기술 흐름으로 설계합니다.",
    sections: [
      {
        eyebrow: "BUSINESS AREA",
        title: "핵심 사업 영역",
        items: [
          { title: "무선 통신", description: "SEMI E84·E23 기반 PIO와 2GHz·5GHz RF, IR 통신 솔루션", bullets: ["Hybrid·Serial·IR PIO", "Hoist PIO", "현장 호환 통신"] },
          { title: "센서·제어", description: "RFID, Motion, I/O와 각종 센서를 연계한 정밀 제어", bullets: ["RFID Reader / N₂", "EtherCAT·Ethernet I/O", "FOUP·Guide Sensor"] },
          { title: "IoT 솔루션", description: "설비 데이터를 수집하고 상태를 진단하는 연결형 제품", bullets: ["PIM IoT", "진동·기울기 감시", "예지보전 확장"] },
        ],
      },
      {
        eyebrow: "APPLICATION",
        title: "주요 적용 현장",
        items: [
          { title: "반도체 AMHS", description: "OHT·Stocker·Load Port 간 안전하고 정확한 물류 통신" },
          { title: "디스플레이 물류", description: "대형 기판 이송 공정의 위치 인식과 장비 인터페이스" },
          { title: "스마트 제조", description: "센서, 제어기, IoT 데이터를 연결하는 현장 자동화" },
        ],
      },
    ],
  },
  "/company_intro/core-competencies/": {
    eyebrow: "CORE COMPETENCIES",
    title: "핵심역량",
    heroLead: "물류 제어 시스템에 최적화된 전문 인력과 검증 체계로 세계 표준을 지향합니다.",
    introTitle: "설계, 검증, 적용이 단절되지 않는 개발 역량",
    introBody: "회로와 펌웨어, 통신 프로토콜, 기구와 시험 환경을 함께 이해하는 기술 조직이 제품의 전 생애주기를 책임집니다.",
    sections: [
      {
        eyebrow: "ENGINEERING FLOW",
        title: "아이디어를 현장 성능으로 완성하는 과정",
        variant: "timeline",
        items: [
          { meta: "01", title: "요구사항 분석", description: "공정 인터페이스, 통신 규격, 설치 환경과 유지보수 조건을 정의합니다." },
          { meta: "02", title: "통합 설계", description: "아날로그·디지털 회로, FPGA, ARM, 펌웨어를 제품 단위로 설계합니다." },
          { meta: "03", title: "신뢰성 검증", description: "EMC, ESD, 온습도, 열충격, 진동 시험으로 현장 내구성을 확인합니다." },
          { meta: "04", title: "현장 최적화", description: "실제 장비와 프로토콜 호환성을 검증하고 양산 품질로 연결합니다." },
        ],
      },
      {
        eyebrow: "CAPABILITY",
        title: "기술 조직의 강점",
        items: [
          { title: "융합 설계", description: "통신·센서·제어·영상 기술을 하나의 제품으로 통합합니다." },
          { title: "표준 대응", description: "SEMI 표준과 산업용 Fieldbus, 고객 프로토콜을 폭넓게 지원합니다." },
          { title: "자체 검증", description: "보유 시험 장비와 OHT Testbed를 활용해 적용 전 위험을 줄입니다." },
        ],
      },
    ],
  },
  "/company_intro/ochart/": {
    eyebrow: "ORGANIZATION",
    title: "조직도",
    heroLead: "AMHS 전문 기술 인력이 연구개발부터 품질과 고객 지원까지 하나의 목표로 움직입니다.",
    introTitle: "빠른 판단과 긴밀한 기술 협업을 위한 조직",
    introBody: "대표이사를 중심으로 연구개발, 영업, 생산·품질, 경영지원 조직이 제품의 기획부터 고객 적용까지 유기적으로 협업합니다.",
    sections: [
      {
        eyebrow: "TEAM STRUCTURE",
        title: "캔탑스 조직",
        variant: "organization",
        items: [
          { meta: "CEO", title: "대표이사", description: "기술 전략과 품질, 고객 가치 중심의 경영" },
          { meta: "R&D", title: "기업부설연구소", description: "H/W·S/W·FPGA·센서·통신 제품 연구개발" },
          { meta: "BUSINESS", title: "영업·사업", description: "고객 요구 분석, 제품 제안, 국내외 프로젝트 대응" },
          { meta: "QUALITY", title: "생산·품질", description: "구매, 제조, 검사, 신뢰성 시험과 양산 품질 관리" },
          { meta: "SUPPORT", title: "경영지원", description: "인사, 총무, 재무와 조직 운영 지원" },
        ],
      },
      {
        eyebrow: "COLLABORATION",
        title: "프로젝트 협업 방식",
        items: [
          { title: "기술 검토", description: "영업과 연구소가 고객 요구와 적용 조건을 함께 정의합니다." },
          { title: "개발·검증", description: "설계 단계부터 생산·품질 조직이 참여해 양산 위험을 줄입니다." },
          { title: "현장 피드백", description: "지원 과정의 데이터를 차기 제품과 품질 개선에 반영합니다." },
        ],
      },
    ],
  },
  "/company_intro/company_history/": {
    eyebrow: "OUR HISTORY",
    title: "회사연혁",
    heroLead: "2002년 설립 이후 통신, RFID, PIO, AMHS와 IoT 기술을 꾸준히 제품화해 왔습니다.",
    introTitle: "현장의 다음 과제를 먼저 해결해 온 기술의 시간",
    introBody: "초기 임베디드 제어와 영상 기술에서 출발해 반도체 물류 통신, 모션 제어, 센서와 예지보전 영역으로 확장했습니다.",
    stats: [
      { value: "2002", label: "회사 설립" },
      { value: "30+", label: "주요 제품·제어 기술" },
      { value: "8", label: "국내외 대리점망" },
    ],
    sections: [
      {
        eyebrow: "MILESTONES",
        title: "주요 개발 연혁",
        variant: "timeline",
        items: [
          { meta: "2024—2025", title: "진단·에너지·다단 제어 확장", bullets: ["고장진단, Energy HV, PLC 제어기", "다단 STB 제어기와 VMS FOUP", "듀얼 Probe 색차계", "미국·일본·중국·대만·베트남 포함 대리점망 8개소"] },
          { meta: "2022—2023", title: "IoT와 3세대 제품", bullets: ["CIS IoT Station, PIM-W", "HPIO 3세대와 13.56MHz RFID Reader", "EtherCAT nGC·nCC", "OHT Testbed 구축"] },
          { meta: "2018—2021", title: "표준화와 통합 제어", bullets: ["pCOM과 Hand Interface Board", "LC24·LC24D·CDIO48", "N₂ Shelf Controller", "Hybrid PIO 2세대"] },
          { meta: "2012—2017", title: "RFID와 PIO 전문화", bullets: ["실시간 RFID 관리와 EtherCAT Reader", "FOUP Sensor", "IR·RF·Hybrid PIO(E84)", "OHT 충돌 방지 제어기"] },
          { meta: "2003—2011", title: "임베디드·제어 기술 기반 구축", bullets: ["USB2.0 Camera·I/O", "RFID Reader", "AGV·OHT 제어기", "음성·영상·센서 기술"] },
          { meta: "2002", title: "주식회사 캔탑스 설립", description: "임베디드 마이컴 보드 개발을 시작으로 산업용 요소 부품 기술을 축적했습니다." },
        ],
      },
    ],
  },
  "/company_intro/ac/": {
    eyebrow: "CERTIFICATIONS",
    title: "인증정보",
    heroLead: "품질, 환경, 기술 혁신과 기업 역량을 공인 인증 체계로 관리합니다.",
    introTitle: "신뢰할 수 있는 제품과 조직을 위한 인증 기반",
    introBody: "국제 품질·환경 시스템부터 기술혁신, 연구개발, 소재·부품·장비 전문성까지 지속적으로 검증받고 있습니다.",
    stats: [{ value: "9", label: "주요 기업·품질 인증" }],
    sections: [
      {
        eyebrow: "CERTIFICATE LIST",
        title: "주요 인증",
        items: [
          { title: "ISO 9001:2015", description: "품질경영시스템" },
          { title: "ISO 14001:2015", description: "환경경영시스템" },
          { title: "소재·부품·장비 전문기업", description: "핵심 제조 기술 전문성 확인" },
          { title: "기업부설연구소", description: "연구개발 조직 인정" },
          { title: "이노비즈", description: "기술혁신형 중소기업" },
          { title: "벤처기업", description: "혁신 성장 기업 확인" },
          { title: "성과공유기업", description: "협력 성과 공유 체계" },
          { title: "수출프론티어기업", description: "해외 시장 개척 역량" },
          { title: "일자리 우수기업", description: "고용과 근무환경 우수성" },
        ],
      },
    ],
  },
  "/company_tech/": {
    eyebrow: "TECHNOLOGY",
    title: "보유 기술",
    heroLead: "회로 설계부터 RF·RFID, 모션 제어, 센서와 실시간 신호 처리까지 17개 핵심 기술을 보유합니다.",
    introTitle: "정밀 자동화 부품을 완성하는 기술 스택",
    introBody: "저노이즈 하드웨어와 임베디드 소프트웨어, 산업용 네트워크를 함께 설계해 제품 단위의 완성도를 높입니다.",
    stats: [{ value: "17", label: "핵심 보유 기술" }, { value: "4", label: "기술 분야" }],
    sections: [
      {
        eyebrow: "DESIGN",
        title: "설계 기술",
        variant: "list",
        items: [
          { title: "회로·PCB", bullets: ["Low Noise 아날로그 회로", "고속 신호·저노이즈·EMI 대응 PCB", "고품질·고신뢰성 제품 설계"] },
          { title: "디지털 로직", bullets: ["FPGA·EPLD 설계", "VHDL 기반 로직 구현", "Low cost 제품 최적화"] },
        ],
      },
      {
        eyebrow: "APPLICATION",
        title: "응용 기술",
        items: [
          { title: "RFID·PIO", bullets: ["134.2kHz·13.56MHz RFID", "E84 RF PIO 2GHz·5GHz"] },
          { title: "Processor", bullets: ["TMS320C67xx·C3x DSP", "ARM 프로세서", "USB2.0 Device"] },
          { title: "Vision·Network", bullets: ["CMOS·CCD Camera", "산업용 Fieldbus·Network"] },
        ],
      },
      {
        eyebrow: "CONTROL & SENSOR",
        title: "제어·센서·신호 처리",
        items: [
          { title: "Motion Control", description: "로봇과 Motor, 다축 Motion 제어" },
          { title: "Sensor", description: "IR·Laser Diode 기반 거리와 상태 감지" },
          { title: "Code & Signal", description: "QR·PDF417·Data Matrix와 실시간 영상·음성 처리" },
        ],
      },
    ],
  },
  "/company_eq/": {
    eyebrow: "TEST EQUIPMENT",
    title: "보유 장비",
    heroLead: "고성능 계측·환경·EMC 장비와 엔지니어 1인 1 스코프 체계로 제품 신뢰성을 검증합니다.",
    introTitle: "설계 단계에서 현장 리스크를 줄이는 자체 시험 인프라",
    introBody: "신호 품질, 전원 안정성, 온습도와 충격, 노이즈 내성을 개발 과정에서 반복 검증합니다.",
    stats: [{ value: "18", label: "주요 장비군" }, { value: "36", label: "Oscilloscope" }, { value: "65", label: "Power Supply" }],
    sections: [
      {
        eyebrow: "MEASUREMENT",
        title: "계측·신호 장비",
        variant: "list",
        items: [
          { title: "Oscilloscope", description: "DPO5054B 외 5종 · 36대 · Lecroy, Tek 외" },
          { title: "Spectrum Analyzer", description: "R3267 외 2종 · 9대 · Advantest 외" },
          { title: "Function / Signal Generator", description: "33210A 3대, 8648C 외 2대 · Agilent" },
          { title: "Network / LCR Analyzer", description: "8753ES 1대, LCR-817 2대" },
          { title: "Calibrator / Thermal Camera", description: "Fluke 5101B, FLIR T420" },
        ],
      },
      {
        eyebrow: "RELIABILITY",
        title: "환경·신뢰성 장비",
        items: [
          { title: "Noise & EMC", bullets: ["Impulse Noise INS-4020", "Fast Transient Noise FNS-AXII", "ESD ESS-2000", "EMC Kit H2"] },
          { title: "Environment", bullets: ["온습도 챔버 TH-G-800 외 6종 9대", "열충격 챔버 TEMP880S", "진동 시험기 GNV-400"] },
          { title: "Power Safety", bullets: ["Power Supply 6종 65대", "내전압 TOS-5051", "Voltage Dip/Up VDS-230S"] },
        ],
      },
    ],
  },
  "/patent-certificate/": {
    eyebrow: "INTELLECTUAL PROPERTY",
    title: "특허 정보",
    heroLead: "정밀 물류 통신과 제어 핵심 기술을 국내외 지식재산으로 보호하고 있습니다.",
    introTitle: "연구개발의 결과를 제품 경쟁력으로 연결합니다.",
    introBody: "국내 핵심 기술 등록 12건과 미국·일본·중국·대만을 포함한 해외 등록 21건을 기반으로 독자 기술을 확장합니다.",
    stats: [{ value: "12", label: "국내 특허 등록" }, { value: "21", label: "해외 특허 등록" }, { value: "4", label: "해외 등록 국가" }],
    sections: [
      {
        eyebrow: "KOREAN PATENTS",
        title: "국내 주요 등록",
        variant: "list",
        items: [
          { title: "제10-2256132호 · 제10-2064485호 · 제10-2020662호" },
          { title: "제10-1936296호 · 제10-1936271호 · 제10-1926012호" },
          { title: "제10-1749309호 · 제10-1749294호 · 제10-1659964호" },
          { title: "제10-1619113호 · 제10-1616706호 · 제10-1527686호" },
          { title: "디자인등록 제30-0856783호" },
        ],
      },
      {
        eyebrow: "GLOBAL IP",
        title: "해외 지식재산",
        items: [
          { title: "USA", description: "핵심 제품과 제어 기술의 해외 권리 확보" },
          { title: "JAPAN", description: "현지 시장 적용을 위한 기술 보호" },
          { title: "CHINA · TAIWAN", description: "아시아 생산 거점과 고객 대응을 위한 등록" },
        ],
      },
    ],
  },
  "/about/": {
    eyebrow: "PRODUCT INQUIRY",
    title: "제품문의",
    heroLead: "제품코드와 적용 설비 정보를 알려주시면 더 빠르고 정확하게 안내해 드립니다.",
    introTitle: "제품 선정부터 적용 검토까지 기술팀과 연결하세요.",
    introBody: "문의하실 제품명, 제품코드, End User와 적용 환경을 함께 전달해 주시면 호환성과 사양 검토에 도움이 됩니다.",
    stats: [
      { value: "031", label: "303-5237 기술문의" },
      { value: "031", label: "303-5238 구매문의" },
      { value: "E-mail", label: "support@cantops.com" },
    ],
    sections: [
      {
        eyebrow: "HOW TO INQUIRE",
        title: "문의 전 준비 정보",
        variant: "timeline",
        items: [
          { meta: "01", title: "제품 확인", description: "제품명 또는 제품코드, 필요한 수량을 확인해 주세요." },
          { meta: "02", title: "적용 환경", description: "설비 종류, End User, 통신 방식과 설치 조건을 알려주세요." },
          { meta: "03", title: "연락처", description: "회사명, 담당자, 이메일과 연락처를 남겨주세요." },
          { meta: "04", title: "기술 검토", description: "담당자가 호환성, 납기, 추가 자료를 확인해 회신합니다." },
        ],
      },
      {
        eyebrow: "CONTACT",
        title: "문의 채널",
        variant: "contact",
        items: [
          { title: "제품·기술문의", description: "031-303-5237", meta: "Technical" },
          { title: "구매문의", description: "031-303-5238", meta: "Sales" },
          { title: "이메일", description: "support@cantops.com", meta: "E-mail" },
          { title: "팩스", description: "031-303-5233", meta: "FAX" },
        ],
      },
      {
        eyebrow: "REQUIRED FIELDS",
        title: "온라인 문의 작성 항목",
        variant: "list",
        items: [
          { title: "기본 정보", bullets: ["성함", "회사명", "E-mail", "연락처"] },
          { title: "문의 정보", bullets: ["제목", "제품 또는 제품코드", "문의내용"] },
          { title: "개인정보", description: "문의 회신을 위한 개인정보 수집·활용 동의가 필요합니다." },
        ],
      },
    ],
    primaryAction: { label: "이메일 문의", href: "mailto:support@cantops.com" },
    secondaryAction: { label: "제품 목록", href: "/product-menu/" },
  },
  "/about/faq/": {
    eyebrow: "SUPPORT CENTER",
    title: "FAQ",
    heroLead: "PIO와 RFID Reader의 배선, 통신, 호환성에 관한 자주 묻는 질문을 모았습니다.",
    introTitle: "현장에서 자주 확인하는 기술 정보",
    introBody: "제품별 상세 프로그램과 자료가 필요한 경우 제품명과 시리얼 정보를 함께 보내주시면 빠르게 안내해 드립니다.",
    sections: [
      {
        eyebrow: "PIO · RFID · PRODUCT",
        title: "자주 묻는 질문",
        variant: "faq",
        items: [
          { title: "제품 관련 프로그램과 자료는 어디에서 받나요?", description: "제품명과 제품코드를 기재해 support@cantops.biz로 문의해 주세요." },
          { title: "RFID Reader는 Host와 어떻게 통신하나요?", description: "LM24는 Ethernet·RS-232C·RS-485, LC24는 EtherCAT을 지원합니다." },
          { title: "설비측 PIO 배선은 어떻게 연결하나요?", description: "센서 기준 배선도와 반대로 설비 OUT을 PIO IN에 연결합니다. SELECT·MODE는 생략 가능하며 GO는 통신 상태 출력입니다." },
          { title: "Hybrid PIO 제품 코드는 무엇을 의미하나요?", description: "제품군, 주파수, Parallel·Serial·Slave, End User, 커넥터, IR 거리와 방향, 케이블 길이, E23·E84 모드 정보를 조합합니다." },
          { title: "SEMI E84·E23에서 PIO의 역할은 무엇인가요?", description: "국제 표준에 따라 설비 간 I/O 신호를 전달하는 통신 매개체이며 공정 자체를 제어하지 않습니다." },
          { title: "RFID Reader 사용 주파수는 어떻게 되나요?", description: "LM24·LM21·LC24는 134.2kHz를 사용하며 13.56MHz 모델은 별도 문의해 주세요." },
          { title: "LM Series는 어떤 프로토콜을 지원하나요?", description: "CanTops Protocol I·II, SECS-I, HSMS, GEM과 주요 타사 호환 프로토콜을 지원합니다." },
          { title: "IR PIO는 타사 제품과 호환되나요?", description: "DMS-HB1-V, DMS-GB1-V, SOT-FP8, DMJ Series 등과의 호환 구성을 지원합니다." },
          { title: "LM Series로 타사 RFID Reader를 대체할 수 있나요?", description: "Omron·Brooks RFID Reader 대체 적용이 가능하며 세부 모델 호환성은 기술 검토가 필요합니다." },
        ],
      },
    ],
    primaryAction: { label: "추가 문의", href: "/about/" },
  },
  "/job/": {
    eyebrow: "CAREERS",
    title: "채용공고",
    heroLead: "임베디드 소프트웨어와 하드웨어로 자동화 기술의 다음 기준을 함께 만들 동료를 찾습니다.",
    introTitle: "연구개발 전 과정에 참여하는 엔지니어",
    introBody: "센서 인터페이스부터 통신, 신호처리, 회로와 AI 진단까지 실제 제품과 현장을 연결하는 개발 업무를 수행합니다.",
    sections: [
      {
        eyebrow: "OPEN POSITIONS",
        title: "모집 분야",
        items: [
          { title: "임베디드 S/W 개발", description: "연구소 · 신입/경력 1~10년", bullets: ["센서 인터페이스 드라이버", "디지털 신호 처리", "시리얼·네트워크 통신", "고장진단·예측 AI/딥러닝", "Linux·Windows·RTOS / C·C++·C#·Python"] },
          { title: "임베디드 H/W 개발", description: "연구소 · 신입/경력 1~10년", bullets: ["카메라·라이다 센서 인터페이스", "RF·Wi-Fi·광 통신 회로", "아날로그·HDL·PLD 설계", "OrCAD·PADS"] },
          { title: "공통 자격", description: "4년제 대졸 이상", bullets: ["전기·전자공학", "컴퓨터·시스템공학", "관련 전공 또는 이에 준하는 개발 역량"] },
        ],
      },
      {
        eyebrow: "PROCESS",
        title: "채용 절차와 근무조건",
        variant: "timeline",
        items: [
          { meta: "01", title: "서류 전형", description: "경력 중심 이력서를 이메일로 접수합니다." },
          { meta: "02", title: "1차 면접", description: "직무 경험과 기술 역량, 협업 방식을 확인합니다." },
          { meta: "03", title: "최종 합격", description: "입사 일정과 근무 조건을 안내합니다." },
          { meta: "WORK", title: "정규직 · 주 5일", description: "수습 3개월, 09:00~18:00, 수원 영통 근무. 전문연구요원 지원 가능." },
        ],
      },
      {
        eyebrow: "APPLY",
        title: "상시채용 접수",
        variant: "contact",
        items: [
          { title: "이메일", description: "dylim@cantops.com", meta: "Resume" },
          { title: "채용 문의", description: "031-303-8960", meta: "Office" },
          { title: "담당자", description: "임도윤 팀장", meta: "HR" },
        ],
      },
    ],
    primaryAction: { label: "이력서 보내기", href: "mailto:dylim@cantops.com" },
  },
  "/wb/": {
    eyebrow: "WORK & BENEFITS",
    title: "복리후생",
    heroLead: "구성원과 가족의 건강, 성장, 안정적인 직장생활을 폭넓게 지원합니다.",
    introTitle: "몰입할 수 있는 환경과 함께 성장하는 제도",
    introBody: "일과 삶의 균형을 지키고 장기적인 성장을 응원할 수 있도록 건강, 가족, 자기계발, 휴식과 보상 제도를 운영합니다.",
    sections: [
      {
        eyebrow: "FAMILY & HEALTH",
        title: "가족·건강 지원",
        items: [
          { title: "종합검진", description: "본인과 가족의 건강검진 지원" },
          { title: "자녀 학자금", description: "구성원 자녀의 교육비 지원" },
          { title: "경조사", description: "경조 휴가와 경조금 지원" },
          { title: "휴양시설", description: "가족과 함께 이용할 수 있는 휴양 지원" },
          { title: "기념일", description: "명절·생일·결혼기념일 선물" },
        ],
      },
      {
        eyebrow: "WORK LIFE",
        title: "직장생활 지원",
        items: [
          { title: "사내 동호회", description: "골프·사이클·레포츠 등 12개 팀 운영" },
          { title: "자기계발", description: "자기계발비와 체력단련비 지원" },
          { title: "카페테리아", description: "편안한 휴식을 위한 사내 공간 운영" },
          { title: "포상제도", description: "신선인·우수사원·장기근속자 표창" },
          { title: "보험", description: "4대보험과 상해보험 가입" },
        ],
      },
    ],
    primaryAction: { label: "채용공고 보기", href: "/job/" },
  },
  "/contact/": {
    eyebrow: "HEAD OFFICE",
    title: "CanTops 본사",
    heroLead: "제품 기획, 연구개발, 영업과 기술지원이 연결되는 캔탑스의 중심 거점입니다.",
    introTitle: "경기도 수원시 영통구에 위치한 캔탑스 본사",
    introBody: "제품 구매와 적용 검토, 기술 지원은 담당 번호 또는 대표 이메일로 문의해 주세요.",
    sections: [
      {
        eyebrow: "CONTACT INFORMATION",
        title: "HEAD OFFICE",
        variant: "contact",
        items: [
          { meta: "ADDRESS", title: "CanTops Co., Ltd.", description: "경기도 수원시 영통구 덕영대로 1556번길 16, B동 1202·1203·1204·1205·1207·1208호" },
          { meta: "SALES", title: "구매·영업", description: "031-303-5238" },
          { meta: "TECH", title: "기술문의", description: "031-303-5237" },
          { meta: "FAX", title: "팩스", description: "031-303-5233" },
          { meta: "E-MAIL", title: "대표 이메일", description: "support@cantops.com" },
        ],
      },
    ],
    primaryAction: { label: "이메일 문의", href: "mailto:support@cantops.com" },
  },
  "/contact_korea/": {
    eyebrow: "KOREA NETWORK",
    title: "KOREA",
    heroLead: "국내 영업과 고객 대응을 담당하는 캔탑스 공식 파트너 네트워크입니다.",
    introTitle: "Sebong Co., Ltd.",
    introBody: "국내 제품 공급, 견적, 납기와 현장 적용 상담을 지원합니다.",
    sections: [
      {
        eyebrow: "DISTRIBUTOR",
        title: "Sebong Co., Ltd.",
        variant: "contact",
        items: [
          { meta: "ADDRESS", title: "세봉 주식회사", description: "경기도 용인시 기흥구 탑실로 40, 세봉빌딩" },
          { meta: "PHONE", title: "대표전화", description: "031-274-3900" },
          { meta: "CONTACT", title: "담당자", description: "Joel Kim · 김운규 차장" },
          { meta: "E-MAIL", title: "이메일", description: "joel@osebong.com" },
        ],
      },
    ],
    primaryAction: { label: "파트너 문의", href: "mailto:joel@osebong.com" },
  },
  "/contact_china/": {
    eyebrow: "CHINA NETWORK",
    title: "CHINA",
    heroLead: "선전과 허페이의 파트너가 중국 지역 고객의 제품 공급과 기술 커뮤니케이션을 지원합니다.",
    introTitle: "중국 현지의 두 개 기술 영업 네트워크",
    introBody: "지역과 프로젝트 성격에 맞춰 가까운 파트너에게 문의하실 수 있습니다.",
    sections: [
      {
        eyebrow: "SHENZHEN",
        title: "Sun-tech Electronics Co., Ltd.",
        variant: "contact",
        items: [
          { meta: "ADDRESS", title: "Shenzhen Office", description: "RM 609 Zhongyangxigu BLDG, No.139 Xinzhou 11 Road, Futian District, Shenzhen, China 518048" },
          { meta: "PHONE", title: "전화", description: "19902403366" },
          { meta: "CONTACT", title: "담당자", description: "Liang Jun (梁部长)" },
          { meta: "E-MAIL", title: "이메일", description: "j.liang@faland.cn" },
        ],
      },
      {
        eyebrow: "HEFEI",
        title: "Wisecen Technology., Ltd.",
        variant: "contact",
        items: [
          { meta: "ADDRESS", title: "Hefei Office", description: "2551, 8F, Building G, Phase III, Cross-border E-commerce Industrial Park, No.1201 Huafeng Road, Shushan District, Hefei" },
          { meta: "PHONE", title: "전화", description: "+86 152-5150-5150" },
          { meta: "CONTACT", title: "담당자", description: "Kang Hak Bong (姜先生)" },
          { meta: "E-MAIL", title: "이메일", description: "xuefeng.jiang@yritech.com" },
        ],
      },
    ],
  },
  "/contact_usa/": {
    eyebrow: "USA NETWORK",
    title: "USA",
    heroLead: "북미 지역 제품 상담과 프로젝트 커뮤니케이션을 지원하는 현지 파트너입니다.",
    introTitle: "TD7VII INC",
    introBody: "미국 내 제품 공급과 현장 적용 상담을 지원합니다.",
    sections: [{
      eyebrow: "DISTRIBUTOR",
      title: "TD7VII INC",
      variant: "contact",
      items: [
        { meta: "ADDRESS", title: "Texas Office", description: "600 Lemens Ave Ste 1120, Hutto TX 78634, USA" },
        { meta: "PHONE", title: "전화", description: "+1 512-705-3349" },
        { meta: "CONTACT", title: "담당자", description: "TK LEE" },
        { meta: "E-MAIL", title: "이메일", description: "info@td7inc.com · tklee@td7studios.com" },
      ],
    }],
    primaryAction: { label: "파트너 문의", href: "mailto:info@td7inc.com" },
  },
  "/contact_japan/": {
    eyebrow: "JAPAN NETWORK",
    title: "JAPAN",
    heroLead: "일본 지역 고객의 제품 공급과 기술 상담을 담당하는 공식 파트너입니다.",
    introTitle: "Sebong Corporation (JAPAN)",
    introBody: "나고야 거점에서 일본 제조 현장의 제품 및 적용 문의를 지원합니다.",
    sections: [{
      eyebrow: "DISTRIBUTOR",
      title: "Sebong Corporation",
      variant: "contact",
      items: [
        { meta: "ADDRESS", title: "Nagoya Office", description: "Aihou Bldg. 201, 5-404-1 Nakaotai, Nishi-ku, Nagoya, Aichi 452-0822, Japan" },
        { meta: "PHONE", title: "전화", description: "+81 52-908-7457" },
        { meta: "CONTACT", title: "담당자", description: "Eric Son" },
        { meta: "E-MAIL", title: "이메일", description: "eric_son@osebong.com" },
      ],
    }],
    primaryAction: { label: "파트너 문의", href: "mailto:eric_son@osebong.com" },
  },
  "/contact_taiwan-roc/": {
    eyebrow: "TAIWAN NETWORK",
    title: "Taiwan R.O.C.",
    heroLead: "신주 지역 반도체 고객과 가까운 현지 네트워크가 제품 및 기술 상담을 지원합니다.",
    introTitle: "HongYuan Solution Co.",
    introBody: "대만 반도체·자동화 프로젝트의 공급과 현장 커뮤니케이션을 담당합니다.",
    sections: [{
      eyebrow: "DISTRIBUTOR",
      title: "HongYuan Solution Co.",
      variant: "contact",
      items: [
        { meta: "ADDRESS", title: "Hsinchu Office", description: "1F., No.201, Sec.1, Shengli 8th St., Zhubei City, Hsinchu County 302, Taiwan" },
        { meta: "PHONE", title: "전화", description: "+886 3-667-3756 · +886 918-287-742" },
        { meta: "CONTACT", title: "담당자", description: "Jon Hsieh 謝奇璋" },
        { meta: "E-MAIL", title: "이메일", description: "jonhsieh@hycpro.com" },
      ],
    }],
    primaryAction: { label: "파트너 문의", href: "mailto:jonhsieh@hycpro.com" },
  },
  "/contact_vietnam/": {
    eyebrow: "VIETNAM NETWORK",
    title: "VIETNAM",
    heroLead: "박닌 산업단지 거점에서 베트남 제조 고객의 제품 공급과 프로젝트를 지원합니다.",
    introTitle: "SEBONG VINA Co., Ltd.",
    introBody: "현지 제조·자동화 프로젝트의 제품 상담과 납품 커뮤니케이션을 담당합니다.",
    sections: [{
      eyebrow: "DISTRIBUTOR",
      title: "SEBONG VINA Co., Ltd.",
      variant: "contact",
      items: [
        { meta: "ADDRESS", title: "Bac Ninh Office", description: "2F Halla Building, Lot CC2, Yen Phong Industrial Park, Yen Trung Commune, Bac Ninh Province, Vietnam" },
        { meta: "PHONE", title: "전화", description: "+84 829-451-332 · +84 222-627-1924" },
        { meta: "CONTACT", title: "담당자", description: "Dong Hoon Shin" },
        { meta: "E-MAIL", title: "이메일", description: "dhshin@osebong.com" },
      ],
    }],
    primaryAction: { label: "파트너 문의", href: "mailto:dhshin@osebong.com" },
  },
  "/office-gallery/": {
    eyebrow: "OFFICE GALLERY",
    title: "사무실 전경",
    heroLead: "연구개발과 제조, 협업과 휴식이 연결되는 캔탑스의 업무 공간을 소개합니다.",
    introTitle: "아이디어가 제품으로 완성되는 공간",
    introBody: "연구소, 제조 라인, 회의실, 경영지원 공간과 카페테리아가 한 흐름 안에서 협업할 수 있도록 구성되어 있습니다.",
    sections: [
      {
        eyebrow: "WORKSPACE",
        title: "업무·협업 공간",
        variant: "gallery",
        items: [
          { title: "R&D Center", description: "하드웨어와 소프트웨어 연구개발 공간", image: "/assets/business-bg.png" },
          { title: "Meeting Room", description: "프로젝트 기술 검토와 고객 미팅 공간", image: "/assets/news-bg.png" },
          { title: "Management Support", description: "경영지원과 인사·총무 업무 공간", image: "/assets/video-bg.png" },
          { title: "Manufacturing Line", description: "제품 조립과 검사, 품질 관리 공간", image: "/assets/product-hand-interface.jpg" },
          { title: "Laboratory", description: "계측과 신뢰성 검증을 위한 시험 환경", image: "/assets/product-ethernet-motion.jpg" },
          { title: "Cafeteria", description: "구성원의 휴식과 소통을 위한 공간", image: "/assets/hero-poster.jpg" },
        ],
      },
    ],
  },
  "/testbed-gallery/": {
    eyebrow: "OHT TESTBED",
    title: "Testbed",
    heroLead: "OHT 주행과 PIO 통신, RFID 및 센서 제품을 실제 물류 흐름에 가깝게 검증합니다.",
    introTitle: "제품 적용 전 위험을 줄이는 자체 OHT 검증 환경",
    introBody: "쇼룸과 OHT Testbed에서 장비 간 통신, 이동 동선, 센서 인식과 제어 시나리오를 반복 시험합니다.",
    sections: [
      {
        eyebrow: "VALIDATION SPACE",
        title: "Testbed 구성",
        variant: "gallery",
        items: [
          { title: "OHT Testbed", description: "주행·정지·이송 시나리오 검증", image: "/assets/video-testbed.jpg" },
          { title: "PIO Communication", description: "E84·E23 장비 간 무선 통신 검증", image: "/assets/video-hybrid.jpg" },
          { title: "Product Showroom", description: "주요 제품과 적용 구성을 확인하는 전시 공간", image: "/assets/video-main.jpg" },
        ],
      },
      {
        eyebrow: "TEST FLOW",
        title: "검증 항목",
        variant: "timeline",
        items: [
          { meta: "01", title: "통신 연결", description: "PIO·RFID·EtherCAT 장비의 연결과 프로토콜을 확인합니다." },
          { meta: "02", title: "동작 시나리오", description: "OHT 진입, 정지, 이송, 이탈 과정의 신호 흐름을 검증합니다." },
          { meta: "03", title: "예외 상황", description: "통신 지연, 센서 오류, 간섭 조건에서의 안전 동작을 점검합니다." },
        ],
      },
    ],
  },
  "/eng/": {
    eyebrow: "GLOBAL CANTOPS",
    title: "English",
    heroLead: "Precision components and control solutions for semiconductor material handling automation.",
    introTitle: "Engineering reliability into every connection",
    introBody: "Explore our PIO, RFID, Motion & I/O, sensor and IoT portfolio. Global technical support is available through our regional network.",
    sections: [{ eyebrow: "SERVICES", title: "How we support your project", items: [
      { title: "Product selection", description: "Matching products to interface, protocol and installation conditions." },
      { title: "Technical review", description: "Compatibility and application review by our engineering team." },
      { title: "Global support", description: "Regional contact points across Korea, Asia and the USA." },
    ] }],
  },
  "/chn/": {
    eyebrow: "GLOBAL CANTOPS",
    title: "中文",
    heroLead: "为半导体自动化物流提供精密通信、识别与控制解决方案。",
    introTitle: "连接设备、数据与稳定生产",
    introBody: "CanTops 提供 PIO、RFID、Motion & I/O、传感器和 IoT 产品，并通过中国合作伙伴提供本地支持。",
    sections: [{ eyebrow: "SUPPORT", title: "项目支持", items: [
      { title: "产品选型", description: "根据通信方式、设备接口与安装条件推荐产品。" },
      { title: "技术确认", description: "确认协议兼容性与现场应用条件。" },
      { title: "中国服务网络", description: "深圳与合肥合作伙伴提供本地沟通。" },
    ] }],
  },
  "/jap/": {
    eyebrow: "GLOBAL CANTOPS",
    title: "日本語",
    heroLead: "半導体搬送自動化のための高精度な通信・認識・制御ソリューション。",
    introTitle: "現場で信頼される自動化コンポーネント",
    introBody: "PIO、RFID、Motion & I/O、センサー、IoT製品を提供し、日本のパートナーネットワークを通じてサポートします。",
    sections: [{ eyebrow: "SUPPORT", title: "プロジェクト支援", items: [
      { title: "製品選定", description: "通信仕様と設置条件に合わせて製品を提案します。" },
      { title: "技術確認", description: "プロトコル互換性と適用条件を確認します。" },
      { title: "日本窓口", description: "名古屋のパートナーが製品と技術相談に対応します。" },
    ] }],
  },
  "/privacy-policy/": {
    eyebrow: "PRIVACY POLICY",
    title: "개인정보처리방침",
    heroLead: "캔탑스는 문의와 서비스 제공에 필요한 개인정보를 안전하게 관리합니다.",
    introTitle: "개인정보 보호 원칙",
    introBody: "수집 목적과 항목을 명확히 안내하고 필요한 기간 동안만 안전하게 보관합니다.",
    sections: [
      { eyebrow: "COLLECTION", title: "수집 및 이용", variant: "list", items: [
        { title: "수집 항목", description: "성명, 회사명, 이메일, 연락처와 문의 내용" },
        { title: "이용 목적", description: "제품·기술 문의 확인, 답변과 고객 지원" },
        { title: "보유 기간", description: "관련 법령과 내부 정책에 따른 목적 달성 시까지" },
      ] },
      { eyebrow: "RIGHTS", title: "이용자 권리", variant: "list", items: [
        { title: "열람·정정·삭제", description: "본인 정보의 열람, 수정 또는 삭제를 요청할 수 있습니다." },
        { title: "문의", description: "개인정보 관련 요청은 support@cantops.com으로 접수할 수 있습니다." },
      ] },
    ],
  },
};

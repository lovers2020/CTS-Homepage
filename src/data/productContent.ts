export type ProductDetailContent = {
  summary: string;
  features: string[];
  applications: string[];
  specs: { label: string; value: string }[];
};

export const productContentByName: Record<string, ProductDetailContent> = {
  HM12: {
    summary: "13.56MHz 대역을 사용하는 HF RFID Reader로, 물류 설비의 ID 인식과 공정 추적을 지원합니다.",
    features: ["HF RFID 기반 비접촉 인식", "산업용 설비 통신", "컴팩트한 장비 장착 구조"],
    applications: ["FOUP·Carrier 식별", "공정 진입 확인", "설비 이력 추적"],
    specs: [{ label: "Frequency", value: "13.56MHz" }, { label: "Type", value: "HF RFID Reader" }],
  },
  "LC Series": {
    summary: "EtherCAT 기반 제어 환경에 연결되는 134.2kHz RFID Reader 시리즈입니다.",
    features: ["134.2kHz RFID", "EtherCAT 네트워크", "고속 주기 제어 연동"],
    applications: ["N₂ Shelf", "Stocker", "반도체 물류 설비"],
    specs: [{ label: "Frequency", value: "134.2kHz" }, { label: "Interface", value: "EtherCAT" }],
  },
  "LM Series": {
    summary: "Ethernet과 Serial 통신을 지원하는 134.2kHz RFID Reader 제품군입니다.",
    features: ["Ethernet·RS-232C·RS-485", "SECS-I·HSMS·GEM 지원", "주요 타사 Reader 대체 적용"],
    applications: ["Carrier ID 인식", "기존 Reader 교체", "물류 추적 시스템"],
    specs: [{ label: "Frequency", value: "134.2kHz" }, { label: "Interface", value: "Ethernet / Serial" }],
  },
  "진동기울기 센서": {
    summary: "설비의 진동과 기울기 변화를 감지해 이상 상태와 설치 상태를 확인하는 IoT 센서입니다.",
    features: ["진동·기울기 동시 감지", "설비 상태 데이터 수집", "예지보전 시스템 연계"],
    applications: ["OHT 상태 감시", "모터·팬 진동 감시", "설비 수평 확인"],
    specs: [{ label: "Sensing", value: "Vibration / Tilt" }, { label: "Category", value: "IoT Sensor" }],
  },
  "PIM IoT": {
    summary: "현장 설비 데이터를 수집하고 네트워크로 전달하는 산업용 IoT Station입니다.",
    features: ["멀티 센서 데이터 수집", "원격 상태 모니터링", "고장진단 확장"],
    applications: ["생산설비 모니터링", "에너지 데이터 수집", "예지보전"],
    specs: [{ label: "Type", value: "Industrial IoT Station" }, { label: "Data", value: "Sensor / Equipment" }],
  },
  "Hand Interface Board": {
    summary: "OHT와 Hand 장비 사이의 I/O 및 제어 신호를 안정적으로 연결하는 인터페이스 보드입니다.",
    features: ["Hand 장비 인터페이스", "입출력 신호 통합", "현장 배선 단순화"],
    applications: ["OHT Hand", "Carrier 이송 장치", "AMHS 제어반"],
    specs: [{ label: "Type", value: "Interface Controller" }, { label: "Signal", value: "Digital I/O" }],
  },
  "USB DIO 제어 보드": {
    summary: "USB를 통해 디지털 입출력 신호를 제어하고 모니터링하는 산업용 I/O 보드입니다.",
    features: ["USB2.0 Device", "디지털 입출력 제어", "PC 기반 시험·제어 연동"],
    applications: ["검사 장비", "Jig 제어", "설비 I/O 확장"],
    specs: [{ label: "Interface", value: "USB 2.0" }, { label: "Control", value: "Digital I/O" }],
  },
  "Ethernet Motion 제어 보드": {
    summary: "Ethernet 네트워크를 통해 다축 스텝 모터와 모션 시퀀스를 제어하는 보드입니다.",
    features: ["Ethernet 기반 원격 제어", "다축 Motion", "I/O 시퀀스 연동"],
    applications: ["Stocker", "Load Port", "정밀 이송 장치"],
    specs: [{ label: "Interface", value: "Ethernet" }, { label: "Control", value: "Multi-axis Motion" }],
  },
  "Ethernet DIO 제어 보드": {
    summary: "분산된 설비의 디지털 입출력을 Ethernet으로 연결하는 원격 I/O 제어 보드입니다.",
    features: ["원격 Digital I/O", "분산 제어", "상태 모니터링"],
    applications: ["AMHS 분산 I/O", "설비 인터록", "공정 신호 수집"],
    specs: [{ label: "Interface", value: "Ethernet" }, { label: "Control", value: "Digital I/O" }],
  },
  "Camera Trigger": {
    summary: "검사 카메라와 조명, 이동 스테이지의 촬영 타이밍을 정밀하게 동기화하는 트리거 장치입니다.",
    features: ["정밀 Trigger 출력", "다채널 동기화", "고속 검사 대응"],
    applications: ["Vision 검사", "색차 측정", "Piezo·Linear Stage"],
    specs: [{ label: "Type", value: "Camera Trigger Controller" }, { label: "Use", value: "Vision Inspection" }],
  },
  "Guide Sensor": {
    summary: "이송 장비의 위치와 진행 방향을 감지해 안정적인 가이드 제어를 지원하는 센서입니다.",
    features: ["비접촉 위치 감지", "이송 경로 확인", "산업 환경용 설계"],
    applications: ["OHT Guide", "AGV", "물류 이송 장치"],
    specs: [{ label: "Type", value: "Guide Sensor" }, { label: "Use", value: "Position Detection" }],
  },
  "FOUP Sensor": {
    summary: "Load Port와 이송 설비에서 FOUP의 존재와 위치를 감지하는 컴팩트 센서입니다.",
    features: ["FOUP 존재 감지", "소형 설치 구조", "반도체 물류 환경 대응"],
    applications: ["Load Port", "OHT Hand", "Stocker Port"],
    specs: [{ label: "Type", value: "FOUP Detection Sensor" }, { label: "Use", value: "Presence Detection" }],
  },
  "Serial PIO": {
    summary: "Parallel I/O 신호를 Serial 통신으로 통합해 배선과 유지보수를 단순화하는 PIO입니다.",
    features: ["E84·E23 통신", "Serial 인터페이스", "배선 절감"],
    applications: ["OHT", "Stocker", "설비 간 Handshake"],
    specs: [{ label: "Standard", value: "SEMI E84 / E23" }, { label: "Interface", value: "Serial" }],
  },
  "PNP Converter": {
    summary: "설비와 PIO 장치 사이의 NPN·PNP 신호 레벨 차이를 변환하는 인터페이스 모듈입니다.",
    features: ["NPN·PNP 신호 변환", "입출력 절연 구성", "기존 설비 호환 지원"],
    applications: ["PIO 배선 호환", "설비 Retrofit", "I/O 인터페이스"],
    specs: [{ label: "Type", value: "Signal Converter" }, { label: "Signal", value: "NPN / PNP" }],
  },
  "Hoist PIO": {
    summary: "OHT Hoist 구간의 이송 Handshake를 위해 개발된 전력선 통신 기반 PIO 솔루션입니다.",
    features: ["Hoist 구간 통신", "전력선 통신 방식", "설비 신호 교환"],
    applications: ["OHT Hoist", "Carrier Transfer", "AMHS"],
    specs: [{ label: "Type", value: "Power-line PIO" }, { label: "Use", value: "Hoist Transfer" }],
  },
  "IR PIO": {
    summary: "적외선 통신으로 설비와 이송 장비 사이의 E84 I/O 신호를 전달하는 PIO입니다.",
    features: ["IR 비접촉 통신", "SEMI E84", "주요 타사 장치 호환"],
    applications: ["OHT", "AGV", "Load Port"],
    specs: [{ label: "Communication", value: "Infrared" }, { label: "Standard", value: "SEMI E84" }],
  },
  "Hybrid PIO": {
    summary: "RF와 IR 통신을 하나의 장치에서 지원해 다양한 현장 조건에 대응하는 하이브리드 PIO입니다.",
    features: ["2.4GHz·5GHz RF", "IR 통신", "Parallel·Serial·Slave 구성"],
    applications: ["OHT", "Stocker", "반도체·디스플레이 물류"],
    specs: [{ label: "Communication", value: "RF + IR" }, { label: "Standard", value: "SEMI E84 / E23" }],
  },
};

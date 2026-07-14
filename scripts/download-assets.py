from __future__ import annotations

import ssl
import urllib.request
from pathlib import Path


ASSETS = {
    "logo.png": "https://cantops.com/wp-content/uploads/2025/04/%EC%BA%94%ED%83%91%EC%8A%A4_%EA%B0%80%EB%A1%9C%EB%A1%9C%EA%B3%A0-300x53.png",
    "logo-mark.png": "https://cantops.com/wp-content/uploads/2022/01/%EC%A3%BC%EC%BA%94%ED%83%91%EC%8A%A4_%EC%B5%9C%EC%A2%85%EB%A1%9C%EA%B3%A0180.png",
    "hero-poster.jpg": "https://i.ytimg.com/vi/ZMZ6pSNuFG8/maxresdefault.jpg",
    "business-bg.png": "https://cantops.com/wp-content/uploads/2023/06/3-1.png",
    "video-bg.png": "https://cantops.com/wp-content/uploads/2023/06/4-1.png",
    "news-bg.png": "https://cantops.com/wp-content/uploads/2023/06/1-1.png",
    "product-hm12.jpg": "https://cantops.com/wp-content/uploads/2023/06/HM12-705x705.jpg",
    "product-lc-series.jpg": "https://cantops.com/wp-content/uploads/2022/06/LC24D-800-705x705.jpg",
    "product-lm-series.jpg": "https://cantops.com/wp-content/uploads/2022/03/LM24-2-800-705x705.jpg",
    "product-vibration.png": "https://cantops.com/wp-content/uploads/2025/10/%EC%A7%84%EB%8F%99%EA%B8%B0%EC%9A%B8%EA%B8%B0%EC%84%BC%EC%84%9C_800-705x705.png",
    "product-pim-iot.jpg": "https://cantops.com/wp-content/uploads/2023/07/PIMW-4-705x705.jpg",
    "product-hand-interface.jpg": "https://cantops.com/wp-content/uploads/2023/05/BG01-800-705x705.jpg",
    "product-usb-dio.jpg": "https://cantops.com/wp-content/uploads/2022/10/USB-DIO-ZA01-800-705x705.jpg",
    "product-ethernet-motion.jpg": "https://cantops.com/wp-content/uploads/2022/10/EMIO-2-800-705x705.jpg",
    "product-ethernet-dio.jpg": "https://cantops.com/wp-content/uploads/2022/10/DDx1-800-705x705.jpg",
    "product-camera-trigger.jpg": "https://cantops.com/wp-content/uploads/2022/03/Camera-Trigger-800-705x705.jpg",
    "product-guide-sensor.png": "https://cantops.com/wp-content/uploads/2022/06/CTS-IRGS-LA01-800-1-705x705.png",
    "product-foup-sensor.jpg": "https://cantops.com/wp-content/uploads/2022/06/Mini-FOUP-Sensor-800-705x705.jpg",
    "product-serial-pio.jpg": "https://cantops.com/wp-content/uploads/2023/06/Serial-PIO-1-705x705.jpg",
    "product-pnp-converter.jpg": "https://cantops.com/wp-content/uploads/2023/05/PNP-Converter-800-705x705.jpg",
    "product-hoist-pio.jpg": "https://cantops.com/wp-content/uploads/2022/11/pCOM-800-705x705.jpg",
    "product-ir-pio.png": "https://cantops.com/wp-content/uploads/2022/05/IR-PIO-800-705x705.png",
    "product-hybrid-pio.jpg": "https://cantops.com/wp-content/uploads/2022/03/HPIO-800-705x705.jpg",
    "video-main.jpg": "https://i.ytimg.com/vi/wWJMLTEIB6Y/hqdefault.jpg",
    "video-hybrid.jpg": "https://i.ytimg.com/vi/WcjVrsyqH3o/hqdefault.jpg",
    "video-testbed.jpg": "https://i.ytimg.com/vi/xwSPGJm3U98/hqdefault.jpg",
    "news-sea.png": "https://cantops.com/wp-content/uploads/2026/04/2-705x705.png",
    "news-china.png": "https://cantops.com/wp-content/uploads/2026/04/Semicon-CH-5-705x705.png",
    "news-automation.png": "https://cantops.com/wp-content/uploads/2026/02/AW-2026-705x705.png",
    "news-korea.png": "https://cantops.com/wp-content/uploads/2026/02/SEMICON-KOREA-2026-705x705.png",
    "news-japan.png": "https://cantops.com/wp-content/uploads/2025/11/2025-SEMICON-JAPAN-705x705.png",
    "news-europa.png": "https://cantops.com/wp-content/uploads/2025/09/Semicon-Europa-705x705.png",
    "news-sedex.png": "https://cantops.com/wp-content/uploads/2025/10/SEDEX-2025-705x705.png",
    "news-west.png": "https://cantops.com/wp-content/uploads/2025/09/Semicon-West-705x705.png",
    "news-taiwan.png": "https://cantops.com/wp-content/uploads/2025/09/Semicon-Taiwan-705x705.png",
    "news-2023-japan.png": "https://cantops.com/wp-content/uploads/2024/01/2023_SEMICON_JAPAN-705x705.png",
    "news-2023-sedex.png": "https://cantops.com/wp-content/uploads/2024/01/2023_SEDEX-705x705.png",
    "news-2023-taiwan.png": "https://cantops.com/wp-content/uploads/2024/01/2023_SEMICON_-TAIWAN-705x705.png",
    "news-2023-west.png": "https://cantops.com/wp-content/uploads/2024/01/2023_SEMICON_WEST-705x705.png",
    "news-2023-china.jpg": "https://cantops.com/wp-content/uploads/2023/07/SEMICON-China-2023-705x705.jpg",
    "news-tsinghua.png": "https://cantops.com/wp-content/uploads/2023/07/%EB%8C%80%ED%91%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B9%AD%ED%99%94%EB%8C%80-%EA%B8%B0%EB%85%90%EC%82%AC%EC%A7%84-705x705.png",
    "news-2023-korea.jpg": "https://cantops.com/wp-content/uploads/2023/01/SEMICON-Korea-2023.jpg",
    "news-2022-industry.jpg": "https://cantops.com/wp-content/uploads/2022/10/D.Ton2022.jpg",
    "news-2022-sedex.jpg": "https://cantops.com/wp-content/uploads/2022/10/SEDEX1.jpg",
    "news-2022-taiwan.jpg": "https://cantops.com/wp-content/uploads/2022/09/semi-1.jpg",
}


def main() -> None:
    target = Path(__file__).resolve().parents[1] / "public" / "assets"
    target.mkdir(parents=True, exist_ok=True)
    context = ssl._create_unverified_context()

    for name, url in ASSETS.items():
        destination = target / name
        if destination.exists() and destination.stat().st_size > 0:
            print(f"skip {name}")
            continue

        request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(request, context=context, timeout=60) as response:
            destination.write_bytes(response.read())
        print(f"saved {name} ({destination.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()

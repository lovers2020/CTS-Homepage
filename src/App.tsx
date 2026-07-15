import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { NewsSection } from "./components/NewsSection";
import { ProductShowcase } from "./components/ProductShowcase";
import {
  ContentPage,
  findNewsByPath,
  findProductByPath,
  isProductCategoryPath,
  NewsArchivePage,
  NewsDetailPage,
  ProductCatalogPage,
  ProductDetailPage,
} from "./components/RoutePages";
import { ScrollTop } from "./components/ScrollTop";
import { VideoSection } from "./components/VideoSection";
import { QualityPolicyPage } from "./components/QualityPolicyPage";

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <ProductShowcase />
      <ExpertiseSection />
      <VideoSection />
      <NewsSection />
    </main>
  );
}

function resolvePage(pathname: string) {
  if (pathname === "/") return <HomePage />;

  if (pathname === "/quality-policy/" || pathname === "/quality-policy") {
    return <QualityPolicyPage />;
  }

  const product = findProductByPath(pathname);
  if (product) return <ProductDetailPage product={product} />;

  if (isProductCategoryPath(pathname)) {
    return <ProductCatalogPage pathname={pathname} />;
  }

  if (pathname === "/exh/" || pathname === "/exh") return <NewsArchivePage />;

  const newsItem = findNewsByPath(pathname);
  if (newsItem) return <NewsDetailPage item={newsItem} />;

  return <ContentPage pathname={pathname} />;
}

export default function App() {
  const pathname = window.location.pathname;

  return (
    <>
      <Header />
      {resolvePage(pathname)}
      <Footer />
      <ScrollTop />
    </>
  );
}

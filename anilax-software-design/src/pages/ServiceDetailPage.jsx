import { Navigate, useParams } from "react-router-dom";
import { getAdjacentServices, getServiceDetail } from "../data/serviceLines";
import { BUSINESS_SOLUTIONS, PAYMENT_SOLUTIONS } from "../data/softwareServices";
import {
  ServiceDetailHero,
  renderServiceSection,
  ServiceCtaBlock,
  ServiceNavBlock,
} from "../components/service-detail/ServiceDetailSections";
import "../styles/marketing-hub.css";
import "../styles/service-detail.css";

const ALL_PRODUCTS = [...PAYMENT_SOLUTIONS, ...BUSINESS_SOLUTIONS];

export function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = getServiceDetail(serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const page = service.page;
  const { prev, next } = getAdjacentServices(serviceId);
  const related = ALL_PRODUCTS.filter((p) => service.relatedProducts?.includes(p.id)).slice(0, 6);
  const sectionProps = { service, page, related, prev, next };

  return (
    <div className={`hub-page service-detail service-detail--${page.theme}`}>
      <ServiceDetailHero service={service} page={page} />
      {page.sections.map((sectionKey) => renderServiceSection(sectionKey, sectionProps))}
      <ServiceNavBlock prev={prev} next={next} />
      <ServiceCtaBlock service={service} />
    </div>
  );
}

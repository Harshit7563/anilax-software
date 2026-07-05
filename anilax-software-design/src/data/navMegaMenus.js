import { BLOG_POSTS } from "./blogPosts";
import { INDUSTRIES } from "./industryPages";
import { SERVICE_LINES } from "./serviceLines";
import { BUSINESS_SOLUTIONS, PAYMENT_SOLUTIONS } from "./softwareServices";
import { STORIES } from "./stories";
import { TECH_CATEGORIES } from "./technologyStack";

function mapItems(items, hrefFn) {
  return items.map((item) => ({
    id: item.id,
    icon: item.icon ?? "•",
    title: item.title,
    tagline: item.tagline ?? item.desc ?? item.category ?? "",
    href: hrefFn(item),
  }));
}

export const NAV_MEGA_MENUS = [
  {
    id: "services",
    label: "Services",
    basePath: "/services",
    items: mapItems(SERVICE_LINES, (item) => `/services/${item.id}`),
  },
  {
    id: "software",
    label: "Software",
    basePath: "/software",
    items: mapItems(
      [...PAYMENT_SOLUTIONS, ...BUSINESS_SOLUTIONS],
      (item) => `/software/${item.id}`,
    ),
  },
  {
    id: "industries",
    label: "Industries",
    basePath: "/industries",
    items: mapItems(INDUSTRIES, (item) => `/industries/${item.id}`),
  },
  {
    id: "blog",
    label: "Blog",
    basePath: "/blog",
    items: BLOG_POSTS.slice(0, 12).map((post) => ({
      id: post.slug,
      icon: "📝",
      title: post.title,
      tagline: post.excerpt,
      href: `/blog/${post.slug}`,
    })),
  },
  {
    id: "stories",
    label: "Our Work",
    basePath: "/stories",
    items: STORIES.map((story) => ({
      id: story.id,
      icon: "★",
      title: story.title,
      tagline: story.category,
      href: "/stories",
    })),
  },
  {
    id: "technology",
    label: "Technology",
    basePath: "/technology",
    items: TECH_CATEGORIES.map((cat) => ({
      id: cat.id,
      icon: cat.icon,
      title: cat.title,
      tagline: cat.desc,
      href: `/technology#${cat.id}`,
    })),
  },
];

export const NAV_SIMPLE_LINKS = [{ label: "Company", to: "/company" }];

export function isMegaMenuActive(menu, pathname) {
  if (pathname === menu.basePath) return true;
  if (menu.id === "services") return pathname.startsWith("/services/");
  if (menu.id === "software") return pathname.startsWith("/software/");
  if (menu.id === "industries") return pathname.startsWith("/industries/");
  if (menu.id === "blog") return pathname.startsWith("/blog/");
  if (menu.id === "stories") return pathname === "/stories";
  if (menu.id === "technology") return pathname === "/technology";
  return false;
}

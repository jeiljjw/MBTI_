import { Link } from "@/src/i18n/routing";
import { ReactNode } from "react";

export type BlogArticleLayoutProps = {
  t: (key: string) => string;
  breadcrumbTitle: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  toc: { href: string; label: string }[];
  dateText: string;
  related: { href: string; title: string; subtitle: string }[];
  children: ReactNode;
  extraAfterContent?: ReactNode;
};

export function BlogArticleLayout({
  t,
  breadcrumbTitle,
  category,
  readTime,
  title,
  description,
  toc,
  dateText,
  related,
  children,
  extraAfterContent,
}: BlogArticleLayoutProps) {
  return (
    <>
      <nav className="text-sm text-gray-400 mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-white transition-colors">{t("home")}</Link></li>
          <li>&gt;</li>
          <li><Link href="/blog" className="hover:text-white transition-colors">{t("blog")}</Link></li>
          <li>&gt;</li>
          <li className="text-white">{breadcrumbTitle}</li>
        </ol>
      </nav>
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{category}</span>
          <span className="text-gray-500 text-sm">{readTime} {t("readTime")}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">{description}</p>
      </header>
      <div className="bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-10">
        <h2 className="text-lg font-bold text-white mb-4">{t("tocTitle")}</h2>
        <ul className="space-y-2 text-gray-400">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-white transition-colors">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="prose prose-invert prose-lg max-w-none">{children}</div>
      {extraAfterContent}
      <div className="border-t border-gray-800 pt-6 mb-10">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{t("writtenOn")}: {dateText}</span>
          <span>{t("category")}: {category}</span>
        </div>
      </div>
      <section className="mb-12">
        <h3 className="text-xl font-bold text-white mb-4">{t("relatedPosts")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {related.map((r) => (
            <Link key={r.href} href={r.href} className="group">
              <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:border-blue-400 transition-all">
                <h4 className="font-semibold text-white group-hover:text-blue-400 mb-1">{r.title}</h4>
                <p className="text-gray-400 text-sm">{r.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="text-center">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">{t("ctaTitle")}</h3>
          <p className="text-gray-400 mb-6">{t("ctaDescription")}</p>
          <Link href="/test">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              {t("ctaButton")}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

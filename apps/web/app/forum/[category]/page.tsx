import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ForumThreadCard from "@/components/ForumThreadCard";
import {
  CATEGORY_SLUGS,
  getCategoryBySlug,
  getThreadsByCategory,
} from "@/lib/forum";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return CATEGORY_SLUGS.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Forum Architectes Maroc | Bati.ma`,
    description: cat.description,
    openGraph: {
      title: `${cat.name} — Forum Bati.ma`,
      description: cat.description,
    },
    alternates: { canonical: `https://bati.ma/forum/${category}` },
  };
}

export default async function ForumCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const threads = getThreadsByCategory(category);
  const Icon = cat.icon;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-stone-500">
            <Link href="/" className="hover:text-stone-700">
              Accueil
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/forum" className="hover:text-stone-700">
              Forum
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-stone-900 font-medium">{cat.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Link
            href="/forum"
            className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-700 mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour au forum
          </Link>
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-stone-900">{cat.name}</h1>
              <p className="text-sm text-stone-500 mt-1">{cat.description}</p>
              <span className="text-xs text-stone-400 mt-2 inline-block">
                {cat.threadCount} discussions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Threads */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {threads.length > 0 ? (
            <div className="space-y-3">
              {threads.map((thread) => (
                <ForumThreadCard key={thread.id} thread={thread} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-sm mb-4">
                Aucune discussion dans cette catégorie pour le moment.
              </p>
              <Button variant="outline" size="sm" className="rounded-full" asChild>
                <Link href="/inscription-architecte">
                  Lancer la première discussion
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl bg-stone-100 p-8 text-center">
            <h2 className="text-lg font-bold text-stone-900 mb-2">
              Vous avez une question ?
            </h2>
            <p className="text-sm text-stone-500 mb-4 max-w-md mx-auto">
              Inscrivez-vous pour poser vos questions et échanger avec la
              communauté des architectes marocains.
            </p>
            <Button size="sm" className="rounded-full" asChild>
              <Link href="/inscription-architecte">
                Rejoindre la communauté
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

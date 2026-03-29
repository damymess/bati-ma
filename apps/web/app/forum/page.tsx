import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ForumThreadCard from "@/components/ForumThreadCard";
import { FORUM_CATEGORIES, getRecentThreads, FORUM_THREADS } from "@/lib/forum";

export const metadata: Metadata = {
  title: "Forum Architectes Maroc — Communauté Bati.ma",
  description:
    "Rejoignez la première communauté en ligne des architectes marocains. Discussions sur la réglementation, les techniques, les appels d'offres, le business et l'emploi dans le secteur de l'architecture au Maroc.",
  openGraph: {
    title: "Forum Architectes Maroc — Communauté Bati.ma",
    description:
      "La communauté en ligne des architectes marocains : réglementation, techniques, appels d'offres, business et emploi.",
  },
  alternates: { canonical: "https://bati.ma/forum" },
};

export default function ForumPage() {
  const recentThreads = getRecentThreads(6);
  const totalThreads = FORUM_THREADS.length;

  const forumSchema = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    name: "Forum Architectes Maroc — Bati.ma",
    description:
      "Communauté en ligne des architectes marocains pour échanger sur la profession, les marchés publics et les techniques de construction.",
    url: "https://bati.ma/forum",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(forumSchema) }}
      />

      {/* Hero */}
      <section className="bg-stone-950 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6">
            <Users className="h-4 w-4 text-[#b5522a]" />
            <span className="text-xs font-medium text-stone-300">
              Communauté Bati.ma
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Le forum des architectes{" "}
            <span className="text-[#b5522a]">au Maroc</span>
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Échangez avec vos confrères sur la réglementation, les techniques,
            les appels d&apos;offres et le business. La première communauté
            dédiée aux architectes marocains.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4" />
              {totalThreads} discussions
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              {FORUM_CATEGORIES.reduce((a, c) => a + c.threadCount, 0)}{" "}
              sujets au total
            </span>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-bold text-stone-900 mb-6">
            Catégories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FORUM_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.slug} href={`/forum/${cat.slug}`}>
                  <Card className="h-full transition-all hover:border-[#b5522a]/30 hover:shadow-sm cursor-pointer">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${cat.color}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-stone-900 mb-1">
                            {cat.name}
                          </h3>
                          <p className="text-xs text-stone-500 line-clamp-2 mb-2">
                            {cat.description}
                          </p>
                          <span className="text-[10px] text-stone-400">
                            {cat.threadCount} discussions
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Discussions récentes */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-stone-900">
              Discussions récentes
            </h2>
          </div>
          <div className="space-y-3">
            {recentThreads.map((thread) => (
              <ForumThreadCard key={thread.id} thread={thread} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl bg-stone-950 p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Rejoignez la communauté
            </h2>
            <p className="text-stone-400 text-sm max-w-md mx-auto mb-6">
              Inscrivez-vous gratuitement pour participer aux discussions,
              poser vos questions et partager votre expertise.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="/inscription-architecte">
                S&apos;inscrire gratuitement{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

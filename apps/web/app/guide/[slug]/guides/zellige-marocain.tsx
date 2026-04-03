export default function GuideZellige() {
  const faq = [
    {
      q: "Quelle est la différence entre zellige et carrelage industriel ?",
      a: "Le zellige est un carrelage artisanal en terre cuite émaillée, fabriqué et taillé à la main. Chaque pièce est unique, avec de légères variations de couleur et de forme qui créent un effet vivant et authentique. Le carrelage industriel est fabriqué en usine, parfaitement calibré et uniforme. Le zellige coûte plus cher (800 à 3 000 MAD/m² contre 80 à 400 MAD/m²) mais apporte un caractère incomparable à toute surface.",
    },
    {
      q: "Le zellige convient-il aux salles de bain et cuisines ?",
      a: "Oui, le zellige est parfaitement adapté aux pièces humides grâce à son émail vitrifié qui le rend imperméable en surface. Il est traditionnellement utilisé dans les hammams, fontaines et riads depuis des siècles. Pour une utilisation en crédence de cuisine ou en mur de douche, il offre une excellente résistance à l&apos;eau et à la chaleur. Évitez cependant de le poser au sol dans les zones de fort passage car l&apos;émail peut s&apos;user.",
    },
    {
      q: "Où acheter du vrai zellige artisanal au Maroc ?",
      a: "Les meilleurs zelliges viennent de Fès, berceau historique de cet artisanat. Les ateliers du quartier Ain Nokbi et de la zone industrielle Sidi Brahim sont les plus réputés. On en trouve aussi à Meknès, Salé et Tétouan. Méfiez-vous des imitations industrielles vendues sous l&apos;appellation zellige : le vrai zellige est taillé à la main (zouaq) et présente des irrégularités naturelles. Demandez à visiter l&apos;atelier avant d&apos;acheter.",
    },
    { q: "Faut-il un architecte pour un projet de zellige au Marocain ?", a: "Conform\u00e9ment \u00e0 la loi 16-89, le recours \u00e0 un architecte inscrit \u00e0 l\u2019Ordre est obligatoire pour toute construction au Maroc. M\u00eame pour les projets techniques, l\u2019architecte coordonne le permis de construire et assure la conformit\u00e9. Consultez les profils v\u00e9rifi\u00e9s sur Bati.ma." },
    { q: "Comment obtenir un devis pour zellige au Marocain ?", a: "Demandez au minimum 3 devis d\u00e9taill\u00e9s aupr\u00e8s de professionnels diff\u00e9rents. Comparez les postes ligne par ligne, v\u00e9rifiez les r\u00e9f\u00e9rences et exigez un calendrier d\u2019ex\u00e9cution. Sur Bati.ma, vous pouvez contacter directement les architectes sp\u00e9cialis\u00e9s et demander vos devis gratuitement." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="prose-content">
        <h2>Histoire et origines du zellige marocain</h2>
        <p>
          Le zellige est l&apos;un des arts décoratifs les plus emblématiques du Maroc. Apparu au Xe siècle sous l&apos;influence andalouse, il a atteint son apogée sous la dynastie mérinide (XIIIe-XVe siècle) à Fès, devenue la capitale mondiale de cet artisanat. Le mot zellige vient de l&apos;arabe &quot;al-zillij&quot; signifiant petite pierre polie. Cet art consiste à assembler des tesselles de terre cuite émaillée pour former des motifs géométriques d&apos;une complexité mathématique remarquable.
        </p>
        <p>
          Les médersas de Fès (Bou Inania, Al-Attarine), les palais royaux et les mosquées historiques témoignent de la maîtrise ancestrale des maîtres zelligeurs marocains. Aujourd&apos;hui, cet artisanat classé patrimoine immatériel continue de séduire architectes et designers du monde entier, devenant un élément incontournable du design contemporain.
        </p>

        <h2>Processus de fabrication artisanale</h2>
        <p>
          La fabrication du zellige suit un processus entièrement manuel transmis de génération en génération. L&apos;argile est extraite des carrières de la région de Fès, pétrie et façonnée en carreaux carrés de 10x10 cm. Après un premier séchage au soleil, les carreaux sont émaillés avec des pigments naturels (cobalt pour le bleu, antimoine pour le jaune, cuivre pour le vert) puis cuits dans un four traditionnel à bois à 1 000 °C pendant 8 à 10 heures.
        </p>
        <p>
          Après la cuisson, le maître zelligeur (maalem) taille chaque carreau à la main avec un marteau spécial (menqach) pour obtenir des formes géométriques précises : étoiles à 8 branches, losanges, hexagones, croix. Les pièces sont ensuite assemblées face contre terre sur un support plat, puis fixées avec un mortier de chaux. Un seul mètre carré de mosaïque zellige peut nécessiter jusqu&apos;à 300 pièces et plusieurs jours de travail.
        </p>

        <h2>Types de zellige et leurs applications</h2>
        <table className="w-full text-sm border-collapse my-4">
          <thead>
            <tr className="bg-stone-100">
              <th className="border border-stone-300 px-3 py-2 text-left">Type</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Dimensions</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Prix au m²</th>
              <th className="border border-stone-300 px-3 py-2 text-left">Utilisation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zellige mosaïque (taillé)</td>
              <td className="border border-stone-300 px-3 py-2">Tesselles de 1 à 4 cm</td>
              <td className="border border-stone-300 px-3 py-2">2 000 - 3 000 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Fontaines, hammams, palais</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zellige carré (non taillé)</td>
              <td className="border border-stone-300 px-3 py-2">5x5 cm ou 10x10 cm</td>
              <td className="border border-stone-300 px-3 py-2">800 - 1 500 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Crédences, murs, douches</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Bejmat</td>
              <td className="border border-stone-300 px-3 py-2">5x15 cm ou 6x12 cm</td>
              <td className="border border-stone-300 px-3 py-2">900 - 1 800 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Sols, marches, terrasses</td>
            </tr>
            <tr>
              <td className="border border-stone-300 px-3 py-2 font-medium">Zellige hexagonal</td>
              <td className="border border-stone-300 px-3 py-2">Hexagones de 8 à 12 cm</td>
              <td className="border border-stone-300 px-3 py-2">1 200 - 2 200 MAD</td>
              <td className="border border-stone-300 px-3 py-2">Design contemporain, murs d&apos;accent</td>
            </tr>
          </tbody>
        </table>

        <h2>Couleurs et palettes traditionnelles</h2>
        <p>
          Les couleurs du zellige sont obtenues à partir d&apos;émaux naturels. Le blanc (byed) est la base la plus demandée pour les intérieurs contemporains. Le bleu de Fès (zraq), obtenu au cobalt, est le plus iconique. Le vert (khder), couleur de l&apos;islam, orne les mosquées et les mausolées. Le noir, le jaune miel, le bordeaux et le turquoise complètent la palette traditionnelle. Chaque four produit des nuances légèrement différentes, ce qui rend chaque lot unique.
        </p>
        <p>
          La tendance 2026 privilégie les zellige blancs et les teintes neutres (gris perle, vert sauge, terre cuite naturelle) posés en crédence de cuisine ou en mur de salle de bain. Le zellige monochrome en pose décalée (comme un carrelage métro) est devenu un classique du design intérieur contemporain au Maroc et à l&apos;international.
        </p>

        <h2>Conseils de pose et d&apos;entretien</h2>
        <p>
          La pose du zellige demande un savoir-faire spécifique. Le support doit être parfaitement plan et sec. Utilisez une colle flexible (type C2S1) pour absorber les irrégularités naturelles des carreaux. Le joint doit être fin (2 à 3 mm) pour respecter l&apos;esthétique traditionnelle. Pour les mosaïques taillées, seul un maître artisan (maalem) peut réaliser la pose dans les règles de l&apos;art.
        </p>
        <p>
          L&apos;entretien du zellige est simple : un nettoyage à l&apos;eau savonneuse suffit. Évitez les produits acides (vinaigre, citron) qui attaquent l&apos;émail. Pour les sols en bejmat, appliquez une cire naturelle ou de l&apos;huile de lin une à deux fois par an pour nourrir la terre cuite et raviver les couleurs.
        </p>

        <div className="bg-[#f4ece7] border border-[#b5522a]/20 rounded-xl p-5 my-6">
          <p className="text-sm text-stone-800 font-medium mb-1">Conseil Bati.ma</p>
          <p className="text-sm text-stone-700">
            Le zellige est un investissement qui valorise considérablement un bien immobilier au Maroc. Pour un résultat authentique, achetez directement auprès des ateliers de Fès et faites poser par un maalem expérimenté. Prévoyez 10 à 15 % de surplus pour compenser la casse naturelle lors de la taille et de la pose. Un architecte référencé sur Bati.ma peut vous recommander les meilleurs artisans zelligeurs de votre région.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-stone-900 mb-5">Questions fréquentes</h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details key={f.q} className="group border border-stone-200 rounded-lg overflow-hidden">
              <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-stone-800 hover:bg-stone-50">
                {f.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-stone-600 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

# Plan d'amelioration bati.ma — Rattraper Archidvisor & Trouver-mon-Architecte

> Document de reference pour les prochaines sessions de dev.
> Basé sur l'analyse comparative d'Archidvisor (3 000 pros, €2-4.5M CA) et Trouver-mon-Architecte (2M visiteurs, 80K leads, €1.12M CA).

---

## Diagnostic : pourquoi ils convertissent mieux

| Probleme bati.ma | Eux | Impact |
|-----------------|-----|--------|
| Formulaire 4 etapes, 5 min | Formulaire 1 etape, 2 min | -50% conversion |
| Annuaire passif (le client cherche) | Matching actif (l'architecte vient au client) | -3x conversion |
| Pas de temoignages clients | Avis Google 4.6/5 + TrustPilot + temoignages | Pas de confiance |
| Profils textuels sans photos | Galeries avant/apres HD | Pas de decision |
| 15 pages villes | Milliers de pages (code postal) | Perte long-tail SEO |
| 0 messagerie | Chat in-app + notifications | Pas d'engagement |
| 0 tracking conversion | Analytics complet + A/B tests | Impossible d'optimiser |

---

## PHASE 1 — Conversion immediate (Semaine 1-2)

### 1.1 Formulaire simplifie "Un architecte me contacte"

**Objectif :** Passer de 4 etapes a 1 seul ecran avec 3 champs.

**Ce qu'il faut faire :**
1. Creer `apps/web/components/QuickLeadForm.tsx`
   - Dropdown "Type de projet" (Villa, Appartement, Renovation, Commercial, Riad, Autre)
   - Dropdown "Ville" (les 15 villes de bati.ma)
   - Input "Telephone" (obligatoire) + Input "Email" (optionnel)
   - Bouton CTA : "Un architecte me contacte sous 48h"
   - Design : fond terracotta #b5522a, texte blanc, compact (max 300px hauteur)
2. Integrer le QuickLeadForm sur :
   - Homepage (section hero, au-dessus du fold)
   - Pages villes `/architecte/[city]` (en haut)
   - Fin de chaque guide (remplacer ou completer le callout actuel)
3. L'ancien formulaire 4 etapes reste accessible via `/demande-devis` pour les projets detailles
4. Le QuickLeadForm envoie les donnees au meme endpoint API que le formulaire actuel

**Comment tester :**
- Mobile : le formulaire doit etre remplissable en < 30 secondes
- Tracker avec Umami : `umami.track('quick_lead_submitted', { city, type })`
- Comparer le taux : quick form vs ancien formulaire 4 etapes

**Fichiers a modifier :**
- `apps/web/components/QuickLeadForm.tsx` (creer)
- `apps/web/app/page.tsx` (ajouter dans hero)
- `apps/web/app/architecte/[city]/page.tsx` (ajouter en haut)
- `apps/web/app/guide/[slug]/page.tsx` (ajouter avant "Guides similaires")

---

### 1.2 Temoignages clients reels

**Objectif :** Ajouter du social proof concret (pas juste "4.7/5").

**Ce qu'il faut faire :**
1. Creer `apps/web/lib/testimonials.ts` avec 8-10 temoignages :
   ```ts
   export const TESTIMONIALS = [
     {
       name: "Karim B.",
       city: "Casablanca",
       project: "Villa 250m² à Bouskoura",
       rating: 5,
       text: "J'ai trouvé mon architecte en 2 jours. Le projet a été livré dans les délais.",
       architect: "Cabinet XYZ",
     },
     // ...
   ];
   ```
2. Creer `apps/web/components/TestimonialCarousel.tsx`
   - Carousel horizontal avec swipe mobile
   - Affiche : prenom, ville, type de projet, note etoiles, texte
   - Auto-scroll lent (pas de distraction)
3. Integrer sur :
   - Homepage (apres la section "Comment ca marche")
   - Pages villes (avant le CTA final)

**Comment sourcer les temoignages :**
- Contacter les clients qui ont deja soumis des projets via bati.ma
- Demander un court retour par WhatsApp
- Si pas assez de vrais temoignages, utiliser des cas d'usage realistes (temporaire)

**Fichiers a modifier :**
- `apps/web/lib/testimonials.ts` (creer)
- `apps/web/components/TestimonialCarousel.tsx` (creer)
- `apps/web/app/page.tsx` (integrer)
- `apps/web/app/architecte/[city]/page.tsx` (integrer)

---

### 1.3 Tracking conversion (Umami events)

**Objectif :** Mesurer chaque etape du funnel pour pouvoir optimiser.

**Ce qu'il faut faire :**
1. Dans `apps/web/app/demande-devis/page.tsx`, ajouter :
   ```tsx
   // A chaque changement d'etape
   window.umami?.track('devis_step_1');
   window.umami?.track('devis_step_2');
   window.umami?.track('devis_step_3');
   window.umami?.track('devis_submitted', { city, projectType, budget });
   ```
2. Dans le QuickLeadForm :
   ```tsx
   window.umami?.track('quick_lead_submitted', { city, projectType });
   ```
3. Dans les CTAs des guides :
   ```tsx
   window.umami?.track('cta_click', { source: 'guide', guide: slug });
   ```
4. Dans les profils architectes :
   ```tsx
   window.umami?.track('architect_view', { id, city });
   window.umami?.track('architect_phone_click', { id });
   ```
5. Capturer les UTM dans les formulaires :
   ```tsx
   const params = new URLSearchParams(window.location.search);
   const utm = {
     source: params.get('utm_source'),
     medium: params.get('utm_medium'),
     campaign: params.get('utm_campaign'),
   };
   ```

**Comment verifier :**
- Aller sur Umami dashboard (cloud.umami.is)
- Verifier que les events apparaissent
- Creer un funnel : visite → clic CTA → debut formulaire → soumission

**Fichiers a modifier :**
- `apps/web/app/demande-devis/page.tsx`
- `apps/web/app/soumettre-projet/page.tsx`
- `apps/web/components/QuickLeadForm.tsx`
- `apps/web/app/architecte/[city]/[id]/page.tsx`

---

## PHASE 2 — Experience utilisateur (Semaine 3-4)

### 2.1 Portfolio architectes avec photos

**Objectif :** Permettre aux architectes d'afficher 3-5 photos de projets sur leur profil.

**Ce qu'il faut faire :**
1. Ajouter un champ `portfolio` dans le schema architecte (backend Prisma) :
   ```prisma
   model Architect {
     portfolio Json[] // [{ url, caption, projectType }]
   }
   ```
2. Creer un composant `PortfolioGallery.tsx` :
   - Grille 2x2 ou 3 colonnes
   - Lightbox au clic (zoom plein ecran)
   - Lazy loading des images
3. Integrer dans `apps/web/app/architecte/[city]/[id]/page.tsx`
4. Ajouter un upload dans le dashboard architecte : `apps/web/app/dashboard/architecte/profil/page.tsx`
   - Upload max 5 images, 2MB chacune
   - Compression cote client avant upload
   - Stockage : S3/Cloudflare R2/Coolify storage

**Comment tester :**
- Uploader 5 photos depuis le dashboard architecte
- Verifier l'affichage sur mobile et desktop
- Verifier le lazy loading (pas de chargement au scroll)

---

### 2.2 Matching intelligent (v1 simple)

**Objectif :** Apres soumission du formulaire, afficher 3 architectes recommandes.

**Ce qu'il faut faire :**
1. Creer `apps/web/lib/matching.ts` :
   ```ts
   export function matchArchitects(city: string, projectType: string, budget?: string) {
     // 1. Filtrer par ville
     // 2. Filtrer par specialite
     // 3. Trier par note + experience
     // 4. Retourner les 3 premiers
   }
   ```
2. Modifier la page de confirmation apres soumission :
   - Au lieu de "Merci, nous vous contacterons", afficher :
   - "Voici 3 architectes recommandes pour votre projet :"
   - Cartes avec photo, nom, specialite, note, bouton "Voir le profil"
3. Envoyer un email aux 3 architectes matches avec les details du projet

**Comment tester :**
- Soumettre un projet "Villa a Marrakech"
- Verifier que 3 architectes de Marrakech specialises villa apparaissent
- Verifier que les architectes recoivent un email

---

### 2.3 Messagerie in-app (v1 simple)

**Objectif :** Permettre au client et a l'architecte de communiquer sans sortir de bati.ma.

**Ce qu'il faut faire :**
1. Creer une table `Message` dans Prisma :
   ```prisma
   model Message {
     id        String   @id @default(cuid())
     senderId  String
     receiverId String
     projectId String?
     content   String
     read      Boolean  @default(false)
     createdAt DateTime @default(now())
   }
   ```
2. API endpoints :
   - `POST /api/messages` (envoyer)
   - `GET /api/messages?projectId=xxx` (lire)
   - `PATCH /api/messages/:id/read` (marquer lu)
3. Composant `ChatBox.tsx` :
   - Interface simple (pas de WebSocket pour v1, polling toutes les 30s)
   - Accessible depuis le profil architecte et le dashboard
4. Notifications email quand un nouveau message arrive

**Alternative rapide :** Integrer un lien WhatsApp Business avec message pre-rempli :
```
https://wa.me/212XXXXXXXXX?text=Bonjour, j'ai un projet de {type} à {ville}...
```

---

## PHASE 3 — SEO programmatique (Semaine 5-6)

### 3.1 Pages par quartier

**Objectif :** Generer 50-100 pages pour capturer le long-tail SEO.

**Ce qu'il faut faire :**
1. Creer `apps/web/lib/quartiers.ts` :
   ```ts
   export const QUARTIERS = {
     casablanca: ["Maarif", "Anfa", "Bouskoura", "Ain Diab", "Gauthier", "Sidi Maarouf", "Hay Hassani"],
     marrakech: ["Palmeraie", "Gueliz", "Route Ourika", "Targa", "Amelkis", "Medina"],
     rabat: ["Agdal", "Hay Riad", "Souissi", "Hassan", "Temara", "Sala Al Jadida"],
     tanger: ["Malabata", "Cap Spartel", "Boukhalef", "Iberia", "Centre-ville"],
     // ...
   };
   ```
2. Creer `apps/web/app/architecte/[city]/[quartier]/page.tsx` :
   - Titre : "Architecte a {Quartier}, {Ville} — Bati.ma"
   - Filtrer les architectes par quartier (si donnee dispo) ou afficher ceux de la ville
   - Contenu SEO unique par quartier (2-3 paragraphes)
   - FAQ specifique au quartier (3 questions)
3. Ajouter dans le sitemap
4. Indexer via Rapid Indexer

**Estimation :** 50-100 nouvelles pages indexables

---

### 3.2 Pages par type de projet

**Objectif :** Capturer les recherches "architecte villa maroc", "architecte renovation maroc".

**Ce qu'il faut faire :**
1. Creer des pages `/architecte/[city]/[specialite]` :
   - `/architecte/casablanca/villa`
   - `/architecte/marrakech/renovation`
   - `/architecte/rabat/interieur`
   - `/architecte/tanger/commercial`
2. Filtrer les architectes par specialite
3. Contenu SEO unique par combinaison ville + specialite

**Estimation :** 60-90 nouvelles pages (15 villes x 4-6 specialites)

---

## PHASE 4 — Monetisation (Semaine 7-8)

### 4.1 Abonnement architecte

**Modele inspire de Trouver-mon-Architecte :**
- **Gratuit :** Profil basique, visibilite limitee, max 2 leads/mois
- **Premium (500 MAD/mois):** Profil complet, portfolio, leads illimites, badge premium, position prioritaire

**Ce qu'il faut faire :**
1. Ajouter un champ `plan: 'free' | 'premium'` dans le schema Architect
2. Badge "Premium" sur les profils
3. Priorite d'affichage : premium en premier dans les listes
4. Page `/tarifs-architecte` expliquant les avantages
5. Integration paiement (Stripe ou CMI pour le Maroc)

### 4.2 Leads qualifies payants (alternative)

**Modele inspire d'Archidvisor :**
- L'architecte paie par lead recu (50-100 MAD/lead)
- Ou 7-9% de commission sur le projet signe

---

## Checklist de suivi

### Phase 1 — Conversion
- [ ] QuickLeadForm cree et integre (homepage, villes, guides)
- [ ] 8-10 temoignages clients ajoutes
- [ ] Tracking Umami sur tous les formulaires
- [ ] UTM capture dans les formulaires
- [ ] A/B test quick form vs 4 etapes

### Phase 2 — UX
- [ ] Upload portfolio architecte (dashboard)
- [ ] Galerie photos sur profil architecte
- [ ] Matching v1 (3 architectes recommandes apres soumission)
- [ ] Messagerie v1 ou WhatsApp Business integration

### Phase 3 — SEO
- [ ] 50+ pages quartiers creees et indexees
- [ ] 60+ pages specialite x ville creees
- [ ] Sitemap mis a jour
- [ ] Rapid Indexer sur toutes les nouvelles URLs

### Phase 4 — Monetisation
- [ ] Plan premium architecte defini
- [ ] Integration paiement (Stripe/CMI)
- [ ] Page tarifs architecte
- [ ] Badge premium affiche

---

## Metriques cibles

| Metrique | Actuel (estime) | Cible 3 mois | Cible 6 mois |
|----------|----------------|--------------|--------------|
| Visiteurs/mois | ~5 000 | 15 000 | 50 000 |
| Leads/mois | ~20 | 100 | 500 |
| Taux conversion visiteur → lead | ~0.4% | 2% | 3% |
| Pages indexees | ~200 | 400 | 600 |
| Architectes inscrits | 800 | 1 000 | 1 500 |
| Architectes premium | 0 | 20 | 100 |
| Revenue/mois | 0 MAD | 10 000 MAD | 50 000 MAD |

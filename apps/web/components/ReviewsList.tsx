import { Star, ShieldCheck } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:9000";

type Review = {
  id: string;
  client_name: string;
  rating: number;
  title: string | null;
  comment: string;
  photos: string[];
  is_verified: boolean;
  created_at: string;
};

type ReviewsResponse = {
  reviews: Review[];
  count: number;
  average_rating: number;
  distribution: Record<string, number>;
};

async function fetchReviews(architectId: string): Promise<ReviewsResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/store/reviews/architect/${architectId}?limit=20`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function StarBar({ rating, count, total }: { rating: number; count: number; total: number }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-stone-500 w-4">{rating}</span>
      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
      <div className="flex-1 bg-stone-100 rounded-full h-1.5">
        <div
          className="bg-yellow-400 rounded-full h-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-stone-400 w-8 text-right">{count}</span>
    </div>
  );
}

export default async function ReviewsList({ architectId }: { architectId: string }) {
  const data = await fetchReviews(architectId);

  if (!data || data.count === 0) {
    return (
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 text-center">
        <p className="text-sm text-stone-500">
          Aucun avis pour le moment. Soyez le premier à partager votre expérience !
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Résumé */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="text-center sm:text-left">
          <div className="text-4xl font-bold text-stone-900 mb-1">{data.average_rating.toFixed(1)}</div>
          <div className="flex items-center gap-0.5 justify-center sm:justify-start mb-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className={`h-4 w-4 ${
                  n <= Math.round(data.average_rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-stone-200"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-stone-500">
            {data.count} avis vérifié{data.count > 1 ? "s" : ""}
          </p>
        </div>
        <div className="space-y-1">
          {[5, 4, 3, 2, 1].map((r) => (
            <StarBar key={r} rating={r} count={data.distribution[r] || 0} total={data.count} />
          ))}
        </div>
      </div>

      {/* Liste */}
      <div className="space-y-3">
        {data.reviews.map((review) => (
          <div key={review.id} className="bg-white border border-stone-200 rounded-xl p-5">
            <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-stone-900 text-sm">{review.client_name}</span>
                  {review.is_verified && (
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">
                      <ShieldCheck className="h-3 w-3" />
                      Client vérifié
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      className={`h-3.5 w-3.5 ${
                        n <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-stone-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-stone-400">
                {new Date(review.created_at).toLocaleDateString("fr-MA", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            {review.title && (
              <p className="font-medium text-stone-800 text-sm mb-1">{review.title}</p>
            )}
            <p className="text-sm text-stone-600 leading-relaxed">{review.comment}</p>
            {review.photos && review.photos.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {review.photos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`Photo avis ${i + 1}`}
                    className="h-20 w-20 object-cover rounded-lg border border-stone-200"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

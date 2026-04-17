import { CheckCircle2, Circle } from "lucide-react";

type Status = "submitted" | "viewed" | "quoted" | "accepted" | "completed" | "rejected";

type Props = {
  status: string;
  createdAt: string;
  updatedAt?: string;
};

const STEPS: { key: Status; label: string }[] = [
  { key: "submitted", label: "Demande soumise" },
  { key: "viewed", label: "Vu par les architectes" },
  { key: "quoted", label: "Devis envoyé(s)" },
  { key: "accepted", label: "Devis accepté" },
  { key: "completed", label: "Projet terminé" },
];

const STATUS_ORDER: Record<string, number> = {
  submitted: 1,
  viewed: 2,
  quoted: 3,
  accepted: 4,
  completed: 5,
  rejected: 0,
};

export default function ProjectStatusTimeline({ status, createdAt, updatedAt }: Props) {
  const currentOrder = STATUS_ORDER[status] ?? 1;
  const isRejected = status === "rejected";

  return (
    <div className="space-y-1">
      {STEPS.map((step, i) => {
        const stepOrder = STATUS_ORDER[step.key];
        const isDone = stepOrder <= currentOrder;
        const isCurrent = step.key === status;

        return (
          <div key={step.key} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              {isDone ? (
                <CheckCircle2
                  className={`h-5 w-5 ${isCurrent ? "text-[#b5522a]" : "text-green-500"}`}
                />
              ) : (
                <Circle className="h-5 w-5 text-stone-300" />
              )}
              {i < STEPS.length - 1 && (
                <div
                  className={`w-0.5 h-6 mt-0.5 ${
                    stepOrder < currentOrder ? "bg-green-300" : "bg-stone-200"
                  }`}
                />
              )}
            </div>
            <div className="pb-3 pt-0.5">
              <p
                className={`text-sm ${
                  isDone
                    ? isCurrent
                      ? "font-semibold text-stone-900"
                      : "text-stone-700"
                    : "text-stone-400"
                }`}
              >
                {step.label}
              </p>
              {isCurrent && updatedAt && (
                <p className="text-xs text-stone-400 mt-0.5">
                  {new Date(updatedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
              {step.key === "submitted" && (
                <p className="text-xs text-stone-400 mt-0.5">
                  {new Date(createdAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              )}
            </div>
          </div>
        );
      })}

      {isRejected && (
        <div className="mt-2 rounded-lg bg-red-50 border border-red-200 p-2 text-xs text-red-700">
          Demande refusée — contactez-nous pour relancer
        </div>
      )}
    </div>
  );
}

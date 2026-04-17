import { Badge } from "@/components/ui/badge";
import { getLeadTypeLabel } from "@/lib/admin-constants";

type Props = {
  leadType: string | null | undefined;
  className?: string;
};

export default function LeadTypeBadge({ leadType, className = "" }: Props) {
  const cfg = getLeadTypeLabel(leadType);
  return (
    <Badge className={`text-xs ${cfg.color} border ${className}`}>
      <span>{cfg.emoji}</span>
      <span className="ml-1">{cfg.label}</span>
    </Badge>
  );
}

import { Badge } from "@/components/ui/badge";
import { getStatusLabel } from "@/lib/admin-constants";

type Props = {
  status: string | null | undefined;
  className?: string;
};

export default function StatusBadge({ status, className = "" }: Props) {
  const cfg = getStatusLabel(status);
  return <Badge className={`text-xs ${cfg.color} ${className}`}>{cfg.label}</Badge>;
}

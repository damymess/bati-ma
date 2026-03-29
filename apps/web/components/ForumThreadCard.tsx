import Link from "next/link";
import { MessageSquare, Eye, Pin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ForumThread } from "@/lib/forum";

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "aujourd'hui";
  if (days === 1) return "hier";
  if (days < 7) return `il y a ${days}j`;
  return `il y a ${Math.floor(days / 7)} sem.`;
}

export default function ForumThreadCard({ thread }: { thread: ForumThread }) {
  return (
    <Link
      href={`/forum/${thread.category}`}
      className="group flex items-start gap-4 rounded-xl border border-stone-200 bg-white p-4 transition-all hover:border-[#b5522a]/30 hover:shadow-sm"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {thread.pinned && (
            <Pin className="h-3.5 w-3.5 text-[#b5522a] flex-shrink-0" />
          )}
          <h3 className="text-sm font-medium text-stone-900 group-hover:text-[#b5522a] transition-colors line-clamp-2">
            {thread.title}
          </h3>
        </div>
        <p className="text-xs text-stone-500">
          {thread.author}{" "}
          <span className="text-stone-400">· {thread.authorRole}</span>
        </p>
      </div>
      <div className="flex flex-shrink-0 items-center gap-3 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <MessageSquare className="h-3.5 w-3.5" />
          {thread.replies}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="h-3.5 w-3.5" />
          {thread.views}
        </span>
        <Badge variant="secondary" className="text-[10px]">
          {timeAgo(thread.lastActivity)}
        </Badge>
      </div>
    </Link>
  );
}

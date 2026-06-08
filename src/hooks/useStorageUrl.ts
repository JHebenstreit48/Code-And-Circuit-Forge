import { useEffect, useState } from "react";
import { portfolioAdapter } from "@/lib/Firebase/portfolioAdapter";

export function useStorageUrl(path: string | undefined) {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!path) {
      setLoading(false);
      return;
    }
    portfolioAdapter
      .getImageUrl(path)
      .then(setUrl)
      .catch(() => setUrl(null))
      .finally(() => setLoading(false));
  }, [path]);

  return { url, loading };
}
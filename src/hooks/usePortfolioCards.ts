import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Firebase/client";
import { IPortfolioCard } from "@/types/portfolio";

export function usePortfolioCards() {
  const [cards, setCards] = useState<IPortfolioCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const snap = await getDocs(collection(db, "portfolio"));
        const flattened = snap.docs.flatMap(
          (doc) => (doc.data().projects ?? []) as IPortfolioCard[]
        );
        setCards(flattened);
      } catch (e) {
        console.error("Failed to fetch portfolio cards:", e);
        setError("Failed to load portfolio");
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  return { cards, loading, error };
}
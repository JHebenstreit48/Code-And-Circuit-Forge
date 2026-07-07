import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/Firebase/client";
import { Featured } from "@/types/featuredProjects/featuredProjects";

export function useFeaturedProjects() {
  const [projects, setProjects] = useState<Featured[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const snap = await getDocs(collection(db, "projects"));
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Featured[];
        setProjects(data);
      } catch (e) {
        console.error("Failed to fetch projects:", e);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return { projects, loading, error };
}
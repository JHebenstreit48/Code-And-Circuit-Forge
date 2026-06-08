import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/Firebase/client";

type ResourceMap = Record<string, { label: string; url: string }[]>;

const RESOURCES_DOCS = ["webDev", "mobileDev", "gameDev", "networking", "sharedTools"];

export function useSkillsResources() {
  const [resources, setResources] = useState<ResourceMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResources() {
      try {
        const merged: ResourceMap = {};

        for (const id of RESOURCES_DOCS) {
          const snap = await getDoc(doc(db, "resources", id));
          if (!snap.exists()) continue;
          Object.assign(merged, snap.data());
        }

        setResources(merged);
      } catch (e) {
        console.error("Failed to fetch resources:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchResources();
  }, []);

  return { resources, loading };
}
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/Firebase/client";
import { skillIcons } from "@/data/skillsIcons";
import type { SkillSection } from "@/components/ResumeSkills/Skills";

const SKILLS_DOCS = ["webDev", "mobileDev", "gameDev", "networking", "sharedTools"];

export function useSkills() {
  const [sections, setSections] = useState<SkillSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const results: SkillSection[] = [];

        for (const id of SKILLS_DOCS) {
          const snap = await getDoc(doc(db, "skills", id));
          if (!snap.exists()) continue;

          const data = snap.data() as SkillSection;

          const hydratedSubcategories = data.subcategories.map((sub) => {
            if (sub.type === "proficiency") {
              return {
                ...sub,
                skills: sub.skills.map((skill) => ({
                  ...skill,
                  icon: skillIcons[skill.name] ?? null,
                  children: skill.children?.map((child) => ({
                    ...child,
                    icon: skillIcons[child.name] ?? null,
                  })),
                })),
              };
            }
            if (sub.type === "tools") {
              const hydratedLevels: typeof sub.toolsByLevel = {};
              for (const [level, tools] of Object.entries(sub.toolsByLevel)) {
                hydratedLevels[level as keyof typeof sub.toolsByLevel] = tools?.map(
                  (tool) => ({
                    ...tool,
                    icon: skillIcons[tool.name] ?? null,
                  })
                );
              }
              return { ...sub, toolsByLevel: hydratedLevels };
            }
            return sub;
          });

          results.push({ ...data, subcategories: hydratedSubcategories });
        }

        setSections(results);
      } catch (e) {
        console.error("Failed to fetch skills:", e);
        setError("Failed to load skills");
      } finally {
        setLoading(false);
      }
    }
    fetchSkills();
  }, []);

  return { sections, loading, error };
}
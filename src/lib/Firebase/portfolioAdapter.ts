import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/Firebase/client";
import { Featured } from "@/types/featuredProjects/featuredProjects";
import { IPortfolioCard } from "@/types/portfolio";

export type ResourceMap = Record<string, { label: string; url: string }[]>;

export class PortfolioAdapter {
  async getFeaturedProjects(): Promise<Featured[]> {
    const snap = await getDocs(collection(db, "projects"));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() })) as Featured[];
  }

  async getPortfolioCards(): Promise<IPortfolioCard[]> {
    const snap = await getDocs(collection(db, "portfolio"));
    return snap.docs.flatMap(
      (d) => (d.data().projects ?? []) as IPortfolioCard[]
    );
  }

  async getSkills(id: string) {
    const snap = await getDoc(doc(db, "skills", id));
    return snap.exists() ? snap.data() : null;
  }

  async getResources(id: string): Promise<ResourceMap> {
    const snap = await getDoc(doc(db, "resources", id));
    return snap.exists() ? (snap.data() as ResourceMap) : {};
  }

  async getImageUrl(path: string): Promise<string> {
    const imageRef = ref(storage, path);
    return await getDownloadURL(imageRef);
  }
}

export const portfolioAdapter = new PortfolioAdapter();
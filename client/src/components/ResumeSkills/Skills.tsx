import { useState } from 'react';
import SkillsModal from '@/components/ResumeSkills/SkillsModal';
import SkillsSection from '@/components/ResumeSkills/SkillsSection';
import { SkillsList } from '@/data/SkillsList';
import { SkillsResources } from '@/data/SkillsResources';
import '@/SCSS/Resume/Skills.scss';

export interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
  children?: Skill[];
  resourceKey?: string; // Optional key for resources
}

export interface ProficiencySubcategory {
  type: 'proficiency';
  level: 'fluent' | 'learning' | 'refreshing';
  skills: Skill[];
}

export interface ToolSubcategory {
  type: 'tools';
  label: string;
  toolsByLevel: {
    fluent?: Skill[];
    learning?: Skill[];
    refreshing?: Skill[];
  };
}

export type Subcategory = ProficiencySubcategory | ToolSubcategory;

export interface SkillSection {
  title: string;
  subcategories: Subcategory[];
}

const Skills = () => {
  const [modalData, setModalData] = useState<{
    skillName: string;
    resources: { label: string; url: string }[];
  } | null>(null);

  const handleSkillClick = (skillName: string) => {
    const key = skillName.replace(/\s|\./g, '');
    const resources = SkillsResources[key];

    if (resources) {
      setTimeout(() => {
        setModalData({ skillName, resources });
      }, 700);
    }
  };

  return (
    <div className="skillsContainer">
      {SkillsList.map((section) => (
        <SkillsSection
          key={section.title}
          title={section.title}
          subcategories={section.subcategories}
          onSkillClick={handleSkillClick}
        />
      ))}

      {modalData && (
        <SkillsModal
          skillName={modalData.skillName}
          resources={modalData.resources}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
};

export default Skills;
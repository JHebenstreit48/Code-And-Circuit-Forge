import { useState } from 'react';
import SkillsModal from '@/components/ResumeSkills/SkillsModal';
import SkillsSection from '@/components/ResumeSkills/SkillsSection';
import { useSkills } from '@/hooks/useSkills';
import { useSkillsResources } from '@/hooks/useSkillsResources';
import '@/SCSS/Resume/Skills.scss';

export interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
  children?: Skill[];
  resourceKey?: string;
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
  const { sections, loading: skillsLoading } = useSkills();
  const { resources, loading: resourcesLoading } = useSkillsResources();

  const [modalData, setModalData] = useState<{
    skillName: string;
    resources: { label: string; url: string }[];
  } | null>(null);

  const handleSkillClick = (skillName: string) => {
    const key = skillName.replace(/\s|\./g, '');
    const res = resources[key];
    if (res) {
      setTimeout(() => {
        setModalData({ skillName, resources: res });
      }, 700);
    }
  };

  if (skillsLoading || resourcesLoading) {
    return <div className="skillsContainer">Loading skills...</div>;
  }

  return (
    <div className="skillsContainer">
      {sections.map((section) => (
        <SkillsSection
          key={section.title}
          title={section.title}
          subcategories={section.subcategories}
          onSkillClick={handleSkillClick}
          resources={resources}
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
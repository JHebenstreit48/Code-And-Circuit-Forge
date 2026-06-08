import { useState } from 'react';
import SkillsSubsection from '@/components/ResumeSkills/SkillsSubsection';
import SkillsModal from '@/components/ResumeSkills/SkillsModal';
import { SkillsResources } from '@/data/SkillsResources';

interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
  children?: Skill[];
  resourceKey?: string;
}

interface ProficiencySubcategory {
  type: 'proficiency';
  level: 'fluent' | 'learning' | 'refreshing';
  skills: Skill[];
}

interface ToolsByLevel {
  fluent?: Skill[];
  learning?: Skill[];
  refreshing?: Skill[];
}

interface ToolSubcategory {
  type: 'tools';
  label: string;
  toolsByLevel: ToolsByLevel;
}

type Subcategory = ProficiencySubcategory | ToolSubcategory;

interface SkillsSectionProps {
  title: string;
  subcategories: Subcategory[];
  onSkillClick: (skillName: string) => void; // ✅ ADD THIS
}

const SkillsSection = ({ title, subcategories }: SkillsSectionProps) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSkillClick = (skillName: string) => {
    const skillObj = findSkillByName(skillName);
    const key = skillObj?.resourceKey || skillName.replace(/\s|\./g, '');
    const resources = SkillsResources[key];

    if (resources) {
      setSelectedSkill(skillName);
      setModalOpen(true);
    } else {
      console.warn(`No resources found for: ${key}`);
    }
  };

  const findSkillByName = (name: string): Skill | undefined => {
    for (const sub of subcategories) {
      const skillList: Skill[] =
        sub.type === 'proficiency'
          ? sub.skills
          : Object.values(sub.toolsByLevel || {}).flat();

      for (const skill of skillList) {
        if (skill.name === name) return skill;
        if (skill.children) {
          const childMatch = skill.children.find((child: Skill) => child.name === name);
          if (childMatch) return childMatch;
        }
      }
    }
    return undefined;
  };

  const renderToolsSubcategories = (subcategory: ToolSubcategory) => {
    const { toolsByLevel } = subcategory;

    return (
      <>
        <h3 className="toolsTitle">
          <span className="toolsHeader">🛠️ Tools</span>
        </h3>
        {(['fluent', 'learning', 'refreshing'] as const).map((level) =>
          toolsByLevel[level]?.length ? (
            <SkillsSubsection
              key={`tools-${level}`}
              type="tools"
              level={level}
              skills={toolsByLevel[level]!}
              onSkillClick={handleSkillClick}
            />
          ) : null
        )}
      </>
    );
  };

  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">{title}</h2>

      {subcategories.map((subcategory, index) => {
        if (subcategory.type === 'proficiency') {
          return (
            <SkillsSubsection
              key={`pro-${subcategory.level}-${index}`}
              type="proficiency"
              level={subcategory.level}
              skills={subcategory.skills}
              onSkillClick={handleSkillClick}
            />
          );
        }

        if (subcategory.type === 'tools') {
          return <div key={`tools-${index}`}>{renderToolsSubcategories(subcategory)}</div>;
        }

        return null;
      })}

      {modalOpen && selectedSkill && (
        <SkillsModal
          skillName={selectedSkill}
          resources={SkillsResources[
            findSkillByName(selectedSkill)?.resourceKey || selectedSkill.replace(/\s|\./g, '')
          ]}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SkillsSection;
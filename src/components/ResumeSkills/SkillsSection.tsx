import { useState } from 'react';
import SkillsSubsection from '@/components/ResumeSkills/SkillsSubsection';
import SkillsModal from '@/components/ResumeSkills/SkillsModal';

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
  onSkillClick: (skillName: string) => void;
  resources: Record<string, { label: string; url: string }[]>;
}

const SkillsSection = ({ title, subcategories, onSkillClick, resources }: SkillsSectionProps) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSkillClick = (skillName: string) => {
    const skillObj = findSkillByName(skillName);
    const key = skillObj?.resourceKey || skillName.replace(/\s|\./g, '');
    if (resources[key]) {
      setSelectedSkill(skillName);
      setModalOpen(true);
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

  const profs = subcategories.filter((s): s is ProficiencySubcategory => s.type === 'proficiency');
  const tools = subcategories.filter((s): s is ToolSubcategory => s.type === 'tools');

  const renderTools = (subcategory: ToolSubcategory, i: number) => {
    const { toolsByLevel } = subcategory;
    return (
      <div key={`tools-wrap-${i}`} className="toolsWrap">
        <h3 className="toolsTitle"><span className="toolsHeader">🛠️ Tools</span></h3>
        {(['fluent', 'learning', 'refreshing'] as const).map((level) =>
          toolsByLevel[level]?.length ? (
            <SkillsSubsection
              key={`tools-${level}-${i}`}
              type="tools"
              level={level}
              skills={toolsByLevel[level]!}
              onSkillClick={handleSkillClick}
              resources={resources}
            />
          ) : null
        )}
      </div>
    );
  };

  return (
    <div className="skillsSection">
      <h2 className="skillsTitle">{title}</h2>
      {profs.length > 0 && (
        <div className="levelsGrid">
          {profs.map((subcategory, idx) => (
            <SkillsSubsection
              key={`pro-${subcategory.level}-${idx}`}
              type="proficiency"
              level={subcategory.level}
              skills={subcategory.skills}
              onSkillClick={handleSkillClick}
              resources={resources}
            />
          ))}
        </div>
      )}
      {profs.length > 0 && tools.length > 0 && <div className="sectionDivider" />}
      {tools.map(renderTools)}
      {modalOpen && selectedSkill && (
        <SkillsModal
          skillName={selectedSkill}
          resources={
            resources[
              findSkillByName(selectedSkill)?.resourceKey ||
              selectedSkill.replace(/\s|\./g, '')
            ]
          }
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SkillsSection;
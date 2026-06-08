import { useState } from 'react';
import SkillsCard from '@/components/ResumeSkills/SkillsCard';

interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
  children?: Skill[];
  resourceKey?: string;
}

interface SkillsSubsectionProps {
  type: 'proficiency' | 'tools';
  level?: 'fluent' | 'learning' | 'refreshing';
  skills: Skill[];
  onSkillClick: (skillName: string) => void;
  resources: Record<string, { label: string; url: string }[]>;
}

const SkillsSubsection = ({ type, level, skills, onSkillClick, resources }: SkillsSubsectionProps) => {
  const getLabel = () => {
    if (level === 'fluent') return '✅ Fluent';
    if (level === 'learning') return '🧠 Learning';
    if (level === 'refreshing') return '🔁 Refreshing';
    return '';
  };

  return (
    <div className="skillsSubsection">
      <h3 className={type === 'tools' ? 'subsectionTitle toolSub' : `subsectionTitle ${level}`}>
        {getLabel()}
      </h3>
      <div className="skillsGrid">
        {skills.map((skill) => (
          <SkillWithChildren
            key={skill.name}
            skill={skill}
            onClick={onSkillClick}
            resources={resources}
          />
        ))}
      </div>
    </div>
  );
};

const SkillWithChildren = ({
  skill,
  onClick,
  resources,
}: {
  skill: Skill;
  onClick: (name: string) => void;
  resources: Record<string, { label: string; url: string }[]>;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = !!skill.children?.length;
  const skillKey = skill.name.replace(/\s|\./g, '');
  const hasResources = !!resources[skillKey];

  return (
    <div className="skillWrapper">
      <SkillsCard
        skill={skill}
        isExpanded={isExpanded}
        hasResources={hasResources}
        onClick={onClick}
        onToggle={hasChildren ? () => setIsExpanded((prev) => !prev) : undefined}
      />
      {hasChildren && (
        <div className={`nestedSkillsGrid ${isExpanded ? 'visible' : 'hidden'}`}>
          {skill.children!.map((child) => (
            <SkillsCard
              key={child.name}
              skill={child}
              hasResources={!!resources[child.name.replace(/\s|\./g, '')]}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsSubsection;
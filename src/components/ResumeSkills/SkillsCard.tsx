interface Skill {
  name: string;
  icon: React.ElementType | null;
  color?: string;
  children?: Skill[];
  resourceKey?: string;
}

interface SkillsCardProps {
  skill: Skill;
  isExpanded?: boolean;
  hasResources?: boolean;
  onClick: (skillName: string) => void;
  onToggle?: () => void;
}

const SkillsCard = ({ skill, isExpanded, hasResources, onClick, onToggle }: SkillsCardProps) => {
  const hasChildren = !!skill.children?.length;

  return (
    <div
      className="skillCard"
      onClick={(e) => {
        e.stopPropagation();
        if (!hasChildren) {
          onClick(skill.name);
        }
      }}
      style={{ cursor: hasResources ? 'pointer' : 'default' }}
      title={hasResources ? 'Click to view resources' : ''}
    >
      {skill.icon ? (
        <skill.icon
          className={`icon ${
            skill.name === 'Cisco' ? 'ciscoIcon' :
            skill.name === 'Unity Hub' ? 'unityHubIcon' :
            skill.name === 'Sass' ? 'sassIcon' :
            skill.name === 'LESS' ? 'lessIcon' :
            ''
          }`}
          style={{ color: skill.color }}
        />
      ) : (
        <div className="icon">🔧</div>
      )}
      <p className="label">{skill.name}</p>

      {hasChildren && (
        <div
          className="toggleArrow"
          onClick={(e) => {
            e.stopPropagation();
            if (onToggle) onToggle();
          }}
        >
          {isExpanded ? '▲' : '▼'}
        </div>
      )}
    </div>
  );
};

export default SkillsCard;
import '@/SCSS/Resume/SkillsModal.scss';

interface SkillModalProps {
    skillName: string;
    resources: { label: string; url: string }[];
    onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skillName, resources, onClose }) => {
    return (
        <div className="modalOverlay" onClick={onClose}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                <h2>Resources for {skillName}</h2>
                <ul>
                    {resources.map((res) => (
                        <li key={res.url}>
                            <a href={res.url} target="_blank" rel="noopener noreferrer">
                                {res.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="closeButton" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SkillModal;

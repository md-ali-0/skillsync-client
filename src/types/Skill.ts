export type Skill = {
    name: string;
    id: string;
    category: SkillCategory;
    teacherId: string;
    createdAt: Date;
    updatedAt: Date;
};

enum SkillCategory {
    TECHNICAL,
    CREATIVE,
    ACADEMIC,
    BUSINESS,
    OTHER,
}

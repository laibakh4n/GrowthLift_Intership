function SkillsList() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

export default SkillsList;
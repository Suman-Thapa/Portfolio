export default function Skills() {
  const sections = [
    {
      title: "Frontend Tools",
      count: 7,
      icon: "💻",
      skills: [
        "React JS",
        "Redux",
        "TypeScript",
        "MUI",
        "Next.js",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      title: "Backend Tools",
      count: 6,
      icon: "🗄️",
      skills: [
        "Laravel",
        "Django",
        "RESTful APIs",
        "PostgreSQL",
        "MySQL",
        "Firebase",
      ],
    },
    {
      title: "Other Tools",
      count: 7,
      icon: "⚙️",
      skills: [
        "Git & GitHub",
        "Python",
        "Java",
        "CI/CD",
        "UI/UX",
        "Figma",
        "Adobe",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Technical <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-gray-500 mt-2">
          A showcase of technologies and tools I work with
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>

              <span className="text-blue-600 border border-blue-600 px-3 py-1 rounded-full text-sm">
                {section.count} skills
              </span>
            </div>

            {/* Skills List */}
            <ul className="space-y-3">
              {section.skills.map((skill, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
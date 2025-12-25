function Skills() {
  try {
    const skills = [
      {
        name: 'Data Entry',
        description:
          'Accurate and efficient input of high-volume data with strong attention to detail.',
        icon: '/icons skill/data entry.png',
      },
      {
        name: 'Mastering Data Entry Tools and Techniques',
        description:
          'Developing expertise in data entry tools and techniques to ensure high accuracy, consistency, and efficiency in handling large volumes of data.',
        icon: '/icons skill/tools.png',
      },
      {
        name: 'Administrative Support',
        description:
          'Managing daily administrative tasks, documentation, and operational support.',
        icon: '/icons skill/adm.png',
      },
      {
        name: 'Data Management',
        description:
          'Organizing, validating, and maintaining structured datasets for accuracy and consistency.',
        icon: '/icons skill/data management.png',
      },
      {
        name: 'Microsoft Excel',
        description:
          'Advanced spreadsheet usage including formulas, data scrubbing, and reporting.',
        icon: '/icons skill/excel.png',
      },
      {
        name: 'Google Sheets',
        description:
          'Cloud-based data collaboration, validation, and automation with formulas.',
        icon: '/icons skill/sheets.png',
      },
      {
        name: 'ERP & CRM Systems',
        description:
          'Handling transactional data, customer records, and system-based workflows.',
        icon: '/icons skill/erp.png',
      },
      {
        name: 'Document Management',
        description:
          'Creating, organizing, and maintaining digital documents and records.',
        icon: '/icons skill/doc management.png',
      },
      {
        name: 'Data Verification',
        description:
          'Ensuring data accuracy through validation, cross-checking, and quality control.',
        icon: '/icons skill/verification.png',
      },

      {
        name: 'HTML',
        description: 'Semantic structure',
        icon: '/icons/html.png',
      },
      {
        name: 'CSS',
        description: 'Responsive design & animations',
        icon: '/icons/css3.jpeg',
      },
      {
        name: 'JavaScript',
        description: 'Core language for dynamic and interactive web interfaces',
        icon: '/icons/js.png',
      },
      {
        name: 'TypeScript',
        description: 'Type-safe codebase for cleaner & scalable,',
        icon: '/icons/ts3.png',
      },
      {
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework for fast and responsive UI design',
        icon: '/icons/tl2.jpeg',
      },
      {
        name: 'React.js',
        description:
          'Component-based JavaScript library for building interactive user interfaces',
        icon: '/icons/rc3.png',
      },
      {
        name: 'Next.js',
        description:
          'Full-stack React framework for performant, scalable, and SEO-optimized web apps',
        icon: '/icons/nx.png',
      },
      {
        name: 'Cybersecurity',
        description:
          'Practices and technologies to secure systems, networks, and applications',
        icon: '/icons/sc.png',
      },
    ];

    return (
      <section
        id='skills'
        data-name='skills'
        data-file='components/Skills.js'
        className='py-20'
      >
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl md:text-5xl font-bold orbitron text-center mb-16 neon-glow'>
            Skills & Technologies
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className='scale-in glass-effect p-6 rounded-lg border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='mb-4 text-center'>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className='w-24 h-24 mx-auto rounded-md object-cover'
                  />
                </div>

                <h3 className='text-xl font-bold text-cyan-400 mb-2 text-center'>
                  {skill.name}
                </h3>
                <p className='text-gray-200 text-center text-md'>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Skills component error:', error);
    reportError(error);
  }
}

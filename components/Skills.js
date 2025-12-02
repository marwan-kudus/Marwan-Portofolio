function Skills() {
  try {
    const skills = [
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

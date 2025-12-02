function Projects() {
  try {
    const projects = [
      {
        title: 'App To Do List',
        description: 'Team-based note taking with themes & collaboration',
        tags: ['Tailwind CSS', 'TS', 'Next.JS'],
        iconPath: '/icons project/todo.png',
      },
      {
        title: 'Restaurant Booking System',
        description: 'Netlify frontend + PHP & MySQL backend',
        tags: ['Tailwind CSS', 'TS', 'Next.JS'],
        iconPath: '/icons project/res.png',
      },

      {
        title: 'Movie Search Web App', // Web Pencarian Film
        description:
          'A responsive web application to search and view movie details using a third-party API.',
        tags: ['React', 'API', 'TS', 'Tailwind CSS'],
        iconPath: '/icons project/mov.png',
      },
      {
        title: 'E-commerce Store',
        description:
          'Full-featured online shop with product management, shopping cart, and secure payment gateway integration.',
        tags: ['Nex.JS', 'DB Neon', 'TS', 'Tailwind CSS'],
        iconPath: '/icons project/e-come.png',
      },
      {
        title: 'Personal Blog ',
        description:
          'CMS-free blog featuring markdown support, SEO optimization, and customizable themes.',
        tags: ['Next.js', 'Markdown', 'TS', 'Tailwind CSS', 'CMS-free'],
        iconPath: '/icons project/blog.jpeg',
      },
    ];

    return (
      <section
        id='projects'
        data-name='projects'
        data-file='components/Projects.js'
        className='py-20 bg-gray-900/50'
      >
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl md:text-5xl font-bold orbitron text-center mb-16 neon-glow'>
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <div
                key={project.title}
                className='fade-in glass-effect p-8 rounded-lg border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className='text-5xl mb-4'>
                  {project.iconPath ? ( // Cek apakah project memiliki iconPath (untuk gambar)
                    <img
                      src={project.iconPath}
                      alt={`Icon for ${project.title}`}
                      className='w-20 h-20 rounded-md object-contain' // Atur ukuran gambar di sini
                    />
                  ) : (
                    project.icon // Jika tidak ada iconPath, tampilkan project.icon (emoji)
                  )}
                </div>
                <h3 className='text-2xl font-bold text-cyan-400 mb-4'>
                  {project.title}
                </h3>
                <p className='text-gray-300 mb-6'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-magenta-500/20 text-magenta-400 rounded-full text-sm border border-magenta-500/30'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Projects component error:', error);
    reportError(error);
  }
}

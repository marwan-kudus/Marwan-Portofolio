function About() {
  try {
    return (
      <section
        id='about'
        data-name='about'
        data-file='components/About.js'
        className='py-20 bg-gray-900/50'
      >
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl md:text-5xl font-bold orbitron text-center mb-16 neon-glow'>
            About Me
          </h2>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='slide-in-left'>
              <div className='relative w-80 h-80 mx-auto'>
                <img
                  src='/images/marwan2.jpeg'
                  alt='Marwan Profile'
                  className='w-full h-full object-cover rounded-lg neon-border'
                />
                <div className='absolute inset-0 rounded-lg bg-gradient-to-tr from-cyan-500/10 to-magenta-500/10'></div>
              </div>
            </div>

            <div className='slide-in-right'>
              <p className='text-lg text-gray-300 mb-8 leading-relaxed'>
                I'm{' '}
                <span className='text-cyan-400 font-semibold'>
                  Cece Sumarwan Preferred Name : Marwan
                </span>
                , a Full-Stack Developer and Specialist Front-End Web Developer,
                Computer Network and Cybersecurity Enthusiast, and Future-Ready
                Coder. I build modern, fast, and user-focused web applications
                while applying strong fundamentals in networking and
                cybersecurity. I’m dedicated to continuous learning, exploring
                new technologies, and creating secure, scalable, and meaningful
                digital solutions.
              </p>

              <div className='grid grid-cols-1 gap-6'>
                <div className='glass-effect p-6 rounded-lg border border-purple-500/30'>
                  <div className='flex items-center space-x-4'>
                    <img
                      src='/images/project.png'
                      alt='Project Icon'
                      className='w-20 h-20 rounded-md'
                    />
                    <div>
                      <div className='text-3xl font-bold text-cyan-400'>5+</div>
                      <div className='text-gray-400 text-2xl'>
                        Projects Completed
                      </div>
                    </div>
                  </div>
                </div>

                <div className='glass-effect p-6 rounded-lg border border-purple-500/30'>
                  <div className='flex items-center space-x-4'>
                    <img
                      src='/images/exp2.png'
                      alt='Experience Icon'
                      className='w-20 h-20 rounded-md'
                    />
                    <div>
                      <div className='text-3xl font-bold text-magenta-400'>
                        1+
                      </div>
                      <div className='text-gray-400 text-2xl'>
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    reportError(error);
  }
}

function Hero() {
  try {
    const [currentText, setCurrentText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [isTypingPaused, setIsTypingPaused] = React.useState(false);

    const texts = [
      'Web Developer',
      'Computer Network and Cybersecurity Enthusiast',
      'Future-Ready Coder',
    ];

    React.useEffect(() => {
      if (isTypingPaused) return;

      const typeSpeed = isDeleting ? 50 : 150;
      const currentFullText = texts[currentIndex];

      if (!isDeleting && currentText === currentFullText) {
        setIsTypingPaused(true);
        setTimeout(() => {
          setIsTypingPaused(false);
          setIsDeleting(true);
        }, 2000);
        return;
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      }, typeSpeed);

      return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, isTypingPaused, texts]);

    const scrollToProjects = () => {
      document
        .getElementById('projects')
        ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <section
        id='home'
        data-name='hero'
        data-file='components/Hero.js'
        className='min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20'
      >
        <div className='container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
          <div className='text-center md:text-left fade-in'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold orbitron mb-6'>
              Hi, I'm <span className='gradient-text'>Marwan</span>
            </h1>

            <div className='text-xl md:text-2xl lg:text-3xl mb-8 h-12 md:h-16'>
              <span className='text-cyan-400 typing-cursor font-semibold'>
                {currentText}
              </span>
            </div>

            <p className='text-base md:text-lg text-white-700 mb-8 max-w-lg leading-relaxed'>
              Creating intelligent, scalable, and elegant digital solutions with
              cutting-edge technology.
            </p>

            <button onClick={scrollToProjects} className='cta-button'>
              Explore My Work
            </button>
          </div>

          <div className='flex justify-center fade-in'>
            <div className='hero-image relative'>
              <img
                src='/images/marwan2.jpeg'
                alt='marwan hero'
                className='float-animation'
              />
              <div className='absolute inset-0 rounded-lg bg-gradient-to-tr from-magenta-500/20 to-cyan-500/20'></div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}

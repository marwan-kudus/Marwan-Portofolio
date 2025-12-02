function Header() {
  try {
    const [activeSection, setActiveSection] = React.useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + height
            ) {
              setActiveSection(section);
            }
          }
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    };

    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ];

    return (
      <header
        data-name='header'
        data-file='components/Header.js'
        className='fixed top-0 w-full z-50 glass-effect border-b border-purple-500/30'
      >
        <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='nav-brand orbitron cursor-pointer'>
            <img
              src='/images/marwan.png'
              alt='Logo Marwan Portfolio'
              className='h-20 w-20 rounded-lg border-4 border-cyan-400 shadow-lg shadow-cyan-400/50'
            />
          </div>

          <div className='hidden text-xl md:flex space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 neon-glow'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className='absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-lg shadow-cyan-400/50'></div>
                )}
              </button>
            ))}
          </div>

          <div className='flex items-center space-x-4'>
            <ThemeToggle />
            <button
              className='md:hidden text-cyan-400'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i data-lucide='menu' className='w-6 h-6'></i>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className='absolute top-full left-0 w-full glass-effect border-b border-purple-500/30 md:hidden'>
              <div className='flex flex-col p-4 space-y-2'>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-cyan-400 neon-glow'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
  }
}

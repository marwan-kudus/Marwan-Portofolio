function Footer() {
  try {
    React.useEffect(() => {
      lucide.createIcons();
    }, []);

    return (
      <footer
        data-name='footer'
        data-file='components/Footer.js'
        className='bg-black/50 py-12 border-t border-purple-500/30'
      >
        <div className='container mx-auto px-6 text-center'>
          <div className='mb-8'>
            <p className='text-xl text-gray-300 mb-4'>
              "Engineered for performance, secured by expertise"
            </p>

            <div className='flex justify-center space-x-6 mb-6'>
              <a
                href='https://github.com/marwan-kudus'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'
              >
                <i data-lucide='github' className='w-6 h-6'></i>
              </a>

              <a
                href='https://www.linkedin.com/in/cece-sumarwan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzajWwoR1Si6FbyyEHHKwVg%3D%3D'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'
              >
                <i data-lucide='linkedin' className='w-6 h-6'></i>
              </a>
            </div>
          </div>

          <div className='border-t border-purple-500/30 pt-8'>
            <p className='text-gray-400'>
              Made with <span className='text-red-500'>❤</span> by Marwan
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    reportError(error);
  }
}

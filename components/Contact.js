function Contact() {
  return (
    <section
      id='contact'
      data-name='contact'
      data-file='components/Contact.js'
      className='py-20'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold orbitron text-center mb-16 neon-glow'>
          Get In Touch
        </h2>

        <div className='max-w-2xl mx-auto'>
          <div className='space-y-6'>
            {/* WhatsApp Link */}
            <a
              href='https://wa.me/+6281282827477'
              target='_blank'
              rel='noopener noreferrer'
              className='block w-full p-4 bg-transparent border-2 border-purple-500/50 rounded-lg hover:border-cyan-400 transition-all duration-300 text-center text-cyan-400 font-semibold'
            >
              Contact via WhatsApp
            </a>

            {/* Email Link */}
            <a
              href='mailto:marwankudus38@gmail.com'
              className='block w-full p-4 bg-transparent border-2 border-purple-500/50 rounded-lg hover:border-cyan-400 transition-all duration-300 text-center text-cyan-400 font-semibold'
            >
              Send Email: marwankudus38@gmail.com
            </a>

            {/* LinkedIn Link */}
            <a
              href='https://www.linkedin.com/in/cece-sumarwan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZxIaBTrkRUafakOLOZ22nw%3D%3D'
              target='_blank'
              rel='noopener noreferrer'
              className='block w-full p-4 bg-transparent border-2 border-purple-500/50 rounded-lg hover:border-cyan-400 transition-all duration-300 text-center text-cyan-400 font-semibold'
            >
              Connect on LinkedIn
            </a>

            {/* Download CV */}
            <a
              href='/cv/CV Cece Sumarwan.pdf'
              download
              className='block w-full p-4 bg-transparent border-2 border-purple-500/50 rounded-lg hover:border-cyan-400 transition-all duration-300 text-center text-cyan-400 font-semibold'
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

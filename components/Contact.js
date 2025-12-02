function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: '',
    });
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const validateForm = () => {
      const newErrors = {};

      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.message.trim()) newErrors.message = 'Message is required';

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        alert('Thank you for contacting me!');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    };

    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));

      if (errors[e.target.name]) {
        setErrors((prev) => ({
          ...prev,
          [e.target.name]: '',
        }));
      }
    };

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
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='fade-in'>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-4 bg-transparent border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                    errors.name
                      ? 'border-red-500'
                      : 'border-purple-500/50 focus:border-cyan-400'
                  }`}
                />
                {errors.name && (
                  <p className='text-red-400 text-sm mt-1'>{errors.name}</p>
                )}
              </div>

              <div className='fade-in'>
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 bg-transparent border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-purple-500/50 focus:border-cyan-400'
                  }`}
                />
                {errors.email && (
                  <p className='text-red-400 text-sm mt-1'>{errors.email}</p>
                )}
              </div>

              <div className='fade-in'>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  rows='5'
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-4 bg-transparent border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-purple-500/50 focus:border-cyan-400'
                  }`}
                />
                {errors.message && (
                  <p className='text-red-400 text-sm mt-1'>{errors.message}</p>
                )}
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full neon-border px-8 py-4 bg-transparent hover:bg-cyan-400/10 transition-all duration-300 text-cyan-400 font-semibold disabled:opacity-50'
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    reportError(error);
  }
}

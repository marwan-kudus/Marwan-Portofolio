function App() {
    try {
        React.useEffect(() => {
            // Initialize Lucide icons
            lucide.createIcons();
            
            // Initialize scroll animations
            const cleanupAnimations = initScrollAnimations();
            
            // Initialize smooth scroll
            initSmoothScroll();
            
            // Create particles background
            createParticles();
            
            // Cleanup function
            return () => {
                if (cleanupAnimations) cleanupAnimations();
            };
        }, []);

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                <Header />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

// Render the app
const { createRoot } = ReactDOM;
const root = createRoot(document.getElementById('root'));
root.render(<App />);

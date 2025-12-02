function ThemeToggle() {
    try {
        const [isDark, setIsDark] = React.useState(true);

        React.useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                const isDarkMode = savedTheme === 'dark';
                setIsDark(isDarkMode);
                document.documentElement.setAttribute('data-theme', savedTheme);
            }
        }, []);

        React.useEffect(() => {
            lucide.createIcons();
        }, [isDark]);

        const toggleTheme = () => {
            const newTheme = isDark ? 'light' : 'dark';
            setIsDark(!isDark);
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        };

        return (
            <button
                data-name="theme-toggle"
                data-file="components/ThemeToggle.js"
                onClick={toggleTheme}
                className="glass-effect p-3 rounded-lg border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
                {isDark ? (
                    <i data-lucide="sun" className="w-5 h-5 text-yellow-400"></i>
                ) : (
                    <i data-lucide="moon" className="w-5 h-5 text-purple-400"></i>
                )}
            </button>
        );
    } catch (error) {
        console.error('ThemeToggle component error:', error);
        reportError(error);
    }
}

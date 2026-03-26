import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Teachers', path: '/teachers' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            {/* Navbar */}
            <nav
                className={`sticky top-0 z-[100] transition-all duration-300 ${scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-md'
                        : 'bg-white'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <GraduationCap className="w-8 h-8 text-blue-600" />
                            <span className="font-bold text-xl text-gray-900">EduCare</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`font-medium hover:text-blue-600 ${location.pathname === link.path
                                            ? 'text-blue-600'
                                            : 'text-gray-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
                                Join Now
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ✅ SIDEBAR USING PORTAL */}
            {typeof window !== "undefined" &&
                ReactDOM.createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                {/* Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsOpen(false)}
                                    className="fixed inset-0 bg-black/50 z-[9998]"
                                />

                                {/* Sidebar */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed right-0 top-0 h-full w-64 bg-white z-[9999] shadow-xl"
                                >
                                    <div className="flex flex-col p-6 space-y-4">

                                        {/* Close */}
                                        <div className="flex justify-end">
                                            <button onClick={() => setIsOpen(false)}>
                                                <X />
                                            </button>
                                        </div>

                                        {/* Links */}
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                className={`py-2 ${location.pathname === link.path
                                                        ? 'text-blue-600'
                                                        : 'text-gray-700'
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}

                                        {/* Button */}
                                        <button className="bg-blue-600 text-white px-5 py-2 rounded-full mt-4">
                                            Join Now
                                        </button>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
};

export default Navbar;
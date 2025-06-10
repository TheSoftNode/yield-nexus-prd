'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
    className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Overview' },
        { href: '/features', label: 'Features' },
        { href: '/technical', label: 'Technical' },
        { href: '/roadmap', label: 'Roadmap' },
        { href: '/guide', label: 'Guide' },
    ];

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const isActiveRoute = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav className={`sticky top-0 z-50 border-b border-gray-200 bg-white/98 backdrop-blur-sm ${className}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">₿</span>
                            </div>
                            <div className="block">
                                <h1 className="text-xl font-bold text-gray-900">
                                    Yield Nexus
                                </h1>
                                <p className="text-xs text-gray-600 font-medium">Development Planning</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 transform-gpu
                                        ${isActiveRoute(item.href)
                                            ? 'text-gray-900 bg-orange-100 shadow-sm'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                        }
                                    `}
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        WebkitFontSmoothing: 'antialiased',
                                        MozOsxFontSmoothing: 'grayscale'
                                    }}
                                >
                                    {item.label}
                                    {isActiveRoute(item.href) && (
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full"></div>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    WebkitFontSmoothing: 'antialiased'
                                }}
                            >
                                Start Development
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 mobile-menu-container"
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`
                md:hidden fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out
                ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Sidebar */}
                <div className={`
                    mobile-menu-container absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl
                    transform transition-transform duration-300 ease-out
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-base">₿</span>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">
                                    sBTC Yield Nexus
                                </h2>
                                <p className="text-xs text-gray-600 font-medium">Development Planning</p>
                            </div>
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Close mobile menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col p-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    group flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                                    ${isActiveRoute(item.href)
                                        ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-500 shadow-sm'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 border-l-4 border-transparent'
                                    }
                                `}
                            >
                                <span className="flex-1">{item.label}</span>
                                {isActiveRoute(item.href) && (
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
                        <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                            Start Development
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};




// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// interface NavigationProps {
//     className?: string;
// }

// export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const pathname = usePathname();

//     const navItems = [
//         { href: '/', label: 'Overview' },
//         { href: '/features', label: 'Features' },
//         { href: '/technical', label: 'Technical' },
//         { href: '/roadmap', label: 'Roadmap' },
//         { href: '/guide', label: 'Guide' },
//     ];

//     // Close mobile menu when route changes
//     useEffect(() => {
//         setIsMobileMenuOpen(false);
//     }, [pathname]);

//     // Close mobile menu when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             const target = event.target as Element;
//             if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
//                 setIsMobileMenuOpen(false);
//             }
//         };

//         if (isMobileMenuOpen) {
//             document.addEventListener('click', handleClickOutside);
//         }

//         return () => {
//             document.removeEventListener('click', handleClickOutside);
//         };
//     }, [isMobileMenuOpen]);

//     // Prevent body scroll when mobile menu is open
//     useEffect(() => {
//         if (isMobileMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }

//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isMobileMenuOpen]);

//     const isActiveRoute = (href: string) => {
//         if (href === '/') {
//             return pathname === '/';
//         }
//         return pathname.startsWith(href);
//     };

//     return (
//         <>
//             <nav className={`sticky top-0 z-50 backdrop-blur-md border-b border-gray-200/20 bg-white/95 ${className}`}>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center h-16">
//                         {/* Logo Section */}
//                         <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
//                             <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
//                                 <span className="text-white font-bold text-lg">₿</span>
//                             </div>
//                             <div className="block">
//                                 <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-slate-800 bg-clip-text text-transparent">
//                                     Yield Nexus
//                                 </h1>
//                                 <p className="text-xs text-gray-500 font-medium">Development Planning</p>
//                             </div>
//                         </Link>

//                         {/* Desktop Navigation */}
//                         <div className="hidden md:flex items-center space-x-6">
//                             {navItems.map((item) => (
//                                 <Link
//                                     key={item.href}
//                                     href={item.href}
//                                     className={`
//                                         relative px-4 py-2 rounded-lg text-sm text-black font-bold transition-all duration-200
//                                         ${isActiveRoute(item.href)
//                                             ? 'text-slate-900  bg-orange-50'
//                                             : 'text-slate-800  hover:text-blue-600 hover:bg-blue-50'
//                                         }
//                                     `}
//                                 >
//                                     {item.label}
//                                     {isActiveRoute(item.href) && (
//                                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-orange-500 rounded-full"></div>
//                                     )}
//                                 </Link>
//                             ))}
//                         </div>

//                         {/* CTA Button */}
//                         <div className="hidden md:block">
//                             <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
//                                 Start Development
//                             </button>
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 mobile-menu-container"
//                             aria-label="Toggle mobile menu"
//                         >
//                             <svg
//                                 className={`w-6 h-6 transform transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 {isMobileMenuOpen ? (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 ) : (
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Mobile Menu Overlay */}
//             <div className={`
//                 md:hidden fixed inset-0 z-[9999] transition-opacity duration-300 ease-in-out
//                 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
//             `}>
//                 {/* Backdrop */}
//                 <div
//                     className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 />

//                 {/* Sidebar */}
//                 <div className={`
//                     mobile-menu-container absolute right-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl
//                     transform transition-transform duration-300 ease-out
//                     ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
//                 `}>
//                     {/* Sidebar Header */}
//                     <div className="flex items-center justify-between p-6 border-b border-gray-200">
//                         <Link href="/" className="flex items-center space-x-3">
//                             <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
//                                 <span className="text-white font-bold text-base">₿</span>
//                             </div>
//                             <div>
//                                 <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-slate-800 bg-clip-text text-transparent">
//                                     sBTC Yield Nexus
//                                 </h2>
//                                 <p className="text-xs text-gray-500 font-medium">Development Planning</p>
//                             </div>
//                         </Link>
//                         <button
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-200"
//                             aria-label="Close mobile menu"
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Navigation Links */}
//                     <div className="flex flex-col p-6 space-y-2">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className={`
//                                     group flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
//                                     ${isActiveRoute(item.href)
//                                         ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-500 shadow-sm'
//                                         : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 border-l-4 border-transparent'
//                                     }
//                                 `}
//                             >
//                                 <span className="flex-1">{item.label}</span>
//                                 {isActiveRoute(item.href) && (
//                                     <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                                 )}
//                             </Link>
//                         ))}
//                     </div>

//                     {/* CTA Button */}
//                     <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50/50">
//                         <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
//                             Start Development
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
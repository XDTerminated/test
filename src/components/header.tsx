/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FBccZ0IWtW0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleSignUpClick = () => {
        router.push("/sign-up");
    };

    const handleSignInClick = () => {
        router.push("/sign-in");
    };

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <header className="flex h-20 w-full items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <CarIcon className="h-6 w-6 text-gray-800 dark:text-gray-50" /> */}
                    <span className="text-lg font-semibold hidden sm:block">Freshpick</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-4">
                    <Link href="#" className="group inline-flex h-9 items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" className="group inline-flex h-9 items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="group inline-flex h-9 items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" prefetch={false}>
                        Cars
                    </Link>
                    <Link href="#" className="group inline-flex h-9 items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" prefetch={false}>
                        Portfolio
                    </Link>
                    <Link href="#" className="group inline-flex h-9 items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50" prefetch={false}>
                        Contact
                    </Link>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-2">
                    <Button variant="outline" className="px-2 py-1 text-xs" onClick={handleSignInClick}>
                        Sign in
                    </Button>
                    <Button className="px-2 py-1 text-xs" onClick={handleSignUpClick}>
                        Sign Up
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
                        <span className="sr-only">Open main menu</span>
                        {isMobileMenuOpen ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav id="mobile-menu" className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#" className="block rounded-md bg-white px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="#" className="block rounded-md bg-white px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="#" className="block rounded-md bg-white px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                            Cars
                        </Link>
                        <Link href="#" className="block rounded-md bg-white px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                            Portfolio
                        </Link>
                        <Link href="#" className="block rounded-md bg-white px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                            Contact
                        </Link>
                        <div className="mt-3 space-y-2 px-3">
                            <Button variant="outline" className="w-full px-2 py-1 text-xs">
                                Sign in
                            </Button>
                            <Button className="w-full px-2 py-1 text-xs">Sign Up</Button>
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Header;

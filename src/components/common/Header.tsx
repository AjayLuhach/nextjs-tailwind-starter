"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/common/Button";
import userData from '@/data/userData.json';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname();
  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
          {userData.personalInfo.name}
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {userData.navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={`relative px-3 py-2 transition-colors ${
                  active ? "text-accent font-semibold" : "text-foreground/80"
                }`}
              >
                <Link href={item.href} className="flex flex-col items-center">
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-sm" />
                  )}
                </Link>
              </Button>
            );
          })}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

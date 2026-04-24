'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Globe, Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [lang, setLang] = useState<'EN' | 'VI'>('EN');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600">
            <Leaf className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-green-700">VietAgri</span>
            <span className="text-[10px] font-medium tracking-wider text-green-600 uppercase">
              Exchange
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-green-700"
          >
            {lang === 'EN' ? 'Products' : 'San Pham'}
          </Link>
          <Link
            href="/seller/login"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-green-700"
          >
            {lang === 'EN' ? 'For Sellers' : 'Cho Nguoi Ban'}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'EN' ? 'VI' : 'EN')}
            className="flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-green-300 hover:text-green-700"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang}
          </button>
          <Link href="/seller/login" className="hidden sm:block">
            <Button
              size="sm"
              className="bg-green-600 text-white hover:bg-green-700"
            >
              {lang === 'EN' ? 'Seller Login' : 'Dang Nhap'}
            </Button>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/seller/login"
              className="text-sm font-medium text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              For Sellers
            </Link>
            <Link href="/seller/login" onClick={() => setMobileOpen(false)}>
              <Button
                size="sm"
                className="w-full bg-green-600 text-white hover:bg-green-700"
              >
                Seller Login
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

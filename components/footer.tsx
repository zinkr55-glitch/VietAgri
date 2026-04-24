import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                <Leaf className="h-4 w-4 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white">VietAgri</span>
                <span className="text-[9px] font-medium tracking-wider text-green-400 uppercase">
                  Exchange
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Connecting Vietnamese agricultural producers with international
              buyers. Quality products, transparent sourcing, reliable export
              partnerships.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Marketplace</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition-colors hover:text-green-400"
                >
                  Browse Products
                </Link>
              </li>
              <li>
                <Link
                  href="/seller/login"
                  className="text-sm text-gray-400 transition-colors hover:text-green-400"
                >
                  Seller Portal
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Quality Standards
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Shipping &amp; Logistics</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-sm text-gray-400">
                  Export Guidelines
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">
                  Certification Guide
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-400">Trade Terms</span>
              </li>
              <li>
                <span className="text-sm text-gray-400">FAQ</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-gray-400">
                  123 Nguyen Hue Blvd, District 1, Ho Chi Minh City, Vietnam
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-gray-400">+84 28 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-gray-400">
                  trade@vietagri.exchange
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; 2025 VietAgri Exchange. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-xs text-gray-500 hover:text-gray-400 cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-xs text-gray-500 hover:text-gray-400 cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

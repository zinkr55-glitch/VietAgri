'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Leaf, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SellerLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login delay
    await new Promise((r) => setTimeout(r, 1000));

    if (email === 'seller@vietagri.vn' && password === 'demo1234') {
      setError('');
      alert('Login successful! Redirecting to seller dashboard...');
    } else {
      setError('Invalid email or password. Try seller@vietagri.vn / demo1234');
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex flex-1">
        {/* Left Panel - Branding */}
        <div className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 p-12 lg:flex">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-white">VietAgri</span>
                <span className="text-[10px] font-medium tracking-wider text-green-200 uppercase">
                  Exchange
                </span>
              </div>
            </Link>
          </div>

          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white">
              Grow Your Export Business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-green-100">
              Join Vietnam&apos;s leading agricultural marketplace. Connect with
              verified international buyers, manage inquiries, and expand your
              export reach.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <span className="text-sm text-green-100">
                  List your products with certifications
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <span className="text-sm text-green-100">
                  Receive verified buyer inquiries
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <span className="text-sm text-green-100">
                  Close deals with secure trade support
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-green-200">
            &copy; {new Date().getFullYear()} VietAgri Exchange. All rights
            reserved.
          </p>
        </div>

        {/* Right Panel - Login Form */}
        <div className="flex w-full items-center justify-center px-4 py-12 lg:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold text-green-700">
                    VietAgri
                  </span>
                  <span className="text-[10px] font-medium tracking-wider text-green-600 uppercase">
                    Exchange
                  </span>
                </div>
              </Link>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              Seller Login
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Sign in to manage your product listings and buyer inquiries.
            </p>

            {error && (
              <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seller@vietagri.vn"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm font-medium text-green-600 hover:text-green-700"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <button className="font-medium text-green-600 hover:text-green-700">
                Register as Seller
              </button>
            </p>

            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-500">Demo Credentials</p>
              <p className="mt-1 text-xs text-gray-400">
                Email: seller@vietagri.vn / Password: demo1234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

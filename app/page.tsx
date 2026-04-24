'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, TrendingUp, ShieldCheck, Truck } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import type { Product } from '@/lib/data';
import { categories } from '@/lib/data';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      const { data, error } = await supabase.from('products').select('*');

      if (cancelled) return;
      if (error) {
        setProducts([]);
        return;
      }

      const normalized: Product[] = (data ?? []).map((row: any) => ({
        id: String(row.id ?? ''),
        name: String(row.name ?? ''),
        nameVi: String(row.nameVi ?? row.name_vi ?? ''),
        category: (row.category ?? 'Fruits') as Product['category'],
        origin: String(row.origin ?? ''),
        season: String(row.season ?? ''),
        minOrder: String(row.minOrder ?? row.min_order ?? ''),
        priceRange: String(row.priceRange ?? row.price_range ?? ''),
        description: String(row.description ?? ''),
        images:
          Array.isArray(row.images) && row.images.length > 0
            ? row.images
            : ['https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800'],
        seller: (row.seller ?? {
          companyName: '',
          companyNameVi: '',
          province: '',
          certifications: [],
          exportCapacity: '',
          established: new Date().getFullYear(),
        }) as Product['seller'],
      }));

      setProducts(normalized.filter((p) => p.id && p.name));
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/20 px-3 py-1 text-xs font-medium text-green-100">
              <TrendingUp className="h-3.5 w-3.5" />
              Trusted by 500+ international buyers
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Vietnam&apos;s Premier Agricultural Marketplace
            </h1>
            <p className="mt-4 text-base leading-relaxed text-green-100 sm:text-lg">
              Source premium Vietnamese agricultural products directly from
              certified producers. Quality guaranteed, export-ready.
            </p>

            <div className="mt-8 flex items-center gap-2 rounded-xl bg-white p-2 shadow-xl shadow-green-900/20">
              <Search className="ml-2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, origins, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
              <button className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700">
                Search
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <ShieldCheck className="h-8 w-8 text-green-300" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Verified Sellers
                </p>
                <p className="text-xs text-green-200">
                  GlobalGAP & HACCP certified
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <Truck className="h-8 w-8 text-green-300" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Export Ready
                </p>
                <p className="text-xs text-green-200">
                  FOB & CIF shipping worldwide
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-green-300" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Competitive Pricing
                </p>
                <p className="text-xs text-green-200">
                  Direct from farm, no middlemen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {filtered.length} products available
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-green-600 text-white shadow-md shadow-green-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="h-12 w-12 text-gray-300" />
            <p className="mt-4 text-lg font-medium text-gray-500">
              No products yet. Check back soon!
            </p>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Search className="h-12 w-12 text-gray-300" />
            <p className="mt-4 text-lg font-medium text-gray-500">
              No products found
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

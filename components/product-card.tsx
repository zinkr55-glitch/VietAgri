import Link from 'next/link';
import { MapPin, Package, DollarSign } from 'lucide-react';
import type { Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:border-green-200 hover:shadow-lg hover:shadow-green-50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-green-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-green-700">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin className="h-3.5 w-3.5 text-green-500" />
          <span>{product.origin} Province</span>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-gray-50 pt-3">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <Package className="h-3.5 w-3.5 text-gray-400" />
            <span>Min: {product.minOrder}</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-green-700">
            <DollarSign className="h-3.5 w-3.5" />
            <span>{product.priceRange.split(' - ')[0].replace('$', '')}+</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

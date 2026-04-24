'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Package,
  DollarSign,
  Building2,
  Award,
  Truck,
  ChevronLeft,
  ChevronRight,
  Send,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getProductById } from '@/lib/data';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.id as string);

  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Product Not Found
            </h1>
            <p className="mt-2 text-gray-500">
              The product you are looking for does not exist.
            </p>
            <Button
              className="mt-4 bg-green-600 hover:bg-green-700"
              onClick={() => router.push('/')}
            >
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-green-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImage(
                        (activeImage - 1 + product.images.length) %
                          product.images.length
                      )
                    }
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition-colors hover:bg-white"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveImage(
                        (activeImage + 1) % product.images.length
                      )
                    }
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition-colors hover:bg-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[4/3] w-20 overflow-hidden rounded-lg border-2 transition-all ${
                    i === activeImage
                      ? 'border-green-600 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              {product.category}
            </span>
            <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-gray-400">{product.nameVi}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5 rounded-lg bg-white p-3 border">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <p className="text-xs text-gray-400">Origin</p>
                  <p className="text-sm font-medium text-gray-900">
                    {product.origin} Province
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg bg-white p-3 border">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <p className="text-xs text-gray-400">Season</p>
                  <p className="text-sm font-medium text-gray-900">
                    {product.season}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg bg-white p-3 border">
                <Package className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <p className="text-xs text-gray-400">Min. Order</p>
                  <p className="text-sm font-medium text-gray-900">
                    {product.minOrder}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 rounded-lg bg-white p-3 border">
                <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <div>
                  <p className="text-xs text-gray-400">Price Range</p>
                  <p className="text-sm font-medium text-green-700">
                    {product.priceRange}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900">
                Description
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {product.description}
              </p>
            </div>

            {/* Seller Info */}
            <div className="mt-6 rounded-xl border bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <Building2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {product.seller.companyName}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {product.seller.companyNameVi}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-gray-600">
                    {product.seller.province} Province
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-gray-600">
                    Export Capacity: {product.seller.exportCapacity}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
                  <div className="flex flex-wrap gap-1.5">
                    {product.seller.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="mt-12 rounded-xl border bg-white p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Send Inquiry</h2>
            <p className="mt-1 text-sm text-gray-500">
              Contact the seller about this product. Your inquiry will be sent
              directly.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-lg bg-green-50 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <Send className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-green-800">
                Inquiry Sent Successfully
              </h3>
              <p className="mt-1 text-sm text-green-600">
                The seller will respond to your inquiry within 24-48 hours.
              </p>
              <Button
                className="mt-4 bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    country: '',
                    quantity: '',
                    message: '',
                  });
                }}
              >
                Send Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleInquiry} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Company Name *
                </label>
                <Input
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Global Foods Inc."
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Country *
                </label>
                <Input
                  required
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  placeholder="United States"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Quantity Needed *
                </label>
                <Input
                  required
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  placeholder={`Min: ${product.minOrder}`}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="I am interested in sourcing this product for our distribution network. Please provide FOB pricing and shipping timelines..."
                />
              </div>
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  className="bg-green-600 px-8 hover:bg-green-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Inquiry
                </Button>
              </div>
            </form>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

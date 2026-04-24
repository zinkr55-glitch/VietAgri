export type Product = {
  id: string;
  name: string;
  nameVi: string;
  category: 'Vegetables' | 'Fruits' | 'Grains' | 'Herbs';
  origin: string;
  season: string;
  minOrder: string;
  priceRange: string;
  description: string;
  images: string[];
  seller: Seller;
};

export type Seller = {
  companyName: string;
  companyNameVi: string;
  province: string;
  certifications: string[];
  exportCapacity: string;
  established: number;
};

export const products: Product[] = [
  {
    id: 'mango-cat-loi',
    name: 'Cat Mango (Xoai Cat)',
    nameVi: 'Xoai Cat',
    category: 'Fruits',
    origin: 'Dong Thap',
    season: 'March - June',
    minOrder: '500 kg',
    priceRange: '$1.20 - $2.50 / kg',
    description:
      'Premium Cat mango from Dong Thap province, known for its sweet, fiberless flesh and vibrant golden color. Grown in the fertile Mekong Delta, these mangoes meet GlobalGAP standards and are carefully selected for export quality. Ideal for fresh consumption, smoothies, and dessert applications.',
    images: [
      'https://images.pexels.com/photos/9116468/pexels-photo-9116468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    seller: {
      companyName: 'Mekong Fruits Co., Ltd.',
      companyNameVi: 'Cong ty TNHH Trai Cay Me Kong',
      province: 'Dong Thap',
      certifications: ['GlobalGAP', 'VietGAP', 'HACCP'],
      exportCapacity: '200 tons/month',
      established: 2015,
    },
  },
  {
    id: 'dragon-fruit',
    name: 'Dragon Fruit (Thanh Long)',
    nameVi: 'Thanh Long',
    category: 'Fruits',
    origin: 'Binh Thuan',
    season: 'May - October',
    minOrder: '1,000 kg',
    priceRange: '$1.80 - $3.00 / kg',
    description:
      'White-fleshed dragon fruit from Binh Thuan, the dragon fruit capital of Vietnam. Grown under VietGAP standards with sustainable farming practices. The fruit features a vibrant pink exterior with mildly sweet, refreshing flesh. Perfect for fresh consumption, fruit bowls, and beverage applications.',
    images: [
      'https://images.pexels.com/photos/615704/pexels-photo-615704.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5945708/pexels-photo-5945708.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    seller: {
      companyName: 'Binh Thuan Agri Export JSC',
      companyNameVi: 'CTCP Xuat Nong Binh Thuan',
      province: 'Binh Thuan',
      certifications: ['GlobalGAP', 'VietGAP', 'Organic'],
      exportCapacity: '500 tons/month',
      established: 2010,
    },
  },
  {
    id: 'st25-rice',
    name: 'ST25 Fragrant Rice (Gao Thom ST25)',
    nameVi: 'Gao Thom ST25',
    category: 'Grains',
    origin: 'Dong Thap',
    season: 'Year-round',
    minOrder: '20 tons',
    priceRange: '$800 - $1,200 / ton',
    description:
      'World-renowned ST25 fragrant rice, crowned "World\'s Best Rice" in 2019 and 2023. Grown in the pristine alluvial soil of the Mekong Delta, this long-grain jasmine rice delivers an exceptional aroma, soft texture, and elongated grain when cooked. Ideal for premium rice markets and gourmet food service.',
    images: [
      'https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326088/pexels-photo-326088.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    seller: {
      companyName: 'Dong Thap Rice Export Co.',
      companyNameVi: 'Cong ty Xuat Gao Dong Thap',
      province: 'Dong Thap',
      certifications: ['GlobalGAP', 'ISO 22000', 'BRC'],
      exportCapacity: '5,000 tons/month',
      established: 2008,
    },
  },
  {
    id: 'robusta-coffee',
    name: 'Robusta Coffee (Ca Phe Robusta)',
    nameVi: 'Ca Phe Robusta',
    category: 'Grains',
    origin: 'Dak Lak',
    season: 'October - March',
    minOrder: '5 tons',
    priceRange: '$2,500 - $3,800 / ton',
    description:
      'Premium Grade 1 Robusta green coffee beans from the Central Highlands of Vietnam, the world\'s largest Robusta producer. Carefully processed using wet-milling for consistent quality. Rich body, low acidity, and chocolatey notes make these beans ideal for espresso blends and instant coffee production.',
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2228082/pexels-photo-2228082.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/14425/coffee-beans-roasted.jpg?auto=compress&cs=tinysrgb&w=800',
    ],
    seller: {
      companyName: 'Central Highlands Coffee JSC',
      companyNameVi: 'CTCP Ca Phe Tay Nguyen',
      province: 'Dak Lak',
      certifications: ['UTZ', 'Rainforest Alliance', '4C'],
      exportCapacity: '2,000 tons/month',
      established: 2005,
    },
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper (Tieu Den)',
    nameVi: 'Tieu Den',
    category: 'Herbs',
    origin: 'Phu Quoc',
    season: 'February - May',
    minOrder: '2 tons',
    priceRange: '$3,500 - $5,500 / ton',
    description:
      'Phu Quoc black pepper, a GI-protected product from Vietnam\'s pepper island. Hand-harvested at peak ripeness and sun-dried using traditional methods. Known for its bold, pungent flavor with floral undertones. Available in 500g/l and 550g/l grades. Perfect for spice markets, food manufacturing, and gourmet retail.',
    images: [
      'https://images.pexels.com/photos/775028/pexels-photo-775028.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3623997/pexels-photo-3623997.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1118404/pexels-photo-1118404.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    seller: {
      companyName: 'Phu Quoc Pepper Export Co.',
      companyNameVi: 'Cong ty Xuat Tieu Phu Quoc',
      province: 'Kien Giang (Phu Quoc)',
      certifications: ['GI Certification', 'Organic', 'ISO 22000'],
      exportCapacity: '300 tons/month',
      established: 2012,
    },
  },
  {
    id: 'cashew-nuts',
    name: 'Cashew Nuts W240 (Hat Dieu)',
    nameVi: 'Hat Dieu',
    category: 'Herbs',
    origin: 'Binh Phuoc',
    season: 'February - May',
    minOrder: '1 ton',
    priceRange: '$6,500 - $9,000 / ton',
    description:
      'Premium W240 grade cashew nuts from Binh Phuoc, Vietnam\'s largest cashew-producing province. Carefully processed with low-temperature roasting to preserve natural flavor and crunch. Whole kernels with consistent size, ideal for snacking, confectionery, and food manufacturing. Available raw or roasted, salted or unsalted.',
    images: [
      'https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1297615/pexels-photo-1297615.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3623997/pexels-photo-3623997.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    seller: {
      companyName: 'Binh Phuoc Cashew Corp.',
      companyNameVi: 'Taphat Dieu Binh Phuoc',
      province: 'Binh Phuoc',
      certifications: ['HACCP', 'BRC', 'Kosher'],
      exportCapacity: '800 tons/month',
      established: 2006,
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter((p) => p.category === category);
}

export const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Herbs'] as const;

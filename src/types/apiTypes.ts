export interface ProductLabel {
  active_from: string;
  active_to: string;
  background_color: string;
  label_id: number | null;
  label_text: string;
  name: string;
  text_color: string;
}

export interface Money {
  currency: string;
  value: number;
}

export interface ProductDiscount {
  amount_off: number;
  percent_off: number;
}

export interface ProductPrice {
  final_price: Money;
  regular_price: Money;
  discount?: ProductDiscount;
}

export interface PriceRange {
  minimum_price: ProductPrice;
}

export interface CategoryTree {
  name: string;
}

export interface ProductImage {
  url: string;
}

export interface BrandInfo {
  title: string;
}

export interface Product {
  brand: number;
  brand_info: BrandInfo;
  categories: CategoryTree[];
  id: number;
  is_yalla: string[];
  low_stock_qty: number | null;
  name: string;
  price: {
    regularPrice: {
      amount: Money;
    };
  };
  price_range: PriceRange;
  base_price_range: PriceRange;
  usd_price_range: PriceRange;
  product_label: ProductLabel;
  sku: string;
  small_image: ProductImage;
  stock_status: string;
  type_id: string;
  uid: string;
  url_key: string;
  url_suffix: string;
}

export interface ProductListResponse {
  data: {
    products: {
      items: Product[];
      page_info: {
        total_pages: number;
      };
      total_count: number;
      yalla_total_count: number;
    };
  };
}

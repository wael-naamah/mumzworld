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
  breadcrumbs?: Breadcrumb[] | null;
  level?: number;
  id?: number;
  name: string;
  url_path?: string;
  url_key?: string;
}

export interface ProductImage {
  disabled?: boolean;
  label?: string | null;
  position?: number;
  url: string;
}

export interface BrandInfo {
  img_src?: string;
  title: string;
  url?: string;
}

export interface Product {
  language: string;
  redirect_code: number;
  relative_url: string;
  type: string;
  amrma_default_resolution_period: number;
  brand: number;
  brand_info: BrandInfo;
  categories: CategoryTree[];
  cautions: string;
  cross_border_product: CrossBorderProduct;
  description: ComplexTextValue;
  dimensions: string;
  features: string;
  id: number;
  is_yalla: string[];
  low_stock_qty: number | null;
  media_gallery: ProductImage[];
  media_gallery_entries: MediaGalleryEntry[];
  meta_description: string;
  meta_title: string;
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
  weight: number;
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

export interface Breadcrumb {
  category_id: number;
  category_name: string;
  category_url_key: string;
  category_url_path: string;
}

export interface CrossBorderProduct {
  is_allowed: boolean;
  disallow_countries: string;
}

export interface ComplexTextValue {
  html: string;
}

export interface MediaGalleryEntry {
  disabled: boolean;
  file: string;
  id: number;
  label: string | null;
  position: number;
  uid: string;
}
export interface SearchResultPageInfo {
  page_size: number;
  total_pages: number;
}

export interface ProductReviews {
  items: any[];
  page_info: SearchResultPageInfo;
}

export interface ProductResponse {
  data: {
    product: Product[];
  };
}

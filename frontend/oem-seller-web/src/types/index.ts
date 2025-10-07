export interface OEMProductDto {
  id: number;
  name: string;
  sku: string;
  description: string;
  price: number;
  category: string;
  isoStandard: string;
  manufacturer: string;
  stockQuantity: number;
  images: string[];
  specifications: string[];
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface UserDto {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
  company: string;
  address: AddressDto;
  createdAt: string;
  lastLoginAt: string;
  isActive: boolean;
}

export interface AddressDto {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface OrderDto {
  id: number;
  orderNumber: string;
  userId: number;
  user: UserDto;
  items: OrderItemDto[];
  totalAmount: number;
  taxAmount: number;
  shippingAmount: number;
  status: string;
  paymentStatus: string;
  shippingStatus: string;
  shippingAddress: AddressDto;
  billingAddress: AddressDto;
  orderDate: string;
  shippedDate?: string;
  deliveredDate?: string;
  notes: string;
}

export interface OrderItemDto {
  id: number;
  productId: number;
  product: OEMProductDto;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: string[];
  statusCode: number;
  timestamp: string;
}

export interface PagedResponse<T> {
  data: T[];
  totalRecords: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
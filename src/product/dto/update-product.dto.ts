export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  isFeatured?: boolean;
  isBest?: boolean;
  isActive?: boolean;

  categoryId?: number; // keep this for UI simplicity
}

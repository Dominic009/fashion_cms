export class CreateProductDto {
  name!: string;
  description!: string;
  price!: number;
  categoryId!: number;
  isFeatured?: boolean;
  isBest?: boolean;
  isActive?: boolean;
}

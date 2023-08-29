import { z } from "zod";
import { ProductSchema } from "@/schemas";

export type Product = z.infer<typeof ProductSchema>;

export interface TechnologyReadinessLevel {
  id: string;
  name: string;
  description?: string | null;
}

export interface BusinessModel {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

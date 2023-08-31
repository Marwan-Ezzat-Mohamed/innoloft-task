import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DOMPurify from "dompurify";
import { Product } from "@/Types/product";
import { API_BASE_URL } from "@/config";

interface ProductState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: null,
  error: null,
  loading: true,
};

export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (productId: string) => {
    const response = await fetch(`${API_BASE_URL}/product/${productId}/`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return await response.json();
  },
  {
    condition: (_, { getState }) => {
      const { productState } = getState() as { productState: ProductState };
      return !productState.product;
    },
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (productData: Product) => {
    const response = await fetch(`${API_BASE_URL}/product/${productData.id}/`, {
      method: "PUT",
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return await response.json();
  }
);

const getSanitizedProduct = (product: Product) => {
  return {
    ...product,
    description: DOMPurify.sanitize(product.description),
  };
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = getSanitizedProduct(action.payload);
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Something went wrong while fetching product";
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = getSanitizedProduct(action.payload);
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ?? "Something went wrong while updating product";
      });
  },
});

export default productSlice.reducer;

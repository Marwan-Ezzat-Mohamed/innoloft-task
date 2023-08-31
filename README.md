## Innoloft Frontend Developer Task Documentation

In this documentation, I will walk you through the process of completing the Innoloft frontend developer task.

### Screenshots

## Desktop View

![Home Page](./screenshots/desktop1.jpeg)
![Product View Page](./screenshots/desktop2.jpeg)
![Product Edit Page](./screenshots/desktop3.jpeg)
![Product Delete Dialog](./screenshots/general1.jpeg)

## Mobile View

![Home Page](./screenshots/desktop1.jpeg)
![Product View Page](./screenshots/desktop1.jpeg)
![Product Edit Page](./screenshots/desktop1.jpeg)

### Tech Stack

- **Next.js (React.js)**
- **Tailwind CSS**
- **Redux**:
- **Radix UI**
- **React hook forms**
- **Zod**

### Choice of Next.js and Radix UI

- **Next.js**: The decision to use Next.js was based on its ability to offer server-side rendering (SSR) and static site generation (SSG). These features significantly improve the performance and search engine visibility of the application.

- **Radix UI**: `Radix UI` was chosen for its collection of UI primitives that provide a consistent and accessible foundation for building user interfaces.

### Caching API Requests with Redux

To prevent excessive API requests, a technique was implemented using Redux. The `createAsyncThunk` function was used to fetch product data. A condition was set to prevent redundant requests. If the product data is already present in the Redux state.

```javascript
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (productId: string) => {
    // API request logic here
  },
  {
    condition: (_, { getState }) => {
      // Check if product data is already in the state
      return !getState().productState.product;
    },
  }
);
```

### Form Validation with React Hook Forms and Zod

The `react-hook-form` library was used for form validation. The `zod` library was used to define the schema for the form data. The `zodResolver` function was used to validate the form data.

```javascript
const schema = z.object({
  name: z.string().nonempty("Please enter a name"),
  description: z.string().nonempty("Please enter a description"),
  price: z.string().nonempty("Please enter a price"),
  image: z.string().nonempty("Please upload an image"),
});
```

### Preference for Zustand

While Redux was used for state management, it's worth mentioning that if I was given the choice, I would have chosen `Zustand` over `Redux` as `Zustand` requires fewer setup steps, provides a more concise codebase, and is known for its simplicity and ease of use while providing almost the same functionality as Redux.

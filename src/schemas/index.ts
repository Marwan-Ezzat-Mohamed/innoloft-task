import { z as zod } from "zod";

export const ProductSchema = zod.object({
  id: zod.number({
    required_error: "Product id is required",
  }),
  name: zod
    .string({
      required_error: "Product name is required",
    })
    .min(3, "Product name must be at least 3 characters long")
    .nonempty(),
  description: zod
    .string({
      required_error: "Product description is required",
    })
    .min(30, "Product description must be at least 30 characters long")
    .nonempty(),
  picture: zod.string({
    required_error: "Product picture is required",
  }),
  type: zod.object({
    id: zod.number({
      required_error: "Product type id is required",
    }),
    name: zod
      .string({
        required_error: "Product type name is required",
      })
      .nonempty()
      .min(3, "Product type name must be at least 3 characters long"),
  }),
  categories: zod.array(
    zod.object({
      id: zod.number({
        required_error: "Product category id is required",
      }),
      name: zod

        .string({
          required_error: "Product category name is required",
        })
        .nonempty()
        .min(3, "Product category name must be at least 3 characters long")
        .nonempty(),
    })
  ),
  implementationEffortText: zod
    .string({
      required_error: "Product implementation effort text is required",
    })
    .nullable(),
  investmentEffort: zod
    .string({
      required_error: "Product investment effort is required",
    })
    .nonempty(),

  trl: zod.object({
    id: zod.number({
      required_error: "Product trl id is required",
    }),
    name: zod
      .string({
        required_error: "Product trl name is required",
      })
      .min(3, "Product trl name must be at least 3 characters long")
      .nonempty(),
  }),
  video: zod.string({
    required_error: "Product video is required",
  }),
  user: zod.object({
    id: zod.number({
      required_error: "Product user id is required",
    }),
    email: zod
      .string({
        required_error: "Product user email is required",
      })
      .nonempty()
      .email("Product user email must be a valid email")
      .nonempty(),
    firstName: zod
      .string({
        required_error: "Product user first name is required",
      })
      .min(3, "Product user first name must be at least 3 characters long")
      .max(50, "Product user first name must be at most 50 characters long"),

    lastName: zod
      .string({
        required_error: "Product user last name is required",
      })

      .min(3, "Product user last name must be at least 3 characters long")
      .max(50, "Product user last name must be at most 50 characters long")
      .nonempty(),

    sex: zod.number({
      required_error: "User sex is required",
    }),

    profilePicture: zod
      .string({
        required_error: "Product user profile picture is required",
      })
      .nonempty(),

    position: zod
      .string({
        required_error: "Product user position is required",
      })
      .nonempty(),
  }),
  company: zod.object({
    name: zod
      .string({
        required_error: "Product company name is required",
      })
      .min(3, "Product company name must be at least 3 characters long")
      .nonempty(),
    logo: zod.string({
      required_error: "Product company logo is required",
    }),
    address: zod.object({
      country: zod.object({
        name: zod
          .string({
            required_error: "Product company address country name is required",
          })
          .min(
            3,
            "Product company address country name must be at least 3 characters long"
          )
          .nonempty(),
      }),
      city: zod.object({
        name: zod
          .string({
            required_error: "Product company address city name is required",
          })

          .min(
            3,
            "Product company address city name must be at least 3 characters long"
          )
          .nonempty(),
      }),
      street: zod
        .string({
          required_error: "Product company address street is required",
        })
        .nonempty(),
      house: zod
        .string({
          required_error: "Product company address house is required",
        })
        .nonempty(),
      zipCode: zod
        .string({
          required_error: "Product company address zip code is required",
        })
        .nonempty(),
      longitude: zod.string({
        required_error: "Product company address longitude is required",
      }),
      latitude: zod.string({
        required_error: "Product company address latitude is required",
      }),
    }),
  }),
  businessModels: zod.array(
    zod.object({
      id: zod.number({
        required_error: "Product business model id is required",
      }),
      name: zod
        .string({
          required_error: "Product business model name is required",
        })
        .min(
          3,
          "Product business model name must be at least 3 characters long"
        )
        .nonempty(),
    })
  ),
});

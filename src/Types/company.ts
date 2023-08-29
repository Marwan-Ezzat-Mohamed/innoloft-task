export interface Company {
  name: string
  logo: string
  address: Address
}

export interface Address extends Record<string, unknown> {
  country: {
    name: string
  }
  city: {
    name: string
  }
  street: string
  house: string
  zipCode: string
  longitude: string
  latitude: string
}

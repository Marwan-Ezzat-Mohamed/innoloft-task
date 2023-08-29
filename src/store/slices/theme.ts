import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_BASE_URL, APP_ID } from 'config'
import { Theme } from 'Types/theme'

// Define a type for the slice state
interface ThemeState {
  theme: Theme
  loading: boolean
  error: string | null
}

const initialState: ThemeState = {
  theme: {
    id: 1,
    logo: 'https://img.innoloft.de/logo.svg',
    mainColor: '#272e71',
    hasUserSection: true,
  },
  error: null,
  loading: true,
}

export const fetchTheme = createAsyncThunk('fetchTheme', async () => {
  const response = await fetch(`${API_BASE_URL}/configuration/${APP_ID}/`)

  if (!response.ok) {
    throw new Error('Error fetching theme configuration')
  }

  const data = await response.json()

  return data
})

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTheme.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTheme.fulfilled, (state, action) => {
        state.loading = false
        state.theme = action.payload
      })
      .addCase(fetchTheme.rejected, (state, action) => {
        state.loading = false
        state.error =
          action.error.message ?? 'Something went wrong while fetching theme config'
      })
  },
})

export default themeSlice.reducer

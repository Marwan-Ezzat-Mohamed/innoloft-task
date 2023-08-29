import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TechnologyReadinessLevel } from 'Types/product'
import { API_BASE_URL } from 'config'

// Define a type for the slice state
interface TrlState {
  trls: TechnologyReadinessLevel[]
  loading: boolean
  error: string | null
}

// Define the initial state using that type
const initialState: TrlState = {
  trls: [],
  error: null,
  loading: true,
}

export const fetchTrls = createAsyncThunk(
  'fetchTrls',
  async () => {
    const response = await fetch(`${API_BASE_URL}/trl/`)

    if (!response.ok) {
      throw new Error('Failed to fetch Trls')
    }

    const data = await response.json()

    return data
  },
  {
    condition: (_, { getState }) => {
      const { trlState } = getState() as { trlState: TrlState }
      if (trlState.trls.length > 0) {
        return false
      }
    },
  }
)

export const trlSlice = createSlice({
  name: 'trl',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTrls.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTrls.fulfilled, (state, action) => {
        state.loading = false
        state.trls = action.payload
      })
      .addCase(fetchTrls.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export default trlSlice.reducer

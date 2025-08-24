import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@webapp/shared'
import { authApi } from '@/services/api'

interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  clearError: () => void
  setUser: (user: User) => void
}

type AuthStore = AuthState & AuthActions

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // State
      user: null,
      token: null,
      isLoading: false,
      error: null,

      // Actions
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null })
        try {
          const response = await authApi.login(email, password)
          set({
            user: response.data.user,
            token: response.data.token,
            isLoading: false,
            error: null,
          })
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Login failed',
          })
          throw error
        }
      },

      register: async (userData: any) => {
        set({ isLoading: true, error: null })
        try {
          const response = await authApi.register(userData)
          set({
            user: response.data.user,
            token: response.data.token,
            isLoading: false,
            error: null,
          })
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.response?.data?.message || 'Registration failed',
          })
          throw error
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isLoading: false,
          error: null,
        })
      },

      clearError: () => {
        set({ error: null })
      },

      setUser: (user: User) => {
        set({ user })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
)

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled'

export type Booking = {
  id: string
  created_at: string
  name: string
  phone: string
  email: string | null
  vehicle_type: string
  vehicle_year: string | null
  vehicle_make: string | null
  vehicle_model: string | null
  services: string[]
  preferred_date: string
  preferred_time: string
  notes: string | null
  status: BookingStatus
  admin_notes: string | null
  how_heard: string | null
}

export type BookingInsert = {
  id?: string
  created_at?: string
  name: string
  phone: string
  vehicle_type: string
  preferred_date: string
  preferred_time: string
  services: string[]
  email?: string | null
  vehicle_year?: string | null
  vehicle_make?: string | null
  vehicle_model?: string | null
  notes?: string | null
  admin_notes?: string | null
  how_heard?: string | null
  status?: BookingStatus
}

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: Booking
        Insert: BookingInsert
        Update: Partial<Omit<Booking, 'id' | 'created_at'>>
        Relationships: {
          foreignKeyName: string
          columns: string[]
          isOneToOne?: boolean
          referencedRelation: string
          referencedColumns: string[]
        }[]
      }
    }
    Views: { [_ in never]: never }
    Functions: { [_ in never]: never }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}
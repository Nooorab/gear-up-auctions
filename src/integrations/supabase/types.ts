export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bids: {
        Row: {
          bid_amount: number
          created_at: string | null
          id: string
          listing_id: string
          user_id: string
        }
        Insert: {
          bid_amount: number
          created_at?: string | null
          id?: string
          listing_id: string
          user_id: string
        }
        Update: {
          bid_amount?: number
          created_at?: string | null
          id?: string
          listing_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bids_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "car_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      car_listings: {
        Row: {
          auction_end_time: string | null
          car_id: string
          created_at: string | null
          current_bid: number | null
          highest_bidder_id: string | null
          id: string
          is_sold: boolean | null
          listing_type: Database["public"]["Enums"]["listing_type"]
          reserve_price: number | null
          start_price: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          auction_end_time?: string | null
          car_id: string
          created_at?: string | null
          current_bid?: number | null
          highest_bidder_id?: string | null
          id?: string
          is_sold?: boolean | null
          listing_type: Database["public"]["Enums"]["listing_type"]
          reserve_price?: number | null
          start_price: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          auction_end_time?: string | null
          car_id?: string
          created_at?: string | null
          current_bid?: number | null
          highest_bidder_id?: string | null
          id?: string
          is_sold?: boolean | null
          listing_type?: Database["public"]["Enums"]["listing_type"]
          reserve_price?: number | null
          start_price?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "car_listings_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "cars"
            referencedColumns: ["id"]
          },
        ]
      }
      cars: {
        Row: {
          condition: Database["public"]["Enums"]["car_condition"]
          created_at: string | null
          description: string | null
          id: string
          make: Database["public"]["Enums"]["car_make"]
          mileage: number
          model: string
          updated_at: string | null
          year: number
        }
        Insert: {
          condition: Database["public"]["Enums"]["car_condition"]
          created_at?: string | null
          description?: string | null
          id?: string
          make: Database["public"]["Enums"]["car_make"]
          mileage: number
          model: string
          updated_at?: string | null
          year: number
        }
        Update: {
          condition?: Database["public"]["Enums"]["car_condition"]
          created_at?: string | null
          description?: string | null
          id?: string
          make?: Database["public"]["Enums"]["car_make"]
          mileage?: number
          model?: string
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      car_condition: "excellent" | "very-good" | "good" | "fair" | "poor"
      car_make:
        | "Audi"
        | "BMW"
        | "Ford"
        | "Honda"
        | "Mercedes"
        | "Toyota"
        | "Volkswagen"
        | "Volvo"
      listing_type: "auction" | "fixed-price"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      car_condition: ["excellent", "very-good", "good", "fair", "poor"],
      car_make: [
        "Audi",
        "BMW",
        "Ford",
        "Honda",
        "Mercedes",
        "Toyota",
        "Volkswagen",
        "Volvo",
      ],
      listing_type: ["auction", "fixed-price"],
    },
  },
} as const

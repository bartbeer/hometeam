import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import * as Localization from 'expo-localization';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || process.env.expoPublicSupabaseUrl;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || process.env.expoPublicSupabaseAnonKey;

// Get device IANA timezone (e.g., "Europe/Brussels")
function getClientTZ() {
  return Localization.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  global: {
    headers: { 'X-Client-TZ': getClientTZ() },
  },
  auth: {
    storage: AsyncStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false, // Expo (no browser redirect)
  },
});


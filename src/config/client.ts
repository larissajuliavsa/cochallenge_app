import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://cwhcynptsaaupzkthxlb.supabase.co';
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL as string;

const supabaseAnonKey = import.meta.env.VITE_REACT_APP_ANON_KEY as string;
// const supabaseAnonKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3aGN5bnB0c2FhdXB6a3RoeGxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzNjY0MzYsImV4cCI6MTk5OTk0MjQzNn0.N4bFOcdwmUAz8CK7n37sDJb73roAmdlpR5W5-gFusZY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

// js/supabase-init.js
// Substitui o firebase-init.js — configure com suas credenciais do Supabase

const SUPABASE_URL  = 'https://dzueyajgxpdasmadeucb.supabase.co';
const SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6dWV5YWpneHBkYXNtYWRldWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5OTkyNDIsImV4cCI6MjA5MzU3NTI0Mn0.70Dj2kt-4kpJnZhGgkZaocjjXpx-l0RUVoTuoRpzBR0';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

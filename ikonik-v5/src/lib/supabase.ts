import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kgfolduvslsytbekbjvf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnZm9sZHV2c2xzeXRiZWtianZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDU3MDcsImV4cCI6MjA5MDcyMTcwN30.4jZ9fMfSinEc1CE3s6LuR4q_WNeisEdtyBM5XQ2uMJg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

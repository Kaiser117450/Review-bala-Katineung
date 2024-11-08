import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://nwgyzrpqyfkiydlsmxoc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z3l6cnBxeWZraXlkbHNteG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NjQwMDEsImV4cCI6MjA0NjM0MDAwMX0.exN0d7hFrHlQ0ZUrkh09SrPaw_17seED8AOE6Ii_M9U";
const supabase = createClient(supabaseUrl, supabaseKey);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	supabase
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, supabase as s };

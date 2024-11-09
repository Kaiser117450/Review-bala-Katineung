// src/pages/api/review.ts
import type { APIRoute } from 'astro';
import { supabase } from '../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { rating, reactions, review } = data;

    // Validasi dasar
    if (!rating || !review) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Rating dan review harus diisi'
        }), 
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Insert ke Supabase
    const { error } = await supabase
      .from('reviews')
      .insert([
        {
          rating: parseInt(rating),
          reactions: reactions || [],
          review: review,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) throw error;

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Review berhasil disimpan'
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

  } catch (error) {
    console.error('Error submitting review:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Terjadi kesalahan saat menyimpan review'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
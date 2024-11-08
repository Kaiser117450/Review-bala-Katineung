import { s as supabase } from '../../chunks/supabase_C0PahAiq.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const rating = formData.get("rating");
    const reaction = formData.getAll("reaction");
    const review = formData.get("review");
    if (!rating || !review) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Rating dan review harus diisi"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const { data, error } = await supabase.from("reviews").insert([
      {
        rating: parseInt(rating.toString()),
        reactions: reaction,
        review,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]).select();
    if (error) throw error;
    return redirect("/terimakasih");
  } catch (error) {
    console.error("Error submitting review:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Terjadi kesalahan saat menyimpan review"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
const GET = async ({ request }) => {
  return new Response(
    JSON.stringify({ message: "API endpoint for reviews" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import type { APIRoute } from 'astro';
import fullRagData from '../../../data/master_rag_dataset.json';

export async function getStaticPaths() {
  return fullRagData.career_docs.map((doc) => ({
    params: { id: doc.id },
    props: { doc }
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { doc } = props as { doc: any };
  return new Response(JSON.stringify(doc), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

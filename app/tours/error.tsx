// NOTE (1): error.tsx component is now dedicated to the tours fetch ONLY. When placed in the 'root' with the main page and layout, error applies to all pages.
// NOTE (2): error is a CLIENT component

"use client";

function error({ error }: { error: Error }) {
  console.log(error);

  return <div>There was an error..</div>;
}
export default error;

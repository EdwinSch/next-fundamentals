// NOTE (1): loading.tsx component is now dedicated to the tours fetch ONLY. When placed in the 'root' with the main page and layout, loading applies to all pages.
// NOTE (2): loading is a CLIENT component

"use client";

function loading() {
  return <span className="text-xl capitalize">loading tours...</span>;
}
export default loading;

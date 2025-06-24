export const getRoverData = async (rover) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/rovers/${rover}`
  );
  if (!res.ok) throw new Error("Failed to fetch rover manifest");
  const data = await res.json();
  return data;
};

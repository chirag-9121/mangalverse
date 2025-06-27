export const getRoverData = async (rover) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/rovers/${rover}`
  );
  if (!res.ok) throw new Error("Failed to fetch rover manifest");
  const data = await res.json();
  return data;
};

export async function getRoverPhotos(rover, params = {}) {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/photos/${rover}`
  );

  // Appending params as query string
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("Failed to fetch rover photos");
  return await res.json();
}

export async function getApod() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/apod`);
  if (!res.ok) throw new Error("Failed to fetch APOD");
  return await res.json();
}

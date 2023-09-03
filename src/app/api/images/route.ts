import { NextRequest } from "next/server";

const images = [
  {
    id: "_hjZ74lQOls",
    alt_description: "a person swimming in the water near a cave",
    urls: {
      raw: "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?ixid=M3wzNDI3ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1682687980115-a37b56ea7271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687980115-a37b56ea7271",
    },
  },
  {
    id: "h13iaGlFOvs",
    alt_description: "white concrete chapel beside sea",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1561559130-023191be2afe?ixid=M3wzNDI3ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1561559130-023191be2afe?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1561559130-023191be2afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1561559130-023191be2afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1561559130-023191be2afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1561559130-023191be2afe",
    },
  },
  {
    id: "nRDIU9q1wJY",
    alt_description: "a woman sitting at a table with a cup of coffee",
    breadcrumbs: [],
    urls: {
      raw: "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?ixid=M3wzNDI3ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1693569444434-85aa71939cd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693569444434-85aa71939cd4",
    },
  },
  {
    id: "3xs5yZ1JBVA",
    alt_description: "a view of a mountain range at sunset",
    urls: {
      raw: "https://images.unsplash.com/photo-1693253024090-1fc1e1821a5c?ixid=M3wzNDI3ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1693253024090-1fc1e1821a5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1693253024090-1fc1e1821a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1693253024090-1fc1e1821a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1693253024090-1fc1e1821a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693253024090-1fc1e1821a5c",
    },
  },
  {
    id: "zyo97FvVNko",
    alt_description: "a woman standing in front of a colorful curtain",
    urls: {
      raw: "https://images.unsplash.com/photo-1693129499971-ae047f40ca70?ixid=M3wzNDI3ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1693129499971-ae047f40ca70?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1693129499971-ae047f40ca70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1693129499971-ae047f40ca70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1693129499971-ae047f40ca70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693129499971-ae047f40ca70",
    },
  },
  {
    id: "2gVgVf5CNAE",
    alt_description: "a person standing on top of a sandy hill",
    urls: {
      raw: "https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixid=M3wzNDI3ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1682687982183-c2937a74257c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1682687982183-c2937a74257c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1682687982183-c2937a74257c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1682687982183-c2937a74257c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687982183-c2937a74257c",
    },
  },
  {
    id: "K4YzNrQUoZ4",
    alt_description:
      "a group of different shapes and colors on a gray background",
    urls: {
      raw: "https://images.unsplash.com/photo-1692606867300-7e88d859546e?ixid=M3wzNDI3ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1692606867300-7e88d859546e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1692606867300-7e88d859546e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1692606867300-7e88d859546e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1692606867300-7e88d859546e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1692606867300-7e88d859546e",
    },
  },
  {
    id: "OEbHNHd_yxs",
    alt_description: "a kitchen with a counter and stools next to it",
    urls: {
      raw: "https://images.unsplash.com/photo-1693201664010-8a8fd02f6711?ixid=M3wzNDI3ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1693201664010-8a8fd02f6711?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1693201664010-8a8fd02f6711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1693201664010-8a8fd02f6711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1693201664010-8a8fd02f6711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693201664010-8a8fd02f6711",
    },
  },
  {
    id: "Ti4KDkPT5gg",
    alt_description: "a woman in a white dress is posing for a picture",
    urls: {
      raw: "https://images.unsplash.com/photo-1693155105117-944446f4df14?ixid=M3wzNDI3ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1693155105117-944446f4df14?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1693155105117-944446f4df14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1693155105117-944446f4df14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1693155105117-944446f4df14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MzcyNjI4N3w&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693155105117-944446f4df14",
    },
  },
  {
    id: "ZMGUdXdwkHE",
    alt_description: "a bird's eye view of a body of water",
    urls: {
      raw: "https://images.unsplash.com/photo-1693611148462-574853f883a5?ixid=M3wzNDI3ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTM3MjYyODd8&ixlib=rb-4.0.3",
      full: "https://images.unsplash.com/photo-1693611148462-574853f883a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTM3MjYyODd8&ixlib=rb-4.0.3&q=85",
      regular:
        "https://images.unsplash.com/photo-1693611148462-574853f883a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTM3MjYyODd8&ixlib=rb-4.0.3&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1693611148462-574853f883a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTM3MjYyODd8&ixlib=rb-4.0.3&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1693611148462-574853f883a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDI3ODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTM3MjYyODd8&ixlib=rb-4.0.3&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693611148462-574853f883a5",
    },
  },
];

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 1;

    const start = (page - 1) * limit;
    const end = page * limit;

    const paginatedImages = images.slice(start, end);

    const hasMore = end < images.length;

    return new Response(JSON.stringify({ images: paginatedImages, hasMore }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

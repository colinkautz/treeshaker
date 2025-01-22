import {list} from "@vercel/blob";
import {BLOB_READ_WRITE_TOKEN} from "$env/static/private";
import {db} from "$lib/server/db";
import {produce} from "$lib/server/db/schema.js";

const categoryData = await db.select().from(produce);

export function getProduceCategory(name) {
    if(name !== "Bee") {
        const foundProduce = categoryData.find(obj => obj.name === name);
        return foundProduce.category;
    } else {
        return "";
    }
}

async function getImagesFromBlob() {
    try {
        const {blobs} = await list({token: BLOB_READ_WRITE_TOKEN, prefix: "treeshaker/produce-images/"});
        return blobs;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProduceImages() {
    const blobs = await getImagesFromBlob();
    const image = blobs.filter(blob => blob.url.endsWith(".png"));
    return {
        images: image.map(img => ({
            url: img.url,
            name: img.pathname.split("/").pop().replace(".png", "")
        }))
    }
}
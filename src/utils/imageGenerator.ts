// filepath: /home/lucas/Documents/botacasaco/src/utils/imageGenerator.ts
import { Client } from "@gradio/client";

interface GenerateImageProps {
	poseImage: File;
	clothingImage: File;
}

export const generateImage = async ({ poseImage, clothingImage }: GenerateImageProps) => {
	const client = await Client.connect("franciszzj/Leffa");

	const poseImageBlob = await poseImage.arrayBuffer();
	const clothingImageBlob = await clothingImage.arrayBuffer();

	const result = await client.predict("/leffa_predict_vt", {
		src_image_path: new Blob([poseImageBlob]),
		ref_image_path: new Blob([clothingImageBlob]),
		ref_acceleration: true,
		step: 30,
		scale: 2.5,
		seed: 42,
		vt_model_type: "viton_hd",
		vt_garment_type: "upper_body",
		vt_repaint: true,
	});
	console.log(result.data)

	return result.data[0].url;
};
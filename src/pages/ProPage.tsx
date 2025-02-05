import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUploadPanel from "@/components/ImageUploadPanel";
import ResultDisplay from "@/components/ResultDisplay";
import GenerateButton from "@/components/GenerateButton";
import ConfigurationPanel from "@/components/ConfigurationPanel";
import { generateImage } from "@/utils/imageGenerator";

const ProPage = () => {
	const [poseImage, setPoseImage] = useState<File | null>(null);
	const [clothingImage, setClothingImage] = useState<File | null>(null);
	const [result, setResult] = useState<any>(null);
	const [isGenerating, setIsGenerating] = useState<boolean>(false);
	const [config, setConfig] = useState<any>({
		modelType: "VITON-HD",
		garmentType: "upper_body",
		accelerateRef: false,
		repaintMode: false,
		inferenceSteps: 30,
		guidanceScale: 2.5,
		randomSeed: 42,
	});

	const handlePoseUpload = (file: File) => {
		setPoseImage(file);
	};

	const handleClothingUpload = (file: File) => {
		setClothingImage(file);
	};

	const handleConfigChange = (newConfig: any) => {
		setConfig(newConfig);
	};

	const handleGenerate = async () => {
		if (poseImage && clothingImage) {
			setIsGenerating(true);
			const result = await generateImage({
				poseImage,
				clothingImage,
				...config,
			});
			setResult(result);
			setIsGenerating(false);
		}
	};

	return (
		<div className="min-h-screen w-full bg-[#1A1A1A] flex flex-col">
			<Header />
			<main className="flex-1 p-8">
				<div className="max-w-7xl mx-auto space-y-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						<div className="flex flex-col items-center space-y-4">
							<ImageUploadPanel
								title="Selecione sua foto"
								onImageUpload={handlePoseUpload}
							/>
						</div>

						<div className="flex flex-col items-center space-y-4">
							<ImageUploadPanel
								title="Selecione a roupa"
								onImageUpload={handleClothingUpload}
							/>
						</div>

						<div className="flex flex-col items-center space-y-4">
							<ResultDisplay result={result} isLoading={isGenerating} />
						</div>
					</div>

					<div className="flex flex-col items-center space-y-4">
						<ConfigurationPanel onConfigChange={handleConfigChange} />
					</div>

					<div className="flex justify-center mt-8">
						<GenerateButton
							onClick={handleGenerate}
							isLoading={isGenerating}
							disabled={!poseImage || !clothingImage}
						/>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ProPage;
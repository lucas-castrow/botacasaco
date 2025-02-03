import React, { useState } from "react";
import ImageUploadPanel from "./ImageUploadPanel";
import ResultDisplay from "./ResultDisplay";
import GenerateButton from "./GenerateButton";
import Header from "./Header";
import Footer from "./Footer";

interface HomeProps {
  onGenerate?: () => void;
  isGenerating?: boolean;
}

const Home = ({
  onGenerate = () => console.log("Generate clicked"),
  isGenerating = false,
}: HomeProps) => {
  const [poseImage, setPoseImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);

  const handlePoseUpload = (file: File) => {
    setPoseImage(file);
  };

  const handleClothingUpload = (file: File) => {
    setClothingImage(file);
  };

  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] flex flex-col">
      <Header />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <ImageUploadPanel
                title="Upload Pose Photo"
                onImageUpload={handlePoseUpload}
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <ImageUploadPanel
                title="Upload Clothing Item"
                onImageUpload={handleClothingUpload}
              />
            </div>

            <div className="flex flex-col items-center space-y-4">
              <ResultDisplay onRegenerate={onGenerate} />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <GenerateButton
              onClick={onGenerate}
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

export default Home;

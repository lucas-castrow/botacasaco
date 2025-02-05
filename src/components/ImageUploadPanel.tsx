import React, { useState, useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";

interface ImageUploadPanelProps {
  title?: string;
  onImageUpload?: (file: File) => void;
  previewUrl?: string;
}

const ImageUploadPanel = ({
  title = "Upload Image",
  onImageUpload = () => { },
  previewUrl = "",
}: ImageUploadPanelProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(previewUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onImageUpload(file);
  };

  return (
    <Card className="w-[400px] h-[500px] bg-[#2A2A2A] backdrop-blur-lg bg-opacity-50 border-2 border-[#4A90E2]/20 overflow-hidden">
      <div
        className={`flex flex-col items-center justify-center w-full h-full p-6 transition-colors ${isDragging ? "bg-[#4A90E2]/10" : ""
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative w-full h-full">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-contain rounded-lg"
            />
            <Button
              variant="secondary"
              className="absolute bottom-4 right-4 bg-[#2A2A2A]/80 hover:bg-[#2A2A2A]"
              onClick={() => {
                setPreview("");
              }}
            >
              Trocar imagem
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#4A90E2]/20 flex items-center justify-center">
              {isDragging ? (
                <ImageIcon className="w-8 h-8 text-[#4A90E2]" />
              ) : (
                <Upload className="w-8 h-8 text-[#4A90E2]" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">
              {/* Drag and drop your image here, or click to select */}
              Arraste sua imagem aqui, ou clique para selecionar
            </p>
            <Button
              variant="outline"
              className="mt-2 border-[#4A90E2]/50 hover:border-[#4A90E2] text-[#4A90E2]"
              onClick={() => fileInputRef.current?.click()}
            >
              Selecionar
            </Button>
            <input
              ref={fileInputRef}
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileInput}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageUploadPanel;
import React, { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

interface ResultDisplayProps {
  result: any;
  isLoading: boolean;
}

const ResultDisplay = ({ result, isLoading }: ResultDisplayProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (result && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.src = result;
        img.onload = () => {
          const aspectRatio = img.width / img.height;
          const containerWidth = canvas.parentElement?.clientWidth || img.width;
          const containerHeight = canvas.parentElement?.clientHeight || img.height;

          if (containerWidth / aspectRatio <= containerHeight) {
            canvas.width = containerWidth;
            canvas.height = containerWidth / aspectRatio;
          } else {
            canvas.width = containerHeight * aspectRatio;
            canvas.height = containerHeight;
          }

          ctx.filter = "blur(10px)";
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          ctx.font = "bold 48px Arial";
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.textAlign = "center";
        };
      }
    }
  }, [result]);

  const handleDownloadHighQuality = () => {
    // Lógica para solicitar pagamento e fornecer a imagem em alta qualidade
    alert("Para baixar a imagem em alta qualidade, por favor, realize o pagamento.");
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Loader2 className="h-16 w-16 animate-spin text-[#4A90E2]" />
          <p className="text-white">Gerando sua imagem...</p>
        </div>
      ) : result ? (
        <div className="relative w-full h-full flex flex-col items-center">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain rounded-lg border-4 border-[#4A90E2]"
          />
          <button
            onClick={handleDownloadHighQuality}
            className="absolute bottom-4 bg-gradient-to-r from-[#8A2BE2] to-[#4A90E2] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Visualizar imagem
          </button>
        </div>
      ) : (
        <p className="text-white">Nenhum resultado ainda</p>
      )}
    </div>
  );
};

export default ResultDisplay;
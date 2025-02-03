import React from "react";
import { Loader2 } from "lucide-react";

interface ResultDisplayProps {
  result: any;
  isLoading: boolean;
}

const ResultDisplay = ({ result, isLoading }: ResultDisplayProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Loader2 className="h-16 w-16 animate-spin text-[#4A90E2]" />
          <p className="text-white">Generating Image...</p>
        </div>
      ) : result ? (
        <img src={result} alt="Generated Result" className="w-full h-full object-contain rounded-lg" />
      ) : (
        <p className="text-white">No result yet</p>
      )}
    </div>
  );
};

export default ResultDisplay;
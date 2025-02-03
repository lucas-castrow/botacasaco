import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface GenerateButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const GenerateButton = ({
  onClick = () => {},
  isLoading = false,
  disabled = false,
}: GenerateButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-[200px] h-[50px] bg-gradient-to-r from-[#8A2BE2] to-[#4A90E2] hover:opacity-90 transition-opacity"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        "Generate"
      )}
    </Button>
  );
};

export default GenerateButton;

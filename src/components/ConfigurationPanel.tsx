import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ConfigurationPanelProps {
	onConfigChange: (config: any) => void;
}

const ConfigurationPanel = ({ onConfigChange }: ConfigurationPanelProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modelType, setModelType] = useState("VITON-HD");
	const [garmentType, setGarmentType] = useState("upper_body");
	const [accelerateRef, setAccelerateRef] = useState(false);
	const [repaintMode, setRepaintMode] = useState(true);
	const [inferenceSteps, setInferenceSteps] = useState(30);
	const [guidanceScale, setGuidanceScale] = useState(2.5);
	const [randomSeed, setRandomSeed] = useState(42);

	useEffect(() => {
		handleConfigChange();
	}, [modelType, garmentType, accelerateRef, repaintMode, inferenceSteps, guidanceScale, randomSeed]);

	const handleConfigChange = () => {
		onConfigChange({
			modelType,
			garmentType,
			accelerateRef,
			repaintMode,
			inferenceSteps,
			guidanceScale,
			randomSeed,
		});
	};

	return (
		<div className="w-full">
			<div
				className="p-4 bg-[#2A2A2A] rounded-lg flex items-center justify-between cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="text-xl font-semibold text-white">Configurações</h3>
				{isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
			</div>
			{isOpen && (
				<div className="p-4 bg-[#2A2A2A] rounded-lg space-y-4 mt-2">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<div className="space-y-2">
							<label className="text-white">Tipo de Modelo</label>
							<select
								value={modelType}
								onChange={(e) => setModelType(e.target.value)}
								className="w-full p-2 rounded-lg bg-[#1A1A1A] text-white"
							>
								<option value="VITON-HD">VITON-HD (Recomendado)</option>
								<option value="DressCode">DressCode (Experimental)</option>
							</select>
						</div>
						<div className="space-y-2">
							<label className="text-white">Tipo de Vestimenta</label>
							<select
								value={garmentType}
								onChange={(e) => setGarmentType(e.target.value)}
								className="w-full p-2 rounded-lg bg-[#1A1A1A] text-white"
							>
								<option value="upper_body">Roupa de cima</option>
								<option value="lower_body">Roupa de baixo</option>
								<option value="dress">Vestido</option>
							</select>
						</div>
						<div className="space-y-2">
							<label className="text-white">Acelerar Referência UNet</label>
							<div className="flex space-x-4">
								<label className="flex items-center text-white">
									<input
										type="radio"
										value="true"
										checked={accelerateRef === true}
										onChange={() => setAccelerateRef(true)}
										className="mr-2"
									/>
									Sim
								</label>
								<label className="flex items-center text-white">
									<input
										type="radio"
										value="false"
										checked={accelerateRef === false}
										onChange={() => setAccelerateRef(false)}
										className="mr-2"
									/>
									Não
								</label>
							</div>
						</div>
						<div className="space-y-2">
							<label className="text-white">Modo Repaint</label>
							<div className="flex space-x-4">
								<label className="flex items-center text-white">
									<input
										type="radio"
										value="true"
										checked={repaintMode === true}
										onChange={() => setRepaintMode(true)}
										className="mr-2"
									/>
									Sim
								</label>
								<label className="flex items-center text-white">
									<input
										type="radio"
										value="false"
										checked={repaintMode === false}
										onChange={() => setRepaintMode(false)}
										className="mr-2"
									/>
									Não
								</label>
							</div>
						</div>
						<div className="space-y-2">
							<label className="text-white">Passos de Inferência</label>
							<input
								type="number"
								value={inferenceSteps}
								onChange={(e) => setInferenceSteps(parseInt(e.target.value))}
								className="w-full p-2 rounded-lg bg-[#1A1A1A] text-white"
							/>
						</div>
						<div className="space-y-2">
							<label className="text-white">Escala de Orientação</label>
							<input
								type="number"
								value={guidanceScale}
								onChange={(e) => setGuidanceScale(parseFloat(e.target.value))}
								className="w-full p-2 rounded-lg bg-[#1A1A1A] text-white"
							/>
						</div>
						<div className="space-y-2">
							<label className="text-white">Seed Aleatório</label>
							<input
								type="number"
								value={randomSeed}
								onChange={(e) => setRandomSeed(parseInt(e.target.value))}
								className="w-full p-2 rounded-lg bg-[#1A1A1A] text-white"
							/>
						</div>
					</div>
					<button
						onClick={handleConfigChange}
						className="w-full bg-gradient-to-r from-[#8A2BE2] to-[#4A90E2] text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
					>
						Aplicar Configurações
					</button>
				</div>
			)}
		</div>
	);
};

export default ConfigurationPanel;
// filepath: /home/lucas/Documents/botacasaco/src/types/gradio-client.d.ts
declare module "@gradio/client" {
	export class Client {
		static connect(url: string): Promise<Client>;
		predict(endpoint: string, data: Record<string, any>): Promise<{ data: any }>;
	}
}
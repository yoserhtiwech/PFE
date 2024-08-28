import { WebSocketService } from "../../service/WebSocket.service";
import { TokenService } from "../../token/token.service";

export function initializeApp(webSocketService: WebSocketService, tokenService: TokenService): () => Promise<void> {
  return () => new Promise<void>((resolve) => {
    const token = localStorage.getItem('jwtToken') || tokenService.token;
    if (token &&!webSocketService.isConnectedStatus()) {
      webSocketService.connect(token); 
      console.log("hello")
    }
    resolve();
  });
}

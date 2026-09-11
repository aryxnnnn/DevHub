// import {io} from "socket.io-client" ; 
// import { SocketUrl } from "./constants";

// export const CreateSocketConnection = () =>{
//   return io(SocketUrl) ; 
// }
import { io } from "socket.io-client";
import { SocketUrl, SocketPath } from "./constants";

export const CreateSocketConnection = () => {
  return io(SocketUrl, {
    path: SocketPath,
  });
};
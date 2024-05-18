import PocketBase from "pocketbase";

const clientPb = new PocketBase("https://api.findasb.com");
export const getClientPb = () => {
  if (clientPb.authStore.isValid) return clientPb;
  else {
    clientPb.authStore.loadFromCookie("auth");
    return clientPb;
  }
};

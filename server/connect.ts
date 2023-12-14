import { ConnectRouter } from "@connectrpc/connect";
import { AppService } from "./generated/main_connect";
import { CurrentUser, Empty } from "./generated/main_pb";

export default (router: ConnectRouter) =>
  router.service(AppService, {
    async getCurrentUser(req: Empty) {
      //await delay(4000);
      //throw new Error("test");
      return {
        id: "1",
        firstName: "Dino",
        lastName: "Carlos",
        roles: [],
      };
    },
    async upsertUser(req: CurrentUser) {
      //await delay(4000);
      //throw new Error("test");
      return req;
    },
  });

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

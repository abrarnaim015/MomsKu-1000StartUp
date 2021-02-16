import { QoreClient } from "@feedloop/qore-client";
import createQoreContext from "@feedloop/qore-react";
import config from "./qore.config.json";
import schema from "./qore.schema.json";
import SyncStorage from 'sync-storage';

// import AsyncStorage from "@react-native-async-storage/async-storage";
// export const client = new QoreClient(config);

export const client = new QoreClient({
  ...config, 
  getToken: () => {
    const token = SyncStorage.get('token')
    return token
  }, 
  onError: console.log 
});
client.init(schema);

const qoreContext = createQoreContext(client);
export default qoreContext;
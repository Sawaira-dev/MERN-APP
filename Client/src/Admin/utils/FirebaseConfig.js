import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyBGpeYNhyu26g_MoOJuGn2pcYS1VmV_ofw",
  authDomain: "vehicle-api-storage-c194c.firebaseapp.com",
  projectId: "vehicle-api-storage-c194c",
  storageBucket: "vehicle-api-storage-c194c.appspot.com",
  messagingSenderId: "309319235330",
  appId: "1:309319235330:web:cc28d92ce3f0a0494bb41b"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
import { db } from "@/services/firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
const { default: setUserFirebase } = require("@/services/firebase/setUserFirebase");

export default async function firebaseReq({ id, data }) {
    console.log("firebaseReq");
    const mainCollectionRefUsers = collection(db,'users');
    console.log("firebaseReq1");
    
    const documentRefUser  = doc(mainCollectionRefUsers,id);
    console.log("firebaseReq2");
    const collectionData = collection(documentRefUser,'data');
    console.log("firebaseReq3");


    const dataFilter = {
        name: data.name,
        lastName: data.lastName,
        age: data.age,
        birthday: data.birthday,
        blood: data.blood,
        email: data.email,
        phone: data.phone,
        country: data.country,
        state: data.state,
        address: data.address
    };
    return await setUserFirebase({ ref:collectionData, data: dataFilter });
}
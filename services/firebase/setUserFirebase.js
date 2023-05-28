
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export default async function setUserFirebase({ref,data}) {
    console.log("setUserFirebase");
    console.log(ref);
    try {
        await setDoc(doc(ref,'datos_personales'), data);
        console.log("Document written with ID: ");
        return true
    } catch (e) {
        console.error("Error adding document: ", e);
        return false
    }

}
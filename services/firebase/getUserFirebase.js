import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export function getUserFirebase ({id}) {
    const usersCollectionRef = collection(db,'users');
    const docUserRef = doc(usersCollectionRef,id);
    const userDataCollectionRef = collection(docUserRef,'data')
    const res = getDoc(doc(userDataCollectionRef,'datos_personales'))
    return res;
}
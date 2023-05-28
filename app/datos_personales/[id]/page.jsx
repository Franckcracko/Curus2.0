import PersonalInformation from "@/components/PersonalInformation";
import { getUserFirebase } from "@/services/firebase/getUserFirebase";
import { notFound } from 'next/navigation';

const PersonalInformationPage = async ({params}) =>{
    console.log(params);
    const docSnap = await getUserFirebase({id:params.id});
    if (!docSnap.exists()) {
        notFound()
    }
    return (
        <main className="content">
            <PersonalInformation data={docSnap.data()} />
        </main>
    )
}
export default PersonalInformationPage;
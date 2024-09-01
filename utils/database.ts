import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, DocumentData,
    onSnapshot
 } from "firebase/firestore";
 import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

 import toast from "react-hot-toast";

// Note: EVERYONE Can Read and Write Documents

export const initializeFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyB7I557GJHhryfjsXmFHkF-4OLZVh5XwJA",
        authDomain: "hearts-4-hope.firebaseapp.com",
        projectId: "hearts-4-hope",
        storageBucket: "hearts-4-hope.appspot.com",
        messagingSenderId: "411254171656",
        appId: "1:411254171656:web:bc87250f804646736a49bd",
        measurementId: "G-N7826LR39P"
    };

    const app = initializeApp(firebaseConfig);
    return app;
}

export const getFireStore = () => {
    const app = initializeFirebase();
    const firestore = getFirestore();
    return firestore;
}

export const getBranches = (setBranches: (branches: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const branchesCollection = collection(firestore, 'branches');

    const unsubscribe = onSnapshot(branchesCollection, (querySnapshot) => {
        const branches: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            branches.push(doc.data());
        });
        setBranches(branches);
    });

    return unsubscribe;
};

export const addBranch = async (
    country: string,
    city: string,
    highschool: string,
    lat: number,
    lng: number,
    firstName: string,
    lastName: string,
    description: string,
    photo: File
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        // Upload photo to Firebase Storage
        const photoRef = ref(storage, `branches/${photo.name}`);
        await uploadBytes(photoRef, photo);
        const photoURL = await getDownloadURL(photoRef);

        const branchesCollection = collection(firestore, 'branches');
        await addDoc(branchesCollection, {
            country,
            city,
            highschool,
            lat,
            lng,
            firstName,
            lastName,
            description,
            photo: photoURL, 
        });

        toast.success("Successfully Added Branch");
    } catch (error) {
        toast.success("Oops! An Error Occurred...");
    }
};

export const editBranch = async (
    country: string,
    city: string,
    highschool: string,
    lat: number,
    lng: number,
    firstName: string,
    lastName: string,
    description: string,
    prevCity: string,
    prevHighschool: string
) => {
    const app = initializeFirebase(); 
    const firestore = getFirestore(app);

    try {
        // Values for city and highschool are updated,
        // so must take previous values for current
        const q = query(
            collection(firestore, 'branches'),
            where('city', '==', prevCity),
            where('highschool', '==', prevHighschool)
        );
    
        const querySnapshot = await getDocs(q);
    
        querySnapshot.forEach((doc) => {
            updateDoc(doc.ref, {
                country,
                city,
                highschool,
                lat,
                lng,
                firstName,
                lastName,
                description
            });
        });
    
        toast.success("Successfully Edited Branch");
    } catch (error) {
        toast.success("Oops! An Error Occurred...");
    }
};

export const deleteBranch = async (city: string, highschool: string) => {
    const app = initializeFirebase(); 
    const firestore = getFirestore(app);

    console.log("City ", city);
    console.log("Highschool ", highschool);

    try {
        const q = query(
            collection(firestore, 'branches'), 
            where('city', '==', city),
            where('highschool', '==', highschool)
        );
    
        const querySnapshot = await getDocs(q);
    
        querySnapshot.forEach((doc) => {
            console.log(doc);
            deleteDoc(doc.ref);
        });
    
        toast.success("Successfully Deleted Branch");
    } catch (error) {
        toast.success("Oops! An Error Occurred...");
    }
};

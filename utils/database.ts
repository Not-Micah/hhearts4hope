import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, DocumentData,
    onSnapshot, doc
 } from "firebase/firestore";

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
    location: string,
    lat: number,
    lng: number,
    firstName: string,
    lastName: string,
    branchInstagram: string
): Promise<void> => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const branchesCollection = collection(firestore, 'branches');

        await addDoc(branchesCollection, {
            location,
            lat,
            lng,
            firstName,
            lastName,
            branchInstagram,
        });

        toast.success("Successfully Added Branch");
    } catch (error) {
        toast.success("Oops! An Error Occured...");
    }
};

export const editBranch = async (
    prevLocation: string,
    location: string,
    lat: number,
    lng: number,
    firstName: string,
    lastName: string,
    branchInstagram: string
): Promise<void> => {
    const app = initializeFirebase(); 
    const firestore = getFirestore(app);

    const q = query(
        collection(firestore, 'branches'),
        where('location', '==', prevLocation)
    );

    const querySnapshot = await getDocs(q); 

    querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {
            location,
            lat,
            lng,
            firstName,
            lastName,
            branchInstagram,
        });
    });

    toast.success("Successfully Edited Branch");
};

export const deleteBranch = async (prevLocation: string): Promise<void> => {
    const app = initializeFirebase(); 
    const firestore = getFirestore(app);

    const q = query(
        collection(firestore, 'branches'), 
        where('location', '==', prevLocation)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
    });

    toast.success("Successfully Deleted Branch");
};
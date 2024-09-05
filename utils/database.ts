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
    state: string,
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
        
        // Add the branch document
        const branchDocRef = await addDoc(branchesCollection, {
            country,
            city,
            state,
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
        toast.error("Oops! An Error Occurred...");
    }
};

export const editBranch = async (
    country: string,
    state: string,
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
                state,
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
        toast.error("Oops! An Error Occurred...");
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
        toast.error("Oops! An Error Occurred...");
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

export const getGallery = (
    city: string, 
    highschool: string, 
    setGalleryItems: (items: DocumentData[]) => void
) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const branchesCollection = collection(firestore, 'branches');
    const branchQuery = query(
        branchesCollection,
        where('city', '==', city),
        where('highschool', '==', highschool)
    );

    const unsubscribeBranch = onSnapshot(branchQuery, async (branchSnapshot) => {
        if (!branchSnapshot.empty) {
            const branchDoc = branchSnapshot.docs[0];
            const galleryCollectionRef = collection(branchDoc.ref, 'gallery');
    
            const unsubscribeGallery = onSnapshot(galleryCollectionRef, (gallerySnapshot) => {
                const galleryItems: DocumentData[] = [];
                gallerySnapshot.forEach((doc) => {
                    galleryItems.push(doc.data());
                });
                setGalleryItems(galleryItems);
            });

            return () => unsubscribeGallery();
        } else {
            console.error("No branch found with the specified city and highschool.");
            setGalleryItems([]);
        }
    });

    return () => unsubscribeBranch();
};

export const addGalleryItem = async (
    city: string,
    highschool: string,
    title: string,
    description: string,
    image: File
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const branchesCollection = collection(firestore, 'branches');
        const branchQuery = query(
            branchesCollection,
            where('city', '==', city),
            where('highschool', '==', highschool)
        );

        const branchSnapshot = await getDocs(branchQuery);

        if (!branchSnapshot.empty) {
            const branchDocRef = branchSnapshot.docs[0].ref;
            const galleryCollectionRef = collection(branchDocRef, 'gallery');

            // Upload image to Firebase Storage
            const imageRef = ref(storage, `gallery/${image.name}`);
            await uploadBytes(imageRef, image);
            const imageURL = await getDownloadURL(imageRef);

            await addDoc(galleryCollectionRef, {
                title,
                description,
                image: imageURL
            });

            toast.success("Successfully Added Gallery Item");
        } else {
            toast.error("Branch not found. Could not add gallery item.");
        }
    } catch (error) {
        toast.error("Oops! An Error Occurred...");
    }
};

export const editGalleryItem = async (
    city: string,
    highschool: string,
    prevTitle: string,
    prevDescription: string,
    title: string,
    description: string
) => {
    const app = initializeFirebase(); 
    const firestore = getFirestore(app);

    try {
        const branchQuery = query(
            collection(firestore, 'branches'),
            where('city', '==', city),
            where('highschool', '==', highschool)
        );

        const branchSnapshot = await getDocs(branchQuery);

        if (!branchSnapshot.empty) {
            const branchDoc = branchSnapshot.docs[0];
            const galleryCollectionRef = collection(branchDoc.ref, 'gallery');

            const galleryQuery = query(
                galleryCollectionRef,
                where('title', '==', prevTitle),
                where('description', '==', prevDescription)
            );

            const gallerySnapshot = await getDocs(galleryQuery);

            if (!gallerySnapshot.empty) {
                const galleryDoc = gallerySnapshot.docs[0];

                await updateDoc(galleryDoc.ref, {
                    title,
                    description
                });

                toast.success("Successfully Edited Gallery Item");
            }
        } 
    } catch (error) {
        toast.error("Oops! An Error Occurred...");
    }
};

export const deleteGalleryItem = async (
    city: string,
    highschool: string,
    prevTitle: string,
    prevDescription: string
) => {
    const app = initializeFirebase(); 
    const firestore = getFirestore(app);

    try {
        const branchQuery = query(
            collection(firestore, 'branches'),
            where('city', '==', city),
            where('highschool', '==', highschool)
        );
    
        const branchSnapshot = await getDocs(branchQuery);

        if (!branchSnapshot.empty) {
            const branchDoc = branchSnapshot.docs[0];
            const galleryCollectionRef = collection(branchDoc.ref, 'gallery');

            const galleryQuery = query(
                galleryCollectionRef,
                where('title', '==', prevTitle),
                where('description', '==', prevDescription)
            );

            const gallerySnapshot = await getDocs(galleryQuery);

            if (!gallerySnapshot.empty) {
                const galleryDoc = gallerySnapshot.docs[0];
                await deleteDoc(galleryDoc.ref);

                toast.success("Successfully Deleted Gallery Item");
            } else {
                console.error("No gallery item found with the specified title and description.");
            }
        } else {
            console.error("No branch found with the specified city and highschool.");
        }
    } catch (error) {
        console.error("Error deleting gallery item:", error);
        toast.error("Oops! An Error Occurred...");
    }
};

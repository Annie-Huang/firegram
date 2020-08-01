import {useEffect, useState} from "react";
import {projectFirestore} from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                // onSnapshot will constantly listening to the database.
                let documents = [];

                // doc.data has, e.g.
                // createdAt: 1 August 2020 at 22:22:54 UTC+10
                // url: "https://firebasestorage.googleapis.com/v0/b/ninja-firegram-de03f.appspot.com/o/roof.jpg?alt=media&token=6d0fd587-0503-4052-aa6c-d5d6898d19fe"
                // doc.id has, e.g. zUCCSnyUW4B4pDc0L6ST
                snap.forEach(doc => documents.push({...doc.data(), id: doc.id}));

                setDocs(documents);
            });

        return () => unsub();

    }, [collection]);

    return { docs };
}

export default useFirestore;

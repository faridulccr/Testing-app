import { child, get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import testingApp from "../firebase";

const useSector = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [sectors, setSectors] = useState([]);

    useEffect(() => {
        async function fetchSectors() {
            // database related work
            const database = getDatabase(testingApp);
            const sectorRef = ref(database);

            // to handle error
            try {
                setError(false);
                setLoading(true);
                const snapshot = await get(child(sectorRef, "data/sectors"));

                if (snapshot.exists()) {
                    setSectors([...Object.values(snapshot.val())]);
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
        }
        fetchSectors();
    }, []);

    return {
        loading,
        error,
        sectors,
    };
};

export default useSector;

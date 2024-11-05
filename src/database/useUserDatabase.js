import { useSQLiteContext} from "expo-sqlite";

export function useUserDatabase(){
    const database = useSQLiteContext();

    async function authUser({email, password}) {
        
    }
}
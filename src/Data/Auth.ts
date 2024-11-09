import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from "../Service/firebase";
import { collection, doc, getDocFromCache, getDocs } from "firebase/firestore";

interface Login {
    user?: string;
    aadhar?: number;
    logged: boolean;
}

interface Credentials {
    aadhar: number;
    otp: string;
}

const initalState: Login = {
    logged: false
}


const slice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        
    },

    extraReducers(builder) {

    },
})

const Login = createAsyncThunk(
    "Auth/Login",
    async (cred: Credentials) => {
        const collect = doc(firebase.store, "ID", cred.aadhar as unknown as string)
        try{
            const querySnapshot = await getDocFromCache(collect);

        }
        catch(error){
            const collect = collection(firebase.store, "ID")
            const documents = await getDocs(collect)}
    }
)


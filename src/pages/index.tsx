import { Inter } from "next/font/google";
import { useEffect, useLayoutEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    useLayoutEffect(() => {
        async function getData() {
            const res = await fetch('https://qs3ek1it0j.execute-api.ap-southeast-1.amazonaws.com/api/list')
            const data = await res.json()
            console.log("data ==>", data)
        }
        getData()
    }, [])

    useEffect(() => {
        
    }, [])

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
        </main>
    );
}

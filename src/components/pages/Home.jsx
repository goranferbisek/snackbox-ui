import MerchantCard from "../MerchantCard.jsx";
import apiClient from "../../api/apiClient";
import {useLoaderData} from "react-router-dom";

export default function Home() {
    const merchants = useLoaderData();

    return (
        <main className="mx-8">
            <h1 className="font-bold text-3xl my-6">Restaurants</h1>
            <section className="grid grid-cols-4 gap-2">
                {merchants.content.map((merchant) =>
                    <MerchantCard key={merchant.id} merchant={merchant} />
                )}
            </section>
        </main>
    );
}

export async function merchantsLoader() {
    try {
        const response =  await apiClient.get("/merchants");
        return response.data;
    } catch (error) {
        throw new Response(
            error.message || "Failed to fetch merchants. Please try again.",
            {status: error.status || 500}
        )
    }

}
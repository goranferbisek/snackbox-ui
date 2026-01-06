import Header from "./components/Header.jsx";
import MerchantCard from "./components/MerchantCard.jsx";

function App() {
    return (<>
        <Header/>
        <main className="mx-8">
            <h1 className="font-bold text-3xl my-6">Restaurants</h1>
            <section className="grid grid-cols-4 gap-2">
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
                <MerchantCard />
            </section>
        </main>
    </>);
}

export default App

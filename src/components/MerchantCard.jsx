
export default function MerchantCard({merchant}) {
    return (
        <a href="/">
            <article className="h-max rounded-xl border max-w-80">
                <img src="/mechant_placeholder.png" alt="Restaurant" className="w-full rounded-t-2xl" />
                <section className="p-2">
                    <h4 className="font-bold text-xl mb-2">{merchant.name}</h4>
                    <p>{merchant.description}</p>
                </section>
            </article>
        </a>
    );
}
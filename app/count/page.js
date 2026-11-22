
import Counter from '../components/Counter';

export default function CountPage() {
    return (
        <main>
            <h1>Counter Applications</h1>

            <Counter increment={1} color="blue" />

            <Counter increment={2} color="green" />
        </main>
    );
}

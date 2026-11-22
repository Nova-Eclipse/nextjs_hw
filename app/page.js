import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1>My NextJS Homework</h1>

            <p>Welcome to my React and NextJS project!</p>

            <nav>
                <ul>
                    <li>
                        <Link href="/count">Counter Applications</Link>
                    </li>
                    <li>
                        <Link href="/githublink">GitHub Repository</Link>
                    </li>
                    <li>
                        <Link href="/store">Store</Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
}

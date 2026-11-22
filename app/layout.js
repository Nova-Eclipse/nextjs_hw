import './globals.css';

export const metadata = {
    title: 'My NextJS Project',
    description: 'React and NextJS homework project',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 flex justify-center">
            <Link
                href="https://www.youtube.com/@NewDragonBallX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube Channel"
                className="hover:opacity-80 transition"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="YouTube"
                    className="h-8"
                />
            </Link>
        </footer>
    );
}

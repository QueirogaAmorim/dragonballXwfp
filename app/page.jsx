import Link from 'next/link';
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
The card below is rendered on the server based on the value of \`process.env.CONTEXT\` 
([docs](https://docs.netlify.com/configure-builds/environment-variables/#build-metadata)):
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with acccess to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <ContextAlert />
                <h1 className="mb-0">Dragon Ball X</h1>
                <h3 className="mb-0">The War for Power</h3>
            </section>
            <section>
                <p>
                Em um universo paralelo, onde a paz alcançada pelas lendas de Goku e seus aliados ainda ecoa, novas ameaças surgem do vazio cósmico. Dragon Ball X - The War for Power transporta-nos para uma batalha épica entre forças desconhecidas, mais poderosas e traiçoeiras do que qualquer vilão que a Terra já enfrentou.

Após a derrota de grandes inimigos, como Freeza e Majin Buu, os heróis Z acreditavam que poderiam viver tranquilos. Porém, uma misteriosa distorção no espaço-tempo traz à tona uma guerra interdimensional entre exércitos de poderosos guerreiros e antigos deuses esquecidos. O maior desafio da história de Dragon Ball começa quando um novo guerreiro, com habilidades além da imaginação, ameaça desestabilizar as fronteiras entre os universos e roubar a energia vital dos próprios Deuses.

Goku, Vegeta, e os seus amigos são arrastados para uma guerra sem precedentes, onde não só as suas vidas estão em risco, mas também o equilíbrio de todos o cosmos. Velhos aliados ressurgem, novas personagens entram em cena, e o poder nunca antes visto será forjado em batalha. O destino da guerra está nas mãos de heróis e vilões que desejam, acima de tudo, conquistar o poder supremo.

Prepare-se para um confronto épico e imersivo! Dragon Ball X - The War for Power está prestes a começar.
                </p>
            </section>
            {/* <Image
                                    src="/images/logo-large.jpeg"
                                    priority
                                    fill={true}
                                    style={{ objectFit: 'contain' }}
                                    sizes="(max-width: 1024px) 100vw, 1024px"
                                    alt="DB X"
                                /> */}
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}

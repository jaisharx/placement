import NextHead from 'next/head';

export default function NextHead({ title, desc }) {
    return (
        <NextHead>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />


        </NextHead>
    )
}

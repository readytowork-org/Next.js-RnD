import Head from "next/head"

export default function Meta({title,keywords,description}) {
    return (
        <div>
            <Head>
                <meta name="viewport" content='width=device-width, initial-scale=1'/>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon/ico" />
                <title>{title}</title>
            </Head>
        </div>
    )
}

Meta.defaultProps = {
    title:'WebDevz News',
    keywords:"web development, programming, coding",
    description:"This is coding time"
}
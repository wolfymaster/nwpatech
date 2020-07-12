import Head from "next/dist/next-server/lib/head";

function Layout(props) {
    return (
        <div className="page-layout">
            <Head>
                <title>NWPA Tech</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>

            {props.children}
            <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: 'Roboto', sans-serif;
          background: #F8FAFC;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>
        </div>
    )
}

export default Layout
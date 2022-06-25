function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;

        font-family: Arial;
        box-sizing: border-box;
      }

      html {
        font-size: .625rem;
      }
    `}
    </style>
    </>
  )
}

export default MyApp

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
        -webkit-tap-highlight-color: transparent;
      }

      html {
        font-size: .625rem;
        scroll-behavior: smooth;
      }
    `}
    </style>
    </>
  )
}

export default MyApp

import Nav from "@components/Nav"
import Provider from "@components/Provider"
import "@styles/globals.css"


export const metadata = {
    title: "AI Prompts",
    description: "Prompts used to search using AI"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <Provider>
        <main className="app">
            <Nav/>
            {children}
        </main>
        </Provider>
    </body>
    </html>
  )
}

export default RootLayout
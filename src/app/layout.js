import { Prompt} from 'next/font/google'
import { Aside } from "@/components/Aside";
import "./globals.css";

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Code Conect",
  description: "A Rede Social para Devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
      
    </html>
  );
}

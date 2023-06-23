import "./globals.css";
import { Quicksand } from "next/font/google";
import Header from "@/components/Layout/Header";
import Content from "@/components/Layout/Content";
import Footer from "@/components/Layout/Footer";
import RecoilRoot from "../../recoil/RecoilRoot";
import Providers from "@/components/Layout/Providers";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "단테의 블로그",
    template: "단테의 블로그 | %s",
  },
  description: "주니어 프론트엔드 개발자 단테의 블로그",
  icons: {
    icons: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={quickSand.className}>
      <body className="flex flex-col overflow-auto mx-auto min-w-[465px] max-w-3xl lg:max-w-6xl">
        <Providers>
          <RecoilRoot>
            <div className="px-8">
              <Header />
              <Content>{children}</Content>
              <Footer />
            </div>
          </RecoilRoot>
        </Providers>
      </body>
    </html>
  );
}

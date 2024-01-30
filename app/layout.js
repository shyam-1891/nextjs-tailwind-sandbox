import Mainlayout from "@/components/Mainlayout";
import "./globals.css";

export const metadata = {
  title: "Next Js with Tailwind",
  description: "This is demo site with next js and tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Mainlayout>{children}</Mainlayout>
      </body>
    </html>
  );
}

import { Poppins } from 'next/font/google';
import '../src/styles/app.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

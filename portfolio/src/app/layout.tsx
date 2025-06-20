import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from '@/components/layout/Navbar';
import ThemeProvider from '@/components/layout/ThemeProvider'; // your updated wrapper
import SidebarSocial from '@/components/layout/SidebarSocial'; // Import the Footer component
export const metadata = {
  title: 'Portfolio',
  description: 'Tech Portfolio of [Antnhe Debebe]',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
           <SidebarSocial />
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

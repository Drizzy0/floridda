import Layout from '@/components/Layout'
import { ThemeProvider } from "next-themes";

export default function DashboardLayout({ children }) {
  return <Layout>{children}</Layout>
}
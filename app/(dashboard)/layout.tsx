export default function DashboardLayout({children}: {
    children: React.ReactNode;
}){
    return (
        <main>
            <nav className="border-b border-green-300">
                Dashboard Layout
            </nav>
            {children}
        </main>
    )
}
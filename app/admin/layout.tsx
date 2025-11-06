export default function AdminLayout({children}: {
    children: React.ReactNode;
}){
    return (
        <main>
            <nav className="border-b border-green-300">
                this nav admin
            </nav>
            {children}
        </main>
    )
}
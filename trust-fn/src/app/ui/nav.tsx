
const Nav = () => {
    const navItems = {
        1: "How It Works",
        2: "Services",
        3: "Join"
    }
    return (
        <div>
            <div>
                <h1>Trust</h1>
            </div>
            <div>
                <ul>
                    {
                        Object.entries(navItems).map(([key_, value]) => (
                            <li key={key_}>{value}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
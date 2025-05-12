
export function Part3() {
    return (
        <div className="container">
            <header className="flex items-center justify-between w-128">
                <div className="hover:text-green-500 transition-colors duration-300 ease-in-out cursor-pointer bg-green-50/10 px-5 py-2 shadow-xl shadow-green-500 ">logo</div>
                <ul className="flex items-center gap-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
                <button className="animate-bounce">Contact us</button>
            </header>
            <section className="grid grid-cols-3 gap-6 mt-10">
                <div>Image</div>
                <div>Image</div>
                <div>Image</div>
                <div>Image</div>
                <div>Image</div>
                <div>Image</div>
                <div>Image</div>
                <div>Image</div>
                <div>Image</div>
            </section>
        </div>
    )
}
import { BrowserRouter, Link, Route, Routes } from "react-router";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="chat" element={
                    <div className="w-screen h-screen flex flex-col items-center justify-center">
                        <p className="text-3xl font-bold">Hello World!</p>
                        <Link to="/" className="text-xl underline">home</Link>
                    </div>
                } />

                <Route path="/" element={
                    <div className="w-screen h-screen flex flex-col items-center justify-center">
                        <Link to="/chat" className="text-xl underline">chat</Link>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    )
}
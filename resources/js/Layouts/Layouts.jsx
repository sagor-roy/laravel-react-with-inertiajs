import Header from './Header'

function Layouts({ children }) {
    return (
        <>
            <Header />
            <div className="container my-5">
                {children}
            </div>
        </>
    )
}

export default Layouts
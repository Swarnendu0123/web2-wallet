const Navigation = () => {

    const options = [
        {
            name: "Dashboard"
        },
        {
            name: "Account Details"
        },
        {
            name: "Add Money"
        }
    ]



    return (
        
        <div className="flex flex-col font-bold  min-w-52 border">
            {
                options.map((option, index) => {
                    return (
                        <div key={index} className="p-5 border  hover:bg-black hover:text-white">
                            {option.name}
                        </div>
                    )
            }
            )}
        </div>
    )
}

export default Navigation;
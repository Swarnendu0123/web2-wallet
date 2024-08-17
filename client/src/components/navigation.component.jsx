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
    ];

    return (
        <div className="flex flex-col font-bold min-w-52 border border-gray-800 h-96 rounded-lg">
            {options.map((option, index) => (
                <div key={index} className="p-5 border-b border-gray-800  bg-black text-[#F8F8F2] hover:bg-gray-900 cursor-pointer ">
                    {option.name}
                </div>
            ))}
        </div>
    );
};

export default Navigation;

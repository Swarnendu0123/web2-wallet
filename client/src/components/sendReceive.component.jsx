const SendReceive = () => {
    return (
        <div className="shadow-xl rounded-md m-10 bg-black text-[#F8F8F2]">
            <span className="font-bold">
                Transfer/Request Money
            </span>
            <div className="flex mt-4">
                <label className="relative block rounded-md border border-gray-800  shadow-sm focus-within:border-[#11ff39] focus-within:ring-1 focus-within:ring-[#11ff39]">
                    <input
                        type="text"
                        id="accountNumber"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2 text-[#F8F8F2]"
                        placeholder="Account Number"
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Account Number
                    </span>
                </label>

                <label className="relative block rounded-md border border-gray-800  shadow-sm focus-within:border-[#11ff39] focus-within:ring-1 focus-within:ring-[#11ff39] ml-4">
                    <input
                        type="number"
                        id="amount"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2 w-20 text-[#F8F8F2]"
                        placeholder="Amount"
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Amount
                    </span>
                </label>

                <a
                    className="inline-block rounded border border-[#11ff39] px-12 py-3 text-sm font-medium text-[#11ff39] hover:bg-[#11ff39] hover:text-[#272822] focus:outline-none focus:ring active:bg-[#abff04] w-56 ml-4"
                    href="#"
                >
                    Send Money
                </a>
            </div>

            <div className="flex mt-4">
                <label className="relative block rounded-md border border-gray-800  shadow-sm focus-within:border-[#11ff39] focus-within:ring-1 focus-within:ring-[#11ff39]">
                    <input
                        type="text"
                        id="requestAccountNumber"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2 text-[#F8F8F2]"
                        placeholder="Account Number"
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Account Number
                    </span>
                </label>

                <label className="relative block rounded-md border border-gray-800  shadow-sm focus-within:border-[#11ff39] focus-within:ring-1 focus-within:ring-[#11ff39] ml-4">
                    <input
                        type="number"
                        id="requestAmount"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2 w-20 text-[#F8F8F2]"
                        placeholder="Amount"
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Amount
                    </span>
                </label>

                <a
                    className="inline-block rounded border border-[#11ff39] px-12 py-3 text-sm font-medium text-[#11ff39] hover:bg-[#11ff39] hover:text-[#272822] focus:outline-none focus:ring active:bg-[#A6E22E] w-56 ml-4"
                    href="#"
                >
                    Request Money
                </a>
            </div>
        </div>
    );
}

export default SendReceive;

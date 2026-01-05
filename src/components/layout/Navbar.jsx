import Image from "next/image";

export default function Navbar() {

    const navTopLeftItems = [
        {
            label: "ログインでお困りの方",
        },
        {
            label: "お知らせ",
        },
        {
            label: "よくある質問",
        }
    ]

    const navBottomItems = [
        {
            label: "JMarketsの特徴",
        },
        {
            label: "はじめてのCFD",
        },
        {
            label: "マーケット情報",
        },
        {
            label: "キャンペーン",
        },
        {
            label: "お客様サポート",
        }
    ]

    return (
        <div className="pt-12 mb-4 px-40 flex flex-col gap-7">
            <div className="flex justify-between items-center">
                <div>
                    <Image src="/icons/navLogo.svg" alt="logo" width={150} height={200} className="cursor-pointer w-auto h-auto" />
                </div>
                <div className="flex gap-4">
                    {navTopLeftItems.map((item) => (
                        <div key={item.label}>
                            <p className="text-[14px] cursor-pointer text-[#B7B7B7] font-inter font-[900]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-6">
                    {navBottomItems.map((item) => (
                        <div key={item.label}>
                            <p className="text-[14px] font-inter font-[600] cursor-pointer text-[#363636] flex items-center gap-2">
                                {item.label}
                                <Image src="/icons/dropdown.svg" alt="arrow" width={7} height={8} className="w-auto h-auto" />
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2">
                    <button className="border border-[#434343] text-[#434343] font-inter rounded-md py-2.5 text-[14px] px-3 font-[900] cursor-pointer">
                        ログイン
                    </button>
                    <button className="bg-[#434343] text-white rounded-md font-inter py-2.5 text-[14px] px-3 font-[900] cursor-pointer">
                        サインイン
                    </button>
                </div>
            </div>
        </div>
    );
}
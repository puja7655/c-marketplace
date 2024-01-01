import { Project } from "@/data/projects";
import Image from 'next/image'

interface CartItemProps {
    item: { project: Project; volume: number };
}

export default function CartItem({ item }: CartItemProps) {
    return (
        <div>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-4 mb-4">
                <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.project.image} alt="" width={500} height={500}></Image>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.project.name}</h6>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity : {item.volume}</p>
                </div>
            </a>
        </div>
    );
}
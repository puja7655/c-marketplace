'use clinet'
import { Project } from "@/data/projects";
import { useState } from "react";
import Image from 'next/image'

interface ProjectCardProps {
    project: Project;
    onAddToCart: (volume: number, project: Project) => void;
}
export default function ProjectCard({ project, onAddToCart }: ProjectCardProps) {
    const [volume, setVolume] = useState(0)
    
    return (
        <div>
            <div className="mt-4 mb-4 ml-4 mr-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image src={project.image} width={500} height={500} alt="Picture of the author" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                    <input
                        type="number"
                        placeholder="Enter volume"
                        value={volume}
                        onChange={(e) => setVolume(parseInt(e.target.value))}
                        className={"mt-4 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                    />
                    <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} onClick={() => onAddToCart(volume, project)}>Add to Cart</button>
                </div>
            </div>

        </div>
    );
}
'use client'
// card to show the list of projects present
import { useGlobalContext } from "@/app/Context/store";
import ProjectCard from "@/components/ProjectCard";
import Search from "@/components/Search";
import { Project } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    "id": 1,
    "name": "EverGreen CarbonScape",
    "country": "Germany",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    "price_per_ton": 650,
    "offered_volume_in_tons": 15,
    "distribution_weight": 0.05,
    "supplier_name": "Klom",
    "earliest_delivery": "2023-09-01",
    "sdgs": [],
    "description": "The \"EverGreen CarbonScape\" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation."
  },
  {
    "id": 2,
    "name": "VerdeCarbon",
    "country": "India",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg",
    "price_per_ton": 200,
    "offered_volume_in_tons": 900,
    "distribution_weight": 0.1,
    "supplier_name": "Klom",
    "earliest_delivery": "2022-04-01",
    "sdgs": [3, 5, 1],
    "description": "A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change.\nBy strategically planting native trees and adopting sustainable forest practices, we're creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities.\nThrough verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact."
  },
  {
    "id": 3,
    "name": "SustainaForest Carbon",
    "country": "Brazil",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
    "price_per_ton": 50.85,
    "offered_volume_in_tons": 1500,
    "distribution_weight": 0.15,
    "supplier_name": "EcoCarbon",
    "earliest_delivery": "2024-01-01",
    "sdgs": [13, 14, 15],
    "description": "The \"SustainaForest Carbon\" project tackles climate change by restoring and protecting vital forest ecosystems.\nThrough reforestation, sustainable management, and community engagement, we're creating resilient carbon sinks that benefit the environment, biodiversity, and local communities.\nVerified carbon credits will be generated as we capture CO2, fostering a sustainable future for all."
  },
  {
    "id": 4,
    "name": "EcoRespire",
    "country": "India",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png",
    "price_per_ton": 25,
    "offered_volume_in_tons": 1100,
    "distribution_weight": 0.25,
    "supplier_name": "Pure Planet",
    "earliest_delivery": "2023-05-15",
    "sdgs": [10, 11, 12, 13, 14, 15, 16, 17],
    "description": "A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems.\nBy planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities.\nVerified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being."
  },
  {
    "id": 5,
    "name": "EverGreen Carbon",
    "country": "Egipt",
    "image": "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg",
    "price_per_ton": 10.5,
    "offered_volume_in_tons": 16000,
    "distribution_weight": 0.45,
    "supplier_name": "Carbon Solutions",
    "earliest_delivery": "2023-12-01",
    "sdgs": [3, 1, 2],
    "description": "The \"EverGreen Carbon\" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project's positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon."
  }
]
let success = false; 

export default function MarketPlace({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [cart, setCart] = useState<{ project: Project, volume: number }[]>([])

  const searchText =
    typeof searchParams.search === 'string' ? searchParams.search : undefined

  const { setCartData } = useGlobalContext()

  const addToCart = (volume: number, project: Project) => {
    setCart([...cart, { project, volume }]);
    //Pass cart value to cart page for the initial render
    setCartData([...cart, { project, volume }])
    success = true;
  };

  //As of now clientside search is implemented
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchText?.toLowerCase())
  );

  const projectList = (filteredProjects.length > 0) ? [...filteredProjects] : [...projects]

  return (
    // Show message box successfully adding to items to cart
    <div>
      {/* {
        (success) && <div
          className="relative block w-full p-4 mb-4 text-base leading-5 text-white bg-green-500 rounded-lg opacity-100 font-regular">
          successfully added
        </div>
      } */}

      <div className="flex flex-row items-center justify-center space-x-10">
        <div><h1>Mini Marketplace</h1></div>
        <div> <Search /></div>
        <Link className={"mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"} href="/cart">
          Go to Cart
        </Link>
      </div>
      <div className="flex flex-wrap">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

import React from "react";

//data
import { Informations } from "./VissionsInfo";

const Visions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 justify-start gap-x-5">
      {Informations.map(({ title, description }, i) => (
        <span class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </span>
      ))}
    </div>
  );
};

export default Visions;

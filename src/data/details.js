/** Detail pages for every service, industry & work story */

export { serviceDetails } from "./serviceDetails.js";
export { industryDetails } from "./industryDetails.js";
export { workDetails } from "./workDetails.js";

import { serviceDetails } from "./serviceDetails.js";
import { industryDetails } from "./industryDetails.js";
import { workDetails } from "./workDetails.js";

export const allDetails = { ...serviceDetails, ...industryDetails, ...workDetails };

import { project_title } from "../utils/settings";

const title = project_title || "EP_ADMIN";

export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}

import defaultSettings from '../../../front_end/src/settings'

const title = defaultSettings.title || 'ESG'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

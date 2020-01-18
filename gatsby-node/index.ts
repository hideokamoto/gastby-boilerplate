import { GatsbyNode, Node, Actions } from "gatsby"

/**
 * 
 * @param page 
 * @param actions 
 * @param targetPath 
 */
const createClientPage = (page: Node, actions: Actions, targetPath: string) => {
  const path = typeof page.path ==='string' ? page.path : ''
  const component = typeof page.component === 'string' ? page.component: ''
  const context = (page.context || {}) as Record<string, unknown>
  const regExp = new RegExp(`^\/${targetPath}`)
  if (!path || !component) return
  if (!path.match(regExp)) return
  actions.createPage({
    path,
    component,
    context,
    matchPath: `/${targetPath}/*`
  })
}

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({ page, actions }) => {
  createClientPage(page, actions, 'admin')
}
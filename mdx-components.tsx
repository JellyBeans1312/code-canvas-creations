import { type MDXComponents as MDXComponentsType } from 'mdx/types'
import { MDXComponents } from '@/components/MDXComponents'


export function useMDXComponents(components: MDXComponentsType) {
  return {
    // h2: ({ children }) => <h2 style={{color: '#F4F3EE'}}> {children} </h2>, 
    // p: ({ children }) => <p style={{color: '#d4d4d4'}}> {children} </p>,
    ...components,
    ...MDXComponents,
  }
}

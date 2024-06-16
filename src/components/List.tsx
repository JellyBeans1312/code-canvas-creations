import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function List({
  children,
  className,
  invert=false
}: {
  children: React.ReactNode
  className?: string
  invert?:boolean
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base', className,
        invert ? 'text-secondary' : 'text-accentTwo'
      )}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  children,
  title,
  invert=false
}: {
  children: React.ReactNode
  title?: string
  invert?:boolean
}) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className={clsx("font-semibold text-primary", 
              invert ? 'text-primary' : 'text-accentOne'
            )}>
              {`${title}. `}
            </strong>
          )}
          <p className={clsx('inline',
            invert ? 'text-secondary' : 'text-accentTwo'
          )}>
            {children}

          </p>
        </Border>
      </FadeIn>
    </li>
  )
}

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import React from 'react'
import { buttonVariants } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'

const Navbar = () => {
	// Mock
	const user = undefined
	const isAdmin = false
	return (
		<nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
			<MaxWidthWrapper>
				<div className='flex h-14 items-center justify-between border-b border-zinc-200'>
					<Link className='flex z-40 font-semibold' href='/'>
						case <span className='text-green-600'>cobra</span>
					</Link>

					<div className='flex h-full items-center  space-x-4'>
						{user ? (
							<React.Fragment>
								<Link
									href='/api/auth/logout'
									className={buttonVariants({
										size: 'sm',
										variant: 'ghost',
									})}
								>
									Sign out
								</Link>
								{isAdmin ? (
									<Link
										href='/api/auth/logout'
										className={buttonVariants({
											size: 'sm',
											variant: 'ghost',
										})}
									>
										Dashboard ✨
									</Link>
								) : null}
								<Link
									href='/configure/upload'
									className={buttonVariants({
										size: 'sm',
										className: 'hidden sm:flex items-center gap-1',
									})}
								>
									Create case
									<ArrowRightIcon className='ml-1.5 h-5 w-5' />
								</Link>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Link
									href='/api/auth/register'
									className={buttonVariants({
										size: 'sm',
										variant: 'ghost',
									})}
								>
									Sign up
								</Link>

								<Link
									href='/api/auth/login'
									className={buttonVariants({
										size: 'sm',
										variant: 'ghost',
									})}
								>
									Login
									<ArrowRightIcon className='ml-1.5 h-5 w-5' />
								</Link>

								<div className='h-8 w-px bg-zinc-200 hidden sm:block' />

								<Link
									href='/configure/upload'
									className={buttonVariants({
										size: 'sm',
										className: 'hidden sm:flex items-center gap-1',
									})}
								>
									Create case
									<ArrowRightIcon className='ml-1.5 h-5 w-5' />
								</Link>
							</React.Fragment>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}

export default Navbar

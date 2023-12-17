import Link from 'next/link';
import MaxWidthContainer from "./maxWidthWrapper";
import { buttonVariants } from './ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { ArrowRight } from 'lucide-react';
const Navbar=()=>{
return(
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthContainer>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href="/" className="flex z-40 font-semibold">
                    <span>
                        Quill.
                    </span>
                </Link>
                {/* todo navbar for mobile */}
                <div className="hidden items-center space-x-4 sm:flex">
                    <>
                    <Link href='/pricing' className={buttonVariants({
                        variant:"ghost",
                        size:"sm",
                    })}>Pricing
                    </Link>
                    <LoginLink className={buttonVariants({
                        variant:"ghost",
                        size:"sm",})}>
                            Sign in
                    </LoginLink>
                    <RegisterLink className={buttonVariants({
                        variant:"ghost",
                        size:"sm",})}>
                            Get started
                        <ArrowRight/>
                    </RegisterLink>
                    </>
                </div>
            </div>
        </MaxWidthContainer>
    </nav>
)
}

export default Navbar;
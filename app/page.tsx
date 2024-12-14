import Image from 'next/image'
import Link from 'next/link'

function ContactLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 font-pixelify text-xl transition-colors hover:text-violet-400"
    >
      {children}
    </Link>
  )
}

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <header className="flex items-center justify-between gap-6">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <Image
            src="/leo.jpeg"
            alt="Leo drinking a Klarbrunn"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 items-end justify-between">
          <div>
            <h1 className="font-pixelify text-7xl">Hi, I&apos;m Leo</h1>
            <h2 className="font-pixelify text-xl">
              Software engineer. Ideas guy. Sparkling water enthusiast.
            </h2>
          </div>
          <div className="flex flex-col items-end gap-1">
            <ContactLink href="mailto:leojalfred@gmail.com">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6"
              >
                <path
                  d="M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"
                  fill="currentColor"
                />
              </svg>
              leojalfred@gmail.com
            </ContactLink>
            <ContactLink href="tel:+1234567890">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6"
              >
                <path
                  d="M6 3h12v18H6V3zm10 16V5h-2v2h-4V5H8v14h8zm-5-4h2v2h-2v-2z"
                  fill="currentColor"
                />
              </svg>
              (507) 316-3003
            </ContactLink>
          </div>
        </div>
      </header>
    </div>
  )
}

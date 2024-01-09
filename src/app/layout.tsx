import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { siteMetadata } from "@/constants/siteMetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  publisher: siteMetadata.publisher,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner, // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: siteMetadata.socialBanner, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: siteMetadata.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteMetadata.title,
  startDate: siteMetadata.eventStartDate,
  endDate: siteMetadata.eventEndDate,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Snickerpark Stadium",
    address: {
      "@type": "PostalAddress",
      streetAddress: "CGQC+CCP, Aguleri St",
      addressLocality: "Independence Layout",
      postalCode: "400102",
      addressRegion: "Enu",
      addressCountry: "NG",
    },
  },
  image: [siteMetadata.socialBanner],
  description: siteMetadata.description,
  offers: {
    "@type": "Offer",
    url: siteMetadata.eventPaymentUrl,
    price: "100000",
    priceCurrency: "NGN",
    availability: "https://schema.org/InStock",
    validFrom: "2024-01-21T12:00",
  },
  organizer: {
    "@type": "Organization",
    name: siteMetadata.eventOrganizer,
    url: siteMetadata.eventOrganizerUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}

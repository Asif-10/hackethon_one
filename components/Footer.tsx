"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:space-x-8">
        {/* First Column */}
        <div className="text-center md:text-left">
          <Image src={"/Dine.webp"} alt="Logo" width={150} height={100} />
          <p className="text-sm mt-4">
            Small, artisan label that offers a thoughtfully curated
            collection of high quality everyday essentials made.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <Button variant="outline">
              <TwitterIcon />
            </Button>
            <Button variant="outline">
              <FacebookIcon />
            </Button>
            <Button variant="outline">
              <InstagramIcon />
            </Button>
          </div>
        </div>

        {/* Second Column */}
        <div className="mt-8 sm:mt-0">
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="text-sm space-y-2">
            <li>About</li>
            <li>Terms of use</li>
            <li>Policy</li>
            <li>How it works</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="mt-8 sm:mt-0">
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="text-sm space-y-2">
            <li>Support Carrier</li>
            <li>24 Hours Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="mt-8 sm:mt-0">
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>Whatsapp</li>
            <li>Support 24hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

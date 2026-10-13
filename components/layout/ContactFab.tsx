import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { contactInfo } from "@/content/site";

/**
 * Site-wide floating call/WhatsApp buttons. Requested explicitly: the
 * contact number should be reachable from every page, not just the footer.
 */
export default function ContactFab() {
  const mobile = contactInfo.phones[0];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <a
        href={contactInfo.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp: ${contactInfo.whatsapp.number}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={mobile.href}
        aria-label={`Call ${mobile.number}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, MapPin, Instagram, Mail } from "lucide-react";

const isLocal =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const DEFAULT_API = isLocal
  ? "http://localhost:5050/api/lead"
  : "https://silk4me.onrender.com/api/lead";

const API_URL = import.meta.env.VITE_API_URL || DEFAULT_API;

const lifestyleImg = `${import.meta.env.BASE_URL}color8.jpg`;

const SOURCE_TAG = "re:silk";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = useMemo(() => "Silkandnature" + "@gmail.com", []);

  useEffect(() => {
    if (isLocal) return;
    fetch(API_URL, { method: "OPTIONS", cache: "no-store", mode: "cors" }).catch(
      () => {}
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }

    const payload = {
      name,
      phone,
      message: message ? `[${SOURCE_TAG}] ${message}` : `[${SOURCE_TAG}]`,
      source: SOURCE_TAG,
    };

    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "cors",
        cache: "no-store",
      });

      if (!res.ok) {
        toast.error("Couldn’t send your request. Please try again.");
        return;
      }

      toast.success("✅ Sent! We’ll get back to you shortly.");
      setFormData({ name: "", phone: "", message: "" });
    } catch {
      toast.error("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-silk-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div className="flex flex-col justify-between h-full space-y-10">
            {/* HEAD */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-gold uppercase tracking-[0.35em] text-sm">
                Contact
              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-light text-background">
                Get a <span className="text-gold">personal consultation</span>
              </h2>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-xl mx-auto lg:mx-0"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  className="bg-background text-foreground border-border/50 focus:border-gold h-12"
                />

                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="bg-background text-foreground border-border/50 focus:border-gold h-12"
                />
              </div>

              <Textarea
                placeholder="Your message (optional)"
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                className="bg-background text-foreground border-border/50 focus:border-gold min-h-[160px] resize-none"
              />

              {/* CTA */}
              <div className="pt-6 flex justify-center lg:justify-start">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    relative overflow-hidden
                    px-14 py-6 text-base font-medium
                    bg-gradient-to-r from-gold to-gold-light
                    text-accent-foreground
                    shadow-[0_10px_30px_rgba(212,175,55,0.35)]
                    hover:shadow-[0_14px_40px_rgba(212,175,55,0.45)]
                    hover:-translate-y-[1px]
                    active:translate-y-0
                    transition-all duration-300
                  "
                >
                  {isSubmitting ? "Sending..." : "Send request"}
                  <Send className="w-4 h-4 ml-3" />
                </Button>
              </div>
            </form>

            {/* INFO */}
            <div className="flex flex-col items-center gap-6 pt-10 text-center md:flex-row md:justify-start md:text-left md:gap-10">
              <a
                href="https://www.instagram.com/silk4me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Instagram className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
                <span className="text-sm text-background/80 group-hover:text-gold-light">
                  Message us on Instagram
                </span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
                <span className="text-sm text-background/80 group-hover:text-gold-light">
                  Email us
                </span>
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-sm text-background/80">
                  Ukraine / Europe
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 border border-gold/20" />
            <img
              src={lifestyleImg}
              alt="Re:SILK — silk sleep mask"
              className="w-full h-[560px] object-cover object-center"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
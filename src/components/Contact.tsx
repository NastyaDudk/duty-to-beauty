import { useEffect, useMemo, useRef, useState } from "react";
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

// image size (do not change)
const IMG_H = 560;
const FRAME_PAD = 16; // because of absolute -inset-4
const FRAME_H = IMG_H + FRAME_PAD * 2; // 592

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  const email = useMemo(() => "Silkandnature" + "@gmail.com", []);

  useEffect(() => {
    if (isLocal) return;
    fetch(API_URL, { method: "OPTIONS" }).catch(() => {});
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

    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message: message ? `[${SOURCE_TAG}] ${message}` : `[${SOURCE_TAG}]`,
          source: SOURCE_TAG,
        }),
      });

      if (!res.ok) throw new Error();

      toast.success("✅ Sent! We’ll get back to you shortly.");
      setFormData({ name: "", phone: "", message: "" });
    } catch {
      toast.error("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-silk-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — IMAGE (desktop only, keep size) */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 border border-gold/20" />
            <img
              src={lifestyleImg}
              alt="Re:SILK — silk sleep mask"
              className="w-full h-[560px] object-cover"
              draggable={false}
            />
          </div>

          {/* RIGHT — CONTACT aligned to the FRAME */}
          <div className={`flex flex-col lg:h-[${FRAME_H}px] lg:justify-between`}>
            {/* TOP — aligned to top of frame */}
            <div>
              <div className="text-center lg:text-left">
               <p className="text-gold uppercase tracking-[0.35em] text-sm -mt-2">
  Contact
</p>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-light text-background">
                  Get a <span className="text-gold">personal consultation</span>
                </h2>
              </div>

              {/* FORM (button is outside) */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full lg:max-w-xl mx-auto lg:mx-0 mt-10"
                noValidate
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    className="h-14 bg-background text-foreground border-border/50 focus:border-gold px-6"
                  />

                  <Input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="h-14 bg-background text-foreground border-border/50 focus:border-gold px-6"
                  />
                </div>

                {/* ✅ MORE AIR ABOVE TEXTAREA (no space-y, explicit margin) */}
                <Textarea
                  placeholder="Your message (optional)"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  className="
                    mt-10
                    min-h-[195px]
                    bg-background text-foreground
                    border-border/50 focus:border-gold
                    px-6 py-4
                    resize-none
                  "
                />
              </form>
           

              {/* BOTTOM (ровно по низу рамки) */}
              <div className="space-y-8 mt-10 lg:mt-16">
                {/* BUTTON — отдельно от формы */}
                <div className="flex justify-center lg:justify-start">
                  <Button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => formRef.current?.requestSubmit()}
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

                {/* LINKS — в линию */}
                <div
                  className="
                    flex flex-wrap items-center justify-center gap-6
                    lg:justify-start
                    text-sm
                  "
                >
                  <a
                    href="https://www.instagram.com/silk4me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <Instagram className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
                    <span className="text-background/80 group-hover:text-gold-light transition-colors">
                      Message us on Instagram
                    </span>
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 group"
                  >
                    <Mail className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors" />
                    <span className="text-background/80 group-hover:text-gold-light transition-colors">
                      Email us
                    </span>
                  </a>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold" />
                    <span className="text-background/80">Ukraine / Europe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
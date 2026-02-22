import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, MapPin, Instagram, Mail } from "lucide-react";

/* =========================
   API URL
========================= */
const isLocal =
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname);

const API_URL = isLocal
  ? "http://localhost:5050/api/lead"
  : "https://silk4me-api.onrender.com/api/lead";

/* =========================
   TYPES
========================= */
type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
};

/* =========================
   EMAIL REGEX
========================= */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =========================
     VALIDATION
  ========================= */
  const validate = (): boolean => {
    const next: Errors = {};

    if (!formData.name.trim()) {
      next.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      next.email = "Please enter your email";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      next.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      next.phone = "Please enter your phone number";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "re-silk",
        }),
      });

      if (!res.ok) throw new Error();

      toast.success("✅ Sent! We’ll contact you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-silk-charcoal py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — IMAGE */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 border border-gold/20" />
            <img
              src={`${import.meta.env.BASE_URL}color8.jpg`}
              alt="Re:SILK"
              className="w-full h-[560px] object-cover"
              draggable={false}
            />
          </div>

          {/* RIGHT — FORM */}
          <div>
            <div className="text-center lg:text-left">
              <p className="text-gold uppercase tracking-[0.35em] text-sm">
                Contact
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif text-background">
                Get a <span className="text-gold">personal consultation</span>
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6 max-w-xl mx-auto lg:mx-0"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    className="h-14 bg-background"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-background/70">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    className="h-14 bg-background"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-background/70">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      phone: e.target.value.replace(/[^\d+]/g, ""),
                    }))
                  }
                  className="h-14 bg-background"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-background/70">
                    {errors.phone}
                  </p>
                )}
              </div>

              <Textarea
                placeholder="Your message (optional)"
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                className="min-h-[180px] bg-background resize-none"
              />

              <div className="pt-4 flex justify-center lg:justify-start">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    px-14 h-14 text-lg
                    bg-gradient-to-r from-gold to-gold-light
                    text-accent-foreground
                    transition-all
                  "
                >
                  {isSubmitting ? "Sending..." : "Send request"}
                  <Send className="w-4 h-4 ml-3" />
                </Button>
              </div>
            </form>

            {/* LINKS */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/silk4me"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-gold"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>

              <a
                href="mailto:Silkandnature@gmail.com"
                className="flex items-center gap-3 text-background/80 hover:text-gold"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>

              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                Ukraine / Europe
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
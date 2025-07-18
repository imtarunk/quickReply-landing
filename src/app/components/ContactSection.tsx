import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section
      className="w-full bg-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
      id="bookdemosection"
    >
      <div className="h-4"></div>
      <div className="w-full max-w-6xl mx-auto">
        {/* Top "Get in Touch" Button */}
        <div className="text-center mb-6">
          <Button variant="outline" className="rounded-lg" disabled>
            <MessageSquare className="h-4 w-4 mr-2" />
            Get in Touch
          </Button>
        </div>

        {/* Header Text */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to transform your{" "}
            <span className="text-[#4ebff7]">hotel operations?</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Let&apos;s discuss how Riviera AI can reduce your staff workload
            while delivering exceptional guest experiences. Get started today.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Let's talk Card */}
          <div className="lg:col-span-2">
            <Card className="h-full flex flex-col justify-center rounded-2xl shadow-lg border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl">Let&apos;s talk</CardTitle>
                <CardDescription>
                  We&apos;re here to help you revolutionize your guest service.
                  Reach out and we&apos;ll get back to you within 12 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="bg-[#c2e4f4] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#4ebff7]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">
                      EMAIL US
                    </p>
                    <a
                      href="mailto:admin@withriviera.com"
                      className="font-semibold text-gray-800"
                    >
                      admin@withriviera.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-3">
            <Card className="rounded-3xl shadow-lg border-gray-100">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Hotel/Company</Label>
                      <Input
                        id="company"
                        placeholder="Your hotel or company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your hotel and how we can help..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#4ebff7]  hover:bg-[#3eaae2] text-white font-semibold transform transition-transform duration-300 hover:scale-[1.01] cursor-pointer  text-base"
                  >
                    Send Message
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

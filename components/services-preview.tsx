import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Sparkles } from "lucide-react"

export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 font-sans">
            We offer a comprehensive range of services to cater to your beauty and wellness needs, ensuring you leave
            feeling refreshed and revitalized.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-yellow-100 rounded-full p-4 w-fit mb-4">
                <Sparkles className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Beauty Clinic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 font-sans">
                Enhance your natural beauty with our advanced aesthetic treatments, from injectables to state-of-the-art
                skin therapies.
              </p>
              <Button variant="outline" className="rounded-lg bg-transparent">
                View Beauty Services
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-yellow-100 rounded-full p-4 w-fit mb-4">
                <Stethoscope className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Wellness Clinic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 font-sans">
                Achieve optimal health with our wellness services, including IV therapy, hormone replacement, and
                personalized health plans.
              </p>
              <Button variant="outline" className="rounded-lg bg-transparent">
                View Wellness Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

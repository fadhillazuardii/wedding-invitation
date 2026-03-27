import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar, Clock, MapPin, Map, Heart } from "lucide-react";
import { motion } from "framer-motion";

type EventInfo = {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  locationUrl: string;
};

const events: EventInfo[] = [
  {
    title: "Akad Nikah",
    date: "Sabtu, 12 Juli 2025",
    time: "08.00 WIB",
    venue: "Masjid Agung Kota",
    address: "Jl. Kenangan No. 123, Jakarta",
    locationUrl: "https://maps.app.goo.gl/example-akad",
  },
  {
    title: "Resepsi",
    date: "Sabtu, 12 Juli 2025",
    time: "11.00 WIB",
    venue: "Gedung Serbaguna Harmoni",
    address: "Jl. Cinta Damai No. 456, Jakarta",
    locationUrl: "https://maps.app.goo.gl/example-resepsi",
  },
];

function EventCard({ event, delay }: { event: EventInfo; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="max-w-2xl mx-auto p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-slate-500">{event.venue}</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-700">
          <p className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {event.date}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {event.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {event.address}
          </p>
        </div>

        <Button
          className="mt-4"
          onClick={() => window.open(event.locationUrl, "_blank")}
        >
          Lihat Rute
        </Button>
      </Card>
    </motion.div>
  );
}

export default function EventDetail() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Detail Acara</h2>
          <p className="mt-2 text-slate-600">
            Informasi waktu, tempat, dan peta acara kami.
          </p>
        </div>

        <div className="grid gap-4">
          {events.map((event, idx) => (
            <EventCard key={event.title} event={event} delay={idx * 0.2} />
          ))}
        </div>

        <Card className="mt-6 p-4 flex items-center gap-3">
          <Map className="w-5 h-5 text-rose-500" />
          <p className="text-sm text-slate-700">
            Jika kamu membutuhkan bantuan rute, klik tombol rute di setiap acara.
          </p>
        </Card>
      </div>
    </section>
  );
}

